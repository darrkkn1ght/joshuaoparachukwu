const crypto = require('crypto');
const { _internal } = require('./retainer');

function verifySignature(req, rawPayload) {
  const secret = process.env.SELAR_WEBHOOK_SECRET;
  if (!secret) return true;

  const sigHeader =
    req.headers['x-selar-signature'] ||
    req.headers['x-webhook-secret'] ||
    req.headers['authorization'] ||
    '';

  const cleanSig = String(sigHeader).replace(/^Bearer\s+/i, '').trim();
  if (!cleanSig) return false;
  if (cleanSig === secret) return true;

  const bodyStr = typeof rawPayload === 'string' ? rawPayload : JSON.stringify(rawPayload || {});
  const hmac512 = crypto.createHmac('sha512', secret).update(bodyStr).digest('hex');
  const hmac256 = crypto.createHmac('sha256', secret).update(bodyStr).digest('hex');

  return cleanSig === hmac512 || cleanSig === hmac256;
}

function extractBuyer(payload) {
  const data = (payload && payload.data && typeof payload.data === 'object') ? payload.data : payload || {};
  const customer = (data.customer && typeof data.customer === 'object') ? data.customer : {};
  const buyer = (data.buyer && typeof data.buyer === 'object') ? data.buyer : {};

  const email = _internal.normalizeEmail(
    data.email ||
    data.customer_email ||
    customer.email ||
    buyer.email ||
    payload.email
  );

  const name = String(
    data.full_name ||
    data.customer_name ||
    data.name ||
    customer.full_name ||
    customer.name ||
    buyer.name ||
    (email ? email.split('@')[0] : 'Client')
  ).trim();

  const phone = String(
    data.phone ||
    data.phone_number ||
    customer.phone ||
    buyer.phone ||
    ''
  ).trim();

  const status = String(
    payload.event ||
    data.status ||
    payload.status ||
    'completed'
  ).toLowerCase();

  return { email, name, phone, status };
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Selar-Signature, X-Webhook-Secret');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  try {
    let payload = req.body;
    if (typeof payload === 'string') {
      try { payload = JSON.parse(payload); } catch (_) { payload = {}; }
    }
    if (!payload || typeof payload !== 'object') payload = {};

    if (!verifySignature(req, req.body)) {
      return res.status(401).json({ ok: false, error: 'Invalid webhook signature' });
    }

    const { email, name, phone, status } = extractBuyer(payload);
    if (!email) {
      return res.status(400).json({ ok: false, error: 'Webhook payload missing buyer email' });
    }

    if (status.includes('fail') || status.includes('cancel') || status.includes('refund')) {
      return res.status(200).json({ ok: true, ignored: true, status });
    }

    const clients = await _internal.getStore();
    const idx = clients.findIndex(c => _internal.normalizeEmail(c.email) === email);
    const now = new Date().toISOString();
    let client;

    if (idx >= 0) {
      client = clients[idx];
      const alreadyPaid = Boolean(client.paid);
      client.paid = true;
      client.paidAt = client.paidAt || now;
      client.name = client.name || name;
      if (phone && !client.phone) client.phone = phone;
      client.accessPin = client.accessPin || _internal.generatePin();
      client.meetUrl = client.meetUrl || _internal.DEFAULT_MEET_URL;
      if (!Array.isArray(client.sessions) || client.sessions.length === 0) {
        client.sessions = _internal.buildDefaultSessions(client.meetUrl);
      }
      clients[idx] = client;
      await _internal.saveStore(clients);

      if (alreadyPaid && client.welcomeEmailSent) {
        return res.status(200).json({ ok: true, alreadyActivated: true, email: client.email });
      }
    } else {
      const meetUrl = _internal.DEFAULT_MEET_URL;
      client = {
        id: 'ret_' + crypto.randomBytes(6).toString('hex'),
        name,
        email,
        phone,
        focus: '4-Month Performance Retainer ($500)',
        accessPin: _internal.generatePin(),
        paid: true,
        meetUrl,
        enrolledAt: now,
        paidAt: now,
        sessions: _internal.buildDefaultSessions(meetUrl)
      };
      clients.unshift(client);
      await _internal.saveStore(clients);
    }

    const emailResult = await _internal.sendActivationEmails(client);
    if (emailResult && emailResult.clientEmail && emailResult.clientEmail.sent) {
      const updated = await _internal.getStore();
      const uIdx = updated.findIndex(c => _internal.normalizeEmail(c.email) === email);
      if (uIdx >= 0) {
        updated[uIdx].welcomeEmailSent = true;
        await _internal.saveStore(updated);
      }
    }

    return res.status(200).json({
      ok: true,
      activated: true,
      email: client.email,
      emailResult
    });
  } catch (err) {
    return res.status(500).json({ ok: false, error: err.message || 'Webhook error' });
  }
};

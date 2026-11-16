const crypto = require('crypto');

const KV_APP_KEY = 'jz4p0798';
const KV_KEY = 'retainer_clients_v1';
const KV_BASE = 'https://keyvalue.immanuel.co/api/KeyVal';
const ADMIN_NOTIFY_EMAIL = 'mailjoshuaoparachukwu@gmail.com';
const PORTAL_URL = 'https://joshuaoparachukwu.com/client-portal.html';
const DEFAULT_MEET_URL = 'https://meet.google.com/new';

function normalizeEmail(email) {
  return String(email || '').trim().toLowerCase();
}

function generatePin() {
  return String(crypto.randomInt(1000, 10000));
}

function buildDefaultSessions(meetUrl) {
  const sessions = [];
  for (let i = 1; i <= 8; i++) {
    sessions.push({
      id: i,
      label: `Consultation ${i}`,
      duration: '45m',
      status: 'Available',
      date: '',
      time: '',
      notes: '',
      meetUrl: meetUrl || DEFAULT_MEET_URL
    });
  }
  return sessions;
}

async function getStore() {
  const redisUrl = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
  const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;

  if (redisUrl && redisToken) {
    const resp = await fetch(`${redisUrl.replace(/\/$/, '')}/get/${encodeURIComponent(KV_KEY)}`, {
      headers: { Authorization: `Bearer ${redisToken}` }
    });
    if (resp.ok) {
      const data = await resp.json();
      if (data && data.result) {
        try {
          const parsed = typeof data.result === 'string' ? JSON.parse(data.result) : data.result;
          if (Array.isArray(parsed)) return parsed;
        } catch (_) {}
      }
      return [];
    }
  }

  try {
    const resp = await fetch(`${KV_BASE}/GetValue/${KV_APP_KEY}/${KV_KEY}`);
    if (resp.ok) {
      const text = await resp.text();
      let clean = text;
      if (clean.startsWith('"') && clean.endsWith('"')) {
        try { clean = JSON.parse(clean); } catch (_) {}
      }
      if (!clean || clean === 'null') return [];
      const parsed = typeof clean === 'string' ? JSON.parse(clean) : clean;
      return Array.isArray(parsed) ? parsed : [];
    }
  } catch (_) {}

  return [];
}

async function saveStore(clients) {
  const payload = JSON.stringify(clients);
  const redisUrl = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
  const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;

  if (redisUrl && redisToken) {
    const resp = await fetch(`${redisUrl.replace(/\/$/, '')}/set/${encodeURIComponent(KV_KEY)}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${redisToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    if (resp.ok) return true;
  }

  const resp = await fetch(
    `${KV_BASE}/UpdateValue/${KV_APP_KEY}/${KV_KEY}/${encodeURIComponent(payload)}`,
    { method: 'POST' }
  );
  return resp.ok;
}

async function sendResendEmail({ to, subject, html, replyTo }) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return { sent: false, reason: 'RESEND_API_KEY not configured' };
  }
  const from = process.env.RESEND_FROM || 'Dr. Joshua Oparachukwu <onboarding@resend.dev>';
  const resp = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from,
      to: Array.isArray(to) ? to : [to],
      subject,
      html,
      ...(replyTo ? { reply_to: replyTo } : {})
    })
  });
  const data = await resp.json().catch(() => ({}));
  return { sent: resp.ok, status: resp.status, data };
}

function buildWelcomeEmailHtml(client) {
  const safeName = String(client.name || 'Client').replace(/[<>&"]/g, '');
  const safeEmail = String(client.email || '').replace(/[<>&"]/g, '');
  const safePin = String(client.accessPin || '').replace(/[<>&"]/g, '');
  const safeMeet = String(client.meetUrl || DEFAULT_MEET_URL).replace(/[<>&"]/g, '');

  return `
  <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; background:#f8fafc; padding:32px 16px; color:#0f172a;">
    <div style="max-width:580px; margin:0 auto; background:#ffffff; border-radius:14px; border:1px solid #e2e8f0; overflow:hidden;">
      <div style="background:#001f44; padding:28px 32px; color:#ffffff;">
        <div style="font-size:11px; letter-spacing:1.8px; text-transform:uppercase; color:#c8a45c; font-weight:700; margin-bottom:6px;">4-Month Performance Retainer ($500)</div>
        <h1 style="margin:0; font-size:22px; font-weight:700; line-height:1.3;">Your Client Portal Is Now Active</h1>
      </div>
      <div style="padding:28px 32px; line-height:1.65; font-size:15px;">
        <p style="margin-top:0;">Dear <strong>${safeName}</strong>,</p>
        <p>Thank you for completing your <strong>4-Month Performance Retainer</strong> enrolment. Your 8-session consultation ledger, standing Google Meet room, and private Client Portal are ready.</p>
        <div style="background:#f1f5f9; border-left:4px solid #c8a45c; border-radius:8px; padding:18px 20px; margin:22px 0;">
          <div style="font-size:12px; text-transform:uppercase; letter-spacing:1px; color:#475569; font-weight:700; margin-bottom:10px;">Your Private Portal Credentials</div>
          <div style="margin-bottom:6px;"><strong>Portal Link:</strong> <a href="${PORTAL_URL}" style="color:#003366;">${PORTAL_URL}</a></div>
          <div style="margin-bottom:6px;"><strong>Email:</strong> ${safeEmail}</div>
          <div style="margin-bottom:6px;"><strong>4-Digit Access PIN:</strong> <span style="display:inline-block; background:#001f44; color:#ffffff; padding:3px 10px; border-radius:6px; font-family:monospace; font-size:16px; letter-spacing:3px; font-weight:700;">${safePin}</span></div>
          <div><strong>Standing Google Meet Room:</strong> <a href="${safeMeet}" style="color:#003366;">${safeMeet}</a></div>
        </div>
        <p>Sign in with your email and 4-digit PIN above to schedule your first 45-minute session and access your consultation ledger.</p>
        <p style="margin-bottom:0;">Warm regards,<br><strong>Dr. Joshua Oparachukwu</strong><br><span style="color:#64748b; font-size:13px;">Sport &amp; Performance Psychology Consultant</span></p>
      </div>
    </div>
  </div>`;
}

async function sendActivationEmails(client) {
  const clientRes = await sendResendEmail({
    to: client.email,
    subject: 'Your 4-Month Performance Retainer Portal & Access PIN',
    html: buildWelcomeEmailHtml(client),
    replyTo: ADMIN_NOTIFY_EMAIL
  });

  const adminRes = await sendResendEmail({
    to: ADMIN_NOTIFY_EMAIL,
    subject: `[Retainer Paid & Activated] ${client.name} (${client.email})`,
    html: `<p><strong>Retainer Client Activated</strong></p>
           <ul>
             <li><strong>Name:</strong> ${client.name}</li>
             <li><strong>Email:</strong> ${client.email}</li>
             <li><strong>PIN:</strong> ${client.accessPin}</li>
             <li><strong>Focus:</strong> ${client.focus || 'N/A'}</li>
             <li><strong>Paid At:</strong> ${client.paidAt || new Date().toISOString()}</li>
           </ul>`
  });

  return { clientEmail: clientRes, adminEmail: adminRes };
}

async function parseBody(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  if (typeof req.body === 'string') {
    try { return JSON.parse(req.body); } catch (_) { return {}; }
  }
  return {};
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');

  if (req.method === 'OPTIONS') return res.status(200).end();

  try {
    const body = await parseBody(req);
    const action = (req.query && req.query.action) || body.action || (req.method === 'GET' ? 'list' : '');
    const clients = await getStore();

    if (action === 'list') {
      return res.status(200).json({ ok: true, clients });
    }

    if (action === 'status') {
      const email = normalizeEmail((req.query && req.query.email) || body.email);
      if (!email) return res.status(400).json({ ok: false, error: 'Email is required' });
      const client = clients.find(c => normalizeEmail(c.email) === email);
      if (!client) return res.status(200).json({ ok: true, found: false, paid: false });
      return res.status(200).json({
        ok: true,
        found: true,
        paid: Boolean(client.paid),
        name: client.name,
        email: client.email,
        enrolledAt: client.enrolledAt || null,
        paidAt: client.paidAt || null
      });
    }

    if (action === 'register') {
      const email = normalizeEmail(body.email);
      const name = String(body.name || '').trim();
      if (!email || !name) {
        return res.status(400).json({ ok: false, error: 'Name and email are required' });
      }
      const existingIdx = clients.findIndex(c => normalizeEmail(c.email) === email);
      const now = new Date().toISOString();

      if (existingIdx >= 0) {
        const existing = clients[existingIdx];
        Object.assign(existing, {
          name: name || existing.name,
          focus: body.focus || body.challenge || existing.focus || '',
          challenge: body.challenge || existing.challenge || body.focus || '',
          phone: body.phone || existing.phone || '',
          timezone: body.timezone || existing.timezone || '',
          role: body.role || existing.role || '',
          updatedAt: now
        });
        const pin = existing.accessPin || existing.pin || body.accessPin || body.pin || generatePin();
        const meet = existing.meetUrl || existing.meetLink || body.meetUrl || body.meetLink || DEFAULT_MEET_URL;
        existing.accessPin = pin;
        existing.pin = pin;
        existing.meetUrl = meet;
        existing.meetLink = meet;
        if (!Array.isArray(existing.sessions) || existing.sessions.length === 0) {
          existing.sessions = buildDefaultSessions(meet);
        }
        clients[existingIdx] = existing;
        await saveStore(clients);
        return res.status(200).json({
          ok: true,
          paid: Boolean(existing.paid),
          client: {
            name: existing.name,
            email: existing.email,
            paid: Boolean(existing.paid),
            enrolledAt: existing.enrolledAt
          }
        });
      }

      const meetUrl = body.meetUrl || body.meetLink || DEFAULT_MEET_URL;
      const pin = body.accessPin || body.pin || generatePin();
      const newClient = {
        id: body.id || ('ret_' + crypto.randomBytes(6).toString('hex')),
        name,
        email,
        phone: String(body.phone || '').trim(),
        timezone: String(body.timezone || '').trim(),
        role: String(body.role || '').trim(),
        focus: String(body.focus || body.challenge || '').trim(),
        challenge: String(body.challenge || body.focus || '').trim(),
        accessPin: pin,
        pin,
        paid: Boolean(body.paid),
        amount: body.amount || 500,
        status: body.paid ? 'Active' : 'Pending Payment',
        totalCredits: body.totalCredits || 8,
        usedCredits: body.usedCredits || 0,
        bookedCredits: body.bookedCredits || 1,
        availableCredits: body.availableCredits || 7,
        firstSessionDate: body.firstSessionDate || null,
        nextSessionTime: body.nextSessionTime || null,
        programStart: body.programStart || null,
        programEnd: body.programEnd || null,
        rolloverUsed: Boolean(body.rolloverUsed),
        meetUrl,
        meetLink: meetUrl,
        enrolledAt: now,
        paidAt: body.paid ? now : null,
        sessions: Array.isArray(body.sessions) && body.sessions.length ? body.sessions : buildDefaultSessions(meetUrl)
      };
      clients.unshift(newClient);
      await saveStore(clients);
      return res.status(200).json({
        ok: true,
        paid: Boolean(newClient.paid),
        client: {
          name: newClient.name,
          email: newClient.email,
          paid: Boolean(newClient.paid),
          enrolledAt: newClient.enrolledAt
        }
      });
    }

    if (action === 'login') {
      const email = normalizeEmail(body.email);
      const pin = String(body.pin || body.accessPin || '').trim();
      if (!email || !pin) {
        return res.status(400).json({ ok: false, error: 'Email and 4-digit PIN are required' });
      }
      const client = clients.find(c => normalizeEmail(c.email) === email);
      if (!client) {
        return res.status(401).json({ ok: false, error: 'No retainer account found for that email.' });
      }
      if (!client.paid) {
        return res.status(403).json({
          ok: false,
          pending: true,
          error: 'Payment verification is still pending for this email. Complete your $500 Selar checkout or check your pending status.'
        });
      }
      const storedPin = String(client.accessPin || client.pin || '').trim();
      if (storedPin !== pin) {
        return res.status(401).json({ ok: false, error: 'Invalid 4-digit Access PIN. Please check your confirmation email.' });
      }
      return res.status(200).json({ ok: true, client });
    }

    if (action === 'activate') {
      const email = normalizeEmail(body.email);
      if (!email) return res.status(400).json({ ok: false, error: 'Email is required' });
      let idx = clients.findIndex(c => normalizeEmail(c.email) === email);
      const now = new Date().toISOString();
      let client;

      if (idx >= 0) {
        client = clients[idx];
        client.paid = true;
        client.paidAt = client.paidAt || now;
        client.accessPin = body.accessPin || client.accessPin || generatePin();
        client.meetUrl = body.meetUrl || client.meetUrl || DEFAULT_MEET_URL;
        if (!Array.isArray(client.sessions) || client.sessions.length === 0) {
          client.sessions = buildDefaultSessions(client.meetUrl);
        }
        clients[idx] = client;
      } else {
        const meetUrl = body.meetUrl || DEFAULT_MEET_URL;
        client = {
          id: 'ret_' + crypto.randomBytes(6).toString('hex'),
          name: String(body.name || email.split('@')[0]).trim(),
          email,
          phone: String(body.phone || '').trim(),
          focus: String(body.focus || '').trim(),
          accessPin: body.accessPin || generatePin(),
          paid: true,
          meetUrl,
          enrolledAt: now,
          paidAt: now,
          sessions: buildDefaultSessions(meetUrl)
        };
        clients.unshift(client);
      }

      await saveStore(clients);
      const emailResult = body.skipEmail ? { skipped: true } : await sendActivationEmails(client);
      return res.status(200).json({ ok: true, client, emailResult });
    }

    if (action === 'update') {
      const email = normalizeEmail(body.email);
      if (!email) return res.status(400).json({ ok: false, error: 'Email is required' });
      const idx = clients.findIndex(c => normalizeEmail(c.email) === email);
      if (idx < 0) return res.status(404).json({ ok: false, error: 'Client not found' });

      const current = clients[idx];
      const updates = body.updates && typeof body.updates === 'object' ? body.updates : body;
      const allowedFields = [
        'name', 'phone', 'focus', 'challenge', 'timezone', 'role',
        'meetUrl', 'meetLink', 'sessions', 'sessionLedger', 'paid', 'status',
        'accessPin', 'pin', 'notes', 'usedCredits', 'bookedCredits', 'availableCredits',
        'nextSessionTime', 'rolloverUsed'
      ];
      for (const key of allowedFields) {
        if (updates[key] !== undefined) {
          current[key] = updates[key];
        }
      }
      current.updatedAt = new Date().toISOString();
      clients[idx] = current;
      await saveStore(clients);
      return res.status(200).json({ ok: true, client: current });
    }

    return res.status(400).json({ ok: false, error: 'Unknown action' });
  } catch (err) {
    return res.status(500).json({ ok: false, error: err.message || 'Server error' });
  }
};

module.exports._internal = {
  getStore,
  saveStore,
  sendActivationEmails,
  buildDefaultSessions,
  generatePin,
  normalizeEmail,
  DEFAULT_MEET_URL
};

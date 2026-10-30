// Vercel Serverless Function for Global 48-Hour Promo State Sync
// Uses keyvalue.immanuel.co cloud KV store so state persists globally across all visitors

const KV_APP_KEY = 'jz4p0798';
const KV_KEY = 'promo_state';

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    if (req.method === 'POST') {
      const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
      const active = Boolean(body.active);
      const startTime = Number(body.startTime) || 0;
      const endTime = Number(body.endTime) || 0;
      const encoded = `${active ? 'ACTIVE' : 'INACTIVE'}_${startTime}_${endTime}`;

      await fetch(`https://keyvalue.immanuel.co/api/KeyVal/UpdateValue/${KV_APP_KEY}/${KV_KEY}/${encodeURIComponent(encoded)}`, {
        method: 'POST'
      });

      return res.status(200).json({
        ok: true,
        active,
        startTime: active ? startTime : null,
        endTime: active ? endTime : null,
        durationHours: 48
      });
    }

    // GET request
    const r = await fetch(`https://keyvalue.immanuel.co/api/KeyVal/GetValue/${KV_APP_KEY}/${KV_KEY}`);
    const raw = (await r.text()).replace(/"/g, '').trim();
    const parts = raw.split('_');
    const isAct = parts[0] === 'ACTIVE';
    const startTime = Number(parts[1]) || null;
    const endTime = Number(parts[2]) || null;
    const now = Date.now();
    const stillValid = isAct && endTime && now < endTime;

    return res.status(200).json({
      ok: true,
      active: Boolean(stillValid),
      startTime: stillValid ? startTime : null,
      endTime: stillValid ? endTime : null,
      durationHours: 48
    });
  } catch (err) {
    return res.status(200).json({
      ok: false,
      error: err.message
    });
  }
};


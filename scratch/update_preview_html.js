const fs = require('fs');
const path = require('path');

// 1. Update preview/index.html
let indexHtml = fs.readFileSync('preview/index.html', 'utf8');

// Update CSS version query
indexHtml = indexHtml.replace(/\/preview\/css\/style\.css\?v=\d+/g, '/preview/css/style.css?v=25');
indexHtml = indexHtml.replace(/\/css\/style\.css\?v=\d+/g, '/css/style.css?v=25');

// Update navbar structure in preview/index.html
const oldNavActionRegex = /<a href="client-portal\.html" class="nav-client-login-link">[\s\S]*?<button class="nav-hamburger" id="nav-hamburger" onclick="toggleMobileNav\(\)" aria-label="Menu">[\s\S]*?<\/button>/;
const newNavActions = `<div class="nav-actions">
      <a href="client-portal.html" class="nav-client-login-btn">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" style="vertical-align:middle;margin-right:3px;"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        <span>Client Login</span>
      </a>
      <a href="services.html" class="nav-cta-btn">Book a Discovery Consultation</a>
      <button class="nav-hamburger" id="nav-hamburger" onclick="toggleMobileNav()" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>`;

if (oldNavActionRegex.test(indexHtml)) {
  indexHtml = indexHtml.replace(oldNavActionRegex, newNavActions);
  console.log('Replaced nav actions in preview/index.html');
} else {
  console.log('oldNavActionRegex did not match directly in preview/index.html');
}

// Update mobile nav drawer in preview/index.html
const oldMobileDrawerRegex = /<div class="mobile-nav-links">[\s\S]*?<\/div>\s*<\/div>/;
const newMobileDrawer = `<div class="mobile-nav-links">
      <a href="index.html#written-testimonials" class="mobile-nav-item" onclick="closeMobileNav()">Testimonials</a>
      <a href="performance-retainer.html" class="mobile-nav-item" onclick="closeMobileNav()">Retainer Program</a>
      <a href="services.html" class="mobile-nav-item" onclick="closeMobileNav()">Services</a>
      <a href="case-studies.html" class="mobile-nav-item" onclick="closeMobileNav()">Case Studies</a>
      <a href="research.html" class="mobile-nav-item" onclick="closeMobileNav()">Research</a>
      <a href="about.html" class="mobile-nav-item" onclick="closeMobileNav()">About</a>
      <div style="padding:16px 20px;display:flex;flex-direction:column;gap:12px;border-top:1px solid rgba(255,255,255,0.08);margin-top:12px;">
        <a href="services.html" class="nav-cta-btn" style="text-align:center;padding:12px;font-size:13.5px;" onclick="closeMobileNav()">Book a Discovery Consultation</a>
        <a href="client-portal.html" class="nav-client-login-btn" style="justify-content:center;padding:10px;font-size:13px;" onclick="closeMobileNav()">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" style="vertical-align:middle;margin-right:3px;"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          <span>Client Portal Login ↗</span>
        </a>
      </div>
    </div>
  </div>`;

indexHtml = indexHtml.replace(oldMobileDrawerRegex, newMobileDrawer);

// Remove vf-author-avatar elements
indexHtml = indexHtml.replace(/<div class="vf-author-avatar">.*?<\/div>\s*/g, '');

// Ensure 3-Pillar section matches Image 1 exactly
const oldPillarsRegex = /<!-- ═══ 3-PILLAR PERFORMANCE METHOD[\s\S]*?<\/section>/;
const newPillarsHtml = `<!-- ═══ 3-PILLAR METHOD (EXACT IMAGE 1 MATCH - TIGHT PADDING) ═══ -->
    <section id="pillars" style="background:var(--cream,#F7F5EE);padding:52px 24px 60px;border-bottom:1px solid var(--border,#E4E0D8);">
      <div style="max-width:1160px;margin:0 auto;text-align:center;">
        <h2 class="section-title reveal" style="font-family:var(--font-display,serif);font-size:38px;font-weight:700;color:var(--navy,#00102A);margin:0 0 10px;">The 3-Pillar Performance Method</h2>
        <div class="section-gold-rule" style="width:50px;height:2px;background:var(--gold,#C8A830);margin:0 auto 36px;"></div>

        <div class="pillars-grid" style="display:grid;grid-template-columns:repeat(3, 1fr);gap:36px;text-align:center;">
          <!-- Pillar 1 -->
          <div class="pillar reveal" style="text-align:center;">
            <h3 style="font-family:var(--font-display,serif);font-size:30px;font-weight:700;color:var(--gold,#C8A830);margin-bottom:8px;">Mental Clarity</h3>
            <div class="pillar-rule" style="width:32px;height:2px;background:var(--gold,#C8A830);margin:0 auto 16px;border-radius:2px;"></div>
            <p style="font-size:14px;color:var(--ink3,#555555);line-height:1.7;margin-bottom:20px;">Identify and remove psychological blocks. Build unshakeable focus even in the highest-stakes moments.</p>
            <ul class="pillar-checks" style="list-style:none;text-align:left;display:inline-block;padding:0;margin:0;">
              <li style="font-size:13px;color:var(--ink2,#333333);margin-bottom:8px;display:flex;gap:8px;align-items:flex-start;"><span style="color:var(--gold,#C8A830);font-weight:700;">✓</span><span>Structured mental assessment to pinpoint blocks</span></li>
              <li style="font-size:13px;color:var(--ink2,#333333);margin-bottom:8px;display:flex;gap:8px;align-items:flex-start;"><span style="color:var(--gold,#C8A830);font-weight:700;">✓</span><span>Proven focus techniques used by elite performers</span></li>
              <li style="font-size:13px;color:var(--ink2,#333333);margin-bottom:8px;display:flex;gap:8px;align-items:flex-start;"><span style="color:var(--gold,#C8A830);font-weight:700;">✓</span><span>Build a pre-performance mental routine that works</span></li>
            </ul>
          </div>

          <!-- Pillar 2 -->
          <div class="pillar reveal" style="transition-delay:.1s;text-align:center;">
            <h3 style="font-family:var(--font-display,serif);font-size:30px;font-weight:700;color:var(--gold,#C8A830);margin-bottom:8px;">Resilience Systems</h3>
            <div class="pillar-rule" style="width:32px;height:2px;background:var(--gold,#C8A830);margin:0 auto 16px;border-radius:2px;"></div>
            <p style="font-size:14px;color:var(--ink3,#555555);line-height:1.7;margin-bottom:20px;">Structured tools to recover from errors fast. Reset immediately and keep performing at your peak.</p>
            <ul class="pillar-checks" style="list-style:none;text-align:left;display:inline-block;padding:0;margin:0;">
              <li style="font-size:13px;color:var(--ink2,#333333);margin-bottom:8px;display:flex;gap:8px;align-items:flex-start;"><span style="color:var(--gold,#C8A830);font-weight:700;">✓</span><span>Error reset protocols for immediate bounce-back</span></li>
              <li style="font-size:13px;color:var(--ink2,#333333);margin-bottom:8px;display:flex;gap:8px;align-items:flex-start;"><span style="color:var(--gold,#C8A830);font-weight:700;">✓</span><span>Pressure-inoculation drills for big moments</span></li>
              <li style="font-size:13px;color:var(--ink2,#333333);margin-bottom:8px;display:flex;gap:8px;align-items:flex-start;"><span style="color:var(--gold,#C8A830);font-weight:700;">✓</span><span>Confidence rebuilding framework after setbacks</span></li>
            </ul>
          </div>

          <!-- Pillar 3 -->
          <div class="pillar reveal" style="transition-delay:.2s;text-align:center;">
            <h3 style="font-family:var(--font-display,serif);font-size:30px;font-weight:700;color:var(--gold,#C8A830);margin-bottom:8px;">Peak Consistency</h3>
            <div class="pillar-rule" style="width:32px;height:2px;background:var(--gold,#C8A830);margin:0 auto 16px;border-radius:2px;"></div>
            <p style="font-size:14px;color:var(--ink3,#555555);line-height:1.7;margin-bottom:20px;">The mental routines elite performers use to show up at their best, every single day.</p>
            <ul class="pillar-checks" style="list-style:none;text-align:left;display:inline-block;padding:0;margin:0;">
              <li style="font-size:13px;color:var(--ink2,#333333);margin-bottom:8px;display:flex;gap:8px;align-items:flex-start;"><span style="color:var(--gold,#C8A830);font-weight:700;">✓</span><span>Performance check-ins and progress tracking</span></li>
              <li style="font-size:13px;color:var(--ink2,#333333);margin-bottom:8px;display:flex;gap:8px;align-items:flex-start;"><span style="color:var(--gold,#C8A830);font-weight:700;">✓</span><span>Habit stacking for consistent high performance</span></li>
              <li style="font-size:13px;color:var(--ink2,#333333);margin-bottom:8px;display:flex;gap:8px;align-items:flex-start;"><span style="color:var(--gold,#C8A830);font-weight:700;">✓</span><span>Long-term mindset systems that last</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>`;

if (oldPillarsRegex.test(indexHtml)) {
  indexHtml = indexHtml.replace(oldPillarsRegex, newPillarsHtml);
  console.log('Replaced pillars section in preview/index.html');
}

fs.writeFileSync('preview/index.html', indexHtml);
console.log('Saved preview/index.html successfully');


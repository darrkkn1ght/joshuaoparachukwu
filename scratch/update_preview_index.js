const fs = require('fs');

let html = fs.readFileSync('preview/index.html', 'utf8');

// 1. Update floating pill text from Reviews to Testimonials
html = html.replace(/See What People Say · Reviews ↓/g, 'See What People Say · Testimonials ↓');

// 2. Enhance 6-Card Bento Grid (Image 1) with interactive focus filter pills and tags
const bentoHeadTarget = `<div class="vf-section-head" style="margin-top:20px;margin-bottom:36px;">
        <span class="section-label" style="display:block;text-align:center;color:var(--gold,#C8A830);margin-bottom:8px;">The 3-Pillar Method &amp; Strategic Advantage</span>
        <h3 style="font-family:var(--font-display);font-size:36px;font-weight:700;color:var(--navy,#00102A);margin:4px 0 10px;">
          Why Elite Performers &amp; Organizations Choose Dr. Joshua
        </h3>
        <div class="section-gold-rule"></div>
      </div>`;

const bentoEnhancedHead = `<div class="vf-section-head" style="margin-top:28px;margin-bottom:28px;text-align:center;">
        <span class="section-label" style="display:inline-block;color:var(--gold,#C8A830);font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:8px;">The 3-Pillar Method &amp; Strategic Advantage</span>
        <div class="section-gold-rule" style="width:48px;height:2px;background:var(--gold,#C8A830);margin:0 auto 16px;"></div>
        <h3 style="font-family:var(--font-display,Georgia,serif);font-size:36px;font-weight:700;color:var(--navy,#00102A);margin:0 0 10px;line-height:1.25;">
          Why Elite Performers &amp; Organizations Choose Dr. Joshua
        </h3>
        <p style="font-size:15px;color:var(--ink2,#4A5568);max-width:640px;margin:0 auto 28px;line-height:1.65;">
          Hover over each pillar to explore how doctoral science translates directly into real match composure, error recovery, and boardroom results.
        </p>

        <!-- Interactive Bento Filter Pills -->
        <div class="bento-filter-row" style="display:flex;justify-content:center;gap:10px;flex-wrap:wrap;margin-bottom:32px;">
          <button type="button" class="bento-pill active" data-filter="all" onclick="filterBento('all')">All 6 Capabilities</button>
          <button type="button" class="bento-pill" data-filter="athletes" onclick="filterBento('athletes')">For Individual Athletes</button>
          <button type="button" class="bento-pill" data-filter="teams" onclick="filterBento('teams')">For Teams &amp; Squads</button>
          <button type="button" class="bento-pill" data-filter="execs" onclick="filterBento('execs')">For Executives &amp; Boards</button>
        </div>
      </div>`;

if (html.includes(bentoHeadTarget.replace(/\n/g, '\r\n')) || html.includes(bentoHeadTarget)) {
  html = html.replace(bentoHeadTarget.replace(/\n/g, '\r\n'), bentoEnhancedHead);
  html = html.replace(bentoHeadTarget, bentoEnhancedHead);
  console.log('Enhanced Bento Head with interactive filter!');
}

// Add data-group attributes to Bento cards
html = html.replace(
  /<div class="vf-bento-card">\s*<div class="vf-bento-top">\s*<div class="vf-bento-icon">\s*<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/i,
  `<div class="vf-bento-card" data-bento="athletes clarity" style="cursor:pointer;transition:all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);">
          <div class="vf-bento-top">
            <div class="vf-bento-icon">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"`
);

html = html.replace(
  /<div class="vf-bento-card">\s*<div class="vf-bento-top">\s*<div class="vf-bento-icon">\s*<svg viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8/i,
  `<div class="vf-bento-card" data-bento="athletes clarity" style="cursor:pointer;transition:all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);">
          <div class="vf-bento-top">
            <div class="vf-bento-icon">
              <svg viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8`
);

html = html.replace(
  /<div class="vf-bento-card">\s*<div class="vf-bento-top">\s*<div class="vf-bento-icon">\s*<svg viewBox="0 0 24 24"><polyline points="22 12/i,
  `<div class="vf-bento-card" data-bento="athletes teams" style="cursor:pointer;transition:all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);">
          <div class="vf-bento-top">
            <div class="vf-bento-icon">
              <svg viewBox="0 0 24 24"><polyline points="22 12`
);

html = html.replace(
  /<div class="vf-bento-card">\s*<div class="vf-bento-top">\s*<div class="vf-bento-icon">\s*<svg viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 0 1 4 4/i,
  `<div class="vf-bento-card" data-bento="athletes execs" style="cursor:pointer;transition:all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);">
          <div class="vf-bento-top">
            <div class="vf-bento-icon">
              <svg viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 0 1 4 4`
);

html = html.replace(
  /<div class="vf-bento-card">\s*<div class="vf-bento-top">\s*<div class="vf-bento-icon">\s*<svg viewBox="0 0 24 24"><rect x="3" y="4"/i,
  `<div class="vf-bento-card" data-bento="execs teams" style="cursor:pointer;transition:all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);">
          <div class="vf-bento-top">
            <div class="vf-bento-icon">
              <svg viewBox="0 0 24 24"><rect x="3" y="4"`
);

html = html.replace(
  /<div class="vf-bento-card">\s*<div class="vf-bento-top">\s*<div class="vf-bento-icon">\s*<svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10/i,
  `<div class="vf-bento-card" data-bento="execs teams" style="cursor:pointer;transition:all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);">
          <div class="vf-bento-top">
            <div class="vf-bento-icon">
              <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10`
);

// 3. Fix Spacing in YouTube Section (Image 2)
// Replace the cramped YouTube Shorts header bar with a generous, dedicated header box
const oldShortsBarRegex = /<div style="display:flex;align-items:center;justify-content:space-between;border-bottom:2px solid #E4E0D8;padding-bottom:12px;margin-bottom:24px;flex-wrap:wrap;gap:12px;">\s*<div>\s*<span style="[^"]*">YouTube Shorts<\/span>\s*<h3 style="[^"]*">\s*#AskDrOparachukwu : Quick Tactical Answers\s*<\/h3>\s*<\/div>\s*<a href="https:\/\/www\.youtube\.com\/@dr\.joshuaoparachukwu\/shorts"[^>]*>\s*View All Shorts \(20\+\) →\s*<\/a>\s*<\/div>/i;

const airyShortsBar = `<div style="background:#FAF8F4;border:1px solid #ECE6D9;border-radius:16px;padding:22px 28px;margin-bottom:32px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px;">
          <div>
            <span style="display:inline-block;background:rgba(200,168,48,0.14);color:var(--gold,#C8A830);border:1px solid rgba(200,168,48,0.3);border-radius:999px;padding:4px 14px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;margin-bottom:6px;">YouTube Shorts</span>
            <h3 style="font-family:var(--font-display,Georgia,serif);font-size:24px;font-weight:700;color:var(--navy,#00102A);margin:0;">
              #AskDrOparachukwu : Quick Tactical Answers
            </h3>
          </div>
          <a href="https://www.youtube.com/@dr.joshuaoparachukwu/shorts" target="_blank" rel="noopener" style="font-size:13.5px;font-weight:700;color:var(--navy,#00102A);text-decoration:none;display:inline-flex;align-items:center;gap:6px;background:#FFFFFF;border:1px solid #D8D2C4;padding:8px 18px;border-radius:999px;transition:all 0.2s ease;">
            View All Shorts (20+) →
          </a>
        </div>`;

if (oldShortsBarRegex.test(html)) {
  html = html.replace(oldShortsBarRegex, airyShortsBar);
  console.log('Replaced YouTube Shorts header with generous airy bar!');
}

// Also upgrade Masterclasses sub-bar
const oldMasterclassesBarRegex = /<div style="display:flex;align-items:center;justify-content:space-between;border-bottom:2px solid #E4E0D8;padding-bottom:12px;margin-bottom:24px;flex-wrap:wrap;gap:12px;">\s*<div>\s*<span style="[^"]*">Masterclasses<\/span>\s*<h3 style="[^"]*">\s*Dr\. Oparachukwu Teaches Performance Psychology[\s\S]*?<\/h3>\s*<\/div>\s*<a href="https:\/\/www\.youtube\.com\/@dr\.joshuaoparachukwu"[^>]*>\s*View All Long-Form Lessons →\s*<\/a>\s*<\/div>/i;

const airyMasterclassesBar = `<div style="background:#FAF8F4;border:1px solid #ECE6D9;border-radius:16px;padding:22px 28px;margin-bottom:32px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px;">
          <div>
            <span style="display:inline-block;background:rgba(200,168,48,0.14);color:var(--gold,#C8A830);border:1px solid rgba(200,168,48,0.3);border-radius:999px;padding:4px 14px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;margin-bottom:6px;">Masterclasses</span>
            <h3 style="font-family:var(--font-display,Georgia,serif);font-size:24px;font-weight:700;color:var(--navy,#00102A);margin:0;">
              Dr. Oparachukwu Teaches Performance Psychology · Deep-Dive Lessons
            </h3>
          </div>
          <a href="https://www.youtube.com/@dr.joshuaoparachukwu" target="_blank" rel="noopener" style="font-size:13.5px;font-weight:700;color:var(--navy,#00102A);text-decoration:none;display:inline-flex;align-items:center;gap:6px;background:#FFFFFF;border:1px solid #D8D2C4;padding:8px 18px;border-radius:999px;transition:all 0.2s ease;">
            View All Long-Form Lessons →
          </a>
        </div>`;

if (oldMasterclassesBarRegex.test(html)) {
  html = html.replace(oldMasterclassesBarRegex, airyMasterclassesBar);
  console.log('Replaced Masterclasses header with generous airy bar!');
}

// Add script for Bento filtering
const bentoScript = `
    <script>
      function filterBento(group) {
        document.querySelectorAll('.bento-pill').forEach(btn => {
          btn.classList.toggle('active', btn.getAttribute('data-filter') === group);
        });
        const cards = document.querySelectorAll('.vf-bento-grid .vf-bento-card');
        cards.forEach(card => {
          const bentoTag = card.getAttribute('data-bento') || '';
          if (group === 'all' || bentoTag.includes(group)) {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
            card.style.borderColor = '#C8A830';
          } else {
            card.style.opacity = '0.35';
            card.style.transform = 'scale(0.98)';
            card.style.borderColor = '#E4E0D8';
          }
        });
      }
    </script>
`;

if (!html.includes('function filterBento(')) {
  html = html.replace('</body>', bentoScript + '\n</body>');
  console.log('Added filterBento script!');
}

fs.writeFileSync('preview/index.html', html);
console.log('Successfully updated preview/index.html!');


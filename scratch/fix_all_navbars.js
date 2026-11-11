const fs = require('fs');

// Canonical nav template for preview pages
function getCanonicalNav(activePage) {
  const isIndex = activePage === 'index';
  const isTestimonials = activePage === 'testimonials';
  const isRetainer = activePage === 'retainer';
  const isServices = activePage === 'services';
  const isCaseStudies = activePage === 'case-studies';
  const isResearch = activePage === 'research';
  const isAbout = activePage === 'about';

  const testLink = isIndex ? '#testimonials' : 'testimonials.html';

  return `<nav>
    <div class="nav-logo" style="display:flex;align-items:center;gap:12px;">
      <a href="index.html" style="display:flex;align-items:center;gap:12px;text-decoration:none;">
        <img src="https://res.cloudinary.com/dkxyhtuun/image/upload/q_auto:best,f_auto/v1778194219/Dr._Oparachukwu_irnxil.png"
          alt="Dr. Joshua Oparachukwu"
          style="width:40px;height:40px;border-radius:50%;object-fit:cover;object-position:center top;flex-shrink:0;border:1.5px solid rgba(200,168,48,.4);background:#fff;">
        <div style="display:flex;flex-direction:column;justify-content:center;">
          <span class="name" style="display:block;line-height:1.2;">Dr. Joshua <span>Oparachukwu</span></span>
          <span class="sub" style="display:block;line-height:1.3;white-space:nowrap;">Applied Performance Psychologist</span>
        </div>
      </a>
    </div>
    <div class="nav-links">
      <a href="${testLink}" class="${isTestimonials ? 'active' : ''}">Testimonials</a>
      <a href="performance-retainer.html" class="${isRetainer ? 'active' : ''}">Retainer Program</a>
      <a href="services.html" class="${isServices ? 'active' : ''}">Services</a>

      <!-- CASE STUDIES DROPDOWN -->
      <div class="nav-dropdown-wrap">
        <a href="case-studies.html" class="nav-dropdown-trigger ${isCaseStudies ? 'active' : ''}">Case Studies ▾</a>
        <div class="nav-dropdown nav-dropdown-wide">
          <div class="nav-dropdown-section-label">Athlete Performance</div>
          <a class="nav-dropdown-item" href="case-studies/cs01.html">Case 01: Learning to Work With Fear, Not Against It</a>
          <a class="nav-dropdown-item" href="case-studies/cs02.html">Case 02: Rebuilding Confidence After a Performance Slump</a>
          <a class="nav-dropdown-item" href="case-studies/cs03.html">Case 03: When Preparation Became Paralysis</a>
          <div class="nav-dropdown-section-label">Coach Decision-Making</div>
          <a class="nav-dropdown-item" href="case-studies/cs04.html">Case 04: When the Coach Became the Team's Emotional Weather</a>
          <a class="nav-dropdown-item" href="case-studies/cs05.html">Case 05: When Loyalty to a Player Began to Cost the Team</a>
          <a class="nav-dropdown-item" href="case-studies/cs06.html">Case 06: When Tactical Certainty Became Match-Day Rigidity</a>
          <div class="nav-dropdown-section-label">Team Performance &amp; Culture</div>
          <a class="nav-dropdown-item" href="case-studies/cs07.html">Case 07: When Talent Became a Collection of Individuals</a>
          <a class="nav-dropdown-item" href="case-studies/cs08.html">Case 08: When Standards Became Personal</a>
          <a class="nav-dropdown-item" href="case-studies/cs09.html">Case 09: When the Team Could Start Fast but Could Not Respond Well</a>
          <a class="nav-dropdown-item" href="case-studies/cs10.html">Case 10: When the Dressing Room Had Its Own Coach</a>
          <div class="nav-dropdown-section-label">Sport Governance Strategy</div>
          <a class="nav-dropdown-item" href="case-studies/cs11.html">Case 11: When a Football Program Had Activity but No Operating System</a>
          <a class="nav-dropdown-item" href="case-studies/cs12.html">Case 12: When Authority Was Concentrated but Accountability Was Diffused</a>
          <a class="nav-dropdown-item" href="case-studies/cs13.html">Case 13: When Policy Existed but Enforcement Had No Spine</a>
          <div class="nav-dropdown-section-label">Executive / High-Pressure Performance</div>
          <a class="nav-dropdown-item" href="case-studies/cs14.html">Case 14: When Decision Speed Became Decision Fatigue</a>
          <a class="nav-dropdown-item" href="case-studies/cs15.html">Case 15: When Public Confidence Hid Private Overextension</a>
          <a class="nav-dropdown-item" href="case-studies/cs16.html">Case 16: When Urgency Became the Operating Culture</a>
        </div>
      </div>

      <!-- RESEARCH DROPDOWN -->
      <div class="nav-dropdown-wrap">
        <a href="research.html" class="nav-dropdown-trigger ${isResearch ? 'active' : ''}">Research ▾</a>
        <div class="nav-dropdown">
          <div class="nav-dropdown-section-label">Publications</div>
          <a href="research.html#pub-01" class="nav-dropdown-item">Effect of taekwondo mental toughness skill training on assertive behaviour...</a>
          <a href="research.html#pub-02" class="nav-dropdown-item">The effect of martial arts training on the performance of football skills...</a>
        </div>
      </div>

      <a href="about.html" class="${isAbout ? 'active' : ''}">About</a>
    </div>
    <div class="nav-actions">
      <a href="client-portal.html" class="nav-client-login-btn">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" style="vertical-align:middle;margin-right:3px;"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        <span>Client Login</span>
      </a>
      <a href="services.html" class="nav-cta-btn">Book a Discovery Consultation</a>
      <button class="nav-hamburger" id="nav-hamburger" onclick="toggleMobileNav()" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>`;
}

const fileMap = {
  'preview/index.html': 'index',
  'preview/testimonials.html': 'testimonials',
  'preview/performance-retainer.html': 'retainer',
  'preview/about.html': 'about',
  'preview/services.html': 'services',
  'preview/case-studies.html': 'case-studies',
  'preview/research.html': 'research',
  'preview/privacy-policy.html': 'privacy',
  'preview/terms.html': 'terms',
  'preview/ideas-frameworks.html': 'ideas',
  'preview/promo-switch.html': 'promo',
  'preview/thank-you.html': 'thankyou'
};

Object.entries(fileMap).forEach(([file, pageKey]) => {
  if (!fs.existsSync(file)) return;
  let html = fs.readFileSync(file, 'utf8');

  // Replace <nav>...</nav>
  const nStart = html.indexOf('<nav');
  const nEnd = html.indexOf('</nav>');
  if (nStart !== -1 && nEnd !== -1) {
    const oldNav = html.slice(nStart, nEnd + 6);
    const newNav = getCanonicalNav(pageKey);
    html = html.replace(oldNav, newNav);
    fs.writeFileSync(file, html);
    console.log(`Standardized nav in ${file} (single Client Login, clean CTA)!`);
  } else {
    console.log(`No nav found in ${file}`);
  }
});


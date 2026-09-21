const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html')).concat([
  'Source Code/index.html', 'Source Code/about.html', 'Source Code/case-studies.html', 
  'Source Code/ideas-frameworks.html', 'Source Code/privacy-policy.html', 
  'Source Code/research.html', 'Source Code/services.html', 'Source Code/terms.html'
]);

const newNavLinks = `<div class="nav-links">
      <!-- CASE STUDIES DROPDOWN -->
      <div class="nav-dropdown-wrap">
        <a href="case-studies.html" class="nav-dropdown-trigger ">Case Studies ▾</a>
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

      <a href="services.html" class="">Services</a>

      <!-- RESEARCH DROPDOWN -->
      <div class="nav-dropdown-wrap">
        <a href="research.html" class="nav-dropdown-trigger ">Research ▾</a>
        <div class="nav-dropdown">
          <div class="nav-dropdown-section-label">Publications</div>
          <a href="research.html#pub-01" class="nav-dropdown-item">Effect of taekwondo mental toughness skill training on assertive behaviour...</a>
          <a href="research.html#pub-02" class="nav-dropdown-item">The effect of martial arts training on the performance of football skills...</a>
        </div>
      </div>

      <a href="index.html#results">Results</a>

      <a href="about.html" class="">About</a>
    </div>`;

const newMobileNavLinks = `<div class="mobile-nav-links">
      <a href="case-studies.html" class="mobile-nav-item" onclick="closeMobileNav()">Case Studies</a>
      <a href="services.html" class="mobile-nav-item" onclick="closeMobileNav()">Services</a>
      <a href="research.html" class="mobile-nav-item" onclick="closeMobileNav()">Research</a>
      <a href="index.html#results" class="mobile-nav-item" onclick="closeMobileNav()">Results</a>
      <a href="about.html" class="mobile-nav-item" onclick="closeMobileNav()">About</a>
      <a href="services.html" class="mobile-nav-cta" onclick="closeMobileNav()">Book a Discovery Consultation</a>
    </div>`;

const newFooterNav = `<div class="footer-nav">
        <a href="index.html#results">Results</a>
        <a href="research.html">Research</a>
        <a href="case-studies.html">Case Studies</a>
        <a href="services.html">Services</a>
        <a href="about.html">About</a>
        <a href="services.html">Book a Discovery Consultation</a>
        <a href="privacy-policy.html">Privacy Policy</a>
        <a href="terms.html">Terms of Use</a>
      </div>`;

files.forEach(f => {
  try {
    if (!fs.existsSync(f)) return;
    
    let content = fs.readFileSync(f, 'utf8');
    let orig = content;
    
    // Replace nav-links block
    content = content.replace(/<div class="nav-links">[\s\S]*?<\/div>\s*<a href="services\.html" class="nav-cta">/, newNavLinks + '\n    <a href="services.html" class="nav-cta">');
    
    // Replace mobile-nav-links block
    content = content.replace(/<div class="mobile-nav-links">[\s\S]*?<\/div>/, newMobileNavLinks);
    
    // Replace footer-nav block
    content = content.replace(/<div class="footer-nav">[\s\S]*?<\/div>/, newFooterNav);

    // Make SportLead Africa and MindGame Africa clickable in intro text (avoiding existing links)
    if (f === 'index.html' || f === 'about.html' || f === 'Source Code/index.html' || f === 'Source Code/about.html') {
      content = content.replace(/(?<!<a[^>]*>)MindGame Africa(?![^<]*<\/a>)/g, '<a href="https://mindgameafrica.com" target="_blank" style="color:var(--gold);text-decoration:none;">MindGame Africa</a>');
      content = content.replace(/(?<!<a[^>]*>)SportLead Africa(?![^<]*<\/a>)/g, '<a href="https://sportleadafrica.com" target="_blank" style="color:var(--gold);text-decoration:none;">SportLead Africa</a>');
    }

    // Education update in about.html and index.html
    if (f === 'about.html' || f === 'index.html' || f === 'Source Code/about.html' || f === 'Source Code/index.html') {
      content = content.replace(/<p class="about-page-creds">BSc Human Kinetics[\s\S]*?University of Ibadan, Nigeria<\/p>/, '<p class="about-page-creds" style="line-height:1.7;">B.Ed Human Kinetics<br>M.Ed Sociology & Pschology of Sport<br>M.Sc Sport ADministrattion<br>PhD performance psychology</p>');
      
      content = content.replace(/Dr\. Oparachukwu earned a Bachelor's degree in Human Kinetics, a Master's degree in the Sociology and Psychology of Sport, and a PhD in Performance Psychology from the University of Ibadan, Nigeria\./, 'Dr. Oparachukwu earned a B.Ed Human Kinetics, an M.Ed Sociology & Pschology of Sport, an M.Sc Sport ADministrattion, and a PhD performance psychology.');
      
      content = content.replace(/Dr\. Joshua Oparachukwu holds a B\.Sc\..*?Nigeria\./s, 'Dr. Joshua Oparachukwu holds a B.Ed Human Kinetics, an M.Ed Sociology & Pschology of Sport, an M.Sc Sport ADministrattion, and a PhD performance psychology.');
      
      content = content.replace(/BSc(.*?)University of Ibadan, Nigeria/g, 'B.Ed Human Kinetics<br>M.Ed Sociology & Pschology of Sport<br>M.Sc Sport ADministrattion<br>PhD performance psychology');
    }
    
    if (content !== orig) {
      fs.writeFileSync(f, content, 'utf8');
      console.log('Updated ' + f);
    }
  } catch(e) {
    console.error(e);
  }
});

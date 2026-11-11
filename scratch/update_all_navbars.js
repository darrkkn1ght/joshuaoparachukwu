const fs = require('fs');
const path = require('path');

const newNavActionsHtml = `<div class="nav-actions">
      <a href="client-portal.html" class="nav-client-login-btn">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" style="vertical-align:middle;margin-right:3px;"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        <span>Client Login</span>
      </a>
      <a href="services.html" class="nav-cta-btn">Book a Discovery Consultation</a>
      <button class="nav-hamburger" id="nav-hamburger" onclick="toggleMobileNav()" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>`;

const newMobileDrawerInner = `<div class="mobile-nav-links">
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

function processDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      processDir(full);
    } else if (entry.name.endsWith('.html') && entry.name !== 'index.html') {
      let content = fs.readFileSync(full, 'utf8');
      let changed = false;

      // Update css versioning
      if (content.includes('style.css')) {
        content = content.replace(/(href=".*?style\.css)(\?v=\d+)?"/g, '$1?v=25"');
        changed = true;
      }

      // Update nav actions if standard nav exists
      if (content.includes('<nav>') || content.includes('<nav ')) {
        // If it has loose nav-cta or nav-client-login-link
        const navRegex = /<nav[\s\S]*?<\/nav>/;
        const navMatch = content.match(navRegex);
        if (navMatch && !navMatch[0].includes('class="nav-actions"')) {
          let updatedNav = navMatch[0];
          // Replace end of nav links to end of nav
          const endOfLinks = updatedNav.lastIndexOf('</div>'); // last div before cta
          if (endOfLinks !== -1) {
            const beforeActions = updatedNav.substring(0, endOfLinks + 6);
            // Replace relative path for subdirectories if needed
            const isSub = full.includes('case-studies\\') || full.includes('case-studies/');
            const relPrefix = isSub ? '../' : '';
            const adjustedActions = newNavActionsHtml
              .replace(/href="client-portal.html"/g, `href="${relPrefix}client-portal.html"`)
              .replace(/href="services.html"/g, `href="${relPrefix}services.html"`);
            
            updatedNav = beforeActions + '\n    ' + adjustedActions + '\n  </nav>';
            content = content.replace(navRegex, updatedNav);
            changed = true;
            console.log('Updated nav in', full);
          }
        }
      }

      // Update mobile drawer
      if (content.includes('class="mobile-nav-links"')) {
        const isSub = full.includes('case-studies\\') || full.includes('case-studies/');
        const relPrefix = isSub ? '../' : '';
        const adjustedDrawer = newMobileDrawerInner
          .replace(/href="index.html/g, `href="${relPrefix}index.html`)
          .replace(/href="performance-retainer.html"/g, `href="${relPrefix}performance-retainer.html"`)
          .replace(/href="services.html"/g, `href="${relPrefix}services.html"`)
          .replace(/href="case-studies.html"/g, `href="${relPrefix}case-studies.html"`)
          .replace(/href="research.html"/g, `href="${relPrefix}research.html"`)
          .replace(/href="about.html"/g, `href="${relPrefix}about.html"`)
          .replace(/href="client-portal.html"/g, `href="${relPrefix}client-portal.html"`);

        const drawerRegex = /<div class="mobile-nav-links">[\s\S]*?<\/div>\s*<\/div>/;
        content = content.replace(drawerRegex, adjustedDrawer);
        changed = true;
        console.log('Updated mobile drawer in', full);
      }

      if (changed) {
        fs.writeFileSync(full, content);
      }
    }
  }
}

processDir('preview');
console.log('All preview pages updated!');


const fs = require('fs');
const path = require('path');

const dropdownCssFix = `
/* =========================================================
   NAVBAR & DROPDOWN HIGH-CONTRAST VISIBILITY FIX (V26)
   ========================================================= */

/* Logo text high contrast */
.nav-logo .name {
  color: #FFFFFF !important;
}
.nav-logo .name span {
  color: #ECC954 !important;
}
.nav-logo .sub {
  color: rgba(255, 255, 255, 0.75) !important;
  font-size: 9.5px !important;
  font-weight: 600 !important;
  letter-spacing: 0.08em !important;
}

/* Nav links on top bar (navy background) */
.nav-links > a,
.nav-links > .nav-dropdown-wrap > a.nav-dropdown-trigger {
  font-size: 13px !important;
  font-weight: 500 !important;
  color: rgba(255, 255, 255, 0.88) !important;
  padding: 6px 10px !important;
  border-radius: 6px !important;
  transition: all 0.2s ease !important;
}

.nav-links > a:hover,
.nav-links > .nav-dropdown-wrap > a.nav-dropdown-trigger:hover,
.nav-links > a.active {
  color: #FFE484 !important;
  background: rgba(200, 168, 48, 0.14) !important;
}

/* The Dropdown Box (White Card) */
.nav-links .nav-dropdown,
.nav-dropdown {
  background: #FFFFFF !important;
  border: 1px solid #E2E8F0 !important;
  box-shadow: 0 20px 48px rgba(0, 16, 42, 0.22) !important;
  border-radius: 12px !important;
  z-index: 9999 !important;
}

.nav-links .nav-dropdown::before,
.nav-dropdown::before {
  background: #FFFFFF !important;
  border-left: 1px solid #E2E8F0 !important;
  border-top: 1px solid #E2E8F0 !important;
}

/* Dropdown Section Category Labels (High-contrast rich gold) */
.nav-links .nav-dropdown .nav-dropdown-section-label,
.nav-dropdown-section-label {
  color: #9A7B1C !important;
  font-size: 10.5px !important;
  font-weight: 800 !important;
  letter-spacing: 0.09em !important;
  text-transform: uppercase !important;
  padding: 10px 18px 4px !important;
  display: block !important;
  background: transparent !important;
}

/* Dropdown Links (Deep navy/black - 100% visible on white) */
.nav-links .nav-dropdown a,
.nav-links .nav-dropdown .nav-dropdown-item,
.nav-links .nav-dropdown a.nav-dropdown-item,
.nav-dropdown-item {
  color: #0A192F !important;
  font-size: 13px !important;
  font-weight: 550 !important;
  line-height: 1.5 !important;
  padding: 9px 18px !important;
  display: block !important;
  white-space: normal !important;
  text-decoration: none !important;
  background: transparent !important;
  border-radius: 0 !important;
  border-left: 3px solid transparent !important;
  transition: all 0.15s ease !important;
}

/* Dropdown Links Hover State (Warm cream highlight, deep navy text, gold left bar) */
.nav-links .nav-dropdown a:hover,
.nav-links .nav-dropdown .nav-dropdown-item:hover,
.nav-links .nav-dropdown a.nav-dropdown-item:hover,
.nav-dropdown-item:hover {
  color: #00102A !important;
  background: #F5F1E6 !important;
  border-left: 3px solid #C8A830 !important;
  padding-left: 15px !important;
  font-weight: 600 !important;
}

.nav-links .nav-dropdown-divider,
.nav-dropdown-divider {
  height: 1px !important;
  background: #EAE6DC !important;
  margin: 6px 0 !important;
}

/* Scrollbar for wide case studies dropdown */
.nav-dropdown-wide {
  width: 440px !important;
  max-height: 75vh !important;
  overflow-y: auto !important;
}
.nav-dropdown-wide::-webkit-scrollbar {
  width: 6px;
}
.nav-dropdown-wide::-webkit-scrollbar-thumb {
  background: #C8A830;
  border-radius: 3px;
}
.nav-dropdown-wide::-webkit-scrollbar-track {
  background: #F4F2EC;
}
`;

// Append and sync CSS
for (const p of ['preview/css/style.css', 'css/style.css', 'style.css']) {
  let css = fs.readFileSync(p, 'utf8');
  css += '\n' + dropdownCssFix;
  fs.writeFileSync(p, css);
  console.log('Appended fix to', p);
}

// Bump version in preview HTML files
function bumpVersion(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      bumpVersion(full);
    } else if (entry.name.endsWith('.html')) {
      let content = fs.readFileSync(full, 'utf8');
      if (content.includes('style.css')) {
        content = content.replace(/(href=".*?style\.css)(\?v=\d+)?"/g, '$1?v=26"');
        fs.writeFileSync(full, content);
        console.log('Bumped v=26 in', full);
      }
    }
  }
}

bumpVersion('preview');
console.log('Done fixing dropdown colors and bumping version to v=26!');

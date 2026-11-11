const fs = require('fs');

const cssExtra = `
/* =========================================================
   CLEAN, LUXURY EXECUTIVE NAVBAR (V25 ENHANCEMENTS)
   ========================================================= */
nav {
  position: sticky !important;
  top: 0 !important;
  z-index: 1000 !important;
  background: var(--navy, #00102A) !important;
  height: 64px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  padding: 0 40px !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important;
  box-sizing: border-box !important;
  width: 100% !important;
}

.nav-logo {
  display: flex !important;
  align-items: center !important;
  gap: 12px !important;
  flex-shrink: 0 !important;
}
.nav-logo a {
  display: flex !important;
  align-items: center !important;
  gap: 12px !important;
  text-decoration: none !important;
  color: inherit !important;
}
.nav-logo img {
  width: 40px !important;
  height: 40px !important;
  border-radius: 50% !important;
  object-fit: cover !important;
  object-position: center top !important;
  border: 1.5px solid rgba(200, 168, 48, 0.5) !important;
  background: #fff !important;
  flex-shrink: 0 !important;
}
.nav-logo .name {
  font-family: var(--font-display, serif) !important;
  font-size: 16.5px !important;
  color: #FFFFFF !important;
  line-height: 1.2 !important;
  white-space: nowrap !important;
}
.nav-logo .name span {
  color: var(--gold, #C8A830) !important;
  font-weight: 400 !important;
}
.nav-logo .sub {
  font-size: 9px !important;
  color: rgba(255, 255, 255, 0.6) !important;
  letter-spacing: 0.08em !important;
  text-transform: uppercase !important;
  margin-top: 2px !important;
  white-space: nowrap !important;
}

.nav-links {
  display: flex !important;
  align-items: center !important;
  gap: 22px !important;
  margin: 0 16px !important;
}
.nav-links a {
  font-family: var(--font-body, sans-serif) !important;
  font-size: 12.5px !important;
  color: rgba(255, 255, 255, 0.78) !important;
  text-decoration: none !important;
  font-weight: 500 !important;
  transition: color 0.2s ease !important;
  white-space: nowrap !important;
}
.nav-links a:hover,
.nav-links a.active,
.nav-links a.gold {
  color: var(--gold, #C8A830) !important;
}

.nav-actions {
  display: flex !important;
  align-items: center !important;
  gap: 12px !important;
  flex-shrink: 0 !important;
}

.nav-client-login-btn,
.nav-client-login-link {
  display: inline-flex !important;
  align-items: center !important;
  gap: 6px !important;
  background: rgba(200, 168, 48, 0.12) !important;
  border: 1px solid rgba(200, 168, 48, 0.4) !important;
  color: #FFE484 !important;
  padding: 7px 14px !important;
  border-radius: 6px !important;
  font-size: 12px !important;
  font-weight: 600 !important;
  text-decoration: none !important;
  white-space: nowrap !important;
  transition: all 0.2s ease !important;
}
.nav-client-login-btn:hover,
.nav-client-login-link:hover {
  background: var(--gold, #C8A830) !important;
  color: #00102A !important;
  border-color: var(--gold, #C8A830) !important;
}

.nav-cta-btn,
.nav-cta {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  background: linear-gradient(135deg, #ECC954 0%, #C8A830 100%) !important;
  color: #00102A !important;
  padding: 8px 18px !important;
  border-radius: 6px !important;
  font-size: 12.5px !important;
  font-weight: 700 !important;
  text-decoration: none !important;
  white-space: nowrap !important;
  box-shadow: 0 4px 14px rgba(200, 168, 48, 0.25) !important;
  transition: all 0.2s ease !important;
  cursor: pointer !important;
  border: none !important;
}
.nav-cta-btn:hover,
.nav-cta:hover {
  filter: brightness(1.05) !important;
  transform: translateY(-1px) !important;
  box-shadow: 0 6px 18px rgba(200, 168, 48, 0.38) !important;
}

.nav-hamburger {
  display: none !important;
  flex-direction: column !important;
  justify-content: center !important;
  align-items: center !important;
  gap: 4px !important;
  width: 38px !important;
  height: 38px !important;
  background: rgba(255, 255, 255, 0.08) !important;
  border: 1px solid rgba(255, 255, 255, 0.15) !important;
  border-radius: 6px !important;
  cursor: pointer !important;
  padding: 8px !important;
  flex-shrink: 0 !important;
}
.nav-hamburger span {
  display: block !important;
  width: 18px !important;
  height: 2px !important;
  background: #FFE484 !important;
  border-radius: 2px !important;
  transition: all 0.2s ease !important;
}

@media (max-width: 1120px) {
  nav {
    padding: 0 20px !important;
  }
  .nav-links {
    display: none !important;
  }
  .nav-hamburger {
    display: flex !important;
  }
}
@media (max-width: 600px) {
  .nav-cta-btn,
  .nav-cta {
    display: none !important;
  }
  .nav-logo .name {
    font-size: 14px !important;
  }
  .nav-logo .sub {
    font-size: 8px !important;
  }
}

/* Hide fake testimonial initials badges */
.vf-author-avatar {
  display: none !important;
}

/* Refined 3-Pillar Section */
#pillars {
  background: var(--cream, #F7F5EE) !important;
  padding: 52px 24px 60px !important;
}
#pillars .pillars-grid {
  display: grid !important;
  grid-template-columns: repeat(3, 1fr) !important;
  gap: 36px !important;
  max-width: 1160px !important;
  margin: 0 auto !important;
}
@media (max-width: 820px) {
  #pillars .pillars-grid {
    grid-template-columns: 1fr !important;
    gap: 24px !important;
  }
}

/* Refined Masterclass Grid */
.yt-masterclass-thumb {
  width: 220px !important;
  min-width: 220px !important;
  height: 135px !important;
}
`;

let css = fs.readFileSync('preview/css/style.css', 'utf8');
css += '\n' + cssExtra;
fs.writeFileSync('preview/css/style.css', css);
fs.writeFileSync('css/style.css', css);
fs.writeFileSync('style.css', css);
console.log('Appended and synced CSS successfully! Length:', css.length);

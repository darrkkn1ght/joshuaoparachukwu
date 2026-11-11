const fs = require('fs');

const indexHtml = fs.readFileSync('preview/index.html', 'utf8');

// Extract head (up to </head>)
const headEnd = indexHtml.indexOf('</head>') + 7;
let headPart = indexHtml.slice(0, headEnd);
// Update title
headPart = headPart.replace(/<title>[\s\S]*?<\/title>/i, '<title>Client Testimonials & Performance Outcomes | Dr. Joshua A. Oparachukwu</title>');

// Extract standard nav
const navStart = indexHtml.indexOf('<div class="nav-wrapper">');
const navEnd = indexHtml.indexOf('</nav>') + 6;
let navPart = indexHtml.slice(navStart, navEnd);

// Mark Testimonials active in nav
navPart = navPart.replace('href="#testimonials" class="nav-link"', 'href="testimonials.html" class="nav-link active"');
navPart = navPart.replace('href="index.html#testimonials"', 'href="testimonials.html" class="nav-link active"');

// Extract Photo Slider section from indexHtml
const sliderStart = indexHtml.indexOf('<section id="testimonials"');
const sliderEnd = indexHtml.indexOf('</section>', sliderStart) + 10;
const photoSliderPart = indexHtml.slice(sliderStart, sliderEnd);

// Extract Video Testimonials section from indexHtml
const vidStart = indexHtml.indexOf('<section id="video-testimonials"');
const vidEnd = indexHtml.indexOf('</section>', vidStart) + 10;
const videoPart = indexHtml.slice(vidStart, vidEnd);

// Extract Written Testimonials section from indexHtml
const writtenStart = indexHtml.indexOf('<section id="written-testimonials"');
const writtenEnd = indexHtml.indexOf('</section>', writtenStart) + 10;
const writtenPart = indexHtml.slice(writtenStart, writtenEnd);

// Extract Written Testimonials script
const scriptStart = indexHtml.indexOf('let isAllReviewsExpanded = false;');
const scriptEnd = indexHtml.indexOf('</script>', scriptStart) + 9;
const writtenScript = indexHtml.slice(scriptStart - 13, scriptEnd);

// Extract Standard Footer
const footerStart = indexHtml.indexOf('<footer>');
const footerEnd = indexHtml.indexOf('</footer>') + 9;
const footerPart = indexHtml.slice(footerStart, footerEnd);

// Build testimonials.html
const testimonialsHtml = `<!DOCTYPE html>
<html lang="en">
${headPart.replace('<!DOCTYPE html>\n<html lang="en">', '')}
<body>
  ${navPart}

  <main style="padding-top: 100px;">
    <!-- HERO HEADER -->
    <section style="background: linear-gradient(180deg, #00102A 0%, #061A3A 100%); color: #FFFFFF; padding: 72px 24px 64px; text-align: center; position: relative;">
      <div style="max-width: 900px; margin: 0 auto;">
        <span class="section-label" style="display:inline-block; color:var(--gold,#C8A830); font-size:12.5px; font-weight:700; text-transform:uppercase; letter-spacing:0.12em; margin-bottom:12px;">Evidence &amp; Social Proof</span>
        <div style="width: 48px; height: 2px; background: var(--gold,#C8A830); margin: 0 auto 18px;"></div>
        <h1 style="font-family: var(--font-display, Georgia, serif); font-size: 44px; font-weight: 700; line-height: 1.2; margin: 0 0 16px; color: #FFFFFF;">
          Client Testimonials &amp; Verified Outcomes
        </h1>
        <p style="font-size: 16.5px; color: rgba(255,255,255,0.85); line-height: 1.7; max-width: 720px; margin: 0 auto 28px;">
          Authentic match-day debriefs, error-recovery shifts, and season-long performance outcomes from competitive athletes, high-performance coaches, and executives across 6 continents.
        </p>

        <!-- Quick Jump Links -->
        <div style="display:flex; justify-content:center; gap:12px; flex-wrap:wrap;">
          <a href="#testimonials" style="display:inline-flex; align-items:center; gap:6px; padding:10px 22px; background:rgba(200,168,48,0.18); border:1px solid #C8A830; color:#FFE484; border-radius:999px; font-size:13.5px; font-weight:600; text-decoration:none;">
            <span>Athlete Photo Reviews ↓</span>
          </a>
          <a href="#video-testimonials" style="display:inline-flex; align-items:center; gap:6px; padding:10px 22px; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.2); color:#FFFFFF; border-radius:999px; font-size:13.5px; font-weight:600; text-decoration:none;">
            <span>Video Debriefs ↓</span>
          </a>
          <a href="#written-testimonials" style="display:inline-flex; align-items:center; gap:6px; padding:10px 22px; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.2); color:#FFFFFF; border-radius:999px; font-size:13.5px; font-weight:600; text-decoration:none;">
            <span>All 38 Written Reflections ↓</span>
          </a>
        </div>
      </div>
    </section>

    <!-- SECTION 1: PHOTO REVIEWS CAROUSEL -->
    ${photoSliderPart}

    <!-- SECTION 2: VIDEO TESTIMONIALS -->
    ${videoPart}

    <!-- SECTION 3: COMPLETE DIRECTORY OF WRITTEN TESTIMONIALS -->
    ${writtenPart}

    <!-- FINAL CTA -->
    <section style="background:#00102A; color:#FFFFFF; padding:80px 24px; text-align:center; border-top:1px solid rgba(200,168,48,0.25);">
      <div style="max-width:760px; margin:0 auto;">
        <span style="display:inline-block; color:var(--gold,#C8A830); font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:0.1em; margin-bottom:12px;">Take the Next Step</span>
        <h2 style="font-family:var(--font-display, Georgia, serif); font-size:38px; font-weight:700; margin:0 0 16px; color:#FFFFFF;">
          Ready to Train Your Mind Like You Train Your Body?
        </h2>
        <p style="font-size:16px; color:rgba(255,255,255,0.85); line-height:1.7; margin:0 auto 36px;">
          Join over 219 athletes and executives who have transformed their consistency under pressure.
        </p>
        <div style="display:flex; justify-content:center; gap:16px; flex-wrap:wrap;">
          <a href="performance-retainer.html" style="display:inline-flex; align-items:center; gap:8px; padding:15px 36px; background:var(--gold,#C8A830); color:#00102A; border-radius:999px; font-weight:700; font-size:15px; text-decoration:none; box-shadow:0 6px 20px rgba(200,168,48,0.3);">
            <span>Enrol in 4-Month Retainer</span>
            <span>→</span>
          </a>
          <a href="services.html" style="display:inline-flex; align-items:center; gap:8px; padding:15px 34px; background:transparent; border:1.5px solid rgba(255,255,255,0.35); color:#FFFFFF; border-radius:999px; font-weight:600; font-size:15px; text-decoration:none;">
            <span>Book a Discovery Consultation</span>
          </a>
        </div>
      </div>
    </section>
  </main>

  ${footerPart}

  ${writtenScript}

  <!-- Slider Initializer for Photo Slider -->
  <script>
    (function initResultsSlider() {
      let currentSlide = 0;
      const track = document.getElementById('resultsTrack');
      const prevBtn = document.getElementById('resPrev');
      const nextBtn = document.getElementById('resNext');
      const dots = document.querySelectorAll('#resDots .res-dot');
      if (!track || !prevBtn || !nextBtn) return;

      function goToSlide(idx) {
        currentSlide = (idx + 3) % 3;
        track.style.transform = 'translateX(-' + (currentSlide * 100) + '%)';
        dots.forEach((d, i) => {
          d.classList.toggle('active', i === currentSlide);
        });
      }

      prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
      nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));
      dots.forEach((dot, idx) => {
        dot.addEventListener('click', () => goToSlide(idx));
      });
    })();
  </script>
</body>
</html>`;

fs.writeFileSync('preview/testimonials.html', testimonialsHtml);
console.log('Created preview/testimonials.html successfully!');


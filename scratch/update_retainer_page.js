const fs = require('fs');

let html = fs.readFileSync('preview/performance-retainer.html', 'utf8');

// 1. Change REVIEWS heading to TESTIMONIALS (Image 4)
html = html.replace(
  /<span class="section-label"[^>]*>Evidence &amp; Social Proof<\/span>\s*<h2[^>]*>REVIEWS<\/h2>/i,
  `<span class="section-label" style="display:block;text-align:center;font-size:12px;letter-spacing:0.18em;font-weight:700;color:var(--gold);text-transform:uppercase;margin-bottom:8px;">Client Feedback &amp; Outcomes</span>
      <h2 style="font-family:var(--font-display);font-size:42px;font-weight:700;color:var(--navy);text-align:center;margin:0 0 12px;letter-spacing:0.02em;">TESTIMONIALS</h2>`
);

// 2. Change jump button text in wide lead quote box
html = html.replace(
  /<span>See What Other People Say About the Retainer Program · Go Straight to Reviews ↓<\/span>/g,
  `<span>See What Other People Say About the Retainer Program · Go Straight to Testimonials ↓</span>`
);

// 3. Change floating reviews pill text
html = html.replace(
  /<span>See What People Say About the Retainer Program ↓<\/span>/g,
  `<span>★★★★★ See What People Say · Testimonials ↓</span>`
);

// 4. Add Enrol button under "What You Get"
const whatYouGetEnd = `to two consultations may be delivered by an affiliated qualified specialist—arranged and funded directly by the practice.
          </p>
        </div>
      </div>
    </div>
  </section>`;

const enrolBtn1 = `to two consultations may be delivered by an affiliated qualified specialist—arranged and funded directly by the practice.
          </p>
        </div>
      </div>

      <!-- Direct Enrol CTA under What You Get -->
      <div style="text-align:center;margin-top:44px;">
        <a href="#pricing" class="btn btn-primary" style="display:inline-flex;align-items:center;gap:10px;padding:15px 36px;background:var(--gold,#C8A830);color:var(--navy,#00102A);border-radius:999px;font-weight:700;font-size:15.5px;text-decoration:none;box-shadow:0 6px 20px rgba(200,168,48,0.28);transition:all 0.25s ease;">
          <span>Enrol in 4-Month Retainer Program</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </a>
      </div>
    </div>
  </section>`;

if (html.includes(whatYouGetEnd.replace(/\n/g, '\r\n')) || html.includes(whatYouGetEnd)) {
  html = html.replace(whatYouGetEnd.replace(/\n/g, '\r\n'), enrolBtn1.replace(/\n/g, '\r\n'));
  html = html.replace(whatYouGetEnd, enrolBtn1);
  console.log('Added Enrol button under What You Get!');
} else {
  // Regex replacement
  const reg1 = /(to two consultations may be delivered by an affiliated qualified specialist[\s\S]*?<\/p>\s*<\/div>\s*<\/div>\s*)(<\/div>\s*<\/section>)/i;
  html = html.replace(reg1, `$1\n      <!-- Direct Enrol CTA under What You Get -->
      <div style="text-align:center;margin-top:44px;">
        <a href="#pricing" class="btn btn-primary" style="display:inline-flex;align-items:center;gap:10px;padding:15px 36px;background:var(--gold,#C8A830);color:var(--navy,#00102A);border-radius:999px;font-weight:700;font-size:15.5px;text-decoration:none;box-shadow:0 6px 20px rgba(200,168,48,0.28);transition:all 0.25s ease;">
          <span>Enrol in 4-Month Retainer Program</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </a>
      </div>\n    $2`);
  console.log('Added Enrol button under What You Get via regex!');
}

// 5. Add Enrol button under "Who This Is For"
const reg2 = /(<div class="aud-pill">High-Stakes Decision-Makers<\/div>\s*<\/div>\s*)(<\/div>\s*<\/section>\s*<!-- ═══ HOW ENROLMENT WORKS)/i;
html = html.replace(reg2, `$1\n      <!-- Direct Enrol CTA under Who This Is For -->
      <div style="text-align:center;margin-top:40px;">
        <a href="#pricing" class="btn btn-primary" style="display:inline-flex;align-items:center;gap:10px;padding:15px 36px;background:var(--gold,#C8A830);color:var(--navy,#00102A);border-radius:999px;font-weight:700;font-size:15.5px;text-decoration:none;box-shadow:0 6px 20px rgba(200,168,48,0.28);transition:all 0.25s ease;">
          <span>Apply for Retainer Advisory</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </a>
      </div>\n    $2`);
console.log('Added Enrol button under Who This Is For!');

// 6. Add Enrol button under "How Enrolment Works"
const reg3 = /(Schedule and utilize your remaining 7 session credits across the 4 months via the client portal\.\s*<\/div>\s*<\/div>\s*)(<\/div>\s*<\/section>\s*<!-- ═══ (?:REVIEWS|TESTIMONIALS))/i;
html = html.replace(reg3, `$1\n      <!-- Direct Enrol CTA under How Enrolment Works -->
      <div style="text-align:center;margin-top:44px;">
        <a href="#pricing" class="btn btn-primary" style="display:inline-flex;align-items:center;gap:10px;padding:15px 36px;background:var(--gold,#C8A830);color:var(--navy,#00102A);border-radius:999px;font-weight:700;font-size:15.5px;text-decoration:none;box-shadow:0 6px 20px rgba(200,168,48,0.28);transition:all 0.25s ease;">
          <span>Complete Intake &amp; Begin Retainer</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </a>
      </div>\n    $2`);
console.log('Added Enrol button under How Enrolment Works!');

// 7. Update Retainer Carousel section (Image 3) to start with photo reviews & have controls!
const photoSliderSnippet = `
  <!-- ═══ RETAINER TESTIMONIALS (PHOTO REVIEWS FIRST + CONTROLLER) ═══ -->
  <section class="retainer-carousel-section" aria-label="Client Testimonials Carousel" style="background:#FFFFFF;padding:64px 24px;border-top:1px solid var(--border);border-bottom:1px solid var(--border);">
    <div style="max-width:1200px;margin:0 auto;">
      <div class="retainer-carousel-header" style="text-align:center;margin-bottom:32px;">
        <span class="rc-label" style="display:inline-block;color:var(--gold,#C8A830);font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:8px;">Verified Client Outcomes</span>
        <h3 class="rc-headline" style="font-family:var(--font-display,serif);font-size:36px;font-weight:700;color:var(--navy,#00102A);margin:0 0 10px;">What Performers Say About Dr. Joshua &amp; The Retainer</h3>
        <p class="rc-sub" style="font-size:15px;color:var(--ink2,#4A5568);max-width:680px;margin:0 auto;line-height:1.65;">Verified on-pitch breakthroughs and mindset transformations from competitive athletes and leaders who completed Dr. Joshua's four-month retainer.</p>
      </div>

      <div class="results-slider-outer" style="position:relative;margin-top:24px;">
        <!-- Left Controller Arrow -->
        <button class="res-btn res-btn-prev" id="retPrev" aria-label="Previous reviews" type="button" style="position:absolute;left:-20px;top:50%;transform:translateY(-50%);z-index:10;width:44px;height:44px;border-radius:50%;background:#00102A;color:#FFE484;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 14px rgba(0,0,0,0.25);">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="20" height="20">
            <polyline points="15,18 9,12 15,6" />
          </svg>
        </button>

        <div class="results-slider-track-wrap" style="overflow:hidden;border-radius:16px;">
          <div class="results-slider-track" id="retTrack" style="display:flex;transition:transform 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94);">

            <!-- SLIDE 1 -->
            <div class="results-slide" style="min-width:100%;box-sizing:border-box;display:grid;grid-template-columns:repeat(3, 1fr);gap:24px;">
              <div class="result-card" style="background:#FAF8F5;border:1px solid #E4E0D8;border-radius:14px;padding:26px 22px;display:flex;flex-direction:column;justify-content:space-between;">
                <div>
                  <span style="font-family:var(--font-display,serif);font-size:38px;color:var(--gold,#C8A830);line-height:1;margin-bottom:8px;display:block;">“</span>
                  <p style="font-size:14px;color:var(--ink2,#333333);line-height:1.7;margin-bottom:20px;font-style:italic;">
                    My confidence used to be fragile. One missed chance and it was gone for the rest of the half. Working with Dr. Joshua Oparachukwu changed how I talk to myself after those moments. I'm more composed now, and it shows in how I keep pressing.
                  </p>
                </div>
                <div style="display:flex;align-items:center;gap:12px;border-top:1px solid #ECE7DE;padding-top:14px;">
                  <img src="https://res.cloudinary.com/dkxyhtuun/image/upload/q_auto:best,f_auto/v1780733334/Belief_Anozie_n9trvn.jpg" alt="Belief Anozie" style="width:44px;height:44px;border-radius:50%;object-fit:cover;border:2px solid var(--gold,#C8A830);" loading="lazy">
                  <div>
                    <div style="font-weight:700;color:var(--navy,#00102A);font-size:15px;">Belief Anozie</div>
                    <div style="font-size:12px;color:var(--ink3,#718096);">Forward, Peridot FC</div>
                  </div>
                </div>
              </div>

              <div class="result-card" style="background:#FAF8F5;border:1px solid #E4E0D8;border-radius:14px;padding:26px 22px;display:flex;flex-direction:column;justify-content:space-between;">
                <div>
                  <span style="font-family:var(--font-display,serif);font-size:38px;color:var(--gold,#C8A830);line-height:1;margin-bottom:8px;display:block;">“</span>
                  <p style="font-size:14px;color:var(--ink2,#333333);line-height:1.7;margin-bottom:20px;font-style:italic;">
                    The biggest change for me is self-control on the pitch. I used to let frustration build with referees, with teammates, with myself and it affected my game. Dr. Joshua helped me understand that composure is something you can actually train.
                  </p>
                </div>
                <div style="display:flex;align-items:center;gap:12px;border-top:1px solid #ECE7DE;padding-top:14px;">
                  <img src="https://res.cloudinary.com/dkxyhtuun/image/upload/q_auto:best,f_auto/v1780733342/Oyejide_Temiloluwa_r6ierg.jpg" alt="Oyejide Temiloluwa" style="width:44px;height:44px;border-radius:50%;object-fit:cover;border:2px solid var(--gold,#C8A830);" loading="lazy">
                  <div>
                    <div style="font-weight:700;color:var(--navy,#00102A);font-size:15px;">Oyejide Temiloluwa</div>
                    <div style="font-size:12px;color:var(--ink3,#718096);">Forward, Peridot FC</div>
                  </div>
                </div>
              </div>

              <div class="result-card" style="background:#FAF8F5;border:1px solid #E4E0D8;border-radius:14px;padding:26px 22px;display:flex;flex-direction:column;justify-content:space-between;">
                <div>
                  <span style="font-family:var(--font-display,serif);font-size:38px;color:var(--gold,#C8A830);line-height:1;margin-bottom:8px;display:block;">“</span>
                  <p style="font-size:14px;color:var(--ink2,#333333);line-height:1.7;margin-bottom:20px;font-style:italic;">
                    I used to get in my own way a lot, thinking about everything that could go wrong before a big game. Dr. Joshua gave me specific mental routines that calmed all that noise down. I play much freer now.
                  </p>
                </div>
                <div style="display:flex;align-items:center;gap:12px;border-top:1px solid #ECE7DE;padding-top:14px;">
                  <img src="https://res.cloudinary.com/dkxyhtuun/image/upload/q_auto:best,f_auto/v1780733341/Olusola_Kayode_t1b5t2.jpg" alt="Olusola Kayode" style="width:44px;height:44px;border-radius:50%;object-fit:cover;border:2px solid var(--gold,#C8A830);" loading="lazy">
                  <div>
                    <div style="font-weight:700;color:var(--navy,#00102A);font-size:15px;">Olusola Kayode</div>
                    <div style="font-size:12px;color:var(--ink3,#718096);">Midfielder, Peridot FC</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- SLIDE 2 -->
            <div class="results-slide" style="min-width:100%;box-sizing:border-box;display:grid;grid-template-columns:repeat(3, 1fr);gap:24px;">
              <div class="result-card" style="background:#FAF8F5;border:1px solid #E4E0D8;border-radius:14px;padding:26px 22px;display:flex;flex-direction:column;justify-content:space-between;">
                <div>
                  <span style="font-family:var(--font-display,serif);font-size:38px;color:var(--gold,#C8A830);line-height:1;margin-bottom:8px;display:block;">“</span>
                  <p style="font-size:14px;color:var(--ink2,#333333);line-height:1.7;margin-bottom:20px;font-style:italic;">
                    Before working with Dr. Joshua Oparachukwu, I used to carry a bad touch or a missed chance in my head for the rest of the game. That's changed. I process mistakes faster now.
                  </p>
                </div>
                <div style="display:flex;align-items:center;gap:12px;border-top:1px solid #ECE7DE;padding-top:14px;">
                  <img src="https://res.cloudinary.com/dkxyhtuun/image/upload/q_auto:best,f_auto/v1780733339/Olowoyo_Martins_Eniola_h9r9t0.jpg" alt="Olowoyo Martins Eniola" style="width:44px;height:44px;border-radius:50%;object-fit:cover;border:2px solid var(--gold,#C8A830);" loading="lazy">
                  <div>
                    <div style="font-weight:700;color:var(--navy,#00102A);font-size:15px;">Olowoyo Martins Eniola</div>
                    <div style="font-size:12px;color:var(--ink3,#718096);">Forward, Peridot FC</div>
                  </div>
                </div>
              </div>

              <div class="result-card" style="background:#FAF8F5;border:1px solid #E4E0D8;border-radius:14px;padding:26px 22px;display:flex;flex-direction:column;justify-content:space-between;">
                <div>
                  <span style="font-family:var(--font-display,serif);font-size:38px;color:var(--gold,#C8A830);line-height:1;margin-bottom:8px;display:block;">“</span>
                  <p style="font-size:14px;color:var(--ink2,#333333);line-height:1.7;margin-bottom:20px;font-style:italic;">
                    What I noticed most was how quickly I could reset. Defending is a position where one mistake can cost a goal. Dr. Joshua helped me develop a mental switch to move to what's next.
                  </p>
                </div>
                <div style="display:flex;align-items:center;gap:12px;border-top:1px solid #ECE7DE;padding-top:14px;">
                  <img src="https://res.cloudinary.com/dkxyhtuun/image/upload/q_auto:best,f_auto/v1780733337/Joshua_Ademola_Jomiloju_f9fmsw.jpg" alt="Joshua Ademola Jomiloju" style="width:44px;height:44px;border-radius:50%;object-fit:cover;border:2px solid var(--gold,#C8A830);" loading="lazy">
                  <div>
                    <div style="font-weight:700;color:var(--navy,#00102A);font-size:15px;">Joshua Ademola Jomiloju</div>
                    <div style="font-size:12px;color:var(--ink3,#718096);">Defender, Peridot FC</div>
                  </div>
                </div>
              </div>

              <div class="result-card" style="background:#FAF8F5;border:1px solid #E4E0D8;border-radius:14px;padding:26px 22px;display:flex;flex-direction:column;justify-content:space-between;">
                <div>
                  <span style="font-family:var(--font-display,serif);font-size:38px;color:var(--gold,#C8A830);line-height:1;margin-bottom:8px;display:block;">“</span>
                  <p style="font-size:14px;color:var(--ink2,#333333);line-height:1.7;margin-bottom:20px;font-style:italic;">
                    Decision-making under pressure was my biggest issue. What changed for me was confidence not the fake kind you try to pump yourself up with, but something more solid. I trust my reads now.
                  </p>
                </div>
                <div style="display:flex;align-items:center;gap:12px;border-top:1px solid #ECE7DE;padding-top:14px;">
                  <img src="https://res.cloudinary.com/dkxyhtuun/image/upload/q_auto:best,f_auto/v1780733334/Ayodele_Adebayo_evr42w.jpg" alt="Ayodele Adebayo" style="width:44px;height:44px;border-radius:50%;object-fit:cover;border:2px solid var(--gold,#C8A830);" loading="lazy">
                  <div>
                    <div style="font-weight:700;color:var(--navy,#00102A);font-size:15px;">Ayodele Adebayo</div>
                    <div style="font-size:12px;color:var(--ink3,#718096);">Forward, Peridot FC</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <!-- Right Controller Arrow -->
        <button class="res-btn res-btn-next" id="retNext" aria-label="Next reviews" type="button" style="position:absolute;right:-20px;top:50%;transform:translateY(-50%);z-index:10;width:44px;height:44px;border-radius:50%;background:#00102A;color:#FFE484;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 14px rgba(0,0,0,0.25);">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="20" height="20">
            <polyline points="9,6 15,12 9,18" />
          </svg>
        </button>

        <!-- Pagination Dots -->
        <div class="res-dots" id="retDots" style="display:flex;justify-content:center;gap:8px;margin-top:24px;">
          <button class="res-dot active" data-slide="0" aria-label="Slide 1" type="button" style="width:12px;height:12px;border-radius:50%;border:none;background:#C8A830;cursor:pointer;"></button>
          <button class="res-dot" data-slide="1" aria-label="Slide 2" type="button" style="width:12px;height:12px;border-radius:50%;border:none;background:#DDD8CE;cursor:pointer;"></button>
        </div>
      </div>
    </div>
  </section>

  <script>
    (function initRetainerSlider() {
      let currentRetSlide = 0;
      const track = document.getElementById('retTrack');
      const prevBtn = document.getElementById('retPrev');
      const nextBtn = document.getElementById('retNext');
      const dots = document.querySelectorAll('#retDots .res-dot');
      if (!track || !prevBtn || !nextBtn) return;

      function goToRetSlide(idx) {
        currentRetSlide = (idx + 2) % 2;
        track.style.transform = 'translateX(-' + (currentRetSlide * 100) + '%)';
        dots.forEach((d, i) => {
          d.style.background = (i === currentRetSlide) ? '#C8A830' : '#DDD8CE';
        });
      }

      prevBtn.addEventListener('click', () => goToRetSlide(currentRetSlide - 1));
      nextBtn.addEventListener('click', () => goToRetSlide(currentRetSlide + 1));
      dots.forEach((dot, idx) => {
        dot.addEventListener('click', () => goToRetSlide(idx));
      });
    })();
  </script>
`;

const oldCarouselRegex = /<!-- ═══ RETAINER PAGE RIGHT-TO-LEFT TESTIMONIAL CAROUSEL[\s\S]*?<\/section>/i;
if (oldCarouselRegex.test(html)) {
  html = html.replace(oldCarouselRegex, photoSliderSnippet);
  console.log('Replaced text marquee with photo testimonials slider & controller on retainer page!');
} else {
  console.log('oldCarouselRegex not matched, trying class match');
  const classRegex = /<section class="retainer-carousel-section"[\s\S]*?<\/section>/i;
  if (classRegex.test(html)) {
    html = html.replace(classRegex, photoSliderSnippet);
    console.log('Replaced via class match!');
  }
}

fs.writeFileSync('preview/performance-retainer.html', html);
console.log('Updated preview/performance-retainer.html successfully!');


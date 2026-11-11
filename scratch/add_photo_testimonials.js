const fs = require('fs');

let indexHtml = fs.readFileSync('preview/index.html', 'utf8');

// Build the Testimonials with Photos Carousel HTML
const photoTestimonialsHtml = `    <!-- ═══ TESTIMONIALS (WITH ATHLETE PICTURES FIRST) ═══ -->
    <section id="testimonials" style="background:#FFFFFF;padding:72px 32px 64px;border-bottom:1px solid var(--border,#E4E0D8);">
      <div id="reviews" style="position:relative;top:-90px;visibility:hidden;"></div>
      <div id="written-testimonials" style="position:relative;top:-90px;visibility:hidden;"></div>
      <div style="max-width:1200px;margin:0 auto;">
        <span class="section-label" style="display:inline-block;color:var(--gold,#C8A830);font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:8px;">Testimonials</span>
        <div class="section-rule" style="width:48px;height:2px;background:var(--gold,#C8A830);margin:0 0 16px;"></div>
        <h2 style="font-family:var(--font-display,serif);font-size:36px;font-weight:700;color:var(--navy,#00102A);margin:0 0 10px;line-height:1.25;">
          What Performers Say After Working with Dr. Joshua Oparachukwu
        </h2>
        <p style="font-size:15px;color:var(--ink2,#4A5568);max-width:640px;margin:0 0 32px;line-height:1.65;">
          Genuine on-pitch reviews, mindset shifts, and verified outcomes from competitive athletes and leaders.
        </p>

        <div class="results-slider-outer" style="position:relative;margin-top:24px;">
          <!-- Left Navigation Arrow -->
          <button class="res-btn res-btn-prev" id="resPrev" aria-label="Previous reviews" type="button">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="15,18 9,12 15,6" />
            </svg>
          </button>

          <div class="results-slider-track-wrap" style="overflow:hidden;border-radius:16px;">
            <div class="results-slider-track" id="resultsTrack" style="display:flex;transition:transform 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94);">

              <!-- SLIDE 1 -->
              <div class="results-slide">
                <div class="result-card">
                  <div class="result-card-body">
                    <span class="result-quote-mark" style="font-family:var(--font-display,serif);font-size:42px;color:var(--gold,#C8A830);line-height:1;margin-bottom:8px;display:block;">“</span>
                    <p class="result-after" style="font-size:14.5px;color:var(--ink2,#333333);line-height:1.7;margin-bottom:20px;font-style:italic;">
                      My confidence used to be fragile. One missed chance and it was gone for the rest of the half. Working with Dr. Joshua Oparachukwu changed how I talk to myself after those moments. I'm more composed now, and it shows in how I keep pressing, keep making runs, even when things aren't going my way.
                    </p>
                    <div class="result-footer">
                      <div class="result-avatar">
                        <img src="https://res.cloudinary.com/dkxyhtuun/image/upload/q_auto:best,f_auto/v1780733334/Belief_Anozie_n9trvn.jpg" alt="Belief Anozie" loading="lazy">
                      </div>
                      <div>
                        <div class="result-name">Belief Anozie</div>
                        <div class="result-tag">Forward, Peridot FC</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="result-card">
                  <div class="result-card-body">
                    <span class="result-quote-mark" style="font-family:var(--font-display,serif);font-size:42px;color:var(--gold,#C8A830);line-height:1;margin-bottom:8px;display:block;">“</span>
                    <p class="result-after" style="font-size:14.5px;color:var(--ink2,#333333);line-height:1.7;margin-bottom:20px;font-style:italic;">
                      The biggest change for me is self-control on the pitch. I used to let frustration build with referees, with teammates, with myself and it affected my game. Now I manage that better. Dr. Joshua Oparachukwu helped me understand that composure is something you can actually train, not just something some players are born with.
                    </p>
                    <div class="result-footer">
                      <div class="result-avatar">
                        <img src="https://res.cloudinary.com/dkxyhtuun/image/upload/q_auto:best,f_auto/v1780733342/Oyejide_Temiloluwa_r6ierg.jpg" alt="Oyejide Temiloluwa" loading="lazy">
                      </div>
                      <div>
                        <div class="result-name">Oyejide Temiloluwa</div>
                        <div class="result-tag">Forward, Peridot FC</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="result-card">
                  <div class="result-card-body">
                    <span class="result-quote-mark" style="font-family:var(--font-display,serif);font-size:42px;color:var(--gold,#C8A830);line-height:1;margin-bottom:8px;display:block;">“</span>
                    <p class="result-after" style="font-size:14.5px;color:var(--ink2,#333333);line-height:1.7;margin-bottom:20px;font-style:italic;">
                      Staying mentally engaged for a full match was something I struggled with, especially after a mistake. I'd physically be on the pitch but mentally somewhere else. That gap has closed. I stay present longer now and my performance levels in the second half of games have genuinely improved.
                    </p>
                    <div class="result-footer">
                      <div class="result-avatar">
                        <img src="https://res.cloudinary.com/dkxyhtuun/image/upload/q_auto:best,f_auto/v1780733340/Olusola_Kayode_lipnbq.jpg" alt="Olusola Kayode" loading="lazy">
                      </div>
                      <div>
                        <div class="result-name">Olusola Kayode</div>
                        <div class="result-tag">Defender, Elite FC</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- SLIDE 2 -->
              <div class="results-slide">
                <div class="result-card">
                  <div class="result-card-body">
                    <span class="result-quote-mark" style="font-family:var(--font-display,serif);font-size:42px;color:var(--gold,#C8A830);line-height:1;margin-bottom:8px;display:block;">“</span>
                    <p class="result-after" style="font-size:14.5px;color:var(--ink2,#333333);line-height:1.7;margin-bottom:20px;font-style:italic;">
                      Before working with Dr. Joshua Oparachukwu, I used to carry a bad touch or a missed chance in my head for the rest of the game. It would affect everything — my positioning, my runs, even how I communicated with teammates. That's changed. I process mistakes faster now.
                    </p>
                    <div class="result-footer">
                      <div class="result-avatar">
                        <img src="https://res.cloudinary.com/dkxyhtuun/image/upload/q_auto:best,f_auto/v1780733339/Olowoyo_Martins_Eniola_tawkw4.jpg" alt="Olowoyo Martins Eniola" loading="lazy">
                      </div>
                      <div>
                        <div class="result-name">Olowoyo Martins Eniola</div>
                        <div class="result-tag">Forward, Peridot FC</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="result-card">
                  <div class="result-card-body">
                    <span class="result-quote-mark" style="font-family:var(--font-display,serif);font-size:42px;color:var(--gold,#C8A830);line-height:1;margin-bottom:8px;display:block;">“</span>
                    <p class="result-after" style="font-size:14.5px;color:var(--ink2,#333333);line-height:1.7;margin-bottom:20px;font-style:italic;">
                      What I noticed most was how quickly I could reset. Defending is a position where one mistake can cost a goal, so mentally you can't afford to dwell. Dr. Joshua Oparachukwu helped me develop a switch. Something I do in my head to move from what just happened to what's next.
                    </p>
                    <div class="result-footer">
                      <div class="result-avatar">
                        <img src="https://res.cloudinary.com/dkxyhtuun/image/upload/q_auto:best,f_auto/v1780733336/Joshua_Ademola_Jomiloju_jedlcw.jpg" alt="Joshua Ademola Jomiloju" loading="lazy">
                      </div>
                      <div>
                        <div class="result-name">Joshua Ademola Jomiloju</div>
                        <div class="result-tag">Defender, Peridot FC</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="result-card">
                  <div class="result-card-body">
                    <span class="result-quote-mark" style="font-family:var(--font-display,serif);font-size:42px;color:var(--gold,#C8A830);line-height:1;margin-bottom:8px;display:block;">“</span>
                    <p class="result-after" style="font-size:14.5px;color:var(--ink2,#333333);line-height:1.7;margin-bottom:20px;font-style:italic;">
                      Decision-making under pressure was my biggest issue. I'd hesitate at the wrong moments or force things when I shouldn't. What changed for me was confidence — not the fake kind you try to pump yourself up with, but something more solid. I trust my reads now.
                    </p>
                    <div class="result-footer">
                      <div class="result-avatar">
                        <img src="https://res.cloudinary.com/dkxyhtuun/image/upload/q_auto:best,f_auto/v1780733332/Ayodele_Adebayo_uhytlk.jpg" alt="Ayodele Adebayo" loading="lazy">
                      </div>
                      <div>
                        <div class="result-name">Ayodele Adebayo</div>
                        <div class="result-tag">Forward, Peridot FC</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- SLIDE 3 -->
              <div class="results-slide">
                <div class="result-card">
                  <div class="result-card-body">
                    <span class="result-quote-mark" style="font-family:var(--font-display,serif);font-size:42px;color:var(--gold,#C8A830);line-height:1;margin-bottom:8px;display:block;">“</span>
                    <p class="result-after" style="font-size:14.5px;color:var(--ink2,#333333);line-height:1.7;margin-bottom:20px;font-style:italic;">
                      I'll be honest — I didn't know what to expect from this kind of work. But the sessions shifted something real. In tough games, the ones where the crowd is involved or the stakes are high, I used to tighten up. Now I notice it happening and I know what to do with it.
                    </p>
                    <div class="result-footer">
                      <div class="result-avatar">
                        <img src="https://res.cloudinary.com/dkxyhtuun/image/upload/q_auto:best,f_auto/v1780733334/Ilori_johnson_Oluwadamilare_dvarkz.jpg" alt="Ilori Johnson Oluwadamilare" loading="lazy">
                      </div>
                      <div>
                        <div class="result-name">Ilori Johnson Oluwadamilare</div>
                        <div class="result-tag">Forward, Elite FC</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="result-card">
                  <div class="result-card-body">
                    <span class="result-quote-mark" style="font-family:var(--font-display,serif);font-size:42px;color:var(--gold,#C8A830);line-height:1;margin-bottom:8px;display:block;">“</span>
                    <p class="result-after" style="font-size:14.5px;color:var(--ink2,#333333);line-height:1.7;margin-bottom:20px;font-style:italic;">
                      What I appreciated most is that the work wasn't about pretending mistakes don't happen. It was about what you do in the next five seconds after one does. Dr. Joshua Oparachukwu helped me shorten that window between error and recovery.
                    </p>
                    <div class="result-footer">
                      <div class="result-avatar">
                        <img src="https://res.cloudinary.com/dkxyhtuun/image/upload/q_auto:best,f_auto/v1780733337/Khazim_Korede_x7xmmk.jpg" alt="Khazim Korede" loading="lazy">
                      </div>
                      <div>
                        <div class="result-name">Khazim Korede</div>
                        <div class="result-tag">Forward, Elite FC</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="result-card">
                  <div class="result-card-body">
                    <span class="result-quote-mark" style="font-family:var(--font-display,serif);font-size:42px;color:var(--gold,#C8A830);line-height:1;margin-bottom:8px;display:block;">“</span>
                    <p class="result-after" style="font-size:14.5px;color:var(--ink2,#333333);line-height:1.7;margin-bottom:20px;font-style:italic;">
                      Positive self-talk sounded like something I'd roll my eyes at before we started working together. But Dr. Joshua showed me how to use it in a way that actually works during competition. When I make an error now, I recover quicker.
                    </p>
                    <div class="result-footer">
                      <div class="result-avatar">
                        <img src="https://res.cloudinary.com/dkxyhtuun/image/upload/q_auto:best,f_auto/v1780733332/Adedeji_Abdulroqeeb_xz7lwn.jpg" alt="Adedeji Abdulroqeeb" loading="lazy">
                      </div>
                      <div>
                        <div class="result-name">Adedeji Abdulroqeeb</div>
                        <div class="result-tag">Defender, Peridot FC</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <!-- Right Navigation Arrow -->
          <button class="res-btn res-btn-next" id="resNext" aria-label="Next reviews" type="button">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="9,6 15,12 9,18" />
            </svg>
          </button>

          <!-- Centered Pagination Dots -->
          <div class="res-dots" id="resDots">
            <button class="res-dot active" data-slide="0" aria-label="Slide 1" type="button"></button>
            <button class="res-dot" data-slide="1" aria-label="Slide 2" type="button"></button>
            <button class="res-dot" data-slide="2" aria-label="Slide 3" type="button"></button>
          </div>
        </div>
      </div>
    </section>
`;

// Insert directly before or replace the old written testimonials section
const targetRegex = /<!-- ═══ SECTION 02: WRITTEN TESTIMONIALS[\s\S]*?<\/section>/;

if (targetRegex.test(indexHtml)) {
  indexHtml = indexHtml.replace(targetRegex, photoTestimonialsHtml);
  console.log('Successfully placed photo testimonials FIRST in preview/index.html!');
} else {
  console.log('targetRegex not found, checking fallback');
  const fallbackRegex = /<section id="written-testimonials"[\s\S]*?<\/section>/;
  if (fallbackRegex.test(indexHtml)) {
    indexHtml = indexHtml.replace(fallbackRegex, photoTestimonialsHtml);
    console.log('Successfully replaced via fallbackRegex!');
  } else {
    console.log('Could not find written-testimonials section');
  }
}

fs.writeFileSync('preview/index.html', indexHtml);
console.log('Updated preview/index.html with photo testimonials first!');


import Image from 'next/image';

export default function Home() {
  return (
    <>
      <section id="hero">
        <div className="hero-gold-rule"></div>
        <h1 className="hero-headline">
          Train Your Mind.<br />
          Dominate Your<br />
          <span className="accent">Performance.</span>
        </h1>
        <p className="hero-sub">Helping athletes, executives and teams, develop the mental strength to perform consistently, at the highest level even in the most demanding situations.</p>
        <div className="progress-bar"><div className="progress-fill"></div></div>
        <div style={{ height: '40px' }}></div>

        <div style={{ width: '94%', maxWidth: '1100px', margin: '24px auto 48px', position: 'relative', paddingBottom: '42.85%', height: '0', overflow: 'hidden', borderRadius: '12px' }}>
          <iframe 
            src="https://www.youtube.com/embed/Em8EKjdVwEI?si=pG-F16PPhJRHZsCR&amp;start=4" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen 
            style={{ position: 'absolute', top: '50%', left: '50%', width: '100%', height: '133.5%', transform: 'translate(-50%,-50%)', border: '0' }}
          ></iframe>
        </div>
      </section>

      <section id="pillars" style={{ background: '#F4F2EC' }}>
        <h2 className="section-title reveal">The 3-Pillar Performance Method</h2>
        <div className="section-gold-rule"></div>
        <div className="pillars-grid">
          <div className="pillar reveal">
            <h3>Mental Clarity</h3>
            <div className="pillar-rule"></div>
            <p>Identify and remove psychological blocks. Build unshakeable focus even in the highest-stakes moments.</p>
            <ul className="pillar-checks">
              <li>Structured mental assessment to pinpoint blocks</li>
              <li>Proven focus techniques used by elite performers</li>
              <li>Build a pre-performance mental routine that works</li>
            </ul>
          </div>
          <div className="pillar reveal" style={{ transitionDelay: '.1s' }}>
            <h3>Resilience Systems</h3>
            <div className="pillar-rule"></div>
            <p>Structured tools to recover from errors fast. Reset immediately and keep performing at your peak.</p>
            <ul className="pillar-checks">
              <li>Error reset protocols for immediate bounce-back</li>
              <li>Pressure-inoculation drills for big moments</li>
              <li>Confidence rebuilding framework after setbacks</li>
            </ul>
          </div>
          <div className="pillar reveal" style={{ transitionDelay: '.2s' }}>
            <h3>Peak Consistency</h3>
            <div className="pillar-rule"></div>
            <p>The mental routines elite performers use to show up at their best, every single day.</p>
            <ul className="pillar-checks">
              <li>Performance check-ins and progress tracking</li>
              <li>Habit stacking for consistent high performance</li>
              <li>Long-term mindset systems that last</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="results">
        <span className="section-label">Real Results</span>
        <div className="section-rule"></div>
        <h2 style={{ fontFamily: 'var(--font-body)', fontSize: '38px', fontWeight: '700', color: 'var(--ink)', maxWidth: '500px', fontStyle: 'normal' }}>
          What athletes say after working with Dr. Joshua Oparachukwu
        </h2>

        <div className="results-slider-outer">
          <div className="results-slider-track-wrap">
            <div className="results-slider-track" id="resultsTrack">

              {/* SLIDE 1 */}
              <div className="results-slide">
                <div className="result-card">
                  <div className="result-card-body">
                    <span className="result-quote-mark">&quot;</span>
                    <p className="result-after">My confidence used to be fragile. One missed chance and it was gone for the rest of the half. Working with Dr. Joshua Oparachukwu changed how I talk to myself after those moments. I&apos;m more composed now, and it shows in how I keep pressing, keep making runs, even when things aren&apos;t going my way.</p>
                    <div className="result-footer">
                      <div className="result-avatar" style={{ background: 'none', border: '2px solid rgba(200,168,48,.35)', overflow: 'hidden', padding: '0' }}>
                        <Image width={100} height={100} src="https://res.cloudinary.com/dkxyhtuun/image/upload/v1780733334/Belief_Anozie_n9trvn.jpg" alt="Belief Anozie" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', borderRadius: '50%', display: 'block' }} />
                      </div>
                      <div>
                        <div className="result-name">Belief Anozie</div>
                        <div className="result-tag">Forward, Peridot FC</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="result-card">
                  <div className="result-card-body">
                    <span className="result-quote-mark">&quot;</span>
                    <p className="result-after">The biggest change for me is self-control on the pitch. I used to let frustration build with referees, with teammates, with myself and it affected my game. Now I manage that better. Dr. Joshua Oparachukwu helped me understand that composure is something you can actually train, not just something some players are born with.</p>
                    <div className="result-footer">
                      <div className="result-avatar" style={{ background: 'none', border: '2px solid rgba(200,168,48,.35)', overflow: 'hidden', padding: '0' }}>
                        <Image width={100} height={100} src="https://res.cloudinary.com/dkxyhtuun/image/upload/v1780733342/Oyejide_Temiloluwa_r6ierg.jpg" alt="Oyejide Temiloluwa" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', borderRadius: '50%', display: 'block' }} />
                      </div>
                      <div>
                        <div className="result-name">Oyejide Temiloluwa</div>
                        <div className="result-tag">Forward, Peridot FC</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="result-card">
                  <div className="result-card-body">
                    <span className="result-quote-mark">&quot;</span>
                    <p className="result-after">Staying mentally engaged for a full match was something I struggled with, especially after a mistake. I&apos;d physically be on the pitch but mentally somewhere else. That gap has closed. I stay present longer now and my performance levels in the second half of games have genuinely improved.</p>
                    <div className="result-footer">
                      <div className="result-avatar" style={{ background: 'none', border: '2px solid rgba(200,168,48,.35)', overflow: 'hidden', padding: '0' }}>
                        <Image width={100} height={100} src="https://res.cloudinary.com/dkxyhtuun/image/upload/v1780733340/Olusola_Kayode_lipnbq.jpg" alt="Olusola Kayode" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', borderRadius: '50%', display: 'block' }} />
                      </div>
                      <div>
                        <div className="result-name">Olusola Kayode</div>
                        <div className="result-tag">Defender, Elite FC</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* SLIDE 2 */}
              <div className="results-slide">
                <div className="result-card">
                  <div className="result-card-body">
                    <span className="result-quote-mark">&quot;</span>
                    <p className="result-after">Before working with Dr. Joshua Oparachukwu, I used to carry a bad touch or a missed chance in my head for the rest of the game. It would affect everything my positioning, my runs, even how I communicated with teammates. That&apos;s changed. I process mistakes faster now.</p>
                    <div className="result-footer">
                      <div className="result-avatar" style={{ background: 'none', border: '2px solid rgba(200,168,48,.35)', overflow: 'hidden', padding: '0' }}>
                        <Image width={100} height={100} src="https://res.cloudinary.com/dkxyhtuun/image/upload/v1780733339/Olowoyo_Martins_Eniola_tawkw4.jpg" alt="Olowoyo Martins Eniola" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', borderRadius: '50%', display: 'block' }} />
                      </div>
                      <div>
                        <div className="result-name">Olowoyo Martins Eniola</div>
                        <div className="result-tag">Forward, Peridot FC</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="result-card">
                  <div className="result-card-body">
                    <span className="result-quote-mark">&quot;</span>
                    <p className="result-after">What I noticed most was how quickly I could reset. Defending is a position where one mistake can cost a goal, so mentally you can&apos;t afford to dwell. Dr. Joshua Oparachukwu helped me develop a switch. Something I do in my head to move from what just happened to what&apos;s next.</p>
                    <div className="result-footer">
                      <div className="result-avatar" style={{ background: 'none', border: '2px solid rgba(200,168,48,.35)', overflow: 'hidden', padding: '0' }}>
                        <Image width={100} height={100} src="https://res.cloudinary.com/dkxyhtuun/image/upload/v1780733336/Joshua_Ademola_Jomiloju_jedlcw.jpg" alt="Joshua Ademola Jomiloju" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', borderRadius: '50%', display: 'block' }} />
                      </div>
                      <div>
                        <div className="result-name">Joshua Ademola Jomiloju</div>
                        <div className="result-tag">Defender, Peridot FC</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="result-card">
                  <div className="result-card-body">
                    <span className="result-quote-mark">&quot;</span>
                    <p className="result-after">Decision-making under pressure was my biggest issue. I&apos;d hesitate at the wrong moments or force things when I shouldn&apos;t. What changed for me was confidence not the fake kind you try to pump yourself up with, but something more solid. I trust my reads now.</p>
                    <div className="result-footer">
                      <div className="result-avatar" style={{ background: 'none', border: '2px solid rgba(200,168,48,.25)', overflow: 'hidden', padding: '0' }}>
                        <Image width={100} height={100} src="https://res.cloudinary.com/dkxyhtuun/image/upload/v1780733332/Ayodele_Adebayo_uhytlk.jpg" alt="Ayodele Adebayo" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', borderRadius: '50%', display: 'block' }} />
                      </div>
                      <div>
                        <div className="result-name">Ayodele Adebayo</div>
                        <div className="result-tag">Forward, Peridot FC</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* SLIDE 3 */}
              <div className="results-slide">
                <div className="result-card">
                  <div className="result-card-body">
                    <span className="result-quote-mark">&quot;</span>
                    <p className="result-after">I&apos;ll be honest I didn&apos;t know what to expect from this kind of work. But the sessions shifted something real. In tough games, the ones where the crowd is involved or the stakes are high, I used to tighten up. Now I notice it happening and I know what to do with it.</p>
                    <div className="result-footer">
                      <div className="result-avatar" style={{ background: 'none', border: '2px solid rgba(200,168,48,.35)', overflow: 'hidden', padding: '0' }}>
                        <Image width={100} height={100} src="https://res.cloudinary.com/dkxyhtuun/image/upload/v1780733334/Ilori_johnson_Oluwadamilare_dvarkz.jpg" alt="Ilori Johnson Oluwadamilare" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', borderRadius: '50%', display: 'block' }} />
                      </div>
                      <div>
                        <div className="result-name">Ilori Johnson Oluwadamilare</div>
                        <div className="result-tag">Forward, Elite FC</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="result-card">
                  <div className="result-card-body">
                    <span className="result-quote-mark">&quot;</span>
                    <p className="result-after">What I appreciated most is that the work wasn&apos;t about pretending mistakes don&apos;t happen. It was about what you do in the next five seconds after one does. Dr. Joshua Oparachukwu helped me shorten that window between error and recovery.</p>
                    <div className="result-footer">
                      <div className="result-avatar" style={{ background: 'none', border: '2px solid rgba(200,168,48,.35)', overflow: 'hidden', padding: '0' }}>
                        <Image width={100} height={100} src="https://res.cloudinary.com/dkxyhtuun/image/upload/v1780733337/Khazim_Korede_x7xmmk.jpg" alt="Khazim Korede" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', borderRadius: '50%', display: 'block' }} />
                      </div>
                      <div>
                        <div className="result-name">Khazim Korede</div>
                        <div className="result-tag">Forward, Elite FC</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="result-card">
                  <div className="result-card-body">
                    <span className="result-quote-mark">&quot;</span>
                    <p className="result-after">Positive self-talk sounded like something I&apos;d roll my eyes at before we started working together. But Dr. Joshua Oparachukwu showed me how to use it in a way that actually works during competition. When I make an error now, I recover quicker.</p>
                    <div className="result-footer">
                      <div className="result-avatar" style={{ background: 'none', border: '2px solid rgba(200,168,48,.35)', overflow: 'hidden', padding: '0' }}>
                        <Image width={100} height={100} src="https://res.cloudinary.com/dkxyhtuun/image/upload/v1780733332/Adedeji_Abdulroqeeb_xz7lwn.jpg" alt="Adedeji Abdulroqeeb" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', borderRadius: '50%', display: 'block' }} />
                      </div>
                      <div>
                        <div className="result-name">Adedeji Abdulroqeeb</div>
                        <div className="result-tag">Defender, Peridot FC</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>{/* /results-slider-track-wrap */}
          
          <button className="res-btn" id="resPrev" aria-label="Previous">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15,18 9,12 15,6"></polyline></svg>
          </button>
          <button className="res-btn" id="resNext" aria-label="Next">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9,6 15,12 9,18"></polyline></svg>
          </button>
          
          <div className="results-slider-controls">
            <div className="res-dots" id="resDots">
              <button className="res-dot active" data-slide="0"></button>
              <button className="res-dot" data-slide="1"></button>
              <button className="res-dot" data-slide="2"></button>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials">
        <span className="section-label">Hear From Athletes</span>
        <div className="section-rule"></div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '36px', fontWeight: '700', color: 'var(--ink)' }}>Directly from the people who did the work</h2>
        <div className="vid-grid">
          <div className="vid-card reveal">
            <div className="vid-card-top"></div>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: '0', overflow: 'hidden', borderRadius: '8px 8px 0 0' }}>
              <iframe src="https://www.youtube.com/embed/eKPaeAAANoQ?si=7CRu1bZB5HsxAgpx" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', border: '0' }}></iframe>
            </div>
            <div className="vid-info"><p style={{ fontWeight: '700', color: 'var(--ink)' }}>Players I Worked With</p><p style={{ fontSize: '12px', color: 'var(--ink3)' }}>Mashup</p></div>
          </div>
          <div className="vid-card reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="vid-card-top"></div>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: '0', overflow: 'hidden', borderRadius: '8px 8px 0 0' }}>
              <iframe src="https://www.youtube.com/embed/k7XdkthBevA?si=T0FWOpEuTP_qan6q" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', border: '0' }}></iframe>
            </div>
            <div className="vid-info"><p style={{ fontWeight: '700', color: 'var(--ink)' }}>Kazeem Korede Olarenwaju</p><p style={{ fontSize: '12px', color: 'var(--ink3)' }}>Athlete</p></div>
          </div>
          <div className="vid-card reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="vid-card-top"></div>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: '0', overflow: 'hidden', borderRadius: '8px 8px 0 0' }}>
              <iframe src="https://www.youtube.com/embed/4IZC0yx4iDw?si=9TGAcd4qlo2_UqL3" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', border: '0' }}></iframe>
            </div>
            <div className="vid-info"><p style={{ fontWeight: '700', color: 'var(--ink)' }}>Adedeji Abdulroqeeb</p><p style={{ fontSize: '12px', color: 'var(--ink3)' }}>Athlete</p></div>
          </div>
          <div className="vid-card reveal" style={{ transitionDelay: '0.3s' }}>
            <div className="vid-card-top"></div>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: '0', overflow: 'hidden', borderRadius: '8px 8px 0 0' }}>
              <iframe src="https://www.youtube.com/embed/nVHR7YZxRtg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', border: '0' }}></iframe>
            </div>
            <div className="vid-info"><p style={{ fontWeight: '700', color: 'var(--ink)' }}>Coach Folorunsho Sahaad</p><p style={{ fontSize: '12px', color: 'var(--ink3)' }}>Coach</p></div>
          </div>
          <div className="vid-card reveal" style={{ transitionDelay: '0.4s' }}>
            <div className="vid-card-top"></div>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: '0', overflow: 'hidden', borderRadius: '8px 8px 0 0' }}>
              <iframe src="https://www.youtube.com/embed/iqa6t4J4i9I" title="YouTube video player" frameBorder="0" allowFullScreen style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', border: '0' }}></iframe>
            </div>
            <div className="vid-info"><p style={{ fontWeight: '700', color: 'var(--ink)' }}>Belief Anozie</p><p style={{ fontSize: '12px', color: 'var(--ink3)' }}>Athlete</p></div>
          </div>
          <div className="vid-card reveal" style={{ transitionDelay: '0.5s' }}>
            <div className="vid-card-top"></div>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: '0', overflow: 'hidden', borderRadius: '8px 8px 0 0' }}>
              <iframe src="https://www.youtube.com/embed/-a_ILn3XpSU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', border: '0' }}></iframe>
            </div>
            <div className="vid-info"><p style={{ fontWeight: '700', color: 'var(--ink)' }}>Ayodele Adebayo</p><p style={{ fontSize: '12px', color: 'var(--ink3)' }}>Athlete</p></div>
          </div>
        </div>
      </section>

      <section id="youtube">
        <div className="yt-header reveal">
          <div>
            <p className="yt-label">Dr. Joshua Oparachukwu&apos;s YouTube Channel</p>
            <h2>Performance Psychology<br /><em>In Practice</em></h2>
          </div>
        </div>
        <div className="yt-grid" id="yt-grid"></div>
        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <a href="https://youtube.com/@dr.joshuaoparachukwu?si=CVys0jY24-cUPbRy" target="_blank" rel="noopener noreferrer" className="btn-yt-secondary">View More →</a>
        </div>
      </section>
    </>
  );
}

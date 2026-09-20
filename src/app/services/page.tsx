
export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <span className="section-label">Work With Me</span>
        <div className="section-rule"></div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '38px', fontWeight: '700', color: 'var(--ink)', marginBottom: '12px' }}>
          Work With Me
        </h2>
        <p style={{ fontSize: '15px', color: 'var(--ink3)', marginBottom: '44px', maxWidth: '560px', lineHeight: '1.7' }}>
          Choose the service that best describes your situation. Each consultation begins with a short booking form, then routes you to schedule your call.
        </p>
        <div className="services-grid">
          
          <div className="service-card reveal">
            <div className="service-top"></div>
            <div className="service-body">
              <div className="service-audience">For athletes, students, professionals, performers, and creators</div>
              <h4>1-on-1 Individual Performance Consultation</h4>
              <p className="service-hook">You know you are capable. But something&apos;s off.</p>
              <p className="service-desc">
                You overthink. You hesitate. You lose confidence, struggle to recover after mistakes, or find yourself mentally exhausted carrying expectations alone.
              </p>
              <p className="service-cta-line">
                This consultation is where we identify what is disrupting your performance and what kind of support would move things forward.
              </p>
              <div className="service-meta">15 min · $30</div>
              <a href="/book" className="service-btn" style={{ textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}>Book a Consultation →</a>
            </div>
          </div>

          <div className="service-card reveal" style={{ transitionDelay: '.1s' }}>
            <div className="service-top"></div>
            <div className="service-body">
              <div className="service-audience">For teams, coaches, academies, and organisations</div>
              <h4>Team &amp; Organization Consultation</h4>
              <p className="service-hook">The talent is there. But the team isn&apos;t delivering as it should.</p>
              <p className="service-desc">
                Mistakes fracture the group. Pressure splinters the team. Confidence is never collective. Doubt always is. Players perform well in training but shrink in competition. The culture looks fine on the surface, but something is quietly wrong with it.
              </p>
              <p className="service-cta-line">
                This consultation is where we identify what is disrupting performance across your environment and what kind of support would actually address it.
              </p>
              <div className="service-meta">30 min · $75</div>
              <a href="/book" className="service-btn" style={{ textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}>Book a Team Consultation →</a>
            </div>
          </div>

          <div className="service-card reveal" style={{ transitionDelay: '.2s' }}>
            <div className="service-top"></div>
            <div className="service-body">
              <div className="service-audience">For founders, executives, and leaders</div>
              <h4>Executive / High-Pressure Performance Consultation</h4>
              <p className="service-hook">The position is already yours. But performing inside it is taking a toll.</p>
              <p className="service-desc">
                You make decisions under pressure, in public, in private, with little room for error. The composure people see on the outside is heavy. It&apos;s costing something on the inside. Clarity is currently harder to hold. Fatigue accumulates in ways you can&apos;t quantify.
              </p>
              <p className="service-cta-line">
                This consultation is where we identify what is eroding your mental performance and what kind of support would actually restore it.
              </p>
              <div className="service-meta">30 min · $100</div>
              <a href="/book" className="service-btn" style={{ textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}>Book an Executive Consultation →</a>
            </div>
          </div>

          <div className="service-card reveal" style={{ transitionDelay: '.3s' }}>
            <div className="service-top"></div>
            <div className="service-body">
              <div className="service-audience">For clubs, academies, federations, and sport organisations</div>
              <h4>Sport Governance &amp; Strategic Consultation</h4>
              <p className="service-hook">The organisation is not functioning as it should.</p>
              <p className="service-desc">
                There is activity. But not the results the organisation should be producing. Good people are working hard inside a system that keeps producing the same problems. Decisions are slow. Often unclear.
              </p>
              <p className="service-cta-line">
                This consultation is where we identify what is structurally disrupting your organisation and what kind of advisory support would actually address it.
              </p>
              <div className="service-meta">Request Advisory</div>
              <a href="/book" className="service-btn" style={{ textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}>Book an Advisory Consultation →</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
  
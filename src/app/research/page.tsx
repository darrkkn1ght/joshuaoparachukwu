
import Link from 'next/link';

export default function Research() {
  return (
    <section className="section" id="research">
      <div className="container">
        <span className="section-label">Research & Publications</span>
        <div className="section-rule"></div>
        <h1 className="section-title">Academic rigor meets real-world performance.</h1>
        
        <p style={{ color: 'var(--ink3)', maxWidth: '700px', lineHeight: '1.8', marginBottom: '48px' }}>
          Dr. Joshua Oparachukwu&apos;s work sits at the intersection of academic rigour and real-world performance. His research informs every program he delivers.
        </p>

        <div style={{ marginBottom: '64px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '32px', borderBottom: '1px solid var(--border)', paddingBottom: '16px' }}>Published Works</h2>
          
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '20px', color: 'var(--navy)', marginBottom: '8px' }}>
              Effect of taekwondo mental toughness skill training on assertive behaviour among University of Ibadan football players
            </h3>
            <p style={{ color: 'var(--ink4)', fontSize: '14px', marginBottom: '12px' }}>Journal of Sports Psychology · 2023</p>
            <p style={{ color: 'var(--ink3)', lineHeight: '1.6', marginBottom: '16px' }}>
              An empirical study exploring how cross-disciplinary mental toughness conditioning from combat sports impacts the on-field decision-making and assertiveness of collegiate football players.
            </p>
            <Link href="/research/01" className="btn-white">Read Full Abstract</Link>
          </div>
          
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '20px', color: 'var(--navy)', marginBottom: '8px' }}>
              The effect of martial arts training on the performance of football skills among football players in University of Ibadan
            </h3>
            <p style={{ color: 'var(--ink4)', fontSize: '14px', marginBottom: '12px' }}>Journal of Applied Sports Science · 2022</p>
            <p style={{ color: 'var(--ink3)', lineHeight: '1.6', marginBottom: '16px' }}>
              Investigating the transfer of proprioceptive and spatial awareness skills developed in martial arts directly to football-specific technical execution.
            </p>
            <Link href="/research/02" className="btn-white">Read Full Abstract</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
  
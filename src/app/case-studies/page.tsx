import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { CaseStudy } from './[id]/page';

export default function CaseStudies() {
  const dataPath = path.join(process.cwd(), 'src', 'data', 'case-studies.json');
  const caseStudies: CaseStudy[] = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

  // Group case studies by category
  const grouped = caseStudies.reduce((acc: Record<string, CaseStudy[]>, cs: CaseStudy) => {
    const mainCategory = cs.category.split('·')[1]?.trim() || 'Other';
    if (!acc[mainCategory]) acc[mainCategory] = [];
    acc[mainCategory].push(cs);
    return acc;
  }, {});

  return (
    <section className="section" id="case-studies">
      <div className="container">
        <span className="section-label">Case Studies</span>
        <div className="section-rule"></div>
        <h1 className="section-title">Deep Dive Interventions</h1>
        
        <p style={{ color: 'var(--ink3)', maxWidth: '700px', lineHeight: '1.8', marginBottom: '48px' }}>
          Real-world examples of my performance psychology and strategic interventions across elite athletes, coaching staff, high-pressure executives, and sports governance bodies.
        </p>

        {Object.entries(grouped).map(([category, items]) => (
          <div key={category} style={{ marginBottom: '64px' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '24px', borderBottom: '1px solid var(--border)', paddingBottom: '16px' }}>{category}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
              {items.map((cs) => (
                <div key={cs.id} style={{ border: '1px solid var(--border)', padding: '32px', borderRadius: '12px', display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>{cs.title}</h3>
                  <p style={{ color: 'var(--ink3)', marginBottom: '24px', fontSize: '14px', flex: 1 }}>
                    {cs.description}
                  </p>
                  <Link href={`/case-studies/${cs.id}`} className="btn-white" style={{ alignSelf: 'flex-start' }}>Read Case Study</Link>
                </div>
              ))}
            </div>
          </div>
        ))}
        
        <div style={{ marginTop: '64px', textAlign: 'center', background: 'var(--navy)', color: 'var(--white)', padding: '48px', borderRadius: '16px' }}>
          <h2 style={{ fontSize: '28px', marginBottom: '24px', color: 'var(--white)' }}>Facing a similar challenge?</h2>
          <Link href="/book" className="btn-white">Schedule a Consultation</Link>
        </div>
      </div>
    </section>
  );
}

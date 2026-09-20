import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  bannerHtml: string;
  contentHtml: string;
}

export async function generateStaticParams() {
  const dataPath = path.join(process.cwd(), 'src', 'data', 'case-studies.json');
  const data: CaseStudy[] = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  return data.map((cs) => ({
    id: cs.id,
  }));
}

export default async function CaseStudyPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const dataPath = path.join(process.cwd(), 'src', 'data', 'case-studies.json');
  const data: CaseStudy[] = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  
  const caseStudy = data.find((cs) => cs.id === resolvedParams.id);
  if (!caseStudy) {
    notFound();
  }

  return (
    <>
      <div style={{ background: '#00102A' }}>
        <div className="container" style={{ paddingTop: '80px', paddingBottom: '80px' }} dangerouslySetInnerHTML={{ __html: caseStudy.bannerHtml }} />
      </div>
      <div className="container" style={{ maxWidth: '800px', paddingTop: '64px', paddingBottom: '64px' }}>
        <div dangerouslySetInnerHTML={{ __html: caseStudy.contentHtml }} />
        
        <div style={{ background: '#00102A', borderRadius: '14px', padding: '40px 48px', textAlign: 'center', marginTop: '48px' }}>
          <h3 style={{ fontFamily: 'var(--font-display,serif)', fontSize: '24px', fontWeight: '700', color: '#fff', lineHeight: '1.3', marginBottom: '28px' }}>
            If this reflects a challenge you&apos;re seeing in yourself, your athlete or your team, this is work that can be done.
          </h3>
          <Link href="/book" style={{ display: 'inline-block', background: '#C8A830', color: '#00102A', fontWeight: '700', fontSize: '14px', padding: '14px 36px', borderRadius: '8px', textDecoration: 'none' }}>
            Book a Consultation Call
          </Link>
        </div>
        <div style={{ marginTop: '24px', textAlign: 'center' }}>
          <Link href="/case-studies" style={{ color: 'var(--navy-muted)', textDecoration: 'underline' }}>← Back to all Case Studies</Link>
        </div>
      </div>
    </>
  );
}

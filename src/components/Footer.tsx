import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="container footer-main">
        <div className="footer-left">
          <div className="footer-name">Dr. Joshua A. Oparachukwu</div>
          <div className="footer-sub">Performance Strategist · Applied Performance Scientist</div>
        </div>
        <div className="footer-nav">
          <Link href="/#results">Results</Link>
          <Link href="/research">Research</Link>
          <Link href="/case-studies">Case Studies</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/book">Book a Consultation</Link>
        </div>
      </div>
      <div className="container" style={{ textAlign: 'center', paddingBottom: '40px', fontSize: '12px', color: 'var(--ink4)' }}>
        © {new Date().getFullYear()} Dr. Joshua Oparachukwu. All rights reserved.
      </div>
    </footer>
  );
}

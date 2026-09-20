'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    // Give the DOM a tiny tick to render the new route
    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }, 100);

    return () => observer.disconnect();
  }, [pathname]);

  return (
    <>
      <nav className="premium-nav">
        <Link href="/" className="premium-nav-logo">
          <Image src="https://res.cloudinary.com/dkxyhtuun/image/upload/v1778194219/Dr._Oparachukwu_irnxil.png" alt="Dr. Joshua Oparachukwu" width={44} height={44} className="premium-logo-img" />
          <div className="premium-logo-text">
            <span className="name">Dr. Joshua <span>Oparachukwu</span></span>
            <span className="sub">Applied Performance Science</span>
          </div>
        </Link>
        <div className="premium-nav-links">
          <Link href="/research">Research</Link>
          <Link href="/case-studies">Case Studies</Link>
          <Link href="/#results">Results</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
        </div>
        <Link href="/book" className="premium-nav-cta">Book a Consultation</Link>
        <button className="nav-hamburger" onClick={() => setMobileNavOpen(true)}>
          <span></span><span></span><span></span>
        </button>
      </nav>

      {mobileNavOpen && (
        <>
          <div className="premium-mobile-nav-overlay" onClick={() => setMobileNavOpen(false)}></div>
          <div className="premium-mobile-nav-drawer">
            <div className="premium-mobile-nav-header">
              <span className="premium-mobile-nav-logo">Dr. Joshua A. Oparachukwu</span>
              <button className="premium-mobile-nav-close" onClick={() => setMobileNavOpen(false)}>✕</button>
            </div>
            <div className="premium-mobile-nav-links">
              <Link href="/research" onClick={() => setMobileNavOpen(false)}>Research</Link>
              <Link href="/case-studies" onClick={() => setMobileNavOpen(false)}>Case Studies</Link>
              <Link href="/#results" onClick={() => setMobileNavOpen(false)}>Results</Link>
              <Link href="/services" onClick={() => setMobileNavOpen(false)}>Services</Link>
              <Link href="/about" onClick={() => setMobileNavOpen(false)}>About</Link>
              <Link href="/book" className="premium-mobile-nav-cta" onClick={() => setMobileNavOpen(false)}>Book a Consultation</Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}

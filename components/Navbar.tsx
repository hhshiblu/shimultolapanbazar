'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'হোম' },
  { href: '/documents', label: 'ডকুমেন্ট' },
  { href: '/history', label: 'ইতিহাস' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: scrolled ? 'rgba(11,61,46,0.97)' : 'var(--primary)',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.1)' : 'none',
          transition: 'all 0.3s ease',
          boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.2)' : 'none',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '70px' }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span style={{ fontSize: '1.6rem' }}>🌿</span>
            <div>
              <div style={{ color: '#fff', fontWeight: 700, fontSize: '1.05rem', lineHeight: 1.2, fontFamily: 'Noto Serif Bengali, serif' }}>
                পান বাজার অফিশিয়াল
              </div>
              <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.7rem', letterSpacing: '0.05em' }}>
                Pan Bazar Official
              </div>
            </div>
          </Link>

          {/* Desktop Links */}
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-nav">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: pathname === link.href ? 'var(--accent)' : 'rgba(255,255,255,0.85)',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  fontFamily: 'Noto Serif Bengali, serif',
                  borderBottom: pathname === link.href ? '2px solid var(--accent)' : '2px solid transparent',
                  paddingBottom: '2px',
                  transition: 'all 0.2s',
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/documents" className="btn btn-primary" style={{ padding: '0.55rem 1.25rem', fontSize: '0.88rem' }}>
              📄 নথি দেখুন
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="hamburger-btn"
            aria-label="Open menu"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'none',
              flexDirection: 'column',
              gap: '5px',
              padding: '6px',
            }}
          >
            <span style={{ display: 'block', width: '24px', height: '2px', background: '#fff', borderRadius: '2px' }} />
            <span style={{ display: 'block', width: '24px', height: '2px', background: '#fff', borderRadius: '2px' }} />
            <span style={{ display: 'block', width: '18px', height: '2px', background: '#fff', borderRadius: '2px' }} />
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        onClick={closeMenu}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.55)',
          zIndex: 998,
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'all' : 'none',
          transition: 'opacity 0.3s ease',
        }}
      />

      {/* Mobile Drawer */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          width: '280px',
          background: 'var(--primary)',
          zIndex: 999,
          transform: menuOpen ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
          display: 'flex',
          flexDirection: 'column',
          padding: '1.5rem',
          boxShadow: '4px 0 30px rgba(0,0,0,0.3)',
        }}
      >
        {/* Drawer Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <div style={{ color: '#fff', fontWeight: 700, fontSize: '1rem', fontFamily: 'Noto Serif Bengali, serif' }}>
            🌿 পান বাজার
          </div>
          <button
            onClick={closeMenu}
            style={{
              background: 'rgba(255,255,255,0.15)',
              border: 'none',
              color: '#fff',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              cursor: 'pointer',
              fontSize: '1.1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.2s',
            }}
          >
            ✕
          </button>
        </div>

        {/* Drawer Links */}
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              style={{
                color: pathname === link.href ? 'var(--accent)' : 'rgba(255,255,255,0.85)',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '1.05rem',
                fontFamily: 'Noto Serif Bengali, serif',
                padding: '0.85rem 1rem',
                borderRadius: '8px',
                background: pathname === link.href ? 'rgba(34,197,94,0.15)' : 'transparent',
                borderLeft: pathname === link.href ? '3px solid var(--accent)' : '3px solid transparent',
                transition: 'all 0.2s',
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA in Drawer */}
        <div style={{ marginTop: 'auto' }}>
          <Link
            href="/documents"
            onClick={closeMenu}
            className="btn btn-primary"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            📄 সরকারি নথি দেখুন
          </Link>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', marginTop: '1.5rem', textAlign: 'center', lineHeight: 1.5 }}>
            এই ওয়েবসাইটে প্রকাশিত তথ্যই অফিসিয়াল তথ্য
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}

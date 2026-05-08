import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--primary)', color: 'rgba(255,255,255,0.8)', padding: '3rem 0 1.5rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <span style={{ fontSize: '1.5rem' }}>🌿</span>
              <span style={{ color: '#fff', fontWeight: 700, fontSize: '1rem', fontFamily: 'Noto Serif Bengali, serif' }}>পান বাজার অফিশিয়াল</span>
            </div>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.55)' }}>
              একটি স্বচ্ছ ও বিশ্বাসযোগ্য ডিজিটাল তথ্যকেন্দ্র।
              বাজারের সকল  তথ্য এখানে সংরক্ষিত।
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 style={{ color: '#fff', fontWeight: 700, marginBottom: '1rem', fontSize: '0.95rem', fontFamily: 'Noto Serif Bengali, serif' }}>
              পেজসমূহ
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                { href: '/', label: 'হোম' },
                { href: '/documents', label: 'নথি দেখুন' },
                { href: '/history', label: 'বাজারের ইতিহাস' },
              ].map((link) => (
                <Link key={link.href} href={link.href} style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.88rem', fontFamily: 'Noto Serif Bengali, serif', transition: 'color 0.2s' }}>
                  → {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Trust */}
          <div>
            <h4 style={{ color: '#fff', fontWeight: 700, marginBottom: '1rem', fontSize: '0.95rem', fontFamily: 'Noto Serif Bengali, serif' }}>
              বিশ্বস্ততার প্রতিশ্রুতি
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {['✅ অনুমোদিত', '📄 নথি প্রকাশিত', '🔒 তথ্য সুরক্ষিত', '⚖️ আইনিভাবে বৈধ'].map((item) => (
                <span key={item} style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>{item}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem' }}>
          <div style={{
            background: 'rgba(34,197,94,0.12)',
            border: '1px solid rgba(34,197,94,0.3)',
            borderRadius: '8px',
            padding: '0.85rem 1.25rem',
            marginBottom: '1rem',
            textAlign: 'center',
          }}>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.88rem', lineHeight: 1.6, fontFamily: 'Noto Serif Bengali, serif' }}>
              ⚠️ &quot;এই ওয়েবসাইটে প্রকাশিত তথ্যই অফিসিয়াল তথ্য হিসেবে গণ্য হবে&quot;
            </p>
          </div>
          <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.35)', fontSize: '0.8rem' }}>
            © ২০২৫ পান বাজার অফিশিয়াল। সর্বস্বত্ব সংরক্ষিত।
          </p>
        </div>
      </div>
    </footer>
  );
}

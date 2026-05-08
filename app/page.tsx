'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const galleryImages = [
  { src: '/images/gallery-1.jpg', alt: 'পান পাতার স্তূপ' },
  { src: '/images/gallery-2.jpg', alt: 'পান পাতার' },
  { src: '/images/gallery-3.jpg', alt: 'বাজারের দৃশ্য' },
  { src: '/images/gallery-4.jpg', alt: 'পান বাজার' },
  { src: '/images/gallery-5.jpg', alt: 'পণ্য পরিমাপ' },
  { src: '/images/gallery-6.jpg', alt: 'বাজারের দৃশ্য' },
  { src: '/images/bazar1.jpg', alt: 'পানের বান্ডেল' },
  { src: '/images/bazar2.jpg', alt: 'ব্যবসায়ী সভা' },
  { src: '/images/bazar3.jpg', alt: 'আধুনিক বাজার' },
];



export default function Home() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState(0);

  const openLightbox = (idx: number) => { setLightboxIdx(idx); setLightboxOpen(true); };
  const closeLightbox = () => setLightboxOpen(false);
  const prevImg = () => setLightboxIdx((i) => (i - 1 + galleryImages.length) % galleryImages.length);
  const nextImg = () => setLightboxIdx((i) => (i + 1) % galleryImages.length);

  return (
    <>
      {/* ── HERO ── */}
      <section style={{
        minHeight: '50vh',
        background: 'linear-gradient(135deg, #0B3D2E 0%, #145A42 55%, #1a7a52 100%)',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* bg pattern */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/hero-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.12 }} />
        {/* decorative circles */}
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '500px', height: '500px', borderRadius: '50%', background: 'rgba(34,197,94,0.06)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-15%', left: '-8%', width: '600px', height: '600px', borderRadius: '50%', background: 'rgba(255,255,255,0.03)', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, padding: '4rem 1.5rem' }}>
          <div className="hero-content-wrap">


            <h1 className="hero-heading" style={{
              color: '#fff',
              fontWeight: 800,
              marginBottom: '1.25rem',
              fontFamily: 'Noto Serif Bengali, serif',
              lineHeight: 1.2,
            }}>
              পান বাজার 
            </h1>

            <p className="hero-para" style={{
              color: 'rgba(255,255,255,0.82)',
              margin: '0 0 2.5rem',
              lineHeight: 1.8,
              fontFamily: 'Noto Serif Bengali, serif',
            }}>
              এই ওয়েবসাইটে বাজারের সকল অফিসিয়াল তথ্য ও প্রমাণ সংরক্ষিত আছে।
              স্বচ্ছতা ও বিশ্বাসযোগ্যতার নিশ্চয়তায় আমরা প্রতিশ্রুতিবদ্ধ।
            </p>

            <div className="hero-btns" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/documents" className="btn btn-primary hero-btn">
                📄 ডকুমেন্ট দেখুন
              </Link>
              <Link href="/history" className="btn btn-outline hero-btn">
                🕰️ ইতিহাস জানুন
              </Link>
            </div>

            {/* scroll hint */}
            <div className="hero-scroll-hint" style={{ marginTop: '4rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em' }}>
              ↓ নিচে স্ক্রল করুন
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="stats-bar">
        <div className="container">
          <div className="stats-grid">
            {[
              { number: '১৩+', label: 'বছরের ইতিহাস' },
              { number: '৫০০+', label: 'ব্যবসায়ী পরিবার' },
              { number: '২০১৩', label: 'থেকে চলছে' },
            ].map((s) => (
              <div key={s.label} className="stat-item">
                <span className="stat-number">{s.number}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT SECTION ── */}
      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <div className="about-grid">
            {/* text উপরে (mobile এ) */}
            <div>
              <span className="badge badge-green" style={{ marginBottom: '1rem', display: 'inline-block' }}>বাজার সম্পর্কে</span>
              <h2 className="section-title">পান বাজার পরিচিতি</h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.9, marginBottom: '1rem', fontFamily: 'Noto Serif Bengali, serif', fontSize: '0.97rem' }}>
              পান বাজারটি গাইবান্ধা জেলার পলাশবাড়ী পৌর সভার একটি গুরুত্বপূর্ণ এলাকায় অবস্থিত। বাজারটি মূল সড়কের পাশে হওয়ায় যোগাযোগ অত্যন্ত সুবিধাজনক।  পরিষ্কার-পরিচ্ছন্নতা এবং নিরাপত্তার বিষয়ে কড়া নজর রাখা হয়। 
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.9, marginBottom: '1rem', fontFamily: 'Noto Serif Bengali, serif', fontSize: '0.97rem' }}>
              আশেপাশের কয়েকটি উপজেলা থেকে প্রতিদিন ব্যবসায়ী ও ক্রেতারা এখানে আসেন। বাজারের পরিবেশ সুশৃঙ্খল এবং স্থানীয় সমবায় সমিতির অধীনে পরিচালিত হয়।বাজারে প্রতিদিন গড়ে ৫০০ থেকে ৮০০ জন ক্রেতা আসেন । 
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.9, marginBottom: '1.5rem', fontFamily: 'Noto Serif Bengali, serif', fontSize: '0.97rem' }}>
              বাজারটি স্থানীয় কৃষকদের জন্য বিশেষভাবে গুরুত্বপূর্ণ। তারা সরাসরি তাদের পান পাতাসহ আরও মাছ, মাংস এবং শাক সবজি ইত্যাদি  এখানে বিক্রি করতে আসেন , ফলে মধ্যস্বত্বভোগীদের দৌরাত্ম্য কমেছে এবং ন্যায্যমূল্য নিশ্চিত হচ্ছে।
              </p>
              <Link href="/history" className="btn btn-green-outline">
                আরও জানুন →
              </Link>
            </div>
            {/* image নিচে (mobile এ) */}
            <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-hover)' }}>
              <Image src="/images/bazar_img.jpg" alt="পান বাজারের দৃশ্য" width={600} height={450} style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURE CARDS ── */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="section-title">কী কী পাবেন এই ওয়েবসাইটে</h2>
            <p className="section-subtitle">সকল তথ্য এক জায়গায়, স্বচ্ছভাবে</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              {
                icon: '🕰️',
                title: 'বাজারের ইতিহাস',
                desc: '২০১৩ সাল থেকে বর্তমান পর্যন্ত বাজারের যাত্রা, পরিবর্তন এবং অর্জনের বিস্তারিত বিবরণ। আগে কার কাছে ছিল, কিভাবে পরিচালিত হতো সব জানুন।',
                link: '/history',
                linkText: 'ইতিহাস দেখুন',
              },
              {
                icon: '📄',
                title: 'লিজ সংক্রান্ত নথি দেখুন',
                desc: 'লিজ সংক্রান্ত চুক্তিপত্র,অনুমোদনপত্রসহ সকল প্রয়োজনীয় দলিল এখানে সংরক্ষিত ও ডাউনলোডযোগ্য।',
                link: '/documents',
                linkText: 'নথি দেখুন',
              },
              {
                icon: '🏪',
                title: 'বর্তমান ব্যবস্থাপনা',
                desc: 'বর্তমানে বাজারটি বাজার পরিচালনা কমিটির সভাপতি কর্তৃক পরিচালিত হচ্ছে এবং প্রতি বছর নিয়ম অনুযায়ী লিজ নবায়ন করা হয়।',
                link: '/history',
                linkText: 'বিস্তারিত দেখুন',
              },
            ].map((card, i) => (
              <div key={i} className="card" style={{ padding: '2rem' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{card.icon}</div>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--primary)', fontWeight: 700, marginBottom: '0.75rem', fontFamily: 'Noto Serif Bengali, serif' }}>
                  {card.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.8, marginBottom: '1.5rem', fontFamily: 'Noto Serif Bengali, serif' }}>
                  {card.desc}
                </p>
                <Link href={card.link} className="btn btn-green-outline" style={{ fontSize: '0.88rem', padding: '0.6rem 1.25rem' }}>
                  {card.linkText} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 className="section-title">বাজারের ছবি</h2>
            <p className="section-subtitle">আমাদের বাজারের দৈনন্দিন জীবনের কিছু মুহূর্ত</p>
          </div>
          <div className="gallery-grid">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="gallery-item" onClick={() => openLightbox(idx)}>
                <Image src={img.src} alt={img.alt} width={400} height={400} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div className="gallery-overlay">
                  <span style={{ color: '#fff', fontSize: '2rem' }}>🔍</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── TRUST STRIP ── */}
      <div className="trust-strip">
        <div className="container">
          <div className="trust-strip-inner">
            {['✅ অনুমোদিত বাজার', '📄 সকল নথি প্রকাশিত', '🔒 তথ্য আইনিভাবে সুরক্ষিত', '⚖️ বিরোধ নিষ্পত্তিযোগ্য'].map((item) => (
              <div key={item} className="trust-item">{item}</div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <div className={`lightbox ${lightboxOpen ? 'open' : ''}`} onClick={closeLightbox}>
        <button className="lightbox-close" onClick={closeLightbox}>✕</button>
        <button className="lightbox-prev" onClick={(e) => { e.stopPropagation(); prevImg(); }}>‹</button>
        {lightboxOpen && (
          <Image
            src={galleryImages[lightboxIdx].src}
            alt={galleryImages[lightboxIdx].alt}
            width={900}
            height={700}
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '90vw', maxHeight: '85vh', objectFit: 'contain', borderRadius: '12px' }}
          />
        )}
        <button className="lightbox-next" onClick={(e) => { e.stopPropagation(); nextImg(); }}>›</button>
      </div>
    </>
  );
}

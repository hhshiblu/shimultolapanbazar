import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'পান বাজারের ইতিহাস | Pan Bazar Official',
  description: '২০১৩ সাল থেকে বর্তমান পর্যন্ত পান বাজারের যাত্রা, পরিবর্তন, আগের ইজারাধারী ও বর্তমান ব্যবস্থাপনার বিস্তারিত।',
};

import { prevLeaseholders } from './demo_data';


export default function HistoryPage() {
  return (
    <>
      {/* Page Hero */}
      <div className="page-hero">
        <div className="container">
      
          <h1>🕰️ পান বাজারের ইতিহাস</h1>
          <p>২০১৩ সাল থেকে বর্তমান পর্যন্ত এই বাজারের যাত্রা, পরিবর্তন এবং অর্জনের বিস্তারিত বিবরণ।</p>
        </div>
      </div>

      {/* ══ SECTION A — ভূমিকা ══ */}
      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-hover)', position: 'relative', aspectRatio: '16 / 10', maxHeight: '420px' }}>
            <Image src="/images/bazar.png" alt="পান বাজারের ঐতিহাসিক দৃশ্য"  fill style={{objectFit: 'cover'  }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(11,61,46,0.75) 0%, transparent 60%)' }} />
            <div className='md:block hidden' style={{ position: 'absolute', top: '60%', left: '2.5rem', transform: 'translateY(-50%)', maxWidth: '420px' }}>
              <h2 style={{ color: '#fff', fontFamily: 'Noto Serif Bengali, serif', fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 700, marginBottom: '0.75rem' }}>
                একটি বাজারের গল্প, একটি সমাজের গল্প
              </h2>
              <p
               className='shadow-xl '
               style={{
               color: 'rgba(255, 255, 255, 0.82)',
               fontSize: '0.95rem',
               lineHeight: 1.7,
                fontFamily: 'Noto Serif Bengali, serif',
                textShadow: `
                0 1px 2px rgba(0,0,0,0.6),
                 0 4px 10px rgba(0,0,0,0.4)
                `
                
                 }}
                  >
               পান বাজার শুধু একটি বাণিজ্যিক স্থান নয়— এটি আমাদের অঞ্চলের সামাজিক ও অর্থনৈতিক জীবনের একটি অবিচ্ছেদ্য অংশ।
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION B — অবস্থান ও পরিবেশ ══ */}
      <section style={{ background: 'var(--bg)', padding: '1rem 0', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="hist-section">
            <div>
              <Image src="/images/bazar1.jpg" alt="পান বাজারের অবস্থান" width={600} height={450} style={{ width: '100%', borderRadius: '12px', boxShadow: 'var(--shadow)', objectFit: 'cover', aspectRatio: '4/3' }} />
            </div>
            <div>
              <span className="badge badge-green" style={{ marginBottom: '0.25rem', display: 'inline-block' }}>অবস্থান</span>
              <h2>বাজারের অবস্থান ও পরিবেশ</h2>
              <p className="hist-subtitle">"কোথায় আছে এই বাজার"</p>
              <p>পান বাজারটি গাইবান্ধা জেলার পলাশবাড়ী পৌর সভার একটি গুরুত্বপূর্ণ এলাকায় অবস্থিত। বাজারটি মূল সড়কের পাশে হওয়ায় যোগাযোগ অত্যন্ত সুবিধাজনক।  পরিষ্কার-পরিচ্ছন্নতা এবং নিরাপত্তার বিষয়ে কড়া নজর রাখা হয়। </p>
              <p>আশেপাশের কয়েকটি উপজেলা থেকে প্রতিদিন ব্যবসায়ী ও ক্রেতারা এখানে আসেন। বাজারের পরিবেশ সুশৃঙ্খল এবং স্থানীয় সমবায় সমিতির অধীনে পরিচালিত হয়।</p>
              <p>বাজারটি স্থানীয় কৃষকদের জন্য বিশেষভাবে গুরুত্বপূর্ণ। তারা সরাসরি তাদের পান পাতাসহ আরও মাছ, মাংস এবং শাক সবজি ইত্যাদি  এখানে বিক্রি করতে আসেন , ফলে মধ্যস্বত্বভোগীদের দৌরাত্ম্য কমেছে এবং ন্যায্যমূল্য নিশ্চিত হচ্ছে।</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION C — প্রতিষ্ঠার ইতিহাস ══ */}
      <section style={{ background: 'var(--surface)', padding: '1rem 0', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="hist-section reverse">
            <div>
              <Image src="/images/hist-old-market.png" alt="বাজার প্রতিষ্ঠার ইতিহাস" width={600} height={450} style={{ width: '100%', borderRadius: '12px', boxShadow: 'var(--shadow)', objectFit: 'cover', aspectRatio: '4/3' }} />
            </div>
            <div>
              <span className="badge badge-amber" style={{ marginBottom: '0.25rem', display: 'inline-block' }}>১৯৮৫</span>
              <h2>প্রতিষ্ঠার ইতিহাস</h2>
              <p className="hist-subtitle">"২০১৩ সালে একটি স্বপ্নের শুরু"</p>
              <p>২০১৩ সালে স্থানীয় কয়েকজন উদ্যোক্তার অদম্য ইচ্ছা ও পরিশ্রমের ফলে পান বাজারের যাত্রা শুরু হয়। সে সময় মাত্র ৫টি ছোট দোকান নিয়ে যাত্রা শুরু হলেও ধীরে ধীরে এই সংখ্যা বৃদ্ধি পেয়ে আজ ৭০+ ছাড়িয়েছে।</p>
              <p>প্রতিষ্ঠার প্রথম দিকে বাজারটি অনানুষ্ঠানিকভাবে পরিচালিত হতো। ২০১৮ সালে ফ্যাসিস্ট আওয়ামিলীগের দোষর, গোলাম সরোয়ার বিপ্লব (মেয়র),  উদ্যোক্তাদের কাছ থেকে বাজারটি ছিনিয়ে নেয়। ২০২৪ইং এর জুলাই অভ্যুত্থানে বাজারটি বৈষম্য বিরোধী ছাত্র আন্দোলনের দায়িত্বশীলদের মাধ্যমে  আবারও উদ্যোক্তাদের হাতে হস্তান্তর করেন। উদ্যোক্তাগন ২০২৫ইং সালে একটি সমবায় সমিতি গঠন করেন। সমিতির নাম দেওয়া হয় পলাশবাড়ী কৃষি পণ্য উৎপাদনকারী সমবায় সমিতি লিঃ। উক্ত সমবায় সমিতির সভাপতি হিসেবে দায়িত্ব পালন করছেন, বাংলাদেশ শ্রমিক কল্যাণ ফেডারেশনের  গাইবান্ধা জেলা,সহ-সভাপতি  ও পলাশবাড়ী উপজেলা সভাপতি, জনাব মোঃ খাইরুল ইসলাম (চাঁন)</p>
              <p>সমবায় সমিতির  আওতায় আসার পর থেকে বাজারটি একটি সুশৃঙ্খল প্রাতিষ্ঠানিক রূপ পায়। প্রতিষ্ঠাতাদের স্বপ্ন ছিল এমন একটি বাজার গড়া, যেখানে সবাই ন্যায্যমূল্যে পণ্য কিনতে পারবেন এবং ব্যবসায়ীরাও সম্মানজনক জীবনযাপন করতে পারবেন। সেই স্বপ্ন আজ বাস্তব।</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION D — ইজারা ব্যবস্থার বিবর্তন (আগের ইজারাধারী) ══ */}
      <section style={{ background: 'var(--bg)', padding: '1rem 0', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '0.25rem' }}>
            <h2 className="section-title">ইজারা ব্যবস্থার বিবর্তন</h2>
            <p className="hist-subtitle">"আগে কার কাছে ছিল — কিভাবে পরিচালিত হতো"</p>
            <p style={{ color: 'var(--text-muted)', maxWidth: '650px', margin: '0 auto', lineHeight: 1.8, fontFamily: 'Noto Serif Bengali, serif', fontSize: '0.97rem' }}>
              প্রতিটি যুগেই বাজারটি সরকারি নির্দেশনা মেনে পরিচালিত হয়েছে। ইজারা হস্তান্তর সর্বদাই আইনের মাধ্যমে এবং স্বচ্ছ প্রক্রিয়ায় সম্পন্ন হয়েছে।
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '0.25rem' }}>
            {prevLeaseholders.map((lh, i) => (
              <div key={i} className="leaseholder-card">
                <div className="leaseholder-avatar">👤</div>
                <h3 style={{ fontFamily: 'Noto Serif Bengali, serif', color: 'var(--primary)', marginBottom: '0.35rem', fontSize: '1.05rem' }}>{lh.name}</h3>
                <span className="badge badge-amber" style={{ marginBottom: '0.5rem', display: 'inline-block' }}>{lh.period}</span>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>{lh.note}</p>
              </div>
            ))}
          </div>

          <div style={{ background: 'var(--surface)', borderRadius: '12px', padding: '2rem', border: '2px solid var(--accent)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <div className="leaseholder-avatar" style={{ flexShrink: 0 }}>👤</div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.35rem' }}>
                  <h3 style={{ fontFamily: 'Noto Serif Bengali, serif', color: 'var(--primary)', fontSize: '1.1rem' }}>মো. খাইরুল ইসলাম চাঁন-</h3>
                  <span className="badge badge-green">বর্তমান</span>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>২০২5 – বর্তমান | বর্তমান ইজারাধারী ও পরিচালক</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION E — আর্থ-সামাজিক প্রভাব ══ */}
      <section style={{ background: 'var(--surface)', padding: '1rem 0', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="hist-section">
            <div>
              <Image src="/images/bazar2.jpg" alt="সম্প্রদায়ের উপর প্রভাব" width={600} height={450} style={{ width: '100%', borderRadius: '12px', boxShadow: 'var(--shadow)', objectFit: 'cover', aspectRatio: '4/3' }} />
            </div>
            <div>
              <span className="badge badge-green" style={{ marginBottom: '0.25rem', display: 'inline-block' }}>সমাজ</span>
              <h2>আর্থ-সামাজিক প্রভাব</h2>
              <p className="hist-subtitle">"এই বাজার যেভাবে মানুষের জীবন বদলেছে"</p>
              <p>পান বাজার শুধু একটি ব্যবসার জায়গা নয়— এটি হাজারো পরিবারের জীবিকার উৎস। বর্তমানে এই বাজার থেকে প্রত্যক্ষ ও পরোক্ষভাবে প্রায় ২,০০০ পরিবার উপকৃত হচ্ছে।</p>
              <p>বাজারটি স্থানীয় অর্থনীতিতে বার্ষিক কোটি টাকারও বেশি অবদান রাখছে। এছাড়া স্থানীয় কৃষকরা সরাসরি তাদের পান পাতা এখানে বিক্রি করতে পারেন, ফলে মধ্যস্বত্বভোগীদের দৌরাত্ম্য কমেছে।</p>
              <p>বাজারের আয়ের একটি অংশ স্থানীয় উন্নয়নমূলক কাজে ব্যয় করা হয়। রাস্তা সংস্কার, স্কুলে অনুদান এবং দরিদ্র ব্যবসায়ীদের সহায়তায় বাজার কমিটি নিয়মিত অবদান রাখে।</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1.25rem' }}>
                {[['২,০০০+', 'পরিবার উপকৃত'], ['100+', 'সক্রিয় ব্যবসায়ী'], ['13+', 'বছরের ইতিহাস'], ['50 লক্ষ+', 'বার্ষিক অবদান']].map(([num, label]) => (
                  <div key={label} style={{ background: 'var(--bg)', borderRadius: '8px', padding: '1rem', textAlign: 'center', border: '1px solid var(--border)' }}>
                    <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--primary)', fontFamily: 'Noto Serif Bengali, serif' }}>{num}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION F — ডিজিটাল যুগ ══ */}
      {/* <section style={{ background: 'var(--bg)', padding: '4rem 0', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="hist-section reverse">
            <div>
              <Image src="/images/hist-digital.png" alt="ডিজিটাল রেকর্ড" width={600} height={450} style={{ width: '100%', borderRadius: '12px', boxShadow: 'var(--shadow)', objectFit: 'cover', aspectRatio: '4/3' }} />
            </div>
            <div>
              <span className="badge badge-amber" style={{ marginBottom: '0.75rem', display: 'inline-block' }}>২০২২</span>
              <h2>ডিজিটাল যুগে বাজার</h2>
              <p className="hist-subtitle">"স্বচ্ছতার নতুন দিগন্ত"</p>
              <p>২০২২ সালে সরকারের ডিজিটাল বাংলাদেশ উদ্যোগের অংশ হিসেবে বাজারের সকল নথিপত্র ডিজিটাল পদ্ধতিতে সংরক্ষণ শুরু হয়। এই ওয়েবসাইটটি সেই স্বচ্ছতার প্রকল্পেরই একটি অংশ।</p>
              <p>আজ থেকে বাজারের যেকোনো তথ্য যেকোনো মানুষ ঘরে বসেই দেখতে পারবেন। কোনো বিভ্রান্তি বা মিথ্যা তথ্যের সুযোগ নেই। সকল নথি অনলাইনে সংরক্ষিত এবং যাচাইযোগ্য।</p>
              <p>এই ডিজিটাল উদ্যোগটি ভবিষ্যতে বাজারের ব্যবস্থাপনাকে আরও সহজ ও স্বচ্ছ করবে। লেনদেনের ইতিহাস, নথিপত্র, নোটিশ সব একটি প্ল্যাটফর্মে পাওয়া যাবে।</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* ══ SECTION G — বর্তমান ব্যবস্থাপনা ══ */}
      <section style={{ background: 'var(--surface)', padding: '1rem 0', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="hist-section">
          <div>
              <span className="badge badge-green" style={{ marginBottom: '0.25rem', display: 'inline-block' }}>বর্তমান</span>
              <h2>বর্তমান ব্যবস্থাপনা</h2>
              <p className="hist-subtitle">"আজকের পান বাজার — কিভাবে চলছে"</p>
              <p>বর্তমানে বাজারটি মো. খাইরুল ইসলাম চাঁন-এর নেতৃত্বে সৎ ও দক্ষ সদস্যগনের মাধ্যমে  পরিচালিত হচ্ছে। ২০২৫ সাল থেকে তিনি সফলভাবে বাজারটি পরিচালনা করে আসছেন, এবং  সমবায় সমিতির সকল নিয়মকানুন মেনে পরিচালিত হচ্ছে। </p>
              <p>বর্তমান ব্যবস্থাপনায় বিশেষ মনোযোগ দেওয়া হচ্ছে বাজারের পরিষ্কার-পরিচ্ছন্নতা, ব্যবসায়ীদের নিরাপত্তা এবং ক্রেতাদের সন্তুষ্টির দিকে।</p>
              <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-muted)', lineHeight: 2, fontSize: '0.94rem' }}>
                <li>নিয়মিত পরিষ্কার-পরিচ্ছন্নতা কার্যক্রম</li>
                <li>ব্যবসায়ীদের নিরাপত্তা নিশ্চিত করা</li>
                <li>মাসিক কমিটি মিটিং আয়োজন</li>
                <li>অভিযোগ নিষ্পত্তির সুষ্ঠু ব্যবস্থা</li>
              </ul>
            </div>
            <div>
              <Image src="/images/bazar3.jpg" alt="বর্তমান পান বাজার" width={600} height={450} style={{ width: '100%', borderRadius: '12px', boxShadow: 'var(--shadow)', objectFit: 'cover', aspectRatio: '4/3' }} />
            </div>
     
          </div>
        </div>
      </section>
    </>
  );
}

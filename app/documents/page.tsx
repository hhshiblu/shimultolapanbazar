import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'সরকারি নথি ও প্রমাণাদি | পান বাজার অফিশিয়াল',
  description: 'পান বাজারের সকল সরকারি নথি — ইজারা চুক্তিপত্র, খাজনা পরিশোধের প্রমাণ ও সরকারি অনুমোদনপত্র।',
};

function SummaryBox({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="summary-box">
      <h4>{title}</h4>
      <ul style={{ paddingLeft: '1rem' }}>
        {items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </div>
  );
}

function PdfViewer({ label }: { label: string }) {
  return (
    <div className="pdf-wrapper">
      <div className="pdf-watermark">Official Copy</div>
      <div style={{
        height: '280px',
        background: 'linear-gradient(135deg, #f8fafc, #e2e8f0)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.75rem',
      }}>
        <div style={{ fontSize: '3.5rem' }}>📄</div>
        <div style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '0.95rem', fontFamily: 'Noto Serif Bengali, serif' }}>
          {label}
        </div>
        <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Demo PDF Preview</div>
        <span className="badge badge-green">Public Copy</span>
      </div>
    </div>
  );
}

export default function DocumentsPage() {
  return (
    <>
      {/* Page Hero */}
      <div className="page-hero">
        <div className="container">
          <span className="badge badge-green" style={{ marginBottom: '1rem', display: 'inline-block' }}>সরকারি দলিল</span>
          <h1>সরকারি নথি ও প্রমাণাদি</h1>
          <p>এই পেজে বাজারের সকল আইনি দলিল ও সরকারি অনুমোদনপত্র জনসাধারণের জন্য উন্মুক্তভাবে সংরক্ষিত আছে।</p>
        </div>
      </div>

      {/* ════════════════════════════════════════
          DOCUMENT 1 — ইজারা চুক্তিপত্র
      ════════════════════════════════════════ */}
      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <div style={{ borderBottom: '3px solid var(--accent)', paddingBottom: '0.5rem', marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--primary)', fontWeight: 800, fontFamily: 'Noto Serif Bengali, serif' }}>
              ১. ইজারা চুক্তিপত্র
            </h2>
            <span className="badge badge-green">Public Copy</span>
          </div>

          {/* Sub 1.1 — পটভূমি */}
          <div className="zigzag-section">
            <div className="zigzag-content">
              <div className="doc-subsection">
                <h3>চুক্তির পটভূমি</h3>
                <p className="subsection-subtitle">"কেন এই চুক্তি করা হয়েছিল"</p>
                <p>ইজারা চুক্তিটি বাংলাদেশ সরকারের ভূমি মন্ত্রণালয়ের নির্দেশিকা অনুযায়ী প্রস্তুত করা হয়েছে। ২০২০ সালের জানুয়ারি মাসে জেলা প্রশাসকের কার্যালয় থেকে আনুষ্ঠানিকভাবে চুক্তি সম্পাদিত হয়। এই চুক্তির মাধ্যমে ইজারাদার নির্দিষ্ট শর্তে বাজারটি পরিচালনার অধিকার লাভ করেন।</p>
                <p>সরকারি কোষাগারে নিয়মিত রাজস্ব প্রদানে বাধ্য থাকার শর্তে এই চুক্তি সম্পাদিত হয়। চুক্তিটি বাংলাদেশের ১৮৮২ সালের সম্পত্তি হস্তান্তর আইন ও ১৯৮৪ সালের ভূমি সংস্কার অধ্যাদেশ অনুযায়ী প্রণীত।</p>
                <SummaryBox title="সংক্ষেপে" items={['চুক্তির ধরন: সরকারি ইজারা', 'অনুমোদনকারী: জেলা প্রশাসক, চট্টগ্রাম', 'আইনি ভিত্তি: ভূমি সংস্কার অধ্যাদেশ ১৯৮৪']} />
              </div>
            </div>
            <div>
              <Image src="/images/doc-lease.png" alt="ইজারা চুক্তিপত্র" width={600} height={450} className="zigzag-image" />
            </div>
          </div>

          {/* Sub 1.2 — মেয়াদ */}
          <div className="zigzag-section reverse">
            <div className="zigzag-content">
              <div className="doc-subsection">
                <h3>চুক্তির মেয়াদ ও নবায়ন প্রক্রিয়া</h3>
                <p className="subsection-subtitle">"কতদিনের জন্য, কিভাবে নবায়ন হয়"</p>
                <p>এই চুক্তিটি ৫ বছর মেয়াদী। প্রতি অর্থবছর শেষে সরকারি মূল্যায়নের ভিত্তিতে চুক্তি নবায়ন করা হয়। নবায়নের ক্ষেত্রে প্রচলিত সরকারি হার অনুযায়ী ইজারামূল্য নির্ধারিত হয়।</p>
                <p>ইজারাদারের অতীত রেকর্ড, নিয়মিত খাজনা পরিশোধের প্রমাণ এবং বাজার ব্যবস্থাপনার মান বিবেচনা করে নবায়নের সিদ্ধান্ত নেওয়া হয়। সময়মতো নবায়ন না হলে চুক্তি স্বয়ংক্রিয়ভাবে বাতিল বলে গণ্য হবে।</p>
                <SummaryBox title="সংক্ষেপে" items={['মেয়াদ: ২০২০ – ২০২৫ (৫ বছর)', 'নবায়নের তারিখ: প্রতি জানুয়ারি', 'শেষ নবায়ন: জানুয়ারি ২০২৪']} />
              </div>
            </div>
            <div>
              <Image src="/images/gallery-8.png" alt="নবায়ন প্রক্রিয়া" width={600} height={450} className="zigzag-image" />
            </div>
          </div>

          {/* Sub 1.3 — দায়িত্ব */}
          <div className="zigzag-section">
            <div className="zigzag-content">
              <div className="doc-subsection">
                <h3>ইজারাদারের দায়িত্ব ও শর্তাবলী</h3>
                <p className="subsection-subtitle">"কী করতে হবে, কী করা যাবে না"</p>
                <p>ইজারাদার নিম্নলিখিত শর্ত পালনে বাধ্য থাকবেন। এই শর্তগুলো সরকারি ভূমি মন্ত্রণালয়ের ম্যানুয়াল অনুযায়ী নির্ধারিত এবং আইনিভাবে বাধ্যকর।</p>
                <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-muted)', lineHeight: 2 }}>
                  <li>নির্ধারিত সময়ে বার্ষিক খাজনা পরিশোধ করতে হবে</li>
                  <li>বাজারের পরিষ্কার-পরিচ্ছন্নতা বজায় রাখতে হবে</li>
                  <li>অননুমোদিত নির্মাণ বা সংস্কার থেকে বিরত থাকতে হবে</li>
                  <li>ব্যবসায়ীদের কাছ থেকে নির্ধারিত হারে মাসিক চাঁদা গ্রহণ করতে হবে</li>
                  <li>প্রশাসনিক অনুমতি ব্যতিরেকে তৃতীয় পক্ষের কাছে হস্তান্তর করা যাবে না</li>
                  <li>মাসিক ভিত্তিতে স্থানীয় প্রশাসনকে রিপোর্ট করতে হবে</li>
                </ul>
              </div>
            </div>
            <div>
              <Image src="/images/gallery-7.png" alt="বাজার ব্যবস্থাপনা" width={600} height={450} className="zigzag-image" />
            </div>
          </div>

          {/* Sub 1.4 — সরকারি তত্ত্বাবধান */}
          <div className="zigzag-section reverse">
            <div className="zigzag-content">
              <div className="doc-subsection">
                <h3>সরকারের অধিকার ও তত্ত্বাবধান</h3>
                <p className="subsection-subtitle">"সরকার কিভাবে নজর রাখে"</p>
                <p>সরকার যেকোনো সময় বাজার পরিদর্শন করতে পারবে। শর্ত লঙ্ঘনের ক্ষেত্রে চুক্তি বাতিলের অধিকার সরকারের রয়েছে। জেলা প্রশাসক কার্যালয় প্রতি ৬ মাস অন্তর পর্যালোচনা করে এবং বার্ষিক প্রতিবেদন তৈরি করে।</p>
                <p>উপজেলা নির্বাহী অফিসার (UNO) প্রতি মাসে একটি পরিদর্শন প্রতিবেদন দাখিল করেন। যেকোনো অনিয়ম বা অভিযোগের ক্ষেত্রে তাৎক্ষণিক ব্যবস্থা নেওয়া হয়।</p>
                <SummaryBox title="সংক্ষেপে" items={['পরিদর্শন: প্রতি ৬ মাসে', 'রিপোর্টিং: DC Office, চট্টগ্রাম', 'UNO পরিদর্শন: প্রতি মাসে']} />
              </div>
            </div>
            <div>
              <Image src="/images/hist-digital.png" alt="সরকারি কার্যালয়" width={600} height={450} className="zigzag-image" />
            </div>
          </div>

          {/* Sub 1.5 — বর্তমান বৈধতা + PDF */}
          <div className="doc-subsection">
            <h3>চুক্তির বর্তমান অবস্থা ও বৈধতা</h3>
            <p className="subsection-subtitle">"আজ পর্যন্ত কার্যকর"</p>
            <p>বর্তমান ইজারা চুক্তিটি সম্পূর্ণ বৈধ এবং কার্যকর। সর্বশেষ নবায়ন হয়েছে জানুয়ারি ২০২৪ সালে। আগামী নবায়নের তারিখ ডিসেম্বর ২০২৫। চুক্তির সকল শর্ত যথাযথভাবে পালিত হচ্ছে।</p>
            <SummaryBox title="বর্তমান স্ট্যাটাস" items={['স্ট্যাটাস: ✅ সক্রিয় ও বৈধ', 'ইজারাদার: মো. আব্দুল হক', 'পরবর্তী নবায়ন: ডিসেম্বর ২০২৫']} />
            <PdfViewer label="ইজারা চুক্তিপত্র — ২০২০–২০২৫" />
            <div className="doc-actions">
              <button className="btn btn-primary">⬇ ডাউনলোড করুন</button>
              <button className="btn btn-green-outline">🔗 পূর্ণস্ক্রিনে দেখুন</button>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          DOCUMENT 2 — খাজনা পরিশোধের প্রমাণ
      ════════════════════════════════════════ */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div style={{ borderBottom: '3px solid var(--accent)', paddingBottom: '0.5rem', marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--primary)', fontWeight: 800, fontFamily: 'Noto Serif Bengali, serif' }}>
              ২. খাজনা পরিশোধের প্রমাণ
            </h2>
            <span className="badge badge-green">Public Copy</span>
          </div>

          {/* Sub 2.1 */}
          <div className="zigzag-section">
            <div className="zigzag-content">
              <div className="doc-subsection">
                <h3>খাজনার ইতিহাস ও বিবর্তন</h3>
                <p className="subsection-subtitle">"কত বছর ধরে খাজনা দেওয়া হচ্ছে"</p>
                <p>বাজেটের সাথে সামঞ্জস্য রেখে প্রতি বছর খাজনার পরিমাণ নির্ধারণ করা হয়। ১৯৯২ সালে প্রথম সরকারি খাজনা নির্ধারণ হয়েছিল মাত্র ৳ ৮,০০০ টাকা। বর্তমানে তা বৃদ্ধি পেয়ে বার্ষিক ৳ ১,২০,০০০ টাকায় উন্নীত হয়েছে।</p>
                <p>এই বৃদ্ধি সরকারের নির্ধারিত হার অনুযায়ী এবং বাজারের আয়ের সাথে সামঞ্জস্যপূর্ণ। প্রতিটি পরিশোধ সময়মতো এবং সরকারি মাধ্যমে করা হয়েছে।</p>
                <SummaryBox title="খাজনার বিবর্তন" items={['১৯৯২: ৳ ৮,০০০', '২০০০: ৳ ২৫,০০০', '২০১০: ৳ ৬০,০০০', '২০২৪: ৳ ১,২০,০০০']} />
              </div>
            </div>
            <div>
              <Image src="/images/doc-payment.png" alt="খাজনা পরিশোধের রশিদ" width={600} height={450} className="zigzag-image" />
            </div>
          </div>

          {/* Sub 2.2 */}
          <div className="zigzag-section reverse">
            <div className="zigzag-content">
              <div className="doc-subsection">
                <h3>পরিশোধের পদ্ধতি ও মাধ্যম</h3>
                <p className="subsection-subtitle">"কিভাবে এবং কোথায় খাজনা জমা দেওয়া হয়"</p>
                <p>সকল খাজনা সোনালী ব্যাংক লিমিটেড-এর মাধ্যমে সরকারি ট্রেজারিতে জমা দেওয়া হয়। পরিশোধের পর সরকারি ট্রেজারি রশিদ (TR Form 6) সংগ্রহ করা হয় এবং তা যথাযথভাবে সংরক্ষণ করা হয়।</p>
                <p>অনলাইন ব্যাংকিং ও চালান নম্বরের মাধ্যমে যেকোনো সময় জমার তথ্য যাচাই করা সম্ভব। স্বচ্ছতার জন্য সকল রশিদ এই ওয়েবসাইটে প্রকাশ করা হয়েছে।</p>
                <SummaryBox title="পরিশোধের তথ্য" items={['ব্যাংক: সোনালী ব্যাংক লিমিটেড', 'মাধ্যম: ট্রেজারি চালান (TR-6)', 'যাচাই: অনলাইনে সম্ভব']} />
              </div>
            </div>
            <div>
              <Image src="/images/gallery-5.png" alt="বাজারের লেনদেন" width={600} height={450} className="zigzag-image" />
            </div>
          </div>

          {/* Sub 2.3 */}
          <div className="zigzag-section">
            <div className="zigzag-content">
              <div className="doc-subsection">
                <h3>বার্ষিক খাজনার বিস্তারিত হিসাব (২০২০–২০২৪)</h3>
                <p className="subsection-subtitle">"প্রতি বছর কত টাকা জমা দেওয়া হয়েছে"</p>
                <p>নিচে বিগত ৪ বছরের খাজনা পরিশোধের সম্পূর্ণ বিবরণ দেওয়া হলো। প্রতিটি পরিশোধের চালান নম্বর ও তারিখ সংযুক্ত PDF-এ পাওয়া যাবে।</p>
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                    <thead>
                      <tr style={{ background: 'var(--primary)', color: '#fff' }}>
                        {['অর্থবছর', 'পরিমাণ', 'তারিখ', 'চালান নং'].map(h => (
                          <th key={h} style={{ padding: '0.65rem 1rem', textAlign: 'left', fontFamily: 'Noto Serif Bengali, serif' }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['২০২০–২১', '৳ ৯০,০০০', '১৫/০১/২০২১', 'CHN-20210115'],
                        ['২০২১–২২', '৳ ১,০০,০০০', '১০/০১/২০২২', 'CHN-20220110'],
                        ['২০২২–২৩', '৳ ১,১০,০০০', '০৮/০১/২০২৩', 'CHN-20230108'],
                        ['২০২৩–২৪', '৳ ১,২০,০০০', '১০/০১/২০২৪', 'CHN-20240110'],
                      ].map((row, i) => (
                        <tr key={i} style={{ borderBottom: '1px solid var(--border)', background: i % 2 ? '#f9fafb' : '#fff' }}>
                          {row.map((cell, j) => (
                            <td key={j} style={{ padding: '0.65rem 1rem', fontFamily: 'Noto Serif Bengali, serif', color: j === 1 ? 'var(--primary)' : 'var(--text-muted)', fontWeight: j === 1 ? 700 : 400 }}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div>
              <Image src="/images/hist-community.png" alt="বাজার পরিচালনা" width={600} height={450} className="zigzag-image" />
            </div>
          </div>

          {/* Sub 2.4 — PDF */}
          <div className="doc-subsection">
            <h3>রশিদ ও প্রমাণপত্রের সংকলন</h3>
            <p>প্রতিটি পরিশোধের বিপরীতে সরকারি ট্রেজারি রশিদ (TR) সংগ্রহ করা হয়েছে। রশিদের নম্বর, তারিখ ও পরিমাণ নিচের PDF দলিলে স্পষ্টভাবে উল্লেখ আছে এবং যেকোনো সময় যাচাই করা যাবে।</p>
            <SummaryBox title="সর্বশেষ পরিশোধ" items={['পরিমাণ: ৳ ১,২০,০০০', 'তারিখ: ১০ জানুয়ারি ২০২৪', 'ব্যাংক: সোনালী ব্যাংক, মতিঝিল শাখা']} />
            <PdfViewer label="খাজনা পরিশোধের সংকলন — ২০২০–২০২৪" />
            <div className="doc-actions">
              <button className="btn btn-primary">⬇ ডাউনলোড করুন</button>
              <button className="btn btn-green-outline">🔗 পূর্ণস্ক্রিনে দেখুন</button>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          DOCUMENT 3 — সরকারি অনুমোদন
      ════════════════════════════════════════ */}
      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <div style={{ borderBottom: '3px solid var(--accent)', paddingBottom: '0.5rem', marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--primary)', fontWeight: 800, fontFamily: 'Noto Serif Bengali, serif' }}>
              ৩. সরকারি অনুমোদনপত্র
            </h2>
            <span className="badge badge-green">Public Copy</span>
          </div>

          {/* Sub 3.1 */}
          <div className="zigzag-section">
            <div className="zigzag-content">
              <div className="doc-subsection">
                <h3>অনুমোদনের প্রক্রিয়া</h3>
                <p className="subsection-subtitle">"কিভাবে সরকারি অনুমোদন পাওয়া গেল"</p>
                <p>সরকারি অনুমোদন লাভের জন্য একটি নির্ধারিত প্রক্রিয়া অনুসরণ করা হয়েছে। প্রথমে স্থানীয় ইউনিয়ন পরিষদ থেকে প্রাথমিক অনুমতি নেওয়া হয়, এরপর উপজেলা নির্বাহী অফিসার (UNO) -এর প্রতিবেদন সংযুক্ত করে জেলা প্রশাসক বরাবর আবেদন করা হয়।</p>
                <p>আবেদনের সাথে বাজারের জমির দলিল, মালিকানার প্রমাণ, আগের ইজারা চুক্তি ও প্রস্তাবিত পরিচালনা পরিকল্পনা জমা দেওয়া হয়। সমস্ত নথি যাচাই করে জেলা প্রশাসক অনুমোদনপত্র ইস্যু করেন।</p>
                <SummaryBox title="অনুমোদন প্রক্রিয়া" items={['ধাপ ১: ইউপি অনুমতি', 'ধাপ ২: UNO প্রতিবেদন', 'ধাপ ৩: DC Office অনুমোদন']} />
              </div>
            </div>
            <div>
              <Image src="/images/doc-govt.png" alt="সরকারি অনুমোদনপত্র" width={600} height={450} className="zigzag-image" />
            </div>
          </div>

          {/* Sub 3.2 */}
          <div className="zigzag-section reverse">
            <div className="zigzag-content">
              <div className="doc-subsection">
                <h3>অনুমোদনকারী কর্তৃপক্ষ</h3>
                <p className="subsection-subtitle">"কে অনুমোদন দিয়েছেন"</p>
                <p>এই অনুমোদনপত্রটি জেলা প্রশাসক, চট্টগ্রাম-এর কার্যালয় থেকে প্রদান করা হয়েছে। স্বাক্ষরিত হয়েছে অতিরিক্ত জেলা প্রশাসক (রাজস্ব) কর্তৃক। অনুমোদনটি বাংলাদেশ সরকারের ভূমি ব্যবস্থাপনা ম্যানুয়াল ২০১০ অনুযায়ী প্রদত্ত।</p>
                <p>অনুমোদনপত্রে সরকারি সিল, স্বাক্ষর এবং রেফারেন্স নম্বর রয়েছে যা সরকারি পোর্টালে যাচাই করা সম্ভব।</p>
                <SummaryBox title="কর্তৃপক্ষের বিবরণ" items={['কর্তৃপক্ষ: জেলা প্রশাসকের কার্যালয়', 'স্বাক্ষরকারী: অতিরিক্ত জেলা প্রশাসক (রাজস্ব)', 'রেফারেন্স: DC/REV/2024/445']} />
              </div>
            </div>
            <div>
              <Image src="/images/hist-digital.png" alt="সরকারি কার্যালয়" width={600} height={450} className="zigzag-image" />
            </div>
          </div>

          {/* Sub 3.3 */}
          <div className="zigzag-section">
            <div className="zigzag-content">
              <div className="doc-subsection">
                <h3>অনুমোদনের শর্ত ও সীমাবদ্ধতা</h3>
                <p className="subsection-subtitle">"কী কী মানতে হবে"</p>
                <p>অনুমোদনটি নিম্নলিখিত শর্তে প্রদত্ত। এই শর্তগুলো পালন না করলে অনুমোদন বাতিল হতে পারে এবং আইনি ব্যবস্থা নেওয়া হতে পারে।</p>
                <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-muted)', lineHeight: 2 }}>
                  <li>বাজারে অবৈধ কার্যক্রম পরিচালনা করা যাবে না</li>
                  <li>পরিবেশ সংরক্ষণ আইন ২০০০ মান্য করতে হবে</li>
                  <li>মাসিক ভিত্তিতে স্থানীয় প্রশাসনকে রিপোর্ট করতে হবে</li>
                  <li>যেকোনো অবকাঠামো পরিবর্তনে পূর্বানুমোদন নিতে হবে</li>
                  <li>বাজারের ভেতরে বিজ্ঞাপন প্রদর্শনে প্রশাসনের অনুমতি লাগবে</li>
                </ul>
              </div>
            </div>
            <div>
              <Image src="/images/gallery-7.png" alt="বাজার নিয়মকানুন" width={600} height={450} className="zigzag-image" />
            </div>
          </div>

          {/* Sub 3.4 */}
          <div className="zigzag-section reverse">
            <div className="zigzag-content">
              <div className="doc-subsection">
                <h3>আইনি বৈধতা ও আদালতের স্বীকৃতি</h3>
                <p className="subsection-subtitle">"এই নথি আদালতে গ্রহণযোগ্য"</p>
                <p>এই অনুমোদনপত্র বাংলাদেশের প্রচলিত আইনে সম্পূর্ণ বৈধ। যেকোনো বিরোধের ক্ষেত্রে এই দলিলটি আদালতে প্রমাণ হিসেবে উপস্থাপন করা যাবে। দলিলটি যথাযথ কর্তৃপক্ষ কর্তৃক সত্যায়িত এবং নোটারি পাবলিক কর্তৃক প্রত্যয়িত।</p>
                <p>বাংলাদেশ সাক্ষ্য আইন ১৮৭২ এর ধারা ৭৪ অনুযায়ী এই দলিল সার্বজনীন দলিল হিসেবে গণ্য এবং এটি প্রমাণ করার জন্য অতিরিক্ত সাক্ষ্যের প্রয়োজন নেই।</p>
                <SummaryBox title="আইনি স্বীকৃতি" items={['আইনি ভিত্তি: সাক্ষ্য আইন ১৮৭২, ধারা ৭৪', 'ধরন: সার্বজনীন দলিল', 'প্রত্যয়ন: নোটারি পাবলিক কর্তৃক']} />
              </div>
            </div>
            <div>
              <Image src="/images/doc-lease.png" alt="আইনি নথি" width={600} height={450} className="zigzag-image" />
            </div>
          </div>

          {/* Sub 3.5 — PDF */}
          <div className="doc-subsection">
            <h3>নবায়ন পদ্ধতি ও বর্তমান মেয়াদ</h3>
            <p className="subsection-subtitle">"কবে নবায়ন হয়েছে, কবে হবে"</p>
            <p>অনুমোদনপত্রটি প্রতি বছর নবায়ন করা হয়। সর্বশেষ নবায়ন হয়েছে ফেব্রুয়ারি ২০২৪ সালে। পরবর্তী নবায়নের নির্ধারিত তারিখ ফেব্রুয়ারি ২০২৫। সময়মতো নবায়ন না করলে অনুমোদন স্বয়ংক্রিয়ভাবে বাতিল বলে গণ্য হবে।</p>
            <SummaryBox title="নবায়নের তথ্য" items={['সর্বশেষ নবায়ন: ফেব্রুয়ারি ২০২৪', 'পরবর্তী নবায়ন: ফেব্রুয়ারি ২০২৫', 'বর্তমান স্ট্যাটাস: ✅ কার্যকর']} />
            <PdfViewer label="সরকারি অনুমোদনপত্র — ২০২৪" />
            <div className="doc-actions">
              <button className="btn btn-primary">⬇ ডাউনলোড করুন</button>
              <button className="btn btn-green-outline">🔗 পূর্ণস্ক্রিনে দেখুন</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

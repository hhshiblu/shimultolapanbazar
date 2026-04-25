import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'পান বাজার অফিশিয়াল | Pan Bazar Official',
  description: 'পান বাজারের সকল অফিসিয়াল তথ্য, সরকারি নথি ও ইতিহাস এই ওয়েবসাইটে সংরক্ষিত আছে।',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bn">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body style={{ paddingTop: '70px' }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

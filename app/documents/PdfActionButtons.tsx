"use client";

import { useState, useEffect } from "react";

export default function PdfActionButtons({ pdfUrl, downloadName }: { pdfUrl: string, downloadName?: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <>
      <div className="doc-actions">
        <a href={pdfUrl} download={downloadName || true} className="btn btn-primary">
          ⬇ ডাউনলোড করুন
        </a>
        <button
          onClick={() => setIsModalOpen(true)}
          className="btn btn-green-outline"
        >
          🔗 পূর্ণস্ক্রিনে দেখুন
        </button>
      </div>

      {isModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
            padding: '1rem'
          }}
          onClick={() => setIsModalOpen(false)}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '1200px',
              height: '90%',
              backgroundColor: '#fff',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: '#ef4444',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 10,
                fontSize: '1.2rem',
                lineHeight: 1
              }}
              title="Close"
            >
              &times;
            </button>
            <iframe
              src={`${pdfUrl}#toolbar=0`}
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
              }}
              title="PDF Viewer"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}

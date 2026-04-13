import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const ContactPopup = () => {
  const [show, setShow] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (sessionStorage.getItem('popup_shown')) return;
    const timer = setTimeout(() => {
      setShow(true);
      sessionStorage.setItem('popup_shown', '1');
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
      }}
      onClick={() => setShow(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: 'rgba(15,15,15,0.95)',
          backdropFilter: 'blur(20px)',
          borderRadius: '1rem',
          border: '1px solid rgba(255,255,255,0.1)',
          padding: '2.5rem',
          maxWidth: '420px',
          width: '90vw',
          textAlign: 'center',
          color: '#fff',
          position: 'relative',
        }}
      >
        {/* Close X */}
        <button
          onClick={() => setShow(false)}
          style={{
            position: 'absolute',
            top: '12px',
            right: '16px',
            background: 'none',
            border: 'none',
            color: '#999',
            fontSize: '1.5rem',
            cursor: 'pointer',
          }}
        >
          &times;
        </button>

        {/* Gold Diamond */}
        <div style={{ fontSize: '2rem', marginBottom: '1rem', color: '#C9A96E' }}>
          &#9670;
        </div>

        {/* Title */}
        <h2
          style={{
            fontSize: '1.4rem',
            fontWeight: 700,
            marginBottom: '0.75rem',
            lineHeight: 1.3,
          }}
        >
          {t('whatsapp.hc.popupTitle')}
        </h2>

        {/* Description */}
        <p
          style={{
            fontSize: '0.9rem',
            color: '#aaa',
            marginBottom: '1.5rem',
            lineHeight: 1.6,
          }}
        >
          {t('whatsapp.hc.popupDesc')}
        </p>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/971585821144?text=${encodeURIComponent(
            t('whatsapp.message')
          )}`}
          target="_blank"
          rel="noopener"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: '#25D366',
            color: '#fff',
            padding: '0.75rem 2rem',
            borderRadius: '50px',
            fontSize: '1rem',
            fontWeight: 600,
            textDecoration: 'none',
            transition: 'transform 0.2s',
          }}
        >
          <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          </svg>
          {t('whatsapp.hc.popupCta')}
        </a>

        {/* Dismiss */}
        <button
          onClick={() => setShow(false)}
          style={{
            display: 'block',
            margin: '1rem auto 0',
            background: 'none',
            border: 'none',
            color: '#666',
            fontSize: '0.85rem',
            cursor: 'pointer',
          }}
        >
          {t('whatsapp.hc.popupClose')}
        </button>
      </div>
    </div>
  );
};

export default ContactPopup;

import { useTranslation } from 'react-i18next';

const WhatsAppButton = () => {
  const { t } = useTranslation();

  return (
    <a
      href={`https://wa.me/971585821144?text=${encodeURIComponent(t('whatsapp.message') as string)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '16px',
        zIndex: 9990,
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        backgroundColor: '#25D366',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        transition: 'transform 0.2s, box-shadow 0.2s',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.1)';
        e.currentTarget.style.boxShadow = '0 6px 20px rgba(37,211,102,0.4)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
      }}
    >
      <svg viewBox="0 0 32 32" width="32" height="32" fill="white">
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.914 15.914 0 0016.004 32C24.826 32 32 24.826 32 16.004 32 7.176 24.826 0 16.004 0zm9.31 22.616c-.39 1.1-2.294 2.1-3.162 2.172-.868.074-1.672.388-5.636-1.174-4.78-1.882-7.78-6.8-8.014-7.116-.234-.316-1.91-2.542-1.91-4.85 0-2.308 1.21-3.446 1.638-3.914.428-.468.936-.586 1.248-.586.312 0 .624.002.898.016.288.014.674-.11 1.054.804.39.936 1.326 3.244 1.444 3.478.116.234.194.508.038.82-.156.312-.234.506-.468.78-.234.274-.492.612-.702.82-.234.234-.478.488-.206.956.274.468 1.214 2.002 2.608 3.244 1.788 1.596 3.296 2.09 3.764 2.324.468.234.742.196 1.014-.118.274-.312 1.17-1.364 1.482-1.832.312-.468.624-.39 1.054-.234.428.156 2.736 1.29 3.204 1.526.468.234.78.352.898.546.116.196.116 1.132-.274 2.232z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;

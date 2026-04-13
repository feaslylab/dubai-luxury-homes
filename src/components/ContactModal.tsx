import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  const whatsappUrl = `https://wa.me/971585821144?text=${encodeURIComponent(
    t('whatsapp.message')
  )}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-card rounded-2xl shadow-2xl border border-white/10 p-8 w-full max-w-md text-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <div className="flex justify-end mb-4">
              <button
                onClick={onClose}
                className="p-2 text-text-secondary hover:text-gold transition-colors rounded-lg hover:bg-gold/10"
              >
                <X size={20} />
              </button>
            </div>

            {/* WhatsApp CTA */}
            <div className="space-y-6">
              <div className="text-gold text-4xl">
                <MessageCircle size={48} className="mx-auto" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-gold">
                {t('whatsapp.hc.popupTitle')}
              </h2>
              <p className="text-text-secondary leading-relaxed">
                {t('whatsapp.hc.popupDesc')}
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white py-3 px-8 rounded-full font-semibold transition-all duration-300"
              >
                <MessageCircle size={20} />
                <span>{t('whatsapp.hc.popupCta')}</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;

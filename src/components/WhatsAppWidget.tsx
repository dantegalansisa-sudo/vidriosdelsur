import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WhatsAppIcon } from './Icons';
import { WHATSAPP_URL } from '../data/whatsapp';
import './WhatsAppWidget.css';

export const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowBubble(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleBubbleClose = () => {
    setShowBubble(false);
  };

  return (
    <div className="wa-widget">
      {/* Popup card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="wa-widget__card"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.25 }}
          >
            <div className="wa-widget__header">
              <div className="wa-widget__avatar">
                <WhatsAppIcon size={24} color="white" />
              </div>
              <div className="wa-widget__info">
                <span className="wa-widget__name">YOMSUR EYPD</span>
                <span className="wa-widget__status">En línea · Responde rápido</span>
              </div>
              <button className="wa-widget__close" onClick={() => setIsOpen(false)}>
                ✕
              </button>
            </div>
            <div className="wa-widget__body">
              <div className="wa-widget__msg">
                <p>Hola 👋 ¿En qué podemos ayudarte?</p>
                <p>Escríbenos para cotizar ventanas, puertas, vitrinas o cualquier trabajo en vidrio y aluminio.</p>
                <span className="wa-widget__time">Ahora</span>
              </div>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="wa-widget__cta"
            >
              <WhatsAppIcon size={18} color="white" />
              Iniciar Conversación
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Auto bubble */}
      <AnimatePresence>
        {showBubble && !isOpen && (
          <motion.div
            className="wa-widget__bubble"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            <span>¿Necesitas una cotización? 💬</span>
            <button className="wa-widget__bubble-close" onClick={handleBubbleClose}>✕</button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB button */}
      <motion.button
        className="wa-widget__fab"
        onClick={() => { setIsOpen(!isOpen); setShowBubble(false); }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        <WhatsAppIcon size={28} color="white" />
      </motion.button>
    </div>
  );
};

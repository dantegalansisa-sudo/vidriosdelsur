import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RevealText } from '../components/RevealText';
import { MagneticButton } from '../components/MagneticButton';
import {
  SparkleIcon,
  LocationIcon,
  PhoneIcon,
  WhatsAppIcon,
  ChatIcon,
  ArrowRightIcon,
} from '../components/Icons';
import { WHATSAPP_URL } from '../data/whatsapp';
import './HeroSection.css';

const heroSlides = [
  { src: '/imagenes/descarga (1).webp', alt: 'Casa moderna con ventanales de cristal' },
  { src: '/imagenes/descarga (12).jpg', alt: 'Fachada con panel de vidrio arquitectónico' },
  { src: '/imagenes/descarga (13).jpg', alt: 'Ventanal de cristal reflectivo' },
  { src: '/imagenes/descarga.webp', alt: 'Baño de lujo con cristal y mármol' },
  { src: '/imagenes/descarga (2).webp', alt: 'Cocina moderna con acabados en cristal' },
  { src: '/imagenes/Luxury Smart Bathroom with LED Shower & Mirror _ Hominexus_.jpg', alt: 'Ducha de cristal con iluminación LED' },
  { src: '/imagenes/Bathroom Decor.jpg', alt: 'Baño inteligente con puertas de cristal' },
];

const SLIDE_INTERVAL = 5000;

export const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="hero">
      {/* Slideshow de fondo */}
      <div className="hero__bg">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={current}
            src={heroSlides[current].src}
            alt={heroSlides[current].alt}
            className="hero__bg-img"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          />
        </AnimatePresence>
        <div className="hero__overlay" />
      </div>

      {/* Indicadores del slide */}
      <div className="hero__indicators">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            className={`hero__indicator ${i === current ? 'hero__indicator--active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Ir a imagen ${i + 1}`}
          />
        ))}
      </div>

      <div className="hero__content section-container">
        <div className="hero__left">
          <motion.span
            className="label-tag"
            style={{ color: 'var(--crystal-mid)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0 }}
          >
            <SparkleIcon size={14} color="var(--crystal-mid)" />
            Azua, República Dominicana · Empresa Registrada
          </motion.span>

          <div className="hero__title-block">
            <RevealText tag="div" className="hero-title" delay={0.1} style={{ color: '#FFFFFF' }}>
              YOMSUR
            </RevealText>
            <RevealText tag="div" className="hero-title hero-title--warm" delay={0.2}>
              EYPD
            </RevealText>
            <RevealText tag="div" className="hero-title hero-title--crystal" delay={0.3}>
              VIDRIOS
            </RevealText>
          </div>

          <motion.p
            className="hero__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Fabricación e instalación de estructuras en vidrio y aluminio.
            Calidad, precisión y acabados perfectos para tu hogar o negocio.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <MagneticButton className="btn-crystal" href={WHATSAPP_URL} target="_blank">
              <ChatIcon size={18} color="white" />
              Solicitar Cotización
            </MagneticButton>
            <MagneticButton className="btn-ghost-white" href="#servicios">
              Ver Servicios
              <ArrowRightIcon size={16} color="rgba(255,255,255,0.8)" />
            </MagneticButton>
          </motion.div>
        </div>

        {/* Glass card flotante derecha */}
        <motion.div
          className="hero__glass-card"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="glass-card__label">
            <LocationIcon size={16} color="var(--crystal-mid)" />
            Encuéntranos
          </div>
          <div className="glass-card__name">YOMSUR EYPD Vidrios y Ventanas</div>
          <div className="glass-card__address">
            C/ Ntra. Sra. de Fátima #54<br />
            Frente a Caribe Tours, Azua
          </div>
          <div className="glass-card__divider" />
          <div className="glass-card__phones">
            <a href="tel:8293293115" className="glass-phone">
              <PhoneIcon size={18} color="rgba(255,255,255,0.7)" />
              829-329-3115
            </a>
          </div>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="glass-cta">
            <WhatsAppIcon size={20} color="white" />
            WhatsApp
          </a>
        </motion.div>
      </div>

      {/* Línea decorativa inferior 1px crystal */}
      <div className="hero__bottom-line" />
    </section>
  );
};

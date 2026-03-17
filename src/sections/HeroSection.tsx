import { motion } from 'framer-motion';
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
import './HeroSection.css';

export const HeroSection = () => {
  return (
    <section className="hero">
      {/* Fondo oscuro arquitectónico */}
      <div className="hero__bg">
        <img
          src="/imagenes/Amazing window.jpg"
          alt="Vidrios y Ventanas Del Sur"
        />
        <div className="hero__overlay" />
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
              VIDRIOS &
            </RevealText>
            <RevealText tag="div" className="hero-title" delay={0.2} style={{ color: '#FFFFFF' }}>
              VENTANAS
            </RevealText>
            <RevealText tag="div" className="hero-title hero-title--crystal" delay={0.3}>
              DEL SUR
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
            <MagneticButton className="btn-crystal" href="https://wa.me/18294916977" target="_blank">
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
          <div className="glass-card__name">Vidrios y Ventanas Del Sur</div>
          <div className="glass-card__address">
            C/ Ntra. Sra. de Fátima #54<br />
            Frente a Caribe Tours, Azua
          </div>
          <div className="glass-card__divider" />
          <div className="glass-card__phones">
            <a href="tel:8294916977" className="glass-phone">
              <PhoneIcon size={18} color="rgba(255,255,255,0.7)" />
              829-491-6977
            </a>
            <a href="tel:8095211180" className="glass-phone">
              <PhoneIcon size={18} color="rgba(255,255,255,0.7)" />
              809-521-1180
            </a>
            <a href="tel:8293293115" className="glass-phone">
              <PhoneIcon size={18} color="rgba(255,255,255,0.7)" />
              829-329-3115
            </a>
          </div>
          <a href="https://wa.me/18294916977" target="_blank" rel="noopener noreferrer" className="glass-cta">
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

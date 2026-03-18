import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { RevealText } from '../components/RevealText';
import { WhatsAppIcon, PhoneIcon, LocationIcon } from '../components/Icons';
import { WHATSAPP_URL } from '../data/whatsapp';
import './AboutPage.css';

const values = [
  { icon: '📐', title: 'Precisión', desc: 'Cada pieza fabricada con medidas exactas y acabados perfectos.' },
  { icon: '🤝', title: 'Compromiso', desc: 'Cumplimos con lo que prometemos: calidad, tiempo y precio.' },
  { icon: '⚡', title: 'Rapidez', desc: 'Procesos optimizados para entregar tu proyecto en el menor tiempo.' },
  { icon: '💎', title: 'Calidad', desc: 'Materiales premium y técnicas profesionales en cada trabajo.' },
];

const timeline = [
  { year: 'Inicio', text: 'Fundación de YOMSUR EYPD Vidrios y Ventanas en Azua, República Dominicana.' },
  { year: 'Crecimiento', text: 'Expansión de servicios: vitrinas, gabinetes, chuters y corte de vidrio a medida.' },
  { year: 'Registro', text: 'Formalización como empresa registrada con Certificado de Nombre Comercial RD.' },
  { year: 'Hoy', text: 'Referentes en Azua en fabricación e instalación de estructuras en vidrio y aluminio.' },
];

export const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero__bg">
          <img src="/imagenes/descarga (12).jpg" alt="YOMSUR EYPD" />
          <div className="about-hero__overlay" />
        </div>
        <div className="about-hero__content section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/" className="about-hero__back">← Volver al Inicio</Link>
            <span className="label-tag" style={{ color: 'var(--crystal-mid)' }}>Nuestra Historia</span>
            <h1 className="about-hero__title">
              Sobre<br />
              <span className="about-hero__title--crystal">Nosotros</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="about-story">
        <div className="section-container">
          <div className="about-story__grid">
            <motion.div
              className="about-story__text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="label-tag">¿Quiénes somos?</span>
              <RevealText tag="h2" className="section-title">
                YOMSUR EYPD<br />Vidrios y Ventanas
              </RevealText>
              <p className="about-story__desc">
                Somos una empresa formalmente registrada en la República Dominicana, especializada en la
                fabricación e instalación de estructuras en vidrio y aluminio. Desde nuestro taller ubicado
                en Azua, frente a Caribe Tours, servimos a hogares y negocios con productos de calidad
                y acabados profesionales.
              </p>
              <p className="about-story__desc">
                Nuestro fundador, <strong>Eudy Yomervin Pérez Díaz</strong>, inició este emprendimiento con
                la visión de ofrecer soluciones en vidrio y aluminio accesibles, con la misma calidad que
                se encuentra en las grandes ciudades. Hoy, YOMSUR EYPD es sinónimo de confianza y
                precisión en toda la zona sur.
              </p>
              <div className="about-story__badges">
                <div className="about-badge">
                  <span className="about-badge__icon">🏛️</span>
                  <span>Empresa Registrada RD</span>
                </div>
                <div className="about-badge">
                  <span className="about-badge__icon">📐</span>
                  <span>Todo a Medida</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="about-story__image"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src="/imagenes/descarga (13).jpg" alt="Ventanal de cristal" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about-values">
        <div className="section-container">
          <span className="label-tag">Lo que nos define</span>
          <RevealText tag="h2" className="section-title">
            Nuestros Valores
          </RevealText>
          <div className="about-values__grid">
            {values.map((v, i) => (
              <motion.div
                key={i}
                className="about-value"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <span className="about-value__icon">{v.icon}</span>
                <h3 className="about-value__title">{v.title}</h3>
                <p className="about-value__desc">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="about-timeline">
        <div className="section-container">
          <span className="label-tag" style={{ color: 'var(--crystal-mid)' }}>Nuestro Camino</span>
          <RevealText tag="h2" className="section-title" style={{ color: 'white' }}>
            Trayectoria
          </RevealText>
          <div className="about-timeline__list">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                className="about-timeline__item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div className="about-timeline__dot" />
                <div className="about-timeline__content">
                  <span className="about-timeline__year">{item.year}</span>
                  <p className="about-timeline__text">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="about-cta">
        <div className="section-container">
          <motion.div
            className="about-cta__box"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="about-cta__title">¿Listo para tu Proyecto?</h2>
            <p className="about-cta__text">Contáctanos y te damos una cotización gratis.</p>
            <div className="about-cta__actions">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-crystal">
                <WhatsAppIcon size={18} color="white" />
                Cotizar por WhatsApp
              </a>
              <a href="tel:8293293115" className="about-cta__phone">
                <PhoneIcon size={18} color="white" />
                829-329-3115
              </a>
            </div>
            <div className="about-cta__location">
              <LocationIcon size={16} color="rgba(255,255,255,0.6)" />
              <span>C/ Ntra. Sra. de Fátima #54, Frente a Caribe Tours, Azua</span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

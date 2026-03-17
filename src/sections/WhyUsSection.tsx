import { motion } from 'framer-motion';
import { RevealText } from '../components/RevealText';
import './WhyUsSection.css';

const reasons = [
  {
    icon: '📐',
    title: 'Medidas a tu Gusto',
    desc: 'Fabricamos exactamente lo que necesitas. Cada pieza se hace a medida según las dimensiones de tu espacio.',
  },
  {
    icon: '🏛️',
    title: 'Empresa Registrada',
    desc: 'Somos una empresa formalmente registrada en República Dominicana. Trabajamos con total respaldo legal.',
  },
  {
    icon: '⚡',
    title: 'Entrega Rápida',
    desc: 'Optimizamos nuestros procesos para entregarte tu trabajo en el menor tiempo posible sin sacrificar calidad.',
  },
  {
    icon: '🔧',
    title: 'Instalación Profesional',
    desc: 'No solo fabricamos — también instalamos. Nuestro equipo se encarga de todo hasta el acabado final.',
  },
  {
    icon: '💰',
    title: 'Precios Competitivos',
    desc: 'Calidad premium a precios accesibles. Cotización sin compromiso para tu proyecto.',
  },
  {
    icon: '🤝',
    title: 'Experiencia Comprobada',
    desc: 'Años de experiencia en Azua fabricando e instalando ventanas, puertas y estructuras de vidrio y aluminio.',
  },
];

export const WhyUsSection = () => {
  return (
    <section id="why-us" className="why-us">
      <div className="section-container">
        <span className="label-tag">¿Por qué elegirnos?</span>
        <RevealText tag="h2" className="section-title">
          Precisión en Cada<br />Milímetro
        </RevealText>

        <div className="why-us-grid">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="why-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="why-card__number">{String(index + 1).padStart(2, '0')}</div>
              <div className="why-card__icon">{reason.icon}</div>
              <h3 className="why-card__title">{reason.title}</h3>
              <p className="why-card__desc">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

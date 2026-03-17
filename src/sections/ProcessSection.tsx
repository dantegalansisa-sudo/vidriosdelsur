import { motion } from 'framer-motion';
import { RevealText } from '../components/RevealText';
import './ProcessSection.css';

const steps = [
  { num: '01', icon: '💬', title: 'Contacto', desc: 'Nos llamas o escribes por WhatsApp con lo que necesitas.' },
  { num: '02', icon: '📐', title: 'Medición', desc: 'Visitamos el lugar y tomamos las medidas exactas sin costo.' },
  { num: '03', icon: '💰', title: 'Cotización', desc: 'Te enviamos el precio exacto según materiales y dimensiones.' },
  { num: '04', icon: '🏭', title: 'Fabricación', desc: 'Fabricamos tu pedido con los mejores materiales disponibles.' },
  { num: '05', icon: '🔧', title: 'Instalación', desc: 'Nuestro equipo instala y te entrega terminado y perfecto.' },
];

export const ProcessSection = () => {
  return (
    <section className="process">
      <div className="section-container">
        <span className="label-tag" style={{ color: 'var(--crystal-mid)' }}>
          ¿Cómo trabajamos?
        </span>
        <RevealText tag="h2" className="section-title" style={{ color: 'white' }}>
          De Tu Idea al<br />Resultado Final
        </RevealText>

        <div className="process-steps">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="process-step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="process-step__number-bg">{step.num}</div>
              <div className="process-step__icon">{step.icon}</div>
              <div className="process-step__number">{step.num}</div>
              <h3 className="process-step__title">{step.title}</h3>
              <p className="process-step__desc">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

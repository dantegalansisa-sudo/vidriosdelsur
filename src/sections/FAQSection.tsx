import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RevealText } from '../components/RevealText';
import './FAQSection.css';

const faqs = [
  {
    q: '¿Cuánto tiempo toma fabricar una ventana o puerta?',
    a: 'Dependiendo del tamaño y complejidad, generalmente entre 3 a 7 días hábiles. Para proyectos grandes, coordinamos un cronograma de entrega contigo.',
  },
  {
    q: '¿Ofrecen servicio de medición gratis?',
    a: 'Sí, visitamos tu ubicación en Azua y alrededores para tomar las medidas exactas sin ningún costo. Solo contáctanos por WhatsApp o teléfono.',
  },
  {
    q: '¿Qué tipos de vidrio manejan?',
    a: 'Trabajamos con vidrio claro, bronce, esmerilado, reflectivo, temperado y laminado. Te asesoramos según tu necesidad y presupuesto.',
  },
  {
    q: '¿La instalación está incluida en el precio?',
    a: 'Sí, nuestro equipo se encarga de la instalación completa. Entregamos todo terminado y funcionando perfectamente.',
  },
  {
    q: '¿Tienen garantía en sus productos?',
    a: 'Todos nuestros trabajos tienen garantía. Si surge algún problema con la instalación o los materiales, lo resolvemos sin costo adicional.',
  },
  {
    q: '¿Trabajan fuera de Azua?',
    a: 'Principalmente servimos Azua y alrededores, pero también atendemos proyectos en otras provincias. Contáctanos para coordinar.',
  },
  {
    q: '¿Cuáles son las formas de pago?',
    a: 'Aceptamos efectivo y transferencias bancarias (Banreservas y BHD). Generalmente se trabaja con un adelanto del 50% y el resto contra entrega.',
  },
  {
    q: '¿Puedo ver muestras de los materiales?',
    a: 'Claro, puedes visitarnos en nuestro local en la C/ Ntra. Sra. de Fátima #54, frente a Caribe Tours, Azua. Tenemos muestras de todos los materiales disponibles.',
  },
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="faq">
      <div className="section-container">
        <span className="label-tag">Resolvemos tus dudas</span>
        <RevealText tag="h2" className="section-title">
          Preguntas Frecuentes
        </RevealText>

        <div className="faq__list">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className={`faq__item ${openIndex === i ? 'faq__item--open' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <button className="faq__question" onClick={() => toggle(i)}>
                <span>{faq.q}</span>
                <span className="faq__icon">{openIndex === i ? '−' : '+'}</span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    className="faq__answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

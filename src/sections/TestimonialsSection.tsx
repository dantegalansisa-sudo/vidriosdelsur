import { motion } from 'framer-motion';
import { RevealText } from '../components/RevealText';
import './TestimonialsSection.css';

const testimonials = [
  {
    name: 'Carlos Herrera',
    location: 'Azua',
    text: 'Excelente trabajo. Me hicieron las ventanas de toda la casa a medida y quedaron perfectas. El personal muy profesional.',
    service: 'Ventanas de Aluminio',
    rating: 5,
  },
  {
    name: 'María González',
    location: 'Azua',
    text: 'Muy buena calidad en las vitrinas que me fabricaron para mi negocio. Cumplieron con las medidas exactas y la entrega fue rápida.',
    service: 'Vitrinas de Cristal',
    rating: 5,
  },
  {
    name: 'Roberto Familia',
    location: 'Azua',
    text: 'El chuter de mi local quedó perfecto. La instalación fue limpia y rápida. Los recomiendo totalmente.',
    service: 'Chuter',
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="testimonials">
      <div className="section-container">
        <span className="label-tag">Testimonios</span>
        <RevealText tag="h2" className="section-title">
          Lo Que Dicen<br />Nuestros Clientes
        </RevealText>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="testimonial-card__stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              <p className="testimonial-card__text">"{testimonial.text}"</p>
              <div className="testimonial-card__badge">{testimonial.service}</div>
              <div className="testimonial-card__author">
                <div className="testimonial-card__name">{testimonial.name}</div>
                <div className="testimonial-card__location">📍 {testimonial.location}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

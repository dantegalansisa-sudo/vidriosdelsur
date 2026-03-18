import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { RevealText } from '../components/RevealText';
import { ArrowRightIcon } from '../components/Icons';
import { services } from '../data/services';
import './ServicesSection.css';

export const ServicesSection = () => {
  return (
    <section id="servicios" className="services">
      <div className="section-container">
        <span className="label-tag">Lo que fabricamos</span>
        <RevealText tag="h2" className="section-title">
          Nuestros Servicios
        </RevealText>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={`/servicios/${service.slug}`} className="service-card__link">
                <div className="service-card__img-wrap">
                  <img src={service.image} alt={service.title} className="service-card__img" />
                </div>
                <div className="service-card__body">
                  {service.tag && <span className="service-card__tag">{service.tag}</span>}
                  <span className="service-card__icon">{service.icon}</span>
                  <h3 className="service-card__title">{service.title}</h3>
                  <p className="service-card__desc">{service.desc}</p>
                  <span className="service-card__more">
                    Ver más <ArrowRightIcon size={14} color="var(--crystal)" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

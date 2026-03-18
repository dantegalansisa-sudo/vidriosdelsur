import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/services';
import { WhatsAppIcon, ArrowRightIcon } from '../components/Icons';
import './ServiceDetailPage.css';

export const ServiceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);

  const service = services.find((s) => s.slug === slug);
  const otherServices = services.filter((s) => s.slug !== slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <section className="service-detail__not-found">
        <div className="section-container">
          <h2>Servicio no encontrado</h2>
          <p>El servicio que buscas no existe.</p>
          <Link to="/" className="btn-crystal">Volver al Inicio</Link>
        </div>
      </section>
    );
  }

  const whatsappMsg = `Hola, me interesa el servicio de *${service.title}*. ¿Me pueden dar más información y una cotización?`;
  const whatsappUrl = `https://wa.me/18293293115?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <>
      {/* Hero compacto */}
      <section className="service-hero">
        <div className="service-hero__bg">
          <img src={service.image} alt={service.title} />
          <div className="service-hero__overlay" />
        </div>
        <div className="service-hero__content section-container">
          <motion.button
            className="service-hero__back"
            onClick={() => navigate('/')}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            ← Volver al Inicio
          </motion.button>
          <motion.span
            className="label-tag"
            style={{ color: 'var(--crystal-mid)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {service.icon} {service.title}
          </motion.span>
          <motion.h1
            className="service-hero__title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {service.title}
          </motion.h1>
          <motion.p
            className="service-hero__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {service.desc}
          </motion.p>
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-crystal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <WhatsAppIcon size={18} color="white" />
            Solicitar Cotización
          </motion.a>
        </div>
      </section>

      {/* Contenido principal */}
      <section className="service-content">
        <div className="section-container">
          <div className="service-content__grid">
            {/* Columna izquierda: Descripción + características */}
            <motion.div
              className="service-content__info"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="service-content__heading">Sobre este Servicio</h2>
              <p className="service-content__desc">{service.longDesc}</p>

              <h3 className="service-content__features-title">Características</h3>
              <ul className="service-content__features">
                {service.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    className="service-content__feature"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                  >
                    <span className="service-content__check">✓</span>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Columna derecha: Galería */}
            <motion.div
              className="service-content__gallery"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="service-gallery__main">
                <img
                  src={service.gallery[selectedImage]}
                  alt={`${service.title} - Foto ${selectedImage + 1}`}
                />
              </div>
              {service.gallery.length > 1 && (
                <div className="service-gallery__thumbs">
                  {service.gallery.map((img, i) => (
                    <button
                      key={i}
                      className={`service-gallery__thumb ${i === selectedImage ? 'service-gallery__thumb--active' : ''}`}
                      onClick={() => setSelectedImage(i)}
                    >
                      <img src={img} alt={`${service.title} - Miniatura ${i + 1}`} />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta">
        <div className="section-container">
          <motion.div
            className="service-cta__box"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="service-cta__title">
              ¿Necesitas {service.title}?
            </h2>
            <p className="service-cta__text">
              Contáctanos para una cotización gratis. Medimos, fabricamos e instalamos.
            </p>
            <div className="service-cta__actions">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-crystal">
                <WhatsAppIcon size={18} color="white" />
                Cotizar por WhatsApp
              </a>
              <a href="tel:8293293115" className="service-cta__phone">
                📞 829-329-3115
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Otros servicios */}
      <section className="service-others">
        <div className="section-container">
          <h2 className="service-others__title">Otros Servicios</h2>
          <div className="service-others__grid">
            {otherServices.map((other) => (
              <Link
                key={other.slug}
                to={`/servicios/${other.slug}`}
                className="service-others__card"
              >
                <div className="service-others__img-wrap">
                  <img src={other.image} alt={other.title} />
                </div>
                <div className="service-others__body">
                  <span className="service-others__icon">{other.icon}</span>
                  <h3 className="service-others__name">{other.title}</h3>
                  <span className="service-others__link">
                    Ver más <ArrowRightIcon size={14} color="var(--crystal)" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

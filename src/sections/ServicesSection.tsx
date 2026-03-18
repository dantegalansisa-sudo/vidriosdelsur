import { motion } from 'framer-motion';
import { RevealText } from '../components/RevealText';
import './ServicesSection.css';

const services = [
  {
    icon: '🪟',
    title: 'Ventanas de Cristal y Aluminio',
    desc: 'Fabricamos ventanas a medida en diferentes estilos y acabados. Corredizas, batientes, fijas — en aluminio natural, negro o blanco.',
    image: '/imagenes/ventana1.png',
    tag: 'Más Popular',
  },
  {
    icon: '🚪',
    title: 'Puertas de Cristal y Pulimetal',
    desc: 'Puertas de entrada y división en cristal temperado o pulimetal. Elegancia y seguridad para tu hogar o negocio.',
    image: '/imagenes/puerta.png',
  },
  {
    icon: '🔄',
    title: 'Chuters',
    desc: 'Puertas enrollables de seguridad para negocios y locales comerciales. Instalación profesional garantizada.',
    image: '/imagenes/shuter.png',
  },
  {
    icon: '🏪',
    title: 'Vitrinas de Cristal',
    desc: 'Vitrinas para exhibición de productos en tiendas y negocios. Diseño a medida, acabados perfectos.',
    image: '/imagenes/vitrina.png',
  },
  {
    icon: '🗄️',
    title: 'Gabinetes con Vidrio',
    desc: 'Gabinetes y muebles con puertas de vidrio para cocinas, baños y espacios de almacenamiento.',
    image: '/imagenes/gabinete.png',
  },
  {
    icon: '✂️',
    title: 'Corte de Vidrio a Medida',
    desc: 'Cortamos vidrio en cualquier medida y forma. Vidrio claro, esmerilado, bronce, reflectivo y más.',
    image: '/imagenes/ventana2.png',
  },
  {
    icon: '🔧',
    title: 'Repuestos Generales',
    desc: 'Ruedas, bisagras, seguros, jaladores y todos los repuestos para ventanas y puertas de aluminio.',
    image: '/imagenes/ventana3.png',
  },
];

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
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="service-card__img-wrap">
                <img src={service.image} alt={service.title} className="service-card__img" />
              </div>
              <div className="service-card__body">
                {service.tag && <span className="service-card__tag">{service.tag}</span>}
                <span className="service-card__icon">{service.icon}</span>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__desc">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

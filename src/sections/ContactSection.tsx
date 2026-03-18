import { motion } from 'framer-motion';
import { RevealText } from '../components/RevealText';
import { PhoneIcon, LocationIcon, WhatsAppIcon } from '../components/Icons';
import { WHATSAPP_URL, whatsappWithForm } from '../data/whatsapp';
import './ContactSection.css';

const contactInfo = {
  address: 'C/ Ntra. Sra. de Fátima #54, Frente a Caribe Tours, Azua',
  phone: '829-329-3115',
};

export const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const url = whatsappWithForm({
      nombre: formData.get('nombre') as string,
      telefono: formData.get('telefono') as string,
      servicio: formData.get('servicio') as string,
      descripcion: formData.get('descripcion') as string,
      medidas: formData.get('medidas') as string,
    });
    window.open(url, '_blank');
  };

  return (
    <section id="contacto" className="contact">
      <div className="section-container">
        <span className="label-tag">Contáctanos</span>
        <RevealText tag="h2" className="section-title">
          Solicita Tu<br />Cotización Gratis
        </RevealText>

        <div className="contact-grid">
          {/* Izquierda: Info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-info__item">
              <div className="contact-info__icon">
                <LocationIcon size={24} color="var(--crystal)" />
              </div>
              <div>
                <h3 className="contact-info__title">Dirección</h3>
                <p className="contact-info__text">{contactInfo.address}</p>
              </div>
            </div>

            <div className="contact-info__item">
              <div className="contact-info__icon">
                <PhoneIcon size={24} color="var(--crystal)" />
              </div>
              <div>
                <h3 className="contact-info__title">Teléfono</h3>
                <p className="contact-info__text">
                  <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
                </p>
              </div>
            </div>

            <div className="contact-info__item">
              <div className="contact-info__icon">
                <WhatsAppIcon size={24} color="var(--crystal)" />
              </div>
              <div>
                <h3 className="contact-info__title">WhatsApp</h3>
                <p className="contact-info__text">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    Envíanos un mensaje
                  </a>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Derecha: Formulario */}
          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="nombre"
                placeholder="Tu nombre"
                className="contact-input"
                required
              />
              <input
                type="tel"
                name="telefono"
                placeholder="Tu teléfono"
                className="contact-input"
                required
              />
              <select name="servicio" className="contact-select" required>
                <option value="">Selecciona un servicio</option>
                <option value="Ventanas de Cristal y Aluminio">Ventanas de Cristal y Aluminio</option>
                <option value="Puertas de Cristal y Pulimetal">Puertas de Cristal y Pulimetal</option>
                <option value="Chuters">Chuters</option>
                <option value="Vitrinas de Cristal">Vitrinas de Cristal</option>
                <option value="Gabinetes con Vidrio">Gabinetes con Vidrio</option>
                <option value="Corte de Vidrio a Medida">Corte de Vidrio a Medida</option>
                <option value="Repuestos Generales">Repuestos Generales</option>
              </select>
              <textarea
                name="descripcion"
                placeholder="Descripción del proyecto"
                className="contact-textarea"
                rows={4}
                required
              ></textarea>
              <input
                type="text"
                name="medidas"
                placeholder="Medidas aproximadas (opcional)"
                className="contact-input"
              />
              <button type="submit" className="contact-submit btn-crystal">
                <WhatsAppIcon size={18} color="white" />
                Solicitar Cotización
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

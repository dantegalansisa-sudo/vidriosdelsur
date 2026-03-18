import { PhoneIcon, LocationIcon, WhatsAppIcon } from '../components/Icons';
import { WHATSAPP_URL } from '../data/whatsapp';
import './FooterSection.css';

const services = [
  'Ventanas de Cristal y Aluminio',
  'Puertas de Cristal y Pulimetal',
  'Chuters',
  'Vitrinas de Cristal',
  'Gabinetes con Vidrio',
  'Corte de Vidrio a Medida',
  'Repuestos Generales',
];

export const FooterSection = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="section-container">
          <div className="footer-grid">
            {/* Col 1: Logo + Info */}
            <div className="footer-col">
              <h3 className="footer-logo">YOMSUR EYPD</h3>
              <p className="footer-tagline">Vidrios y Ventanas · Cristal & Aluminio</p>
              <div className="footer-badge">
                <span className="footer-badge__icon">🏛️</span>
                Empresa Registrada RD
              </div>
            </div>

            {/* Col 2: Servicios */}
            <div className="footer-col">
              <h4 className="footer-title">Servicios</h4>
              <ul className="footer-list">
                {services.map((service, index) => (
                  <li key={index}>
                    <a href="#servicios">{service}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Contacto */}
            <div className="footer-col">
              <h4 className="footer-title">Contacto</h4>
              <ul className="footer-contact">
                <li>
                  <LocationIcon size={18} color="var(--crystal-mid)" />
                  C/ Ntra. Sra. de Fátima #54<br />
                  Frente a Caribe Tours, Azua
                </li>
                <li>
                  <PhoneIcon size={18} color="var(--crystal-mid)" />
                  <a href="tel:8293293115">829-329-3115</a>
                </li>
                <li>
                  <WhatsAppIcon size={18} color="var(--crystal-mid)" />
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Horario */}
            <div className="footer-col">
              <h4 className="footer-title">Horario de Atención</h4>
              <p className="footer-text">
                Lunes a Sábado<br />
                <strong>8:00 AM - 7:00 PM</strong>
              </p>
              <p className="footer-text">
                Domingos<br />
                <strong>Cerrado</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="section-container">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © 2025 Vidrios y Ventanas Del Sur — YOMSUR EYPD<br />
              Azua, República Dominicana
            </p>
            <p className="footer-credit">
              Diseñado por <a href="https://nexix.tech" target="_blank" rel="noopener noreferrer">NEXIX Tech Studio</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

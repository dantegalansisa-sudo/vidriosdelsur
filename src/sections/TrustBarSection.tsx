import './TrustBarSection.css';

const trustItems = [
  { icon: '🪟', text: 'Cristal & Aluminio' },
  { icon: '✓', text: 'Empresa Registrada RD' },
  { icon: '📐', text: 'Medidas a tu Gusto' },
  { icon: '🔧', text: 'Instalación Incluida' },
  { icon: '📍', text: 'Frente a Caribe Tours, Azua' },
  { icon: '📞', text: '829-329-3115' },
];

export const TrustBarSection = () => {
  return (
    <section className="trust-bar">
      <div className="trust-bar__container">
        {trustItems.map((item, index) => (
          <div key={index} className="trust-item">
            <span className="trust-item__icon">{item.icon}</span>
            <span className="trust-item__text">{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

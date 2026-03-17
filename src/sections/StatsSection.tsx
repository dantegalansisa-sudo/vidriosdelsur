import { AnimatedCounter } from '../components/AnimatedCounter';
import './StatsSection.css';

const stats = [
  { number: 3, suffix: '', label: 'Teléfonos Disponibles', icon: '📞' },
  { number: 7, suffix: '', label: 'Servicios Especializados', icon: '🪟' },
  { number: 100, suffix: '%', label: 'Trabajos a Medida', icon: '📐' },
  { number: 1, suffix: '', label: 'Empresa Registrada RD', icon: '🏛️' },
];

export const StatsSection = () => {
  return (
    <section className="stats">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="stat-item__icon">{stat.icon}</div>
            <div className="stat-item__number">
              <AnimatedCounter value={stat.number} suffix={stat.suffix} />
            </div>
            <div className="stat-item__label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

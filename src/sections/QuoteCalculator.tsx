import { useState } from 'react';
import { motion } from 'framer-motion';
import { RevealText } from '../components/RevealText';
import { WhatsAppIcon } from '../components/Icons';
import { whatsappWithService } from '../data/whatsapp';
import './QuoteCalculator.css';

const serviceRanges: Record<string, { min: number; max: number; unit: string }> = {
  'Ventanas de Cristal y Aluminio': { min: 3500, max: 12000, unit: 'por ventana' },
  'Puertas de Cristal y Pulimetal': { min: 8000, max: 25000, unit: 'por puerta' },
  'Chuters': { min: 15000, max: 45000, unit: 'por unidad' },
  'Vitrinas de Cristal': { min: 5000, max: 20000, unit: 'por vitrina' },
  'Gabinetes con Vidrio': { min: 4000, max: 15000, unit: 'por gabinete' },
  'Corte de Vidrio a Medida': { min: 500, max: 5000, unit: 'por pieza' },
  'Repuestos Generales': { min: 200, max: 3000, unit: 'por pieza' },
};

export const QuoteCalculator = () => {
  const [service, setService] = useState('');
  const [quantity, setQuantity] = useState(1);

  const range = service ? serviceRanges[service] : null;
  const minTotal = range ? range.min * quantity : 0;
  const maxTotal = range ? range.max * quantity : 0;

  const formatPrice = (n: number) =>
    new Intl.NumberFormat('es-DO', { style: 'currency', currency: 'DOP', maximumFractionDigits: 0 }).format(n);

  return (
    <section className="calculator">
      <div className="section-container">
        <div className="calculator__grid">
          <div className="calculator__info">
            <span className="label-tag">Herramienta rápida</span>
            <RevealText tag="h2" className="section-title">
              Estimador de<br />Precio
            </RevealText>
            <p className="section-sub">
              Obtén un rango de precio estimado para tu proyecto. Los precios finales dependen
              de las medidas exactas y los materiales seleccionados.
            </p>
            <p className="calculator__disclaimer">
              * Precios referenciales en pesos dominicanos (DOP). Para una cotización exacta, contáctanos.
            </p>
          </div>

          <motion.div
            className="calculator__card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="calculator__field">
              <label className="calculator__label">Tipo de Servicio</label>
              <select
                className="calculator__select"
                value={service}
                onChange={(e) => setService(e.target.value)}
              >
                <option value="">Selecciona un servicio</option>
                {Object.keys(serviceRanges).map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div className="calculator__field">
              <label className="calculator__label">Cantidad</label>
              <div className="calculator__qty">
                <button
                  className="calculator__qty-btn"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  −
                </button>
                <span className="calculator__qty-value">{quantity}</span>
                <button
                  className="calculator__qty-btn"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>

            {range && (
              <motion.div
                className="calculator__result"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="calculator__result-label">Rango Estimado</div>
                <div className="calculator__result-price">
                  {formatPrice(minTotal)} — {formatPrice(maxTotal)}
                </div>
                <div className="calculator__result-unit">
                  {range.unit} × {quantity} {quantity > 1 ? 'unidades' : 'unidad'}
                </div>
              </motion.div>
            )}

            {service && (
              <a
                href={whatsappWithService(service)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-crystal calculator__cta"
              >
                <WhatsAppIcon size={18} color="white" />
                Cotizar Precio Exacto
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

import { motion } from 'framer-motion';
import { RevealText } from '../components/RevealText';
import './BankAccountsSection.css';

const accounts = [
  {
    bank: 'BANRESERVAS',
    account: '9605794344',
    holder: 'Deiby Pérez',
    color: '#00693E',
  },
  {
    bank: 'BHD',
    account: '1478133-001-4',
    holder: 'Eudy Yomervin Pérez',
    color: '#E31837',
  },
];

export const BankAccountsSection = () => {
  return (
    <section className="bank-accounts">
      <div className="section-container">
        <span className="label-tag">Métodos de Pago</span>
        <RevealText tag="h2" className="section-title">
          Cuentas Bancarias
        </RevealText>
        <p className="section-sub">
          Realiza tu pago de forma segura a través de nuestras cuentas bancarias.
        </p>

        <div className="bank-accounts__grid">
          {accounts.map((acc, index) => (
            <motion.div
              key={acc.bank}
              className="bank-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="bank-card__accent" style={{ background: acc.color }} />
              <div className="bank-card__content">
                <span className="bank-card__bank" style={{ color: acc.color }}>
                  {acc.bank}
                </span>
                <div className="bank-card__field">
                  <span className="bank-card__label">No. de Cuenta</span>
                  <span className="bank-card__value">{acc.account}</span>
                </div>
                <div className="bank-card__field">
                  <span className="bank-card__label">Titular</span>
                  <span className="bank-card__value">{acc.holder}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

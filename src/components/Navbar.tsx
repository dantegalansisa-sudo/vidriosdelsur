import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MagneticButton } from './MagneticButton';
import { WhatsAppIcon, PhoneIcon } from './Icons';
import './Navbar.css';

const navLinks = [
  { label: 'Inicio', href: '#' },
  { label: 'Servicios', href: '#servicios' },
  { label: '¿Por qué nosotros?', href: '#why-us' },
  { label: 'Contacto', href: '#contacto' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="navbar__container section-container">
          {/* Logo */}
          <div className="navbar__logo">
            <span className="navbar__logo-icon">🪟</span>
            <div className="navbar__logo-text">
              <span className="navbar__logo-name">YOMSUR EYPD</span>
              <span className="navbar__logo-tagline">Vidrios y Ventanas</span>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="navbar__links">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="navbar__link"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="navbar__cta">
            <a href="tel:8293293115" className="navbar__phone">
              <PhoneIcon size={18} color="var(--crystal)" />
              829-329-3115
            </a>
            <MagneticButton
              className="btn-crystal navbar__button"
              href="https://wa.me/18293293115"
              target="_blank"
            >
              <WhatsAppIcon size={16} color="white" />
              Cotizar
            </MagneticButton>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="navbar__toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`navbar__toggle-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`navbar__toggle-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`navbar__toggle-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mobile-menu__links">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="mobile-menu__link"
                >
                  {link.label}
                </button>
              ))}
            </div>
            <div className="mobile-menu__cta">
              <a href="tel:8293293115" className="mobile-menu__phone">
                <PhoneIcon size={20} color="var(--crystal)" />
                829-329-3115
              </a>
              <a
                href="https://wa.me/18293293115"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-crystal"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <WhatsAppIcon size={18} color="white" />
                Solicitar Cotización
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

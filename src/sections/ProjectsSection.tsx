import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RevealText } from '../components/RevealText';
import './ProjectsSection.css';

const categories = [
  {
    id: 'all',
    label: 'Todos',
  },
  {
    id: 'ventanas',
    label: 'Ventanas',
  },
  {
    id: 'puertas',
    label: 'Puertas',
  },
  {
    id: 'vitrinas',
    label: 'Vitrinas',
  },
  {
    id: 'gabinetes',
    label: 'Gabinetes',
  },
  {
    id: 'shuters',
    label: 'Shuters',
  },
];

const projects = [
  // Ventanas
  { image: '/imagenes/ventana.png', title: 'Ventana de Aluminio', category: 'ventanas' },
  { image: '/imagenes/ventana1.png', title: 'Ventana Corrediza', category: 'ventanas' },
  { image: '/imagenes/ventana2.png', title: 'Ventana a Medida', category: 'ventanas' },
  { image: '/imagenes/ventana3.png', title: 'Ventana Instalada', category: 'ventanas' },
  // Puertas
  { image: '/imagenes/puerta.png', title: 'Puerta de Cristal', category: 'puertas' },
  { image: '/imagenes/puerta1.png', title: 'Puerta Pulimetal', category: 'puertas' },
  { image: '/imagenes/puerta2.png', title: 'Puerta de Entrada', category: 'puertas' },
  { image: '/imagenes/puerta3.png', title: 'Puerta Corrediza', category: 'puertas' },
  { image: '/imagenes/puerta4.png', title: 'Puerta Instalada', category: 'puertas' },
  // Vitrinas
  { image: '/imagenes/vitrina.png', title: 'Vitrina de Cristal', category: 'vitrinas' },
  { image: '/imagenes/vitrina1.png', title: 'Vitrina para Negocio', category: 'vitrinas' },
  // Gabinetes
  { image: '/imagenes/gabinete.png', title: 'Gabinete con Vidrio', category: 'gabinetes' },
  { image: '/imagenes/gabinete1.png', title: 'Gabinete Instalado', category: 'gabinetes' },
  // Shuters
  { image: '/imagenes/shuter.png', title: 'Shuter de Seguridad', category: 'shuters' },
  { image: '/imagenes/shuter1.png', title: 'Shuter Comercial', category: 'shuters' },
  { image: '/imagenes/shuter3.png', title: 'Shuter Instalado', category: 'shuters' },
];

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="projects">
      <div className="section-container">
        <span className="label-tag" style={{ color: 'var(--crystal-mid)' }}>
          Nuestro Trabajo
        </span>
        <RevealText tag="h2" className="section-title" style={{ color: 'white' }}>
          Proyectos Realizados
        </RevealText>
        <p className="section-sub" style={{ color: 'rgba(255,255,255,0.6)' }}>
          Algunos de nuestros trabajos realizados en Azua y sus alrededores.
        </p>

        {/* Filtros por categoría */}
        <div className="projects-filters">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`projects-filter ${activeCategory === cat.id ? 'projects-filter--active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid de proyectos */}
        <motion.div className="projects-grid" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.image}
                className="project-item"
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
              >
                <img src={project.image} alt={project.title} className="project-img" />
                <div className="project-overlay">
                  <span className="project-category">{
                    categories.find((c) => c.id === project.category)?.label
                  }</span>
                  <h3 className="project-title">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

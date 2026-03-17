import { motion } from 'framer-motion';
import { RevealText } from '../components/RevealText';
import './ProjectsSection.css';

const projects = [
  {
    image: '/imagenes/Screenshot 2026-03-17 035002.png',
    title: 'Proyecto Realizado',
  },
  {
    image: '/imagenes/Screenshot 2026-03-17 035016.png',
    title: 'Trabajo de Vidrio',
  },
  {
    image: '/imagenes/Screenshot 2026-03-17 035027.png',
    title: 'Instalación Completa',
  },
  {
    image: '/imagenes/Screenshot 2026-03-17 035046.png',
    title: 'Proyecto de Aluminio',
  },
  {
    image: '/imagenes/Screenshot 2026-03-17 035053.png',
    title: 'Trabajo Terminado',
  },
  {
    image: '/imagenes/Screenshot 2026-03-17 035116.png',
    title: 'Instalación Profesional',
  },
];

export const ProjectsSection = () => {
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

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={project.image} alt={project.title} className="project-img" />
              <div className="project-overlay">
                <h3 className="project-title">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

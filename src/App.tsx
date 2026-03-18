import { Routes, Route } from 'react-router-dom';
import { ScrollProgress } from './components/ScrollProgress';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { Navbar } from './components/Navbar';
import { BackToTop } from './components/BackToTop';
import { Preloader } from './components/Preloader';
import { FooterSection } from './sections/FooterSection';
import { HomePage } from './pages/HomePage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { AboutPage } from './pages/AboutPage';

function App() {
  return (
    <>
      <Preloader />
      <ScrollProgress />
      <Navbar />
      <WhatsAppWidget />
      <BackToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicios/:slug" element={<ServiceDetailPage />} />
        <Route path="/nosotros" element={<AboutPage />} />
      </Routes>

      <FooterSection />
    </>
  );
}

export default App;

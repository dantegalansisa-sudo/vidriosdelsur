import { Routes, Route } from 'react-router-dom';
import { ScrollProgress } from './components/ScrollProgress';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Navbar } from './components/Navbar';
import { BackToTop } from './components/BackToTop';
import { FooterSection } from './sections/FooterSection';
import { HomePage } from './pages/HomePage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';

function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <WhatsAppButton />
      <BackToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicios/:slug" element={<ServiceDetailPage />} />
      </Routes>

      <FooterSection />
    </>
  );
}

export default App;

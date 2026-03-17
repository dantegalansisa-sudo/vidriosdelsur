import { CustomCursor } from './components/CustomCursor';
import { ScrollProgress } from './components/ScrollProgress';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Navbar } from './components/Navbar';
import { BackToTop } from './components/BackToTop';
import { HeroSection } from './sections/HeroSection';
import { TrustBarSection } from './sections/TrustBarSection';
import { ServicesSection } from './sections/ServicesSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { WhyUsSection } from './sections/WhyUsSection';
import { ProcessSection } from './sections/ProcessSection';
import { StatsSection } from './sections/StatsSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { ContactSection } from './sections/ContactSection';
import { FooterSection } from './sections/FooterSection';

function App() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <WhatsAppButton />
      <BackToTop />

      <HeroSection />
      <TrustBarSection />
      <ServicesSection />
      <ProjectsSection />
      <WhyUsSection />
      <ProcessSection />
      <StatsSection />
      <TestimonialsSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}

export default App;

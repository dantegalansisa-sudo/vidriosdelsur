import { HeroSection } from '../sections/HeroSection';
import { TrustBarSection } from '../sections/TrustBarSection';
import { ServicesSection } from '../sections/ServicesSection';
import { ProjectsSection } from '../sections/ProjectsSection';
import { WhyUsSection } from '../sections/WhyUsSection';
import { ProcessSection } from '../sections/ProcessSection';
import { StatsSection } from '../sections/StatsSection';
import { TestimonialsSection } from '../sections/TestimonialsSection';
import { ContactSection } from '../sections/ContactSection';
import { BankAccountsSection } from '../sections/BankAccountsSection';

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <TrustBarSection />
      <ServicesSection />
      <ProjectsSection />
      <WhyUsSection />
      <ProcessSection />
      <StatsSection />
      <TestimonialsSection />
      <BankAccountsSection />
      <ContactSection />
    </>
  );
};

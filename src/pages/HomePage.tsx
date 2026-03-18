import { HeroSection } from '../sections/HeroSection';
import { TrustBarSection } from '../sections/TrustBarSection';
import { ServicesSection } from '../sections/ServicesSection';
import { ProjectsSection } from '../sections/ProjectsSection';
import { WhyUsSection } from '../sections/WhyUsSection';
import { ProcessSection } from '../sections/ProcessSection';
import { StatsSection } from '../sections/StatsSection';
import { QuoteCalculator } from '../sections/QuoteCalculator';
import { TestimonialsSection } from '../sections/TestimonialsSection';
import { FAQSection } from '../sections/FAQSection';
import { BankAccountsSection } from '../sections/BankAccountsSection';
import { ContactSection } from '../sections/ContactSection';

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
      <QuoteCalculator />
      <TestimonialsSection />
      <FAQSection />
      <BankAccountsSection />
      <ContactSection />
    </>
  );
};

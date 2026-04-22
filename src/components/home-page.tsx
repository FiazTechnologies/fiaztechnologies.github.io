import { Providers } from './providers';
import { HeroSection } from './sections/hero-section';
import { TrustSection } from './sections/trust-section';
import { BentoGrid } from './sections/bento-grid';
import { ServicesOverview } from './sections/services-overview';
import { FeaturesSection } from './sections/features-section';
import { ProcessSection } from './sections/process-section';
import { TechStackSection } from './sections/tech-stack-section';
import { StatsSection } from './sections/stats-section';
import { TestimonialsSection } from './sections/testimonials-section';
import { CTASection } from './sections/cta-section';

export function HomePage() {
  return (
    <Providers>
      <HeroSection />
      <TrustSection />
      <BentoGrid />
      <ServicesOverview />
      <FeaturesSection />
      <ProcessSection />
      <TechStackSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </Providers>
  );
}

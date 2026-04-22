import { LegalPage } from './legal-page';
import { SITE_CONFIG } from '@/lib/constants';

export function TermsContent() {
  return (
    <LegalPage title="Terms of Service" lastUpdated="April 2026">
      <div>
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing or using the services provided by {SITE_CONFIG.name}, you agree to be bound by these Terms of Service.</p>

        <h2>2. Services</h2>
        <p>{SITE_CONFIG.name} provides software development services including AI solutions, SaaS development, developer tools, web applications, and mobile app development.</p>

        <h2>3. Intellectual Property</h2>
        <p>All content, designs, and code produced by {SITE_CONFIG.name} remain our intellectual property unless explicitly transferred through a written agreement.</p>

        <h2>4. Payment Terms</h2>
        <p>Payment terms are agreed upon in individual project contracts. Standard payment terms are net 30 days from invoice date.</p>

        <h2>5. Limitation of Liability</h2>
        <p>{SITE_CONFIG.name} shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services.</p>

        <h2>6. Governing Law</h2>
        <p>These terms shall be governed by and construed in accordance with applicable laws.</p>

        <h2>7. Analytics and Monitoring</h2>
        <p>We may use cookies and third-party services to monitor and analyze the use of our services anonymously. This helps us improve our performance and user experience without tracking personally identifiable information unless explicitly provided by you.</p>

        <h2>8. Contact</h2>
        <p>For questions about these Terms, please contact <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a>.</p>
      </div>
    </LegalPage>
  );
}

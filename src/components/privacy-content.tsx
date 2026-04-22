import { LegalPage } from './legal-page';
import { SITE_CONFIG } from '@/lib/constants';

export function PrivacyContent() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="April 2026">
      <div>
        <h2>1. Information We Collect</h2>
        <p>We may collect information you provide directly, such as when you fill out our contact form, including your name, email address, and message content.</p>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Respond to your inquiries and provide customer support</li>
          <li>Send you updates about our services (with your consent)</li>
          <li>Improve our website and services</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2>3. Data Sharing</h2>
        <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law.</p>

        <h2>4. Data Security</h2>
        <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>

        <h2>5. Your Rights</h2>
        <p>You have the right to access, correct, or delete your personal data. Contact us at <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a> to exercise these rights.</p>

        <h2>6. Contact</h2>
        <p>For any privacy-related questions, please contact us at <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a>.</p>
      </div>
    </LegalPage>
  );
}

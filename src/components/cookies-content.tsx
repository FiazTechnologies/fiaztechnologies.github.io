import { LegalPage } from './legal-page';
import { SITE_CONFIG } from '@/lib/constants';

export function CookiesContent() {
  return (
    <LegalPage title="Cookie Policy" lastUpdated="April 2026">
      <div>
        <h2>1. What Are Cookies</h2>
        <p>Cookies are small text files stored on your device when you visit a website. They help us provide a better user experience.</p>

        <h2>2. Cookies We Use</h2>
        <h3>Essential Cookies</h3>
        <p>Required for the website to function properly. These include theme preference storage.</p>
        <h3>Analytics Cookies</h3>
        <p>Help us understand how visitors interact with our website to improve our services.</p>

        <h2>3. Managing Cookies</h2>
        <p>You can control and delete cookies through your browser settings. Note that disabling cookies may affect your experience on our website.</p>

        <h2>4. GDPR Compliance</h2>
        <p>In accordance with GDPR, we only use non-essential cookies with your explicit consent. You can withdraw your consent at any time.</p>

        <h2>5. Third-Party Cookies</h2>
        <p>We may use third-party services that set their own cookies. We recommend reviewing their respective privacy policies.</p>

        <h2>6. Contact</h2>
        <p>For questions about our cookie policy, contact us at <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a>.</p>
      </div>
    </LegalPage>
  );
}

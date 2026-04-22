import { LegalPage } from './legal-page';
import { SITE_CONFIG } from '@/lib/constants';

export function RefundContent() {
  return (
    <LegalPage title="Refund Policy" lastUpdated="April 2026">
      <div>
        <h2>1. Refund Eligibility</h2>
        <p>We strive for 100% client satisfaction. Refund requests are evaluated on a case-by-case basis.</p>

        <h2>2. How to Request a Refund</h2>
        <p>To request a refund, please email us at <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a> with your project details and reason for the refund request.</p>

        <h2>3. Processing Time</h2>
        <p>Refund requests are typically processed within 5-10 business days after approval.</p>

        <h2>4. Non-Refundable Items</h2>
        <ul>
          <li>Custom development work that has been delivered and approved</li>
          <li>Third-party licenses or services purchased on your behalf</li>
          <li>Consultation fees for completed sessions</li>
        </ul>

        <h2>5. Partial Refunds</h2>
        <p>In cases where work has been partially completed, a partial refund may be issued proportional to the remaining undelivered work.</p>

        <h2>6. Contact</h2>
        <p>All refund requests should be directed to <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a>.</p>
      </div>
    </LegalPage>
  );
}

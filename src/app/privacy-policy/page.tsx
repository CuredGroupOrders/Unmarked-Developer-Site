import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "Privacy Policy | Unmarked Goods",
  description: "Privacy practices for Unmarked Goods.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="February 24, 2026">
      <section>
        <h2 className="text-base font-semibold">1. Scope</h2>
        <p className="muted mt-2">
          This policy explains how Unmarked Goods collects, uses, and protects personal information
          when you use our website or contact us about services.
        </p>
      </section>
      <section>
        <h2 className="text-base font-semibold">2. Data we collect</h2>
        <p className="muted mt-2">
          We collect contact and project information you submit, including name, email, company, and
          message details. We may also collect basic technical data such as device type, browser, and
          website usage analytics.
        </p>
      </section>
      <section>
        <h2 className="text-base font-semibold">3. How we use data</h2>
        <p className="muted mt-2">
          We use personal data to respond to inquiries, deliver services, improve website performance,
          protect our systems, and meet legal obligations.
        </p>
      </section>
      <section>
        <h2 className="text-base font-semibold">4. Lawful basis and rights</h2>
        <p className="muted mt-2">
          Where applicable, processing is based on legitimate interests, contract preparation, consent,
          or legal obligations. Depending on your location, you may request access, correction, deletion,
          or portability of your data.
        </p>
      </section>
      <section>
        <h2 className="text-base font-semibold">5. Data sharing and retention</h2>
        <p className="muted mt-2">
          We share data only with trusted processors required to run the website and deliver services.
          Inquiry data is retained for as long as needed for business and legal purposes.
        </p>
      </section>
      <section>
        <h2 className="text-base font-semibold">6. Contact</h2>
        <p className="muted mt-2">
          For privacy questions or data requests, please use the contact form on this website.
        </p>
      </section>
    </LegalLayout>
  );
}

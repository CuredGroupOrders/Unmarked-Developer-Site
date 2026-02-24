import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "Data Protection | Unmarked Goods",
  description: "Data protection controls and commitments at Unmarked Goods.",
};

export default function DataProtectionPage() {
  return (
    <LegalLayout title="Data Protection" lastUpdated="February 24, 2026">
      <section>
        <h2 className="text-base font-semibold">1. Security approach</h2>
        <p className="muted mt-2">
          Unmarked Goods applies layered technical and organizational controls to reduce risk to data,
          including access control, encryption in transit, and secure development practices.
        </p>
      </section>
      <section>
        <h2 className="text-base font-semibold">2. Access management</h2>
        <p className="muted mt-2">
          Access is restricted to authorized personnel based on least-privilege principles and reviewed
          periodically.
        </p>
      </section>
      <section>
        <h2 className="text-base font-semibold">3. Processor oversight</h2>
        <p className="muted mt-2">
          We use selected infrastructure and service providers that support strong security practices and
          contractual safeguards for data handling.
        </p>
      </section>
      <section>
        <h2 className="text-base font-semibold">4. Incident response</h2>
        <p className="muted mt-2">
          We maintain a response process for potential incidents, including investigation, containment,
          and notification where required by applicable law.
        </p>
      </section>
      <section>
        <h2 className="text-base font-semibold">5. Contact</h2>
        <p className="muted mt-2">
          Data protection requests can be submitted through the contact form on this website.
        </p>
      </section>
    </LegalLayout>
  );
}

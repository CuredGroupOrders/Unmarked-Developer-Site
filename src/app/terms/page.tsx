import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "Terms of Service | Unmarked Goods",
  description: "Terms and conditions for using Unmarked Goods website and services.",
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="February 24, 2026">
      <section>
        <h2 className="text-base font-semibold">1. Use of website</h2>
        <p className="muted mt-2">
          The website is provided for general informational purposes. You agree to use it lawfully and
          not interfere with its operation or security.
        </p>
      </section>
      <section>
        <h2 className="text-base font-semibold">2. Service engagements</h2>
        <p className="muted mt-2">
          Project services are governed by separate written agreements that define scope, pricing,
          timelines, confidentiality, and deliverables.
        </p>
      </section>
      <section>
        <h2 className="text-base font-semibold">3. Intellectual property</h2>
        <p className="muted mt-2">
          Website content is owned by Unmarked Goods unless otherwise stated. Reproduction or use
          without permission is prohibited.
        </p>
      </section>
      <section>
        <h2 className="text-base font-semibold">4. Warranties and liability</h2>
        <p className="muted mt-2">
          The website is provided on an as-is basis. To the extent permitted by law, Unmarked Goods
          disclaims warranties and is not liable for indirect or consequential losses.
        </p>
      </section>
      <section>
        <h2 className="text-base font-semibold">5. Governing law</h2>
        <p className="muted mt-2">
          Governing law and dispute resolution terms are defined in client contracts. If no contract
          exists, local mandatory consumer laws may apply.
        </p>
      </section>
    </LegalLayout>
  );
}

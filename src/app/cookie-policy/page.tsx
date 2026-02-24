import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "Cookie Policy | Unmarked Goods",
  description: "Cookie usage and preferences on Unmarked Goods website.",
};

export default function CookiePolicyPage() {
  return (
    <LegalLayout title="Cookie Policy" lastUpdated="February 24, 2026">
      <section>
        <h2 className="text-base font-semibold">1. What cookies are</h2>
        <p className="muted mt-2">
          Cookies are small text files stored on your device to support core site functionality,
          analytics, and user experience preferences.
        </p>
      </section>
      <section>
        <h2 className="text-base font-semibold">2. Types of cookies we use</h2>
        <p className="muted mt-2">
          Essential cookies are used for core website operations. Optional analytics cookies may be
          used to understand traffic and improve the website.
        </p>
      </section>
      <section>
        <h2 className="text-base font-semibold">3. Consent and control</h2>
        <p className="muted mt-2">
          Where required by law, non-essential cookies are used only after consent. You can manage
          cookie settings through your browser controls.
        </p>
      </section>
      <section>
        <h2 className="text-base font-semibold">4. Contact</h2>
        <p className="muted mt-2">
          Questions about cookies can be submitted through the contact form on this website.
        </p>
      </section>
    </LegalLayout>
  );
}

import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { brand } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Contact | Unmarked Goods",
  description: "Start a project with Unmarked Goods.",
};

export default function ContactPage() {
  return (
    <main className="page-shell pb-8 pt-10">
      <section className="grid gap-6 md:grid-cols-[1fr_1.1fr]">
        <article className="glass rounded-3xl p-8">
          <h1 className="section-title">Tell us what you are building</h1>
          <p className="muted mt-4 text-sm leading-7">
            Share your goals, constraints, and timeline. We usually respond within one business day.
          </p>
          <p className="muted mt-6 text-sm">
            Prefer email? Reach us directly at{" "}
            <a className="underline" href={`mailto:${brand.contactEmail}`}>
              {brand.contactEmail}
            </a>
            .
          </p>
        </article>

        <article className="glass rounded-3xl p-8">
          <ContactForm />
        </article>
      </section>
    </main>
  );
}

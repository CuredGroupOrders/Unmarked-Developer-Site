import type { Metadata } from "next";
import { services } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Services | Unmarked Goods",
  description: "Explore mobile, software, and AI product services by Unmarked Goods.",
};

export default function ServicesPage() {
  return (
    <main className="page-shell pb-8 pt-10">
      <section className="glass rounded-3xl p-8 md:p-12">
        <h1 className="section-title">Services designed for measurable outcomes</h1>
        <p className="muted mt-4 max-w-3xl text-base leading-8">
          We partner with companies that need practical product leadership and high-quality execution.
          Every engagement is tailored to business goals, technical constraints, and timelines.
        </p>
      </section>

      <section className="mt-8 grid gap-5 md:grid-cols-3">
        {services.map((service) => (
          <article key={service.title} className="glass rounded-2xl p-6">
            <h2 className="text-lg font-semibold">{service.title}</h2>
            <p className="muted mt-3 text-sm leading-7">{service.description}</p>
            <ul className="mt-4 space-y-2 text-sm text-white/90">
              {service.bullets.map((bullet) => (
                <li key={bullet}>- {bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </main>
  );
}

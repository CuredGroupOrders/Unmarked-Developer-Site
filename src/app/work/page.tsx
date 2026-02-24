import type { Metadata } from "next";
import { caseStudies } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Work | Unmarked Goods",
  description: "Selected outcomes delivered by Unmarked Goods.",
};

export default function WorkPage() {
  return (
    <main className="page-shell pb-8 pt-10">
      <section className="glass rounded-3xl p-8 md:p-12">
        <h1 className="section-title">Case studies and delivery outcomes</h1>
        <p className="muted mt-4 max-w-3xl text-base leading-8">
          We focus on high-impact product work that improves customer experience, operational
          efficiency, and long-term business resilience.
        </p>
      </section>

      <section className="mt-8 grid gap-5 md:grid-cols-3">
        {caseStudies.map((caseStudy) => (
          <article key={caseStudy.client} className="glass rounded-2xl p-6">
            <h2 className="text-lg font-semibold">{caseStudy.client}</h2>
            <p className="mt-4 text-sm leading-7 text-white/95">{caseStudy.outcome}</p>
            <p className="muted mt-4 text-sm">Scope: {caseStudy.scope}</p>
          </article>
        ))}
      </section>
    </main>
  );
}

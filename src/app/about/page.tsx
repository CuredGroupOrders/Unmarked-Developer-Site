import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Unmarked Goods",
  description: "How Unmarked Goods works with companies to build trusted products.",
};

export default function AboutPage() {
  return (
    <main className="page-shell pb-8 pt-10">
      <section className="glass rounded-3xl p-8 md:p-12">
        <h1 className="section-title">A practical partner for critical product work</h1>
        <p className="muted mt-4 max-w-3xl text-base leading-8">
          Unmarked Goods combines strategy, design, and engineering to deliver products that are
          beautiful, reliable, and aligned with business objectives.
        </p>
      </section>

      <section className="mt-8 grid gap-5 md:grid-cols-3">
        <article className="glass rounded-2xl p-6">
          <h2 className="text-lg font-semibold">Discovery</h2>
          <p className="muted mt-3 text-sm leading-7">
            We map objectives, users, constraints, and success metrics before implementation begins.
          </p>
        </article>
        <article className="glass rounded-2xl p-6">
          <h2 className="text-lg font-semibold">Build</h2>
          <p className="muted mt-3 text-sm leading-7">
            Product, design, and engineering progress in weekly cycles with transparent delivery.
          </p>
        </article>
        <article className="glass rounded-2xl p-6">
          <h2 className="text-lg font-semibold">Scale</h2>
          <p className="muted mt-3 text-sm leading-7">
            We support launch, measurement, and continuous iteration to protect long-term value.
          </p>
        </article>
      </section>
    </main>
  );
}

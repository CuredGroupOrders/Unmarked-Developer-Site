import Link from "next/link";
import { HeroInteraction } from "@/components/hero-interaction";
import { capabilityChips, caseStudies, impactStats, services, trustPoints } from "@/lib/site-content";

export default function Home() {
  return (
    <main className="page-shell pb-8 pt-10">
      <section id="hero-card" className="glass accent-ring hero-card relative overflow-hidden rounded-3xl p-8 md:p-14">
        <HeroInteraction targetId="hero-card" />
        <div className="hero-bg-layer" aria-hidden="true">
          <span className="aurora-blob aurora-blob-one" />
          <span className="aurora-blob aurora-blob-two" />
          <span className="aurora-blob aurora-blob-three" />
          <span className="hero-grid-overlay" />
          <span className="hero-grain-overlay" />
          <span className="hero-mouse-light" />
        </div>
        <p className="hero-fade-up hero-delay-1 text-sm font-medium uppercase tracking-[0.2em] text-white/80">
          Product Studio
        </p>
        <h1 className="hero-fade-up hero-delay-2 mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          Trusted digital products for companies ready to scale.
        </h1>
        <p className="hero-fade-up hero-delay-3 muted mt-6 max-w-3xl text-lg leading-8">
          Unmarked Goods designs and builds mobile apps, custom software, and AI-enabled products
          that solve real business problems and support long-term growth.
        </p>
        <div className="hero-fade-up hero-delay-4 mt-8 flex flex-wrap gap-4">
          <Link
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold !text-blue-950 transition hover:bg-slate-200"
            href="/contact"
            style={{ color: "#0b2a5b" }}
          >
            Start a project
          </Link>
          <Link className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold hover:bg-white/10" href="/services">
            Explore services
          </Link>
        </div>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        {trustPoints.map((point) => (
          <article key={point} className="glass card-lift rounded-2xl p-6">
            <p className="text-sm leading-7 text-white/90">{point}</p>
          </article>
        ))}
      </section>

      <section className="mt-10 glass rounded-2xl p-5">
        <div className="marquee">
          <div className="marquee-track">
            {[...capabilityChips, ...capabilityChips].map((chip, index) => (
              <span key={`${chip}-${index}`} className="chip">
                {chip}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-14 animate-enter">
        <h2 className="section-title">What we build</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="glass card-lift rounded-2xl p-6">
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="muted mt-3 text-sm leading-7">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14 grid gap-5 md:grid-cols-3">
        {impactStats.map((stat) => (
          <article key={stat.label} className="glass card-lift rounded-2xl p-6">
            <p className="text-3xl font-semibold text-sky-100">{stat.value}</p>
            <p className="muted mt-2 text-sm">{stat.label}</p>
          </article>
        ))}
      </section>

      <section className="mt-14 animate-enter">
        <div className="flex items-center justify-between gap-3">
          <h2 className="section-title">Selected outcomes</h2>
          <Link className="text-sm underline" href="/work">
            View all case studies
          </Link>
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {caseStudies.map((item) => (
            <article key={item.client} className="glass card-lift rounded-2xl p-6">
              <h3 className="font-semibold">{item.client}</h3>
              <p className="mt-3 text-sm leading-7 text-white/95">{item.outcome}</p>
              <p className="muted mt-4 text-sm italic">
                &ldquo;{item.quote}&rdquo;
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

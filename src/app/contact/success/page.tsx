import Link from "next/link";

export default function ContactSuccessPage() {
  return (
    <main className="page-shell pb-8 pt-10">
      <section className="glass rounded-3xl p-8 md:p-12">
        <h1 className="section-title">Thanks, your message was sent.</h1>
        <p className="muted mt-4 max-w-2xl text-base leading-8">
          We will review your submission and follow up within one business day.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
        >
          Return to homepage
        </Link>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
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
          <form
            name="contact"
            method="POST"
            action="/contact/success"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="space-y-4"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Do not fill this out if you are human: <input name="bot-field" />
              </label>
            </p>

            <label className="block text-sm">
              Name
              <input
                required
                name="name"
                type="text"
                className="mt-2 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3"
              />
            </label>
            <label className="block text-sm">
              Email
              <input
                required
                name="email"
                type="email"
                className="mt-2 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3"
              />
            </label>
            <label className="block text-sm">
              Company
              <input
                name="company"
                type="text"
                className="mt-2 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3"
              />
            </label>
            <label className="block text-sm">
              What do you need?
              <textarea
                required
                name="message"
                rows={5}
                className="mt-2 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3"
              />
            </label>
            <label className="flex items-start gap-3 text-xs leading-6 text-white/85">
              <input required type="checkbox" name="consentAccepted" value="yes" className="mt-1" />
              <span>
                I consent to Unmarked Goods processing my submission for project communication and
                proposal follow-up. Review the{" "}
                <Link href="/privacy-policy" className="underline">
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link href="/data-protection" className="underline">
                  Data Protection
                </Link>{" "}
                details.
              </span>
            </label>
            <button
              type="submit"
              className="w-full rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
            >
              Send inquiry
            </button>
          </form>
        </article>
      </section>
    </main>
  );
}

"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export function ContactForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      company: String(formData.get("company") ?? ""),
      message: String(formData.get("message") ?? ""),
      consentAccepted: formData.get("consentAccepted") === "yes",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("failed_to_send");
      }

      router.push("/contact/success");
    } catch {
      setError("Could not send your message right now. Please email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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
          I consent to Unmarked Goods processing my submission for project communication and proposal
          follow-up. Review the{" "}
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
      {error ? <p className="text-sm text-red-200">{error}</p> : null}
      <button
        disabled={isSubmitting}
        type="submit"
        className="w-full rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Sending..." : "Send inquiry"}
      </button>
    </form>
  );
}

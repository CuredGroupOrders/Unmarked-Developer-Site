import Link from "next/link";
import { brand } from "@/lib/site-content";

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
  { href: "/data-protection", label: "Data Protection" },
  { href: "/cookie-policy", label: "Cookie Policy" },
];

export function SiteFooter() {
  return (
    <footer className="page-shell pb-10 pt-6">
      <div className="glass rounded-2xl p-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-medium">{brand.name}</p>
            <p className="muted mt-2 max-w-xl text-sm">
              Building trusted digital products for ambitious teams. Ready to talk about your build?
              <Link className="ml-1 underline" href="/contact">
                Contact us.
              </Link>
            </p>
          </div>
          <ul className="flex flex-wrap gap-4 text-sm text-white/85">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link className="hover:text-white" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

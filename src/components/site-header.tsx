import Link from "next/link";
import { brand, navItems } from "@/lib/site-content";

export function SiteHeader() {
  return (
    <header className="sticky top-4 z-20 page-shell pt-4">
      <div className="glass glass-strong accent-ring rounded-2xl px-5 py-3">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            {brand.name}
          </Link>
          <nav aria-label="Main navigation">
            <ul className="flex flex-wrap items-center gap-4 text-sm text-white/85">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link className="transition hover:text-white" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { brand, navItems } from "@/lib/site-content";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-4 z-20 page-shell pt-4">
      <div
        className={`rounded-2xl px-5 py-3 transition-all duration-300 ${
          isScrolled ? "header-solid shadow-2xl" : "glass glass-strong accent-ring"
        }`}
      >
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

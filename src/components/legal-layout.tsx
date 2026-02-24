type LegalLayoutProps = {
  title: string;
  children: React.ReactNode;
  lastUpdated: string;
};

export function LegalLayout({ title, children, lastUpdated }: LegalLayoutProps) {
  return (
    <main className="page-shell pb-8 pt-10">
      <section className="glass rounded-3xl p-8 md:p-12">
        <h1 className="section-title">{title}</h1>
        <p className="muted mt-2 text-sm">Last updated: {lastUpdated}</p>
        <div className="mt-8 space-y-7 text-sm leading-7 text-white/90">{children}</div>
      </section>
    </main>
  );
}

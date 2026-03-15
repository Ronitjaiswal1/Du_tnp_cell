export function SiteFooter() {
  return (
    <footer className="section-shell pb-12 pt-8">
      <div className="panel flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          <p className="text-sm font-semibold text-[var(--strong)]">Training & Placement Cell · Faculty of Technology · University of Delhi</p>
          <p className="mt-1 text-xs text-[var(--muted)]">Built for recruiter confidence, credibility, and conversion.</p>
        </div>
        <a href="mailto:tnp@fot.du.ac.in" className="text-sm font-medium text-[var(--strong)] hover:underline">
          tnp@fot.du.ac.in
        </a>
      </div>
    </footer>
  );
}

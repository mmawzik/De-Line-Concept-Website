/* Placeholder client lockup — a monogram mark + wordmark, standing in for a
   real client logo (SVG) until those are supplied. Shared across the three
   social-proof variants. Styles live in globals.css (.dl-logo-*). */
export function LogoLockup({ name, vertical = false }: { name: string; vertical?: boolean }) {
  const initials = name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0] ?? "")
    .join("")
    .toUpperCase();
  return (
    <div className={`dl-logo-lockup${vertical ? " v" : ""}`}>
      <span className="dl-logo-mark" aria-hidden="true">{initials}</span>
      <span className="dl-logo-name">{name}</span>
    </div>
  );
}

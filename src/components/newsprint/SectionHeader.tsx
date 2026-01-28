import { ReactNode } from "react";

export function SectionHeader({ kicker, title, right }: { kicker: string; title: string; right?: ReactNode }) {
  return (
    <header className="news-divider border-b-2 border-ink pb-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="font-ui text-xs tracking-[0.22em] uppercase text-muted-foreground">{kicker}</div>
          <h2 className="mt-2 font-display text-4xl leading-[0.95] tracking-tight">{title}</h2>
        </div>
        {right ? <div className="font-mono text-xs text-muted-foreground">{right}</div> : null}
      </div>
    </header>
  );
}

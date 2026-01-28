const ITEMS = [
  "BREAKING",
  "AVAILABLE FOR FREELANCE",
  "REACT",
  "NEXT.JS",
  "SYSTEM DESIGN",
  "UI ENGINEERING",
  "ACCESSIBILITY",
];

function TickerRow() {
  return (
    <div className="flex items-center gap-4 whitespace-nowrap">
      {ITEMS.map((t, i) => (
        <div key={`${t}-${i}`} className="flex items-center gap-4">
          <span className="font-ui text-xs tracking-[0.22em] uppercase">{t}</span>
          <span className="font-mono text-xs text-editorial">●</span>
        </div>
      ))}
    </div>
  );
}

export function BreakingTicker() {
  return (
    <section aria-label="Breaking news ticker" className="border-y border-ink bg-ink text-paper">
      <div className="overflow-hidden">
        <div className="flex w-max animate-marquee py-2">
          <div className="flex items-center pr-10">
            <TickerRow />
          </div>
          <div className="flex items-center pr-10" aria-hidden>
            <TickerRow />
          </div>
        </div>
      </div>
    </section>
  );
}

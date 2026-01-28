import { SectionHeader } from "@/components/newsprint/SectionHeader";

export function AboutColumn() {
  return (
    <section id="about" className="mx-auto mt-12 max-w-6xl px-6">
      <SectionHeader kicker="Opinion" title="About the developer" right={"BY AYAN · WEB ENGINEER"} />

      <div className="mt-8 grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8">
          <div className="border border-ink p-6 md:p-8">
            <p className="dropcap justify-text text-base leading-relaxed text-foreground md:text-lg">
              I approach software like publishing: structure precedes style, hierarchy precedes ornament. I write UI that
              reads cleanly, behaves predictably, and remains maintainable under pressure. When a product grows, the system
              must stay legible.
            </p>

            <p className="justify-text mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              My specialty is building interfaces that present dense information without confusion—dashboards, workflow
              tools, admin consoles, and editorial systems. I care about accessibility, performance, and the details that
              prevent UI from drifting into ambiguity.
            </p>

            <div className="mt-8 border-t border-ink/20 pt-6">
              <p className="font-mono text-xs text-muted-foreground">BY AYAN · WEB ENGINEER</p>
            </div>
          </div>
        </div>

        <aside id="contact" className="col-span-12 lg:col-span-4">
          <div className="border border-ink p-6 news-rule-grid">
            <div className="font-ui text-xs tracking-[0.22em] uppercase text-muted-foreground">Contact desk</div>
            <h3 className="mt-2 font-display text-3xl leading-[0.95] tracking-tight">Commission work</h3>

            <p className="justify-text mt-4 text-sm leading-relaxed text-muted-foreground">
              Available for freelance and contract work. If you need a UI system that reads like a publication, send a
              brief.
            </p>

            <div className="mt-6 space-y-3">
              <a
                className="block border border-ink bg-background px-4 py-3 font-mono text-xs hard-hover"
                href="mailto:mohammedayan76766@gmail.com"
              >
                mohammedayan76766@gmail.com
              </a>
              <a
                className="block border border-ink bg-background px-4 py-3 font-mono text-xs hard-hover"
                href="https://github.com/mohammed-ayan-zahoor"
                target="_blank"
                rel="noreferrer"
              >
                github.com/mohammed-ayan-zahoor
              </a>
            </div>

            <p className="mt-6 font-mono text-[11px] text-muted-foreground">
              RESPONSE WINDOW: 24–48H
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}

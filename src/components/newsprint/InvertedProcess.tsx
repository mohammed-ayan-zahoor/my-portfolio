import { SectionHeader } from "@/components/newsprint/SectionHeader";

const STEPS = [
  {
    n: "01",
    title: "Interrogate the brief",
    body: "I translate goals into constraints: information hierarchy, performance budgets, and failure modes.",
  },
  {
    n: "02",
    title: "Design the grid",
    body: "Structure first: layout rules, tokenized type scale, and components that enforce consistency.",
  },
  {
    n: "03",
    title: "Ship the system",
    body: "Typed interfaces, accessible interactions, and testable primitives—then iterate with evidence.",
  },
];

export function InvertedProcess() {
  return (
    <section className="mt-12 bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="border border-paper/60 p-6 md:p-8">
          <SectionHeader
            kicker="Inverted section"
            title="How I work"
            right={<span className="text-paper/70">Process notes</span>}
          />

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-12">
            {STEPS.map((s) => (
              <div key={s.n} className="md:col-span-4">
                <div className="border border-paper/60 p-5">
                  <div className="font-mono text-sm text-editorial">{s.n}</div>
                  <h3 className="mt-3 font-display text-2xl leading-[0.95] tracking-tight">{s.title}</h3>
                  <p className="mt-3 justify-text text-sm leading-relaxed text-paper/80">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

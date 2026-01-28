import { SectionHeader } from "@/components/newsprint/SectionHeader";

const COLS = [
    {
        label: "Languages",
        items: ["JavaScript", "MongoDB", "SQL", "HTML", "CSS"],
    },
    {
        label: "Frameworks",
        items: ["React", "Next.js", "Vite", "Tailwind", "Node.js"],
    },
    {
        label: "Experience",
        items: ["6 months", "Full-stack development", "UI/UX implementation"],
    },
    {
        label: "Stats",
        items: ["Projects: 7", "Components: 40+", "Active development"],
    },
];

export function SkillsAndStats() {
    return (
        <section id="articles" className="mx-auto mt-12 max-w-6xl px-6">
            <SectionHeader kicker="Data & index" title="Skills, stats, and working record" right={"Updated weekly"} />

            <div className="mt-8 border border-ink">
                <div className="grid grid-cols-1 md:grid-cols-4">
                    {COLS.map((c, i) => (
                        <div
                            key={c.label}
                            className={
                                i === 0
                                    ? "p-6"
                                    : "border-t border-ink md:border-l md:border-t-0 p-6"
                            }
                        >
                            <div className="font-ui text-xs tracking-[0.22em] uppercase text-muted-foreground">{c.label}</div>
                            <ul className="mt-4 space-y-2">
                                {c.items.map((it) => (
                                    <li key={it} className="flex items-start gap-3">
                                        <span className="mt-1.5 h-1.5 w-1.5 bg-editorial" aria-hidden />
                                        <span className="font-mono text-xs text-foreground">{it}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

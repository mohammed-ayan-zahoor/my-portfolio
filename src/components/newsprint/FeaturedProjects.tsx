import fig1 from "@/assets/project-fig-1.png";
import fig2 from "@/assets/project-fig-2.png";
import fig3 from "@/assets/project-fig-3.png";
import { SectionHeader } from "@/components/newsprint/SectionHeader";

type Project = {
    title: string;
    fig: string;
    meta: string;
    deck: string;
    tags: string[];
    href?: string;
};

const PROJECTS: Project[] = [
    {
        title: "MAJISA — Digital Innovation Studio",
        fig: fig1,
        meta: "FIG. 1.1 · 2026 · FULL STACK",
        deck:
            "A product-focused tech studio crafting high-performance websites, intelligent systems, and scalable digital solutions. We blend design precision, engineering discipline, and AI-driven workflows to build experiences that convert ideas into impact.",
        tags: ["Web Development", "AI Solutions", "UI/UX Systems"],
    },
    {
        title: "Hajj Expense Management Console",
        fig: fig2,
        meta: "FIG. 2.3 · 2025 · FRONT END",
        deck: "A mission-critical financial dashboard built for absolute transparency: real-time expense tracking, category-wise clarity, and zero-error accounting for Hajj operations. Designed to manage group budgets, vendor payments, and pilgrim contributions with audit-grade precision and operational speed.",
        tags: ["Expense Tracking", "Group Accounting", "GST & Compliance"],
    },
    {
        title: "Institute Management System (IMS)",
        fig: fig3,
        meta: "FIG. 3.2 · 2024 · SYSTEM DESIGN",
        deck:
            "A centralized academic operations console designed for structured control: student records, attendance, fees, and performance tracking unified into one precise workflow. Built to simplify administration, reduce manual overhead, and maintain data integrity at scale.",
        tags: ["Student Management", "Attendance System", "Fees & Reports"],
    },
];

export function FeaturedProjects() {
    return (
        <section id="work" className="mx-auto mt-10 max-w-6xl px-6">
            <SectionHeader kicker="Featured articles" title="Selected work, presented as record" right={"Filed under: Work"} />

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-12">
                {PROJECTS.map((p, idx) => (
                    <article
                        key={p.title}
                        className="hard-hover group border border-ink bg-background p-4 md:col-span-6 lg:col-span-4"
                    >
                        <div className="border border-ink">
                            <img
                                src={p.fig}
                                alt={`${p.title} figure`}
                                loading="lazy"
                                className="aspect-[3/2] w-full object-cover grayscale transition-[filter] duration-200 ease-out group-hover:sepia"
                            />
                        </div>

                        <div className="mt-4">
                            <p className="font-mono text-xs text-muted-foreground">{p.meta}</p>
                            <h3 className="mt-2 font-display text-2xl leading-[0.95] tracking-tight">{p.title}</h3>
                            <p className="justify-text mt-3 text-sm leading-relaxed text-muted-foreground">{p.deck}</p>

                            <div className="mt-4 flex flex-wrap gap-2">
                                {p.tags.map((t) => (
                                    <span
                                        key={t}
                                        className="border border-ink/25 bg-secondary px-2 py-1 font-mono text-[11px] text-foreground"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-5 border-t border-ink/20 pt-4">
                                <span className="ml-3 font-mono text-xs text-muted-foreground">— {idx + 1}/3</span>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

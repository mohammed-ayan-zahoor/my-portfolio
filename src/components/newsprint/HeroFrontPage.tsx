import portrait from "@/assets/newsprint-portrait.png";
import { Button } from "@/components/ui/button";

export function HeroFrontPage() {
    return (
        <section id="top" className="mx-auto max-w-6xl px-6 pt-10">
            <div className="border border-ink p-6 md:p-8 news-rule-grid">
                <div className="grid grid-cols-12 gap-6 md:gap-8">
                    <div className="col-span-12 lg:col-span-8">
                        <p className="font-ui text-xs tracking-[0.22em] uppercase text-muted-foreground">Front page</p>
                        <h1 className="mt-3 font-display text-6xl leading-[0.9] tracking-tight md:text-7xl lg:text-8xl">
                            A Web Developer Engineering Digital Experiences With Editorial Precision.
                        </h1>

                        <p className="dropcap justify-text mt-6 max-w-3xl text-base leading-relaxed text-foreground md:text-lg">
                            I build reliable, high-clarity interfaces and systems that behave like well-edited publications: structured,
                            legible, and disciplined. My work favors strong information hierarchy, predictable behavior, and
                            performance-minded engineering.
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-3">
                            <Button asChild variant="outline" size="lg">
                                <a href="#work">Read the Work</a>
                            </Button>
                            <Button asChild variant="editorial" size="lg">
                                <a href="#contact">Request an Edition</a>
                            </Button>
                            <span className="font-mono text-xs text-muted-foreground">FILED: UI ENGINEERING · SYSTEMS</span>
                        </div>
                    </div>

                    <div className="col-span-12 lg:col-span-4">
                        <figure className="border border-ink">
                            <img
                                src={portrait}
                                alt="Developer portrait in newsprint style"
                                loading="lazy"
                                className="aspect-[4/5] w-full object-cover grayscale"
                            />
                            <figcaption className="border-t border-ink px-4 py-3">
                                <div className="flex items-baseline justify-between gap-4">
                                    <span className="font-mono text-xs text-muted-foreground">PLATE 0.1 · 2026</span>
                                    <span className="font-ui text-[10px] tracking-[0.22em] uppercase">Staff portrait</span>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    );
}

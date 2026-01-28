import { Github, Mail } from "lucide-react";

const socials = [
    { label: "Email", href: "mailto:mohammedayan76766@gmail.com", Icon: Mail },
    { label: "GitHub", href: "https://github.com/mohammed-ayan-zahoor", Icon: Github },
];

export function PrintFooter() {
    return (
        <footer className="mx-auto mt-12 max-w-6xl px-6 pb-14">
            <div className="border-t-[4px] border-ink pt-8">
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 md:col-span-8">
                        <p className="font-mono text-xs text-muted-foreground">
                            EDITION: VOL. 1.0<br />
                            PRINTED DIGITALLY<br />
                            ALL RIGHTS RESERVED
                        </p>
                        <p className="mt-4 max-w-2xl justify-text text-sm leading-relaxed text-muted-foreground">
                            This publication is a working record. Projects, numbers, and notes are curated to emphasize structure,
                            clarity, and engineering discipline.
                        </p>
                    </div>

                    <div className="col-span-12 md:col-span-4 md:text-right">
                        <div className="flex flex-wrap items-center gap-2 md:justify-end">
                            {socials.map(({ label, href, Icon }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target={href.startsWith("http") ? "_blank" : undefined}
                                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                                    aria-label={label}
                                    className="hard-hover inline-flex h-11 w-11 items-center justify-center border border-ink bg-background"
                                >
                                    <Icon className="h-4 w-4" />
                                </a>
                            ))}
                        </div>
                        <p className="mt-4 font-ui text-xs tracking-[0.22em] uppercase text-muted-foreground">
                            Press office: mohammedayan76766@gmail.com
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

import { cn } from "@/lib/utils";

const nav = [
  { label: "Work", href: "#work" },
  { label: "Articles", href: "#articles" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Masthead() {
  return (
    <header className="sticky top-0 z-40 bg-background">
      <div className="border-b-[4px] border-ink">
        <div className="mx-auto grid max-w-6xl grid-cols-12 items-center gap-4 px-6 py-4">
          <div className="col-span-12 md:col-span-4">
            <a href="#top" className="inline-flex items-baseline gap-3">
              <span className="font-display text-3xl leading-none tracking-tight">AYAN TIMES</span>
              <span className="font-mono text-xs text-muted-foreground">Portfolio</span>
            </a>
          </div>

          <nav className="col-span-12 md:col-span-4">
            <ul className="flex flex-wrap items-center justify-start gap-x-6 gap-y-2 md:justify-center">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={cn(
                      "font-ui text-xs tracking-[0.22em] uppercase underline-offset-4 decoration-transparent transition-[color,text-decoration-color] duration-200 ease-out",
                      "hover:text-editorial hover:decoration-editorial hover:underline",
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-span-12 md:col-span-4 md:text-right">
            <div className="font-mono text-xs text-muted-foreground">
              VOL. 1 · JAN 27, 2026 · WEB EDITION
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

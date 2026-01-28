import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="border border-ink p-8 news-rule-grid">
          <p className="font-ui text-xs tracking-[0.22em] text-muted-foreground">ERROR</p>
          <h1 className="mt-3 font-display text-6xl leading-[0.9] tracking-tight">404</h1>
          <p className="mt-4 max-w-2xl justify-text text-base text-muted-foreground">
            The page you requested is not in this edition.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <Button asChild variant="outline">
              <a href="/">Return to Front Page</a>
            </Button>
            <span className="font-mono text-xs text-muted-foreground">REF: {location.pathname}</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;

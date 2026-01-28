import { Masthead } from "@/components/newsprint/Masthead";
import { HeroFrontPage } from "@/components/newsprint/HeroFrontPage";
import { BreakingTicker } from "@/components/newsprint/BreakingTicker";
import { FeaturedProjects } from "@/components/newsprint/FeaturedProjects";
import { SkillsAndStats } from "@/components/newsprint/SkillsAndStats";
import { InvertedProcess } from "@/components/newsprint/InvertedProcess";
import { AboutColumn } from "@/components/newsprint/AboutColumn";
import { PrintFooter } from "@/components/newsprint/PrintFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Masthead />

      <main>
        <HeroFrontPage />

        <div className="mx-auto mt-10 max-w-6xl px-6">
          <div className="border-t border-ink" />
        </div>

        <BreakingTicker />

        <FeaturedProjects />
        <SkillsAndStats />
        <InvertedProcess />
        <AboutColumn />
      </main>

      <PrintFooter />
    </div>
  );
};

export default Index;

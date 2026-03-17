import { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CategorySection } from "@/components/CategorySection";
import { ToolCard } from "@/components/ToolCard";
import { RecentlyUsed } from "@/components/RecentlyUsed";
import { categories, getToolsByCategory, getPopularTools, searchTools } from "@/data/tools";
import { Sparkles } from "lucide-react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const filtered = useMemo(() => (searchQuery.trim() ? searchTools(searchQuery) : []), [searchQuery]);
  const popular = getPopularTools();

  return (
    <div className="min-h-screen bg-background">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        {/* Hero */}
        <section className="mb-14">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-3 text-balance">
            Free high-performance tools for{" "}
            <span className="text-primary">daily tasks.</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl text-pretty">
            No signups. No limits. Just fast, browser-based utilities for PDF, Images, and Calculations.
          </p>
        </section>

        {/* Search results */}
        {searchQuery.trim() ? (
          <section className="mb-16">
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
              {filtered.length} result{filtered.length !== 1 ? "s" : ""} for "{searchQuery}"
            </h2>
            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filtered.map((tool) => (
                  <ToolCard key={tool.slug} tool={tool} />
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground text-sm">No tools match your search. Try a different term.</p>
            )}
          </section>
        ) : (
          <>
            {/* Recently Used */}
            <RecentlyUsed />

            {/* Popular */}
            <section className="mb-16">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles size={16} className="text-primary" />
                <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Popular Tools</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {popular.map((tool) => (
                  <ToolCard key={tool.slug} tool={tool} />
                ))}
              </div>
            </section>

            {/* Categories */}
            <div className="space-y-16">
              {categories.map((cat) => (
                <CategorySection
                  key={cat.id}
                  title={cat.label}
                  description={cat.description}
                  tools={getToolsByCategory(cat.id)}
                />
              ))}
            </div>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Index;

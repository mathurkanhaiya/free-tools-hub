import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ToolCard } from "@/components/ToolCard";
import { categories, getToolsByCategory, type ToolCategory } from "@/data/tools";
import { usePageSeo } from "@/hooks/use-page-seo";

const categoryCopy: Record<ToolCategory, { title: string; description: string; intro: string }> = {
  calculators: {
    title: "Free Online Calculators",
    description: "Use free calculators for EMI, GST, SIP, age, percentage, loan, BMI, interest and discounts.",
    intro: "Explore practical calculators for everyday use, finance, shopping, and health. Each tool is fast, mobile-friendly, and built for quick calculations.",
  },
  pdf: {
    title: "Free PDF Tools Online",
    description: "Use free PDF tools to merge, split, compress, rotate, unlock, protect, and convert PDFs online.",
    intro: "Find all PDF tools in one place for document conversion, organization, and optimization. Designed for speed and easy browser-based use.",
  },
  image: {
    title: "Free Image Tools Online",
    description: "Use free image tools to compress, resize, crop, rotate, watermark, convert, and optimize images online.",
    intro: "Browse image tools for conversions, editing, and optimization. Great for creators, businesses, and anyone preparing images for the web.",
  },
};

const CategoryPage = () => {
  const { category } = useParams<{ category: ToolCategory }>();

  if (!category || !(category in categoryCopy)) {
    return null;
  }

  const content = categoryCopy[category];
  const tools = getToolsByCategory(category);
  const categoryMeta = categories.find((item) => item.id === category);

  usePageSeo({
    title: `${content.title} | Free Utility Tools Hub`,
    description: content.description,
  });

  return (
    <div className="min-h-screen bg-background">
      <Header searchQuery="" onSearchChange={() => {}} />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
          <ArrowLeft size={14} />
          Back to home
        </Link>

        <section className="mb-10 rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-elevated">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-primary">{categoryMeta?.label}</p>
          <h1 className="mb-3 text-3xl font-extrabold tracking-tight sm:text-4xl">{content.title}</h1>
          <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">{content.intro}</p>
        </section>

        <section>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">{tools.length} tools available</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;

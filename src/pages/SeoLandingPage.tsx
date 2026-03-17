import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ToolCard } from "@/components/ToolCard";
import { getSeoLandingPage, getSeoLandingPageTools } from "@/data/seoPages";
import { usePageSeo } from "@/hooks/use-page-seo";

const SeoLandingPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const page = slug ? getSeoLandingPage(slug) : undefined;

  if (!page) {
    return null;
  }

  const tools = getSeoLandingPageTools(page.slug);

  usePageSeo({
    title: `${page.title} | Free Utility Tools Hub`,
    description: page.description,
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
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-primary">SEO Landing Page</p>
          <h1 className="mb-3 text-3xl font-extrabold tracking-tight sm:text-4xl">{page.title}</h1>
          <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">{page.intro}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {page.keywords.map((keyword) => (
              <span key={keyword} className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                {keyword}
              </span>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">Recommended tools</h2>
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

export default SeoLandingPage;

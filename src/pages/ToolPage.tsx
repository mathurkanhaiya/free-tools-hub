import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { getToolBySlug } from "@/data/tools";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { addRecentTool } from "@/components/RecentlyUsed";
import { ArrowLeft } from "lucide-react";
import {
  AgeCalculator, EMICalculator, GSTCalculator, PercentageCalculator,
  BMICalculator, LoanCalculator, InterestCalculator, SIPCalculator, DiscountCalculator,
} from "@/components/calculators";
import { FileToolPlaceholder } from "@/components/FileToolPlaceholder";

const calculatorMap: Record<string, React.FC> = {
  "age-calculator": AgeCalculator,
  "emi-calculator": EMICalculator,
  "gst-calculator": GSTCalculator,
  "percentage-calculator": PercentageCalculator,
  "bmi-calculator": BMICalculator,
  "loan-calculator": LoanCalculator,
  "interest-calculator": InterestCalculator,
  "sip-calculator": SIPCalculator,
  "discount-calculator": DiscountCalculator,
};

function getToolComponent(slug: string): React.ReactNode {
  const Calc = calculatorMap[slug];
  if (Calc) return <Calc />;

  // PDF tools
  if (slug.includes("pdf") || slug.includes("word")) {
    return <FileToolPlaceholder title="PDF" acceptTypes=".pdf,.doc,.docx" description="Supports PDF and Word files up to 50MB" />;
  }

  // Image tools
  return <FileToolPlaceholder title="Image" acceptTypes="image/*" description="Supports JPG, PNG, WebP up to 25MB" />;
}

const ToolPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const tool = slug ? getToolBySlug(slug) : undefined;

  useEffect(() => {
    if (slug) addRecentTool(slug);
  }, [slug]);

  if (!tool) {
    return (
      <div className="min-h-screen bg-background">
        <Header searchQuery="" onSearchChange={() => {}} />
        <div className="max-w-4xl mx-auto px-4 py-24 text-center">
          <h1 className="text-2xl font-bold mb-4">Tool not found</h1>
          <Link to="/" className="text-primary hover:underline text-sm">← Back to all tools</Link>
        </div>
      </div>
    );
  }

  const Icon = tool.icon;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.title,
    description: tool.description,
    applicationCategory: "UtilityApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: tool.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Header searchQuery="" onSearchChange={() => {}} />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
          <ArrowLeft size={14} />
          All Tools
        </Link>

        <section className="bg-card rounded-2xl shadow-elevated p-6 sm:p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-accent text-accent-foreground">
              <Icon size={24} strokeWidth={2} />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">{tool.title}</h1>
              <p className="text-sm text-muted-foreground">{tool.description}</p>
            </div>
          </div>
          {getToolComponent(tool.slug)}
        </section>

        <article className="space-y-8">
          <section>
            <h2 className="text-xl font-bold tracking-tight mb-3">How to use the {tool.title}</h2>
            <p className="text-muted-foreground leading-relaxed text-pretty">{tool.longDescription}</p>
          </section>

          <section>
            <h3 className="text-lg font-bold tracking-tight mb-4">Frequently Asked Questions</h3>
            <div className="grid gap-3">
              {tool.faqs.map((faq) => (
                <div key={faq.q} className="p-4 bg-card rounded-xl shadow-card">
                  <h4 className="font-semibold text-sm text-foreground">{faq.q}</h4>
                  <p className="text-muted-foreground text-sm mt-1.5 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default ToolPage;

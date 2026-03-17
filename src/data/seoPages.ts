import { getToolsByCategory, type ToolCategory } from "@/data/tools";

export interface SeoLandingPage {
  slug: string;
  title: string;
  description: string;
  intro: string;
  category: ToolCategory;
  keywords: string[];
}

export const seoLandingPages: SeoLandingPage[] = [
  {
    slug: "popular-calculators",
    title: "Popular Calculators Online",
    description: "Explore popular calculators for EMI, SIP, GST, BMI, age, discounts and more with fast browser-based tools.",
    intro: "Discover the most-used calculators for finance, health, and daily planning. These free tools are designed for speed, mobile use, and quick results without signups.",
    category: "calculators",
    keywords: ["EMI calculator", "GST calculator", "BMI calculator", "SIP calculator"],
  },
  {
    slug: "financial-calculators",
    title: "Financial Calculators Hub",
    description: "Use free financial calculators for loans, interest, EMI, SIP, and discounts in one place.",
    intro: "This page brings together practical financial calculators for borrowing, investing, and comparing prices. Ideal for personal finance, business planning, and quick projections.",
    category: "calculators",
    keywords: ["loan calculator", "interest calculator", "SIP returns", "discount calculator"],
  },
  {
    slug: "best-pdf-tools",
    title: "Best PDF Tools Online",
    description: "Find the best PDF tools to merge, split, compress, convert, rotate, unlock, and protect PDF files online.",
    intro: "Manage PDFs from any device with lightweight browser-based tools. Convert, optimize, and organize documents quickly while keeping workflows simple.",
    category: "pdf",
    keywords: ["merge PDF", "split PDF", "compress PDF", "PDF converter"],
  },
  {
    slug: "pdf-converter-tools",
    title: "PDF Converter Tools",
    description: "Convert PDF to Word, PDF to JPG, JPG to PDF, and Word to PDF using fast online converter tools.",
    intro: "If you need document conversion tools, this page groups the most useful PDF conversion workflows together for easy access and better indexing.",
    category: "pdf",
    keywords: ["PDF to Word", "Word to PDF", "PDF to JPG", "JPG to PDF"],
  },
  {
    slug: "image-converter-tools",
    title: "Image Converter Tools",
    description: "Convert JPG to PNG, PNG to JPG, and images to PDF with free browser-based image converter tools.",
    intro: "Switch image formats, prepare uploads, and create PDFs from images with quick conversion utilities built for web and mobile users.",
    category: "image",
    keywords: ["JPG to PNG", "PNG to JPG", "image to PDF", "image converter"],
  },
  {
    slug: "image-optimization-tools",
    title: "Image Optimization Tools",
    description: "Optimize, resize, crop, rotate, watermark, and compress images online with free image tools.",
    intro: "These image optimization tools help creators, marketers, and store owners prepare better images for websites, social media, and documents.",
    category: "image",
    keywords: ["image compressor", "resize image", "crop image", "rotate image"],
  },
];

export function getSeoLandingPage(slug: string) {
  return seoLandingPages.find((page) => page.slug === slug);
}

export function getSeoLandingPageTools(slug: string) {
  const page = getSeoLandingPage(slug);
  return page ? getToolsByCategory(page.category) : [];
}

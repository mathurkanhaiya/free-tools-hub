import {
  Calculator, Percent, TrendingUp, Scale, Baby, IndianRupee, Wallet, PiggyBank, BadgePercent,
  FileText, Scissors, Minimize2, FileOutput, FileInput, Image as ImageIcon, FileImage, RotateCw, Unlock, Lock,
  Eraser, Shrink, Maximize, Crop, ArrowRightLeft, Layers, FileUp, Droplets, RotateCcw,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ToolCategory = "calculators" | "pdf" | "image";

export interface Tool {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
  category: ToolCategory;
  popular?: boolean;
  faqs: { q: string; a: string }[];
}

export const categories: { id: ToolCategory; label: string; description: string }[] = [
  { id: "calculators", label: "Calculators", description: "Financial & everyday calculators" },
  { id: "pdf", label: "PDF Tools", description: "Edit, convert & manage PDFs" },
  { id: "image", label: "Image Tools", description: "Transform & optimize images" },
];

export const tools: Tool[] = [
  // CALCULATORS
  {
    slug: "age-calculator",
    title: "Age Calculator",
    description: "Calculate exact age from date of birth in years, months and days.",
    longDescription: "The Age Calculator instantly computes your exact age from your date of birth. It breaks down your age into years, months, and days, and even tells you the day of the week you were born. Perfect for filling out forms, verifying eligibility, or just satisfying curiosity.",
    icon: Baby,
    category: "calculators",
    popular: true,
    faqs: [
      { q: "How accurate is the age calculator?", a: "It calculates down to the exact day using your date of birth and current date." },
      { q: "Can I calculate age between two dates?", a: "Yes, enter any two dates to find the exact duration between them." },
    ],
  },
  {
    slug: "emi-calculator",
    title: "EMI Calculator",
    description: "Calculate monthly EMI for home, car or personal loans.",
    longDescription: "The EMI Calculator helps you plan loan repayments by computing the Equated Monthly Installment based on principal amount, interest rate, and tenure. Visualize total interest payable and plan your finances effectively.",
    icon: IndianRupee,
    category: "calculators",
    popular: true,
    faqs: [
      { q: "What is EMI?", a: "EMI stands for Equated Monthly Installment — the fixed payment amount made to a lender on a specified date each month." },
      { q: "How is EMI calculated?", a: "EMI = [P × r × (1+r)^n] / [(1+r)^n – 1], where P = principal, r = monthly interest rate, n = number of months." },
    ],
  },
  {
    slug: "gst-calculator",
    title: "GST Calculator",
    description: "Calculate GST amount and total price for Indian tax rates.",
    longDescription: "Quickly calculate Goods and Services Tax (GST) for any amount with support for all Indian GST slabs — 5%, 12%, 18%, and 28%. Compute both inclusive and exclusive GST amounts instantly.",
    icon: IndianRupee,
    category: "calculators",
    faqs: [
      { q: "What GST rates are supported?", a: "All standard Indian GST slabs: 5%, 12%, 18%, and 28%." },
      { q: "Can I calculate reverse GST?", a: "Yes, enter the GST-inclusive amount to find the base price and GST component." },
    ],
  },
  {
    slug: "percentage-calculator",
    title: "Percentage Calculator",
    description: "Calculate percentages, increases, decreases and more.",
    longDescription: "A versatile percentage calculator that handles all common percentage operations: find a percentage of a number, calculate percentage change, and determine what percentage one number is of another.",
    icon: Percent,
    category: "calculators",
    popular: true,
    faqs: [
      { q: "How do I calculate percentage increase?", a: "Percentage increase = ((New - Original) / Original) × 100." },
      { q: "Can I calculate percentage of a percentage?", a: "Yes, simply calculate the first percentage and then apply the second." },
    ],
  },
  {
    slug: "loan-calculator",
    title: "Loan Calculator",
    description: "Calculate total loan repayment, interest and monthly payments.",
    longDescription: "Plan your borrowing with our comprehensive loan calculator. Input the loan amount, annual interest rate, and repayment period to see your monthly payment, total interest, and total repayment amount.",
    icon: Wallet,
    category: "calculators",
    faqs: [
      { q: "What's the difference between EMI and Loan calculator?", a: "They use the same formula but the Loan Calculator also shows total repayment breakdown." },
      { q: "Does it support different compounding?", a: "The calculator uses monthly compounding, which is standard for most loans." },
    ],
  },
  {
    slug: "bmi-calculator",
    title: "BMI Calculator",
    description: "Calculate your Body Mass Index and health category.",
    longDescription: "Calculate your Body Mass Index (BMI) to understand your weight relative to your height. The calculator provides your BMI value along with the WHO-defined health category — underweight, normal, overweight, or obese.",
    icon: Scale,
    category: "calculators",
    popular: true,
    faqs: [
      { q: "What is a healthy BMI range?", a: "A BMI between 18.5 and 24.9 is considered healthy for most adults." },
      { q: "Is BMI accurate for athletes?", a: "BMI may overestimate body fat in athletes with high muscle mass." },
    ],
  },
  {
    slug: "interest-calculator",
    title: "Interest Calculator",
    description: "Calculate simple and compound interest on investments.",
    longDescription: "Calculate both simple and compound interest for any investment or savings. Compare the growth of your money over time with different interest types and compounding frequencies.",
    icon: TrendingUp,
    category: "calculators",
    faqs: [
      { q: "What's the difference between simple and compound interest?", a: "Simple interest is calculated only on the principal. Compound interest is calculated on principal plus accumulated interest." },
      { q: "How often is interest compounded?", a: "You can choose between annual, semi-annual, quarterly, or monthly compounding." },
    ],
  },
  {
    slug: "sip-calculator",
    title: "SIP Calculator",
    description: "Calculate returns on Systematic Investment Plan contributions.",
    longDescription: "Plan your mutual fund investments with the SIP calculator. See how small monthly investments grow over time with the power of compounding. Estimate your wealth accumulation for any SIP amount and duration.",
    icon: PiggyBank,
    category: "calculators",
    faqs: [
      { q: "What is SIP?", a: "SIP (Systematic Investment Plan) allows you to invest a fixed amount in mutual funds at regular intervals." },
      { q: "What returns can I expect?", a: "Returns depend on market conditions. Historical equity fund SIP returns in India average 12-15% annually." },
    ],
  },
  {
    slug: "discount-calculator",
    title: "Discount Calculator",
    description: "Calculate discount amount and final price after discount.",
    longDescription: "Quickly find out how much you save with any discount. Enter the original price and discount percentage to see the discount amount and final price. Great for shopping and deal comparison.",
    icon: BadgePercent,
    category: "calculators",
    faqs: [
      { q: "Can I calculate multiple discounts?", a: "Enter the first discounted price as the original price and apply the second discount." },
      { q: "How do I calculate discount percentage?", a: "Discount % = ((Original - Sale Price) / Original) × 100." },
    ],
  },

  // PDF TOOLS
  {
    slug: "merge-pdf",
    title: "Merge PDF",
    description: "Combine multiple PDF files into a single document.",
    longDescription: "Merge multiple PDF files into one document effortlessly. Upload your files, arrange them in the desired order, and download the combined PDF. No file size limits, no watermarks.",
    icon: FileText,
    category: "pdf",
    popular: true,
    faqs: [
      { q: "Is there a limit on file count?", a: "You can merge up to 20 PDF files at once in your browser." },
      { q: "Are my files secure?", a: "All processing happens in your browser. Files never leave your device." },
    ],
  },
  {
    slug: "split-pdf",
    title: "Split PDF",
    description: "Extract specific pages or split a PDF into multiple files.",
    longDescription: "Split a PDF document into individual pages or custom page ranges. Select exactly which pages you need and download them as separate files.",
    icon: Scissors,
    category: "pdf",
    faqs: [
      { q: "Can I extract specific pages?", a: "Yes, enter the page numbers or ranges you want to extract." },
      { q: "Does splitting reduce quality?", a: "No, the original quality is preserved in the split files." },
    ],
  },
  {
    slug: "compress-pdf",
    title: "Compress PDF",
    description: "Reduce PDF file size while maintaining quality.",
    longDescription: "Compress your PDF files to reduce their size for easier sharing and storage. Choose compression levels to balance quality and file size.",
    icon: Minimize2,
    category: "pdf",
    popular: true,
    faqs: [
      { q: "How much can PDFs be compressed?", a: "Typically 50-80% reduction depending on the content type." },
      { q: "Will quality be affected?", a: "The smart compression algorithm preserves text quality while optimizing images." },
    ],
  },
  {
    slug: "pdf-to-word",
    title: "PDF to Word",
    description: "Convert PDF documents to editable Word format.",
    longDescription: "Transform your PDF files into fully editable Word documents (.docx). Preserve formatting, tables, and images during conversion for seamless editing.",
    icon: FileOutput,
    category: "pdf",
    faqs: [
      { q: "Is formatting preserved?", a: "The converter maintains most formatting including fonts, tables, and images." },
      { q: "Can I convert scanned PDFs?", a: "Scanned PDFs require OCR processing for text extraction." },
    ],
  },
  {
    slug: "word-to-pdf",
    title: "Word to PDF",
    description: "Convert Word documents to PDF format.",
    longDescription: "Convert your Word documents (.doc, .docx) to PDF format instantly. The conversion preserves all formatting, fonts, and layout for professional document sharing.",
    icon: FileInput,
    category: "pdf",
    faqs: [
      { q: "Which Word formats are supported?", a: "Both .doc and .docx files are supported." },
      { q: "Are fonts preserved?", a: "Yes, fonts and formatting are embedded in the resulting PDF." },
    ],
  },
  {
    slug: "pdf-to-jpg",
    title: "PDF to JPG",
    description: "Convert PDF pages to high-quality JPG images.",
    longDescription: "Convert each page of your PDF into a high-quality JPG image. Perfect for presentations, social media, or any use where image format is preferred.",
    icon: ImageIcon,
    category: "pdf",
    faqs: [
      { q: "What resolution are the images?", a: "Images are exported at 150 DPI by default with an option for higher resolution." },
      { q: "Can I convert specific pages?", a: "Yes, select which pages to convert to JPG." },
    ],
  },
  {
    slug: "jpg-to-pdf",
    title: "JPG to PDF",
    description: "Convert JPG images to PDF documents.",
    longDescription: "Convert your JPG images into a professional PDF document. Combine multiple images into one PDF, adjust page sizes, and set margins.",
    icon: FileImage,
    category: "pdf",
    faqs: [
      { q: "Can I combine multiple images?", a: "Yes, upload multiple JPGs and they'll be combined into one PDF." },
      { q: "Can I set page size?", a: "Choose between A4, Letter, and custom page sizes." },
    ],
  },
  {
    slug: "rotate-pdf",
    title: "Rotate PDF",
    description: "Rotate PDF pages to the correct orientation.",
    longDescription: "Fix the orientation of your PDF pages by rotating them 90°, 180°, or 270°. Rotate individual pages or all pages at once.",
    icon: RotateCw,
    category: "pdf",
    faqs: [
      { q: "Can I rotate individual pages?", a: "Yes, select specific pages and rotate them independently." },
      { q: "Does it affect quality?", a: "No, rotation is lossless and doesn't affect document quality." },
    ],
  },
  {
    slug: "unlock-pdf",
    title: "Unlock PDF",
    description: "Remove password protection from PDF files.",
    longDescription: "Remove password restrictions from PDF files to enable printing, copying, and editing. You must know the original password to unlock the file.",
    icon: Unlock,
    category: "pdf",
    faqs: [
      { q: "Do I need the original password?", a: "Yes, you need the document password to remove protection." },
      { q: "Is this legal?", a: "It's legal when you have authorization to access the document." },
    ],
  },
  {
    slug: "protect-pdf",
    title: "Protect PDF",
    description: "Add password protection to your PDF files.",
    longDescription: "Secure your PDF documents with password protection. Set passwords for opening the file and restrict printing, copying, and editing permissions.",
    icon: Lock,
    category: "pdf",
    faqs: [
      { q: "What encryption is used?", a: "128-bit AES encryption is used for maximum security." },
      { q: "Can I set different permissions?", a: "Yes, separately control printing, copying, and editing access." },
    ],
  },

  // IMAGE TOOLS
  {
    slug: "remove-background",
    title: "Remove Background",
    description: "Remove image backgrounds automatically with AI.",
    longDescription: "Instantly remove backgrounds from any image using AI-powered detection. Perfect for product photos, profile pictures, and design work. Download as transparent PNG.",
    icon: Eraser,
    category: "image",
    popular: true,
    faqs: [
      { q: "What image formats are supported?", a: "JPG, PNG, and WebP images are supported." },
      { q: "Is the result transparent?", a: "Yes, the output is a transparent PNG file." },
    ],
  },
  {
    slug: "image-compressor",
    title: "Image Compressor",
    description: "Compress images to reduce file size without quality loss.",
    longDescription: "Reduce image file sizes by up to 80% while maintaining visual quality. Support for JPG, PNG, and WebP formats. Perfect for website optimization.",
    icon: Shrink,
    category: "image",
    popular: true,
    faqs: [
      { q: "How much can images be compressed?", a: "Typically 50-80% reduction while maintaining visual quality." },
      { q: "Which formats are supported?", a: "JPG, PNG, and WebP images can be compressed." },
    ],
  },
  {
    slug: "resize-image",
    title: "Resize Image",
    description: "Resize images to exact dimensions or percentages.",
    longDescription: "Resize any image to specific dimensions in pixels or by percentage. Maintain aspect ratio or set custom width and height. Batch resize multiple images at once.",
    icon: Maximize,
    category: "image",
    faqs: [
      { q: "Can I maintain aspect ratio?", a: "Yes, lock the aspect ratio to resize proportionally." },
      { q: "What's the maximum size?", a: "You can resize up to 10,000 × 10,000 pixels." },
    ],
  },
  {
    slug: "crop-image",
    title: "Crop Image",
    description: "Crop images to custom dimensions and aspect ratios.",
    longDescription: "Crop your images with precision using custom dimensions or preset aspect ratios. Perfect for creating social media images, thumbnails, and profile photos.",
    icon: Crop,
    category: "image",
    faqs: [
      { q: "Are there preset ratios?", a: "Yes, common presets like 1:1, 16:9, 4:3, and social media sizes." },
      { q: "Can I crop to exact pixels?", a: "Yes, enter exact pixel dimensions for the crop area." },
    ],
  },
  {
    slug: "jpg-to-png",
    title: "JPG to PNG",
    description: "Convert JPG images to PNG format with transparency.",
    longDescription: "Convert your JPG images to PNG format to gain transparency support and lossless quality. Ideal for logos, graphics, and images that need transparent backgrounds.",
    icon: ArrowRightLeft,
    category: "image",
    faqs: [
      { q: "Will quality be affected?", a: "PNG is lossless, so no additional quality loss occurs during conversion." },
      { q: "Will file size change?", a: "PNG files may be larger than JPG due to lossless compression." },
    ],
  },
  {
    slug: "png-to-jpg",
    title: "PNG to JPG",
    description: "Convert PNG images to JPG for smaller file sizes.",
    longDescription: "Convert PNG images to JPG format to reduce file sizes significantly. Set the quality level to balance between file size and visual quality.",
    icon: ArrowRightLeft,
    category: "image",
    faqs: [
      { q: "Will I lose transparency?", a: "Yes, JPG doesn't support transparency. Transparent areas become white." },
      { q: "Can I set quality level?", a: "Yes, choose the compression quality from 1-100." },
    ],
  },
  {
    slug: "image-to-pdf",
    title: "Image to PDF",
    description: "Convert images to PDF documents quickly.",
    longDescription: "Convert single or multiple images into a PDF document. Supports JPG, PNG, and WebP. Arrange images in order and set page size preferences.",
    icon: FileUp,
    category: "image",
    faqs: [
      { q: "Can I combine multiple images?", a: "Yes, upload multiple images and arrange them in your preferred order." },
      { q: "What page sizes are available?", a: "A4, Letter, Legal, and custom sizes are supported." },
    ],
  },
  {
    slug: "add-watermark",
    title: "Add Watermark",
    description: "Add text or image watermarks to your photos.",
    longDescription: "Protect your images by adding custom text or image watermarks. Control position, opacity, size, and rotation of the watermark. Batch process multiple images at once.",
    icon: Droplets,
    category: "image",
    faqs: [
      { q: "Can I use my logo as watermark?", a: "Yes, upload any image to use as a watermark." },
      { q: "Can I adjust opacity?", a: "Yes, control watermark transparency from 0% to 100%." },
    ],
  },
  {
    slug: "rotate-image",
    title: "Rotate Image",
    description: "Rotate and flip images to any angle.",
    longDescription: "Rotate images by 90°, 180°, 270° or any custom angle. Flip images horizontally or vertically. Preview changes before downloading.",
    icon: RotateCcw,
    category: "image",
    faqs: [
      { q: "Can I rotate to a custom angle?", a: "Yes, enter any angle between 0° and 360°." },
      { q: "Can I flip images?", a: "Yes, flip horizontally or vertically with one click." },
    ],
  },
];

export function getToolsByCategory(category: ToolCategory): Tool[] {
  return tools.filter((t) => t.category === category);
}

export function getPopularTools(): Tool[] {
  return tools.filter((t) => t.popular);
}

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug);
}

export function searchTools(query: string): Tool[] {
  const q = query.toLowerCase();
  return tools.filter(
    (t) =>
      t.title.toLowerCase().includes(q) ||
      t.description.toLowerCase().includes(q) ||
      t.category.toLowerCase().includes(q)
  );
}

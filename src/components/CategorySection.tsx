import { ToolCard } from "./ToolCard";
import type { Tool } from "@/data/tools";

interface CategorySectionProps {
  title: string;
  description: string;
  tools: Tool[];
}

export const CategorySection = ({ title, description, tools }: CategorySectionProps) => (
  <section>
    <div className="mb-6">
      <h2 className="text-xl font-bold tracking-tight">{title}</h2>
      <p className="text-sm text-muted-foreground mt-1">{description}</p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {tools.map((tool) => (
        <ToolCard key={tool.slug} tool={tool} />
      ))}
    </div>
  </section>
);

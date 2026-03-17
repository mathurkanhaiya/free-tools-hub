import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getToolBySlug } from "@/data/tools";
import { Clock } from "lucide-react";

export function getRecentTools(): string[] {
  try {
    return JSON.parse(localStorage.getItem("recentTools") || "[]");
  } catch {
    return [];
  }
}

export function addRecentTool(slug: string) {
  const recent = getRecentTools().filter((s) => s !== slug);
  recent.unshift(slug);
  localStorage.setItem("recentTools", JSON.stringify(recent.slice(0, 8)));
}

export const RecentlyUsed = () => {
  const [slugs, setSlugs] = useState<string[]>([]);

  useEffect(() => {
    setSlugs(getRecentTools());
  }, []);

  const recentTools = slugs.map(getToolBySlug).filter(Boolean);
  if (recentTools.length === 0) return null;

  return (
    <section className="mb-12">
      <div className="flex items-center gap-2 mb-4">
        <Clock size={16} className="text-muted-foreground" />
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Recently Used</h2>
      </div>
      <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1">
        {recentTools.map((tool) => {
          if (!tool) return null;
          const Icon = tool.icon;
          return (
            <Link
              key={tool.slug}
              to={`/tool/${tool.slug}`}
              className="flex items-center gap-2 px-4 py-2.5 bg-card rounded-lg shadow-card hover:shadow-card-hover transition-all duration-150 shrink-0 text-sm font-medium text-foreground hover:-translate-y-0.5"
            >
              <Icon size={16} className="text-muted-foreground" />
              {tool.title}
            </Link>
          );
        })}
      </div>
    </section>
  );
};

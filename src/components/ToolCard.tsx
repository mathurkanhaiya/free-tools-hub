import { Link } from "react-router-dom";
import type { Tool } from "@/data/tools";

export const ToolCard = ({ tool }: { tool: Tool }) => {
  const Icon = tool.icon;
  return (
    <Link
      to={`/tool/${tool.slug}`}
      className="group relative flex flex-col p-5 bg-card rounded-xl transition-all duration-200 hover:-translate-y-1 will-change-transform shadow-card hover:shadow-card-hover"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 rounded-lg bg-secondary text-muted-foreground group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-150">
          <Icon size={20} strokeWidth={2} />
        </div>
        <h3 className="font-semibold text-foreground tracking-tight text-sm">{tool.title}</h3>
      </div>
      <p className="text-sm text-muted-foreground leading-snug text-pretty">{tool.description}</p>
    </Link>
  );
};

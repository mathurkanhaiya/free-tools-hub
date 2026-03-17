import { Link } from "react-router-dom";
import { categories } from "@/data/tools";

export const Footer = () => (
  <footer className="border-t border-border mt-24">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
        <div className="col-span-2 sm:col-span-1">
          <div className="font-extrabold text-lg tracking-tighter flex items-center gap-2 mb-3">
            <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center text-primary-foreground text-xs font-black italic">U</div>
            UtilHub
          </div>
          <p className="text-sm text-muted-foreground text-pretty">Free, fast browser-based tools. No signups. No limits.</p>
        </div>
        {categories.map((cat) => (
          <div key={cat.id}>
            <h4 className="font-semibold text-sm mb-3">{cat.label}</h4>
            <p className="text-xs text-muted-foreground">{cat.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 pt-6 border-t border-border text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} UtilHub. All tools run in your browser — your data never leaves your device.
      </div>
    </div>
  </footer>
);

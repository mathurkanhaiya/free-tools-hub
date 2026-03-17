import { Search } from "lucide-react";
import { Link } from "react-router-dom";

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export const Header = ({ searchQuery, onSearchChange }: HeaderProps) => (
  <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
    <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center gap-4">
      <Link to="/" className="font-extrabold text-lg tracking-tighter flex items-center gap-2 shrink-0">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground text-sm font-black italic">
          U
        </div>
        <span className="hidden sm:inline">UtilHub</span>
      </Link>
      <div className="relative w-full max-w-md ml-auto sm:ml-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search 30+ tools..."
          className="w-full bg-secondary border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-ring/20 transition-all outline-none placeholder:text-muted-foreground"
        />
      </div>
    </nav>
  </header>
);

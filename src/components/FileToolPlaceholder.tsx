import { Upload } from "lucide-react";

interface FileToolPlaceholderProps {
  title: string;
  acceptTypes: string;
  description: string;
}

export const FileToolPlaceholder = ({ title, acceptTypes, description }: FileToolPlaceholderProps) => (
  <div className="space-y-4">
    <label className="flex flex-col items-center justify-center min-h-[220px] bg-secondary rounded-xl border-2 border-dashed border-border cursor-pointer hover:border-primary/30 hover:bg-accent transition-colors duration-150">
      <Upload size={32} className="text-muted-foreground mb-3" />
      <span className="text-sm font-medium text-foreground mb-1">Drop files here or click to upload</span>
      <span className="text-xs text-muted-foreground">{description}</span>
      <input type="file" accept={acceptTypes} className="hidden" multiple />
    </label>
    <button className="w-full py-2.5 bg-primary text-primary-foreground rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity">
      Process {title}
    </button>
    <p className="text-xs text-center text-muted-foreground">All processing happens in your browser. Files never leave your device.</p>
  </div>
);

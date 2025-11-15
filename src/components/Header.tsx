import { Button } from "@/components/ui/button";
import { Shield, Github } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 mx-auto">
        <div className="flex items-center gap-2">
          <Shield className="w-6 h-6 text-primary" />
          <span className="text-xl font-bold">ColdSafe<span className="text-primary">CI</span></span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="/#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="/pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </a>
          <a href="/docs" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Docs
          </a>
          <a href="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
        </nav>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </a>
          </Button>
          <Button size="sm" asChild>
            <a href="/auth">Get Started</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

import { Button } from "@/components/ui/button";
import { Shield, GitBranch, Zap } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[image:var(--gradient-hero)] opacity-10" />
      
      {/* Animated grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container relative z-10 px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">AI-Powered Security Testing</span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Secure Your{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              ColdBox Applications
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Automated penetration testing and security auditing for ColdFusion applications. 
            Integrate seamlessly into your CI/CD pipeline and catch vulnerabilities before they reach production.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="text-lg px-8 h-14 shadow-[var(--shadow-strong)] hover:scale-105 transition-transform">
              Get Started Free
              <Zap className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 h-14 border-2">
              View Demo
              <GitBranch className="ml-2 w-5 h-5" />
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground">Vulnerability Types</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">99%</div>
              <div className="text-sm text-muted-foreground">Detection Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">&lt;5min</div>
              <div className="text-sm text-muted-foreground">Setup Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

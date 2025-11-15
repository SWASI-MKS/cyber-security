import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-3xl bg-[image:var(--gradient-hero)] p-12 md:p-16 text-center shadow-[var(--shadow-strong)]">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          
          <div className="relative z-10 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground">
              Ready to Secure Your ColdBox Apps?
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Join developers who are building more secure ColdFusion applications with AI-powered security testing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button 
                size="lg" 
                variant="secondary"
                className="text-lg px-8 h-14 shadow-lg hover:scale-105 transition-transform"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 h-14 border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Github className="mr-2 w-5 h-5" />
                View on GitHub
              </Button>
            </div>
            
            <p className="text-sm text-primary-foreground/70 pt-4">
              No credit card required • Open source • 14-day free trial
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

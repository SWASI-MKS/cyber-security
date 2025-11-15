import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Install ColdSafeCI",
    description: "Add ColdSafeCI to your project with a single command or GitHub Action",
    code: "npm install -g coldsafeci"
  },
  {
    number: "02",
    title: "Configure Your Project",
    description: "Point ColdSafeCI to your ColdBox application root and customize scan rules",
    code: "coldsafeci init --framework coldbox"
  },
  {
    number: "03",
    title: "Run Your First Scan",
    description: "Execute security analysis locally or integrate into your CI/CD pipeline",
    code: "coldsafeci scan --report detailed"
  },
  {
    number: "04",
    title: "Review and Fix",
    description: "Get AI-powered recommendations and secure code suggestions for each issue",
    code: "coldsafeci suggest --vuln-id SQL-001"
  }
];

export const Integration = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Get Started in{" "}
            <span className="text-primary">Minutes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple integration process that fits into your existing workflow
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="border-2 hover:shadow-[var(--shadow-soft)] transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full transition-all duration-300 group-hover:w-40 group-hover:h-40" />
              <CardContent className="pt-6 relative">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">{step.number}</span>
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                    <div className="bg-muted rounded-lg p-3 font-mono text-sm">
                      <code>{step.code}</code>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-secure flex items-center justify-center">
                      <Check className="w-4 h-4 text-secure-foreground" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border-2 border-primary/20">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h3 className="text-2xl font-bold">GitHub Actions Integration</h3>
            <p className="text-muted-foreground">
              Add ColdSafeCI to your workflow in seconds
            </p>
            <div className="bg-card rounded-lg p-4 text-left">
              <pre className="text-sm overflow-x-auto">
                <code>{`name: Security Scan
on: [push, pull_request]
jobs:
  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: coldsafeci/scan-action@v1
        with:
          framework: coldbox
          fail-on: high`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

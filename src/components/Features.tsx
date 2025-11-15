import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Code, AlertTriangle, Sparkles, GitBranch, Lock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Comprehensive Vulnerability Detection",
    description: "Automatically detects SQL Injection, XSS, CSRF, session fixation, and more security vulnerabilities specific to ColdBox applications.",
    color: "text-primary"
  },
  {
    icon: Code,
    title: "ColdBox-Native Analysis",
    description: "Deep understanding of ColdBox framework patterns, conventions, and common security pitfalls in ColdFusion applications.",
    color: "text-accent"
  },
  {
    icon: GitBranch,
    title: "CI/CD Integration",
    description: "Seamless integration with GitHub Actions, Jenkins, GitLab CI, and other popular CI/CD platforms for continuous security monitoring.",
    color: "text-primary"
  },
  {
    icon: Sparkles,
    title: "AI-Powered Insights",
    description: "Machine learning algorithms learn from your codebase patterns and provide intelligent security recommendations tailored to your application.",
    color: "text-accent"
  },
  {
    icon: AlertTriangle,
    title: "Real-Time Alerts",
    description: "Get instant notifications when vulnerabilities are detected, with severity ratings and detailed remediation guidance.",
    color: "text-high"
  },
  {
    icon: Lock,
    title: "Secure Code Suggestions",
    description: "AI-generated secure code alternatives based on ColdBox best practices, helping developers fix issues quickly and correctly.",
    color: "text-secure"
  }
];

export const Features = () => {
  return (
    <section className="py-24 px-4" id="features">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Everything You Need to{" "}
            <span className="text-primary">Secure Your Code</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built specifically for ColdBox developers, with features that understand your framework
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-2 hover:shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

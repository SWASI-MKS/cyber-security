import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for trying out ColdSafeCI",
    features: [
      "1 project",
      "10 scans per month",
      "Basic vulnerability detection",
      "Email support",
      "Community access"
    ]
  },
  {
    name: "Pro",
    price: "$49",
    description: "Best for individual developers",
    features: [
      "10 projects",
      "Unlimited scans",
      "Advanced vulnerability detection",
      "Priority email support",
      "GitHub Actions integration",
      "Detailed reports",
      "API access"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For teams and organizations",
    features: [
      "Unlimited projects",
      "Unlimited scans",
      "Advanced vulnerability detection",
      "24/7 dedicated support",
      "Custom integrations",
      "SSO authentication",
      "Team collaboration",
      "SLA guarantee",
      "On-premise deployment"
    ]
  }
];

export default function Pricing() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your needs. All plans include core security features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card key={plan.name} className={plan.popular ? "border-primary shadow-lg scale-105" : ""}>
              {plan.popular && (
                <div className="bg-primary text-primary-foreground text-center py-2 rounded-t-lg font-semibold">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full" 
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <p className="text-sm text-muted-foreground">
            Questions? <a href="#" className="text-primary hover:underline">Contact our sales team</a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

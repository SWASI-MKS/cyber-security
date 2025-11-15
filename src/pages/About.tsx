import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Target, Zap } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About ColdSafeCI
            </h1>
            <p className="text-xl text-muted-foreground">
              Building a more secure ColdFusion ecosystem, one scan at a time
            </p>
          </div>

          <div className="prose prose-lg max-w-none mb-16">
            <p className="text-lg text-muted-foreground leading-relaxed">
              ColdSafeCI was born from a simple observation: while modern web frameworks have robust security 
              testing tools, ColdBox applications lacked specialized penetration testing solutions. We set out 
              to change that by combining deep ColdFusion expertise with cutting-edge AI technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Our Mission</h3>
                </div>
                <p className="text-muted-foreground">
                  To make security testing accessible, automated, and effective for every ColdBox developer, 
                  helping them identify and fix vulnerabilities before they become threats.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Our Vision</h3>
                </div>
                <p className="text-muted-foreground">
                  A world where every ColdBox application is built with security as a foundation, not an 
                  afterthought. We're creating the tools to make that vision a reality.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Our Technology</h3>
                </div>
                <p className="text-muted-foreground">
                  We leverage AI to understand ColdBox code patterns, automatically identify security 
                  vulnerabilities, and suggest secure alternatives based on industry best practices.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Our Community</h3>
                </div>
                <p className="text-muted-foreground">
                  Built by ColdFusion developers, for ColdFusion developers. We're committed to supporting 
                  the community with open-source tools and educational resources.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Join Us in Building Secure Applications</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're a solo developer or part of an enterprise team, ColdSafeCI helps you 
              catch vulnerabilities early and ship with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/auth" 
                className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-8 py-3 font-medium hover:bg-primary/90"
              >
                Get Started Free
              </a>
              <a 
                href="/docs" 
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 font-medium hover:bg-accent"
              >
                Read Documentation
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

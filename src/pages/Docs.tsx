import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Terminal, GitBranch, Shield } from "lucide-react";

export default function Docs() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Documentation</h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to integrate ColdSafeCI into your workflow
            </p>
          </div>

          <Tabs defaultValue="quickstart" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="quickstart">Quick Start</TabsTrigger>
              <TabsTrigger value="ci-cd">CI/CD</TabsTrigger>
              <TabsTrigger value="vulnerabilities">Vulnerabilities</TabsTrigger>
              <TabsTrigger value="api">API</TabsTrigger>
            </TabsList>

            <TabsContent value="quickstart" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Terminal className="w-5 h-5" />
                    Installation
                    </CardTitle>
                  <CardDescription>Get started with ColdSafeCI in minutes</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">1. Install ColdSafeCI</h3>
                    <div className="bg-muted p-4 rounded-lg">
                      <code className="text-sm">npm install -g coldsafeci</code>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">2. Initialize in your project</h3>
                    <div className="bg-muted p-4 rounded-lg">
                      <code className="text-sm">coldsafeci init</code>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">3. Run your first scan</h3>
                    <div className="bg-muted p-4 rounded-lg">
                      <code className="text-sm">coldsafeci scan</code>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Configuration</CardTitle>
                  <CardDescription>Customize ColdSafeCI for your project</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Create a <code className="bg-muted px-2 py-1 rounded">.coldsafeci.json</code> file in your project root:</p>
                  <div className="bg-muted p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto">
{`{
  "scan": {
    "paths": ["src/", "handlers/"],
    "exclude": ["tests/", "node_modules/"],
    "severity": ["critical", "high", "medium"]
  },
  "reporting": {
    "format": "json",
    "output": "security-report.json"
  }
}`}
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="ci-cd" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GitBranch className="w-5 h-5" />
                    GitHub Actions
                  </CardTitle>
                  <CardDescription>Integrate with GitHub Actions</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Add this workflow to <code className="bg-muted px-2 py-1 rounded">.github/workflows/security.yml</code>:</p>
                  <div className="bg-muted p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto">
{`name: Security Scan

on: [push, pull_request]

jobs:
  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: ColdSafeCI Scan
        uses: coldsafeci/action@v1
        with:
          api-key: ${"$"}{{ secrets.COLDSAFECI_API_KEY }}
          fail-on: critical`}
                    </pre>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Other CI/CD Platforms</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">GitLab CI</h3>
                    <p className="text-sm text-muted-foreground mb-2">Add to your <code className="bg-muted px-1 rounded">.gitlab-ci.yml</code>:</p>
                    <div className="bg-muted p-4 rounded-lg">
                      <pre className="text-sm overflow-x-auto">
{`security_scan:
  script:
    - npm install -g coldsafeci
    - coldsafeci scan --api-key ${"$"}COLDSAFECI_API_KEY`}
                      </pre>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Jenkins</h3>
                    <p className="text-sm text-muted-foreground mb-2">Add to your Jenkinsfile:</p>
                    <div className="bg-muted p-4 rounded-lg">
                      <pre className="text-sm overflow-x-auto">
{`stage('Security Scan') {
  steps {
    sh 'npm install -g coldsafeci'
    sh 'coldsafeci scan --api-key $\{COLDSAFECI_API_KEY\}'
  }
}`}
                      </pre>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="vulnerabilities" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Detected Vulnerabilities
                  </CardTitle>
                  <CardDescription>ColdBox-specific security issues we detect</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-critical">SQL Injection</h3>
                    <p className="text-sm text-muted-foreground">Unsafe database queries that could allow attackers to manipulate your database.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-critical">Cross-Site Scripting (XSS)</h3>
                    <p className="text-sm text-muted-foreground">Unescaped user input that could allow script injection.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-high">Session Fixation</h3>
                    <p className="text-sm text-muted-foreground">Improper session management that could allow session hijacking.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-high">Insecure Direct Object References</h3>
                    <p className="text-sm text-muted-foreground">Missing authorization checks on resource access.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-medium">Information Disclosure</h3>
                    <p className="text-sm text-muted-foreground">Exposed sensitive information in error messages or responses.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="api" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="w-5 h-5" />
                    API Reference
                  </CardTitle>
                  <CardDescription>Integrate ColdSafeCI programmatically</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Authentication</h3>
                    <p className="text-sm text-muted-foreground mb-2">Include your API key in the Authorization header:</p>
                    <div className="bg-muted p-4 rounded-lg">
                      <code className="text-sm">Authorization: Bearer YOUR_API_KEY</code>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Start a Scan</h3>
                    <div className="bg-muted p-4 rounded-lg">
                      <pre className="text-sm overflow-x-auto">
{`POST /api/v1/scans
{
  "project_id": "your-project-id",
  "repository_url": "https://github.com/...",
  "branch": "main"
}`}
                      </pre>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Get Scan Results</h3>
                    <div className="bg-muted p-4 rounded-lg">
                      <code className="text-sm">GET /api/v1/scans/:scan_id</code>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
}

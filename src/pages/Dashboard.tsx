import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { User } from "@supabase/supabase-js";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, LogOut, Plus, AlertTriangle, CheckCircle, Activity, Clock } from "lucide-react";
import { toast } from "sonner";

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState<any[]>([]);
  const [scanResults, setScanResults] = useState<any[]>([]);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate("/auth");
      } else {
        setUser(session.user);
        loadDashboardData(session.user.id);
      }
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate("/auth");
      } else {
        setUser(session.user);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const loadDashboardData = async (userId: string) => {
    const { data: projectsData } = await supabase
      .from("projects")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false });

    if (projectsData) {
      setProjects(projectsData);

      // Load scan results for all projects
      if (projectsData.length > 0) {
        const { data: scansData } = await supabase
          .from("scan_results")
          .select("*")
          .in("project_id", projectsData.map(p => p.id))
          .order("scan_date", { ascending: false })
          .limit(10);

        if (scansData) {
          setScanResults(scansData);
        }
      }
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast.success("Logged out successfully");
    navigate("/");
  };

  const handleNewProject = () => {
    toast.info("Project creation coming soon!");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  const totalVulnerabilities = scanResults.reduce((sum, scan) => sum + scan.total_vulnerabilities, 0);
  const criticalIssues = scanResults.reduce((sum, scan) => sum + scan.critical_count, 0);
  const highIssues = scanResults.reduce((sum, scan) => sum + scan.high_count, 0);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold">ColdSafe<span className="text-primary">CI</span></span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">{user?.email}</span>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Security Dashboard</h1>
            <p className="text-muted-foreground">Monitor and manage your ColdBox application security</p>
          </div>
          <Button onClick={handleNewProject}>
            <Plus className="w-4 h-4 mr-2" />
            New Project
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
              <Activity className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{projects.length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Vulnerabilities</CardTitle>
              <AlertTriangle className="w-4 h-4 text-medium" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalVulnerabilities}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Critical Issues</CardTitle>
              <AlertTriangle className="w-4 h-4 text-critical" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-critical">{criticalIssues}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">High Priority</CardTitle>
              <AlertTriangle className="w-4 h-4 text-high" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-high">{highIssues}</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Projects</CardTitle>
              <CardDescription>Your ColdBox applications being monitored</CardDescription>
            </CardHeader>
            <CardContent>
              {projects.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <p>No projects yet. Create your first project to start scanning!</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {projects.map((project) => (
                    <div key={project.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-semibold">{project.name}</h3>
                        <p className="text-sm text-muted-foreground">{project.repository_url || "No repository"}</p>
                      </div>
                      <Badge variant="outline">Active</Badge>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Scans</CardTitle>
              <CardDescription>Latest security scan results</CardDescription>
            </CardHeader>
            <CardContent>
              {scanResults.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <p>No scans yet. Run your first scan to see results here!</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {scanResults.map((scan) => (
                    <div key={scan.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">
                            {new Date(scan.scan_date).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex gap-2">
                          {scan.critical_count > 0 && (
                            <Badge className="bg-critical text-critical-foreground">
                              {scan.critical_count} Critical
                            </Badge>
                          )}
                          {scan.high_count > 0 && (
                            <Badge className="bg-high text-high-foreground">
                              {scan.high_count} High
                            </Badge>
                          )}
                          {scan.medium_count > 0 && (
                            <Badge className="bg-medium text-medium-foreground">
                              {scan.medium_count} Medium
                            </Badge>
                          )}
                        </div>
                      </div>
                      <CheckCircle className="w-5 h-5 text-secure" />
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

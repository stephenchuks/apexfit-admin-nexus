
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function GettingStartedPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">Getting Started</h1>
      <p className="text-muted-foreground">Welcome to the ApexFit Admin Portal! This guide will help you use the system effectively.</p>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Super Admin Quickstart</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-medium">1. Branch Management</h3>
              <p className="text-sm text-muted-foreground">Create and manage gym branches from the Branches section in the sidebar.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium">2. Global Reporting</h3>
              <p className="text-sm text-muted-foreground">Access organization-wide metrics and reports from the Global Reports section.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium">3. Member Overview</h3>
              <p className="text-sm text-muted-foreground">View and manage all members across branches from the Members section.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium">4. User Management</h3>
              <p className="text-sm text-muted-foreground">Create accounts for Branch Admins, Staff members, and Trainers.</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Admin Tools & Resources</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-medium">Analytics Dashboard</h3>
              <p className="text-sm text-muted-foreground">Real-time data visualization for key performance indicators.</p>
              <button className="mt-2 text-sm text-primary font-medium">View Dashboard →</button>
            </div>
            
            <div>
              <h3 className="text-lg font-medium">Help Center</h3>
              <p className="text-sm text-muted-foreground">Documentation, tutorials, and support resources.</p>
              <button className="mt-2 text-sm text-primary font-medium">Access Help Center →</button>
            </div>
            
            <div>
              <h3 className="text-lg font-medium">Admin Settings</h3>
              <p className="text-sm text-muted-foreground">Configure system preferences, notifications, and security settings.</p>
              <button className="mt-2 text-sm text-primary font-medium">Open Settings →</button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* TODO: Link these buttons to actual pages */}
      {/* TODO: Add user onboarding checklist */}
      {/* TODO: Add video tutorials section */}
    </div>
  );
}

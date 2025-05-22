
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function QuickActionsPage() {
  const actions = [
    {
      title: "Register Guest",
      description: "Register a guest visitor to the facility",
      path: "/staff/actions/register-guest",
      icon: "🏷️",
    },
    {
      title: "Manual Check-In",
      description: "Check in a member manually when they don't have their QR code",
      path: "/staff/actions/manual-checkin",
      icon: "✅",
    },
    {
      title: "View Schedule",
      description: "View today's class schedule and attendance",
      path: "/staff/actions/view-schedule",
      icon: "📅",
    },
    {
      title: "Contact Manager",
      description: "Quick access to contact the branch manager",
      path: "/staff/actions/contact-manager",
      icon: "📞",
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">Quick Actions</h1>
      <p className="text-muted-foreground">Common tasks for front desk staff</p>
      
      <div className="grid gap-4 md:grid-cols-2">
        {actions.map((action) => (
          <Link key={action.title} to={action.path}>
            <Card className="hover:bg-accent/50 transition-colors cursor-pointer h-full">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{action.icon}</div>
                  <div>
                    <h3 className="font-medium text-lg">{action.title}</h3>
                    <p className="text-sm text-muted-foreground">{action.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      
      {/* TODO: Add more quick actions based on staff needs */}
      {/* TODO: Add notifications for pending tasks */}
    </div>
  );
}

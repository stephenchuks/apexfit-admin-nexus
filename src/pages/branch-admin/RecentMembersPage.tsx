
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function RecentMembersPage() {
  // Dummy recent member data (static placeholders)
  const recentMembers = [
    { id: 1, name: "Riley Johnson", joinDate: "2023-06-15", planType: "Premium" },
    { id: 2, name: "Quinn Smith", joinDate: "2023-06-12", planType: "Standard" },
    { id: 3, name: "Jordan Lee", joinDate: "2023-06-10", planType: "Premium" },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">Recent Members</h1>
      <p className="text-muted-foreground">New members who joined in the last 30 days</p>
      
      <Card>
        <CardHeader>
          <CardTitle>New Members</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {recentMembers.map((member) => (
              <div key={member.id} className="flex justify-between items-center border-b pb-4">
                <div>
                  <h3 className="font-medium">{member.name}</h3>
                  <div className="text-sm text-muted-foreground">
                    <p>Joined: {new Date(member.joinDate).toLocaleDateString()}</p>
                    <p>Plan: {member.planType}</p>
                  </div>
                </div>
                <Link 
                  to={`/branch-admin/members/${member.id}`}
                  className="text-sm px-3 py-1 bg-gray-100 rounded-md hover:bg-gray-200"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Membership Growth</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="flex justify-between items-center">
              <span>This Month</span>
              <span className="font-medium">12 new members</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Last Month</span>
              <span className="font-medium">9 new members</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Growth</span>
              <span className="text-green-600 font-medium">+33%</span>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* TODO: Fetch recent member data from Supabase */}
      {/* TODO: Add member onboarding status tracking */}
      {/* TODO: Add welcome email functionality */}
    </div>
  );
}

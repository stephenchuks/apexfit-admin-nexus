
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useParams } from "react-router-dom";
import {
  AreaChart, Area, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

export default function MemberViewPage() {
  const { id } = useParams();
  
  // Dummy member data (static placeholder)
  const member = {
    id,
    name: "Alex Johnson",
    email: "alex@example.com",
    joinDate: "2023-01-15",
    status: "Active",
    plan: "Premium",
    branch: "Downtown Fitness",
    lastVisit: "2023-06-20",
    paymentStatus: "Current"
  };

  // Dummy visit history data for the chart
  const visitHistoryData = [
    { month: 'Jan', visits: 12 },
    { month: 'Feb', visits: 15 },
    { month: 'Mar', visits: 18 },
    { month: 'Apr', visits: 14 },
    { month: 'May', visits: 16 },
    { month: 'Jun', visits: 19 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">Member Profile</h1>
        <Link 
          to="/super-admin/members"
          className="text-sm px-3 py-1 bg-gray-100 rounded-md hover:bg-gray-200"
        >
          Back to Members
        </Link>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>{member.name}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Email</p>
              <p>{member.email}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Join Date</p>
              <p>{new Date(member.joinDate).toLocaleDateString()}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Status</p>
              <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                member.status === 'Active' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {member.status}
              </span>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Membership Plan</p>
              <p>{member.plan}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Home Branch</p>
              <p>{member.branch}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Last Visit</p>
              <p>{new Date(member.lastVisit).toLocaleDateString()}</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Visit History</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={visitHistoryData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Area type="monotone" dataKey="visits" stroke="#0d9488" fill="#0d948840" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Billing History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                <span>June 2023</span>
                <span className="text-green-600">Paid</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                <span>May 2023</span>
                <span className="text-green-600">Paid</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                <span>April 2023</span>
                <span className="text-green-600">Paid</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* TODO: Fetch real member data from Supabase */}
      {/* TODO: Add membership upgrade options */}
      {/* TODO: Add communication history */}
    </div>
  );
}

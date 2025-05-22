
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useParams } from "react-router-dom";
import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

export default function BranchMemberViewPage() {
  const { id } = useParams();
  
  // Dummy member data (static placeholder)
  const member = {
    id,
    name: "Jamie Smith",
    email: "jamie@example.com",
    joinDate: "2023-02-15",
    status: "Active",
    plan: "Standard",
    checkIns: 24,
    lastVisit: "2023-06-18",
    membershipRenewal: "2023-09-15",
  };

  // Dummy check-in data for chart
  const checkInData = [
    { week: 'Week 1', checkIns: 3 },
    { week: 'Week 2', checkIns: 4 },
    { week: 'Week 3', checkIns: 2 },
    { week: 'Week 4', checkIns: 5 },
    { week: 'Week 5', checkIns: 3 },
    { week: 'Week 6', checkIns: 4 },
    { week: 'Week 7', checkIns: 3 },
    { week: 'Week 8', checkIns: 0 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">Member Details</h1>
        <Link 
          to="/branch-admin/members"
          className="text-sm px-3 py-1 bg-gray-100 rounded-md hover:bg-gray-200"
        >
          Back to Members
        </Link>
      </div>
      
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Name</p>
              <p>{member.name}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Email</p>
              <p>{member.email}</p>
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
              <p className="text-sm font-medium text-muted-foreground">Member Since</p>
              <p>{new Date(member.joinDate).toLocaleDateString()}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Membership Plan</p>
              <p>{member.plan}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Renewal Date</p>
              <p>{new Date(member.membershipRenewal).toLocaleDateString()}</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Check-in History</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={checkInData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Bar dataKey="checkIns" fill="#0d9488" name="Check-ins" />
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="p-3 bg-muted rounded-md">
                <p className="text-sm text-muted-foreground">Total Check-ins</p>
                <p className="text-xl font-bold">{member.checkIns}</p>
              </div>
              <div className="p-3 bg-muted rounded-md">
                <p className="text-sm text-muted-foreground">Last Visit</p>
                <p className="text-xl font-bold">{new Date(member.lastVisit).toLocaleDateString()}</p>
              </div>
              <div className="p-3 bg-muted rounded-md">
                <p className="text-sm text-muted-foreground">Weekly Avg</p>
                <p className="text-xl font-bold">3.2</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Fitness Classes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                <span>Yoga Basics</span>
                <span>3 attendances</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                <span>HIIT Circuit</span>
                <span>5 attendances</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                <span>Spin Class</span>
                <span>2 attendances</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Billing History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                <span>June 2023</span>
                <span className="text-green-600">$49.99 Paid</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                <span>May 2023</span>
                <span className="text-green-600">$49.99 Paid</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                <span>April 2023</span>
                <span className="text-green-600">$49.99 Paid</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* TODO: Fetch real member data from Supabase */}
      {/* TODO: Add membership management actions */}
      {/* TODO: Add personal training history */}
    </div>
  );
}

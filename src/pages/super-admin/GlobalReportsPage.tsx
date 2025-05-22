
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell, Legend
} from 'recharts';

export default function GlobalReportsPage() {
  // Dummy data for the Annual Revenue chart
  const revenueData = [
    { month: 'Jan', revenue: 4000 },
    { month: 'Feb', revenue: 4500 },
    { month: 'Mar', revenue: 5100 },
    { month: 'Apr', revenue: 4800 },
    { month: 'May', revenue: 5300 },
    { month: 'Jun', revenue: 6000 },
    { month: 'Jul', revenue: 6500 },
    { month: 'Aug', revenue: 6300 },
    { month: 'Sep', revenue: 5900 },
    { month: 'Oct', revenue: 6100 },
    { month: 'Nov', revenue: 6700 },
    { month: 'Dec', revenue: 7200 },
  ];

  // Dummy data for Branch Distribution chart
  const branchData = [
    { name: 'Downtown', members: 320 },
    { name: 'Westside', members: 280 },
    { name: 'Northside', members: 190 },
    { name: 'Eastside', members: 240 },
    { name: 'Southside', members: 210 },
  ];

  // Dummy data for Subscription Breakdown chart
  const subscriptionData = [
    { name: 'Premium', value: 45 },
    { name: 'Standard', value: 35 },
    { name: 'Basic', value: 20 },
  ];

  // Dummy data for Growth Trends chart
  const growthData = [
    { month: 'Jan', newSignups: 65, cancellations: 20 },
    { month: 'Feb', newSignups: 72, cancellations: 23 },
    { month: 'Mar', newSignups: 80, cancellations: 25 },
    { month: 'Apr', newSignups: 78, cancellations: 21 },
    { month: 'May', newSignups: 85, cancellations: 18 },
    { month: 'Jun', newSignups: 90, cancellations: 22 },
  ];

  // Colors for the pie chart
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">Global Reports</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Annual Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => [`$${value}`, 'Revenue']} />
                <Line type="monotone" dataKey="revenue" stroke="#0d9488" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Branch Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={branchData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="members" fill="#0d9488" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Subscription Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={subscriptionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {subscriptionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
      
      {/* Additional Reports Section */}
      <Card>
        <CardHeader>
          <CardTitle>Growth Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={growthData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="newSignups" stroke="#0d9488" name="New Sign-ups" />
              <Line type="monotone" dataKey="cancellations" stroke="#ef4444" name="Cancellations" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      
      {/* TODO: Fetch real chart data from Supabase */}
      {/* TODO: Add export functionality for reports */}
      {/* TODO: Add date range filter for reports */}
    </div>
  );
}

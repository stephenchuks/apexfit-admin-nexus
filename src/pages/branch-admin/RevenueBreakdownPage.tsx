
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend,
  LineChart, Line, XAxis, YAxis, CartesianGrid
} from 'recharts';

export default function RevenueBreakdownPage() {
  // Dummy revenue data 
  const revenueSources = [
    { source: "Memberships", amount: 24500, percentage: 58 },
    { source: "Personal Training", amount: 8200, percentage: 19 },
    { source: "Group Classes", amount: 6300, percentage: 15 },
    { source: "Retail & Supplements", amount: 3100, percentage: 7 },
    { source: "Other", amount: 420, percentage: 1 },
  ];

  // Pie chart data
  const pieData = revenueSources.map(item => ({
    name: item.source,
    value: item.percentage
  }));

  // Monthly trends data
  const monthlyData = [
    { month: 'Jan', memberships: 20100, training: 7200, classes: 5500, retail: 2800 },
    { month: 'Feb', memberships: 21200, training: 7400, classes: 5700, retail: 2900 },
    { month: 'Mar', memberships: 22500, training: 7600, classes: 5900, retail: 2950 },
    { month: 'Apr', memberships: 23200, training: 7800, classes: 6100, retail: 3000 },
    { month: 'May', memberships: 23900, training: 8000, classes: 6200, retail: 3050 },
    { month: 'Jun', memberships: 24500, training: 8200, classes: 6300, retail: 3100 },
  ];

  // Colors for the pie chart
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">Revenue Breakdown</h1>
        <Link 
          to="/branch-admin/revenue"
          className="text-sm px-3 py-1 bg-gray-100 rounded-md hover:bg-gray-200"
        >
          Back to Revenue Dashboard
        </Link>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Revenue Breakdown by Category</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({name, value}) => `${name} ${value}%`}
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Revenue Sources</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {revenueSources.map((source) => (
              <div key={source.source} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{source.source}</span>
                  <span>${source.amount.toLocaleString()}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full" 
                    style={{ width: `${source.percentage}%` }}
                  ></div>
                </div>
                <div className="text-xs text-right text-muted-foreground">
                  {source.percentage}% of total
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Monthly Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => [`$${value}`, '']} />
              <Legend />
              <Line type="monotone" dataKey="memberships" stroke="#0088FE" name="Memberships" />
              <Line type="monotone" dataKey="training" stroke="#00C49F" name="Personal Training" />
              <Line type="monotone" dataKey="classes" stroke="#FFBB28" name="Group Classes" />
              <Line type="monotone" dataKey="retail" stroke="#FF8042" name="Retail & Supplements" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      
      {/* TODO: Fetch real revenue data from Supabase */}
      {/* TODO: Add date range filter */}
      {/* TODO: Add comparison with previous periods */}
    </div>
  );
}

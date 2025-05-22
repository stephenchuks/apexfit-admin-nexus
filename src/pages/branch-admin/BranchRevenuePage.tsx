
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Legend
} from 'recharts';

export default function BranchRevenuePage() {
  // Dummy data for Monthly Revenue chart
  const monthlyRevenueData = [
    { month: 'Jan', revenue: 12500 },
    { month: 'Feb', revenue: 13200 },
    { month: 'Mar', revenue: 14800 },
    { month: 'Apr', revenue: 14200 },
    { month: 'May', revenue: 15500 },
    { month: 'Jun', revenue: 16800 },
    { month: 'Jul', revenue: 16500 },
    { month: 'Aug', revenue: 17200 },
    { month: 'Sep', revenue: 18100 },
    { month: 'Oct', revenue: 19200 },
    { month: 'Nov', revenue: 20100 },
    { month: 'Dec', revenue: 21500 },
  ];

  // Dummy data for Revenue Breakdown chart
  const revenueBreakdownData = [
    { category: 'Memberships', amount: 24500 },
    { category: 'Personal Training', amount: 8200 },
    { category: 'Classes', amount: 6300 },
    { category: 'Supplements', amount: 3100 },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">Branch Revenue</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyRevenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => [`$${value}`, 'Revenue']} />
                <Line type="monotone" dataKey="revenue" stroke="#0d9488" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Revenue Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={revenueBreakdownData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip formatter={(value) => [`$${value}`, 'Amount']} />
                <Bar dataKey="amount" fill="#0d9488" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Revenue by Service</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left font-medium p-3">Service</th>
                  <th className="text-left font-medium p-3">Current Month</th>
                  <th className="text-left font-medium p-3">Last Month</th>
                  <th className="text-left font-medium p-3">Change</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Memberships</td>
                  <td className="p-3">$24,500</td>
                  <td className="p-3">$22,300</td>
                  <td className="p-3 text-green-600">+9.8%</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Personal Training</td>
                  <td className="p-3">$8,200</td>
                  <td className="p-3">$7,800</td>
                  <td className="p-3 text-green-600">+5.1%</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Classes</td>
                  <td className="p-3">$6,300</td>
                  <td className="p-3">$6,550</td>
                  <td className="p-3 text-red-600">-3.8%</td>
                </tr>
                <tr>
                  <td className="p-3">Supplements</td>
                  <td className="p-3">$3,100</td>
                  <td className="p-3">$2,850</td>
                  <td className="p-3 text-green-600">+8.7%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
      
      {/* TODO: Fetch revenue data from Supabase */}
      {/* TODO: Add date range selector */}
      {/* TODO: Add export functionality */}
    </div>
  );
}

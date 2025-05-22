
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function BranchAdminDashboard() {
  // Dummy data for member table
  const dummyMembers = [
    { id: 1, name: "Jane Cooper", joined: "01/10/2023", status: "Active" },
    { id: 2, name: "Michael Foster", joined: "15/11/2023", status: "Active" },
    { id: 3, name: "Emily Wilson", joined: "02/12/2023", status: "Inactive" }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold">Branch-Admin Dashboard</h1>
      
      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Branch Members</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">247</div>
            <p className="text-xs text-muted-foreground">+4 new this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,845.00</div>
            <p className="text-xs text-muted-foreground">+8.2% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Today's Check-ins</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">32</div>
            <p className="text-xs text-muted-foreground">87% of daily average</p>
          </CardContent>
        </Card>
      </div>
      
      {/* Member Table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Members</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Joined</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dummyMembers.map((member) => (
                <TableRow key={member.id}>
                  <TableCell>{member.name}</TableCell>
                  <TableCell>{member.joined}</TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      member.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }`}>
                      {member.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <button className="text-sm text-primary hover:underline">View Profile</button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      {/* Revenue Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Monthly Revenue Chart</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px] bg-muted/30 flex items-center justify-center">
          {/* Placeholder for Revenue Chart */}
          <p className="text-muted-foreground">Revenue chart will be displayed here</p>
        </CardContent>
      </Card>
    </div>
  );
}


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SuperAdminDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold">Super-Admin Dashboard</h1>
      
      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$24,567.89</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Members</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,284</div>
            <p className="text-xs text-muted-foreground">+7.3% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Branches</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">+1 new branch this quarter</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Avg. Retention</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94.6%</div>
            <p className="text-xs text-muted-foreground">+2.1% from last month</p>
          </CardContent>
        </Card>
      </div>
      
      {/* Charts */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Revenue Chart</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px] bg-muted/30 flex items-center justify-center">
            {/* Placeholder for Revenue Chart */}
            <p className="text-muted-foreground">Revenue chart will be displayed here</p>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Members by Branch</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px] bg-muted/30 flex items-center justify-center">
            {/* Placeholder for Branch Distribution Chart */}
            <p className="text-muted-foreground">Branch distribution chart will be displayed here</p>
          </CardContent>
        </Card>
        <Card className="col-span-7">
          <CardHeader>
            <CardTitle>Subscription Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px] bg-muted/30 flex items-center justify-center">
            {/* Placeholder for Subscription Chart */}
            <p className="text-muted-foreground">Subscription data will be displayed here</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

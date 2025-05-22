
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function StaffDashboard() {
  // Dummy data for today's schedule
  const scheduleItems = [
    { time: "08:00 AM", event: "Gym Opening Procedures" },
    { time: "10:30 AM", event: "Group Class: Spinning" },
    { time: "01:00 PM", event: "Equipment Maintenance Check" },
    { time: "03:30 PM", event: "New Member Orientation" },
    { time: "06:00 PM", event: "Group Class: HIIT" }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold">Staff Dashboard</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        {/* Today's Schedule */}
        <Card>
          <CardHeader>
            <CardTitle>Today's Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {scheduleItems.map((item, index) => (
                <div key={index} className="flex items-center justify-between border-b pb-2 last:border-0">
                  <div className="font-medium">{item.time}</div>
                  <div className="text-sm text-muted-foreground">{item.event}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        {/* Check-In Scanner */}
        <Card>
          <CardHeader>
            <CardTitle>Check-In Scanner</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex h-[300px] items-center justify-center border-2 border-dashed rounded-lg">
              <div className="text-center">
                <p className="text-muted-foreground mb-4">QR Scanner Here</p>
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
                  Activate Scanner
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Quick Actions */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <button className="p-4 rounded-lg bg-secondary hover:bg-secondary/80 text-secondary-foreground text-center">
                Register Guest
              </button>
              <button className="p-4 rounded-lg bg-secondary hover:bg-secondary/80 text-secondary-foreground text-center">
                Manual Check-in
              </button>
              <button className="p-4 rounded-lg bg-secondary hover:bg-secondary/80 text-secondary-foreground text-center">
                View Schedule
              </button>
              <button className="p-4 rounded-lg bg-secondary hover:bg-secondary/80 text-secondary-foreground text-center">
                Contact Manager
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

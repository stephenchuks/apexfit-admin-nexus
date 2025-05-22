
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TrainerDashboard() {
  // Dummy data for upcoming sessions
  const upcomingSessions = [
    { date: "Today, 10:00 AM", client: "Alex Johnson", type: "Personal Training" },
    { date: "Today, 2:30 PM", client: "Maria Garcia", type: "Fitness Assessment" },
    { date: "Tomorrow, 11:15 AM", client: "Robert Chen", type: "Strength Training" }
  ];
  
  // Dummy data for clients
  const clients = [
    { name: "Alex Johnson", plan: "Premium (3x weekly)", progress: "75%" },
    { name: "Maria Garcia", plan: "Standard (2x weekly)", progress: "45%" },
    { name: "Robert Chen", plan: "Basic (1x weekly)", progress: "30%" }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold">Trainer Dashboard</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        {/* Upcoming Sessions */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Sessions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingSessions.map((session, index) => (
                <div key={index} className="flex flex-col space-y-1 border-b pb-3 last:border-0">
                  <div className="flex justify-between">
                    <span className="font-medium">{session.date}</span>
                    <span className="text-sm bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                      {session.type}
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground">{session.client}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        {/* Client List */}
        <Card>
          <CardHeader>
            <CardTitle>Client List</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {clients.map((client, index) => (
                <div key={index} className="border-b pb-3 last:border-0">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium">{client.name}</span>
                    <button className="text-xs text-primary">View Details</button>
                  </div>
                  <div className="text-sm text-muted-foreground mb-2">{client.plan}</div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full" 
                      style={{ width: client.progress }}
                    ></div>
                  </div>
                  <div className="text-xs text-right mt-1">Progress: {client.progress}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        {/* Weekly Schedule */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Weekly Schedule</CardTitle>
          </CardHeader>
          <CardContent className="h-[200px] bg-muted/30 flex items-center justify-center">
            {/* Placeholder for weekly calendar */}
            <p className="text-muted-foreground">Weekly calendar will be displayed here</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function SessionsPage() {
  // Dummy session data (static placeholders)
  const upcomingSessions = [
    { id: 1, client: "Alex Johnson", date: "June 16, 2023", time: "10:00 AM", type: "Strength", status: "Confirmed" },
    { id: 2, client: "Jamie Smith", date: "June 18, 2023", time: "2:00 PM", type: "Cardio", status: "Pending" },
    { id: 3, client: "Taylor Wilson", date: "June 20, 2023", time: "11:30 AM", type: "Flexibility", status: "Confirmed" },
    { id: 4, client: "Jordan Lee", date: "June 21, 2023", time: "3:15 PM", type: "Endurance", status: "Confirmed" },
    { id: 5, client: "Casey Brown", date: "June 23, 2023", time: "9:45 AM", type: "Strength", status: "Pending" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">Sessions</h1>
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
          Schedule New Session
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Upcoming Sessions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left font-medium p-3">Client</th>
                    <th className="text-left font-medium p-3">Date</th>
                    <th className="text-left font-medium p-3">Time</th>
                    <th className="text-left font-medium p-3">Type</th>
                    <th className="text-left font-medium p-3">Status</th>
                    <th className="text-left font-medium p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {upcomingSessions.map((session) => (
                    <tr key={session.id} className="border-b">
                      <td className="p-3">
                        <Link to={`/trainer/clients/${session.id}`} className="text-primary hover:underline">
                          {session.client}
                        </Link>
                      </td>
                      <td className="p-3">{session.date}</td>
                      <td className="p-3">{session.time}</td>
                      <td className="p-3">
                        <span className={`inline-block px-2 py-1 rounded-full text-xs ${{
                          'Strength': 'bg-blue-100 text-blue-800',
                          'Cardio': 'bg-green-100 text-green-800',
                          'Flexibility': 'bg-purple-100 text-purple-800',
                          'Endurance': 'bg-amber-100 text-amber-800',
                        }[session.type]}`}>
                          {session.type}
                        </span>
                      </td>
                      <td className="p-3">
                        <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                          session.status === 'Confirmed' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {session.status}
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="flex gap-2">
                          <button className="text-xs px-2 py-1 bg-muted rounded-md hover:bg-muted/80">
                            Edit
                          </button>
                          <button className="text-xs px-2 py-1 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
                            Prepare
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Session Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-muted p-3 rounded-md">
                <p className="text-sm text-muted-foreground">This Week</p>
                <p className="text-2xl font-bold">8 Sessions</p>
              </div>
              <div className="bg-muted p-3 rounded-md">
                <p className="text-sm text-muted-foreground">This Month</p>
                <p className="text-2xl font-bold">32 Sessions</p>
              </div>
              <div className="bg-muted p-3 rounded-md">
                <p className="text-sm text-muted-foreground">Total Hours</p>
                <p className="text-2xl font-bold">36 hours</p>
              </div>
              
              <div className="pt-4">
                <h3 className="font-medium mb-2">Session Types</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <span>Strength (45%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span>Cardio (25%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                    <span>Flexibility (20%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <span>Endurance (10%)</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Past Sessions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left font-medium p-3">Client</th>
                  <th className="text-left font-medium p-3">Date</th>
                  <th className="text-left font-medium p-3">Type</th>
                  <th className="text-left font-medium p-3">Status</th>
                  <th className="text-left font-medium p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Alex Johnson</td>
                  <td className="p-3">June 9, 2023</td>
                  <td className="p-3">Strength</td>
                  <td className="p-3">
                    <span className="inline-block px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                      Completed
                    </span>
                  </td>
                  <td className="p-3">
                    <button className="text-xs px-2 py-1 bg-muted rounded-md hover:bg-muted/80">
                      View Notes
                    </button>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Jamie Smith</td>
                  <td className="p-3">June 7, 2023</td>
                  <td className="p-3">Cardio</td>
                  <td className="p-3">
                    <span className="inline-block px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                      Completed
                    </span>
                  </td>
                  <td className="p-3">
                    <button className="text-xs px-2 py-1 bg-muted rounded-md hover:bg-muted/80">
                      View Notes
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="p-3">Casey Brown</td>
                  <td className="p-3">June 5, 2023</td>
                  <td className="p-3">Flexibility</td>
                  <td className="p-3">
                    <span className="inline-block px-2 py-1 rounded-full text-xs bg-red-100 text-red-800">
                      Missed
                    </span>
                  </td>
                  <td className="p-3">
                    <button className="text-xs px-2 py-1 bg-muted rounded-md hover:bg-muted/80">
                      Reschedule
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
      
      {/* TODO: Implement session scheduling functionality */}
      {/* TODO: Connect to session management API */}
      {/* TODO: Add session preparation tools */}
    </div>
  );
}


import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

export default function ClientDetailPage() {
  const { id } = useParams<{ id: string }>();
  
  // Dummy client data (static placeholder)
  const client = {
    id: Number(id),
    name: "Alex Johnson",
    email: "alex@example.com",
    phone: "(555) 123-4567",
    joinDate: "2023-01-15",
    goal: "Strength Building",
    status: "Active",
    nextSession: "June 16, 2023 - 10:00 AM",
    sessionsCompleted: 12,
    sessionsRemaining: 8,
  };

  // Dummy session history data
  const sessionHistory = [
    { id: 1, date: "June 9, 2023", focus: "Upper Body", notes: "Increased bench press by 10 lbs" },
    { id: 2, date: "June 2, 2023", focus: "Lower Body", notes: "Worked on squat form" },
    { id: 3, date: "May 26, 2023", focus: "Cardio", notes: "HIIT training, good endurance" },
  ];

  // Dummy progress tracking data
  const progressData = [
    { week: '1', weight: 185, strength: 65, endurance: 40 },
    { week: '2', weight: 183, strength: 68, endurance: 45 },
    { week: '3', weight: 181, strength: 72, endurance: 50 },
    { week: '4', weight: 180, strength: 75, endurance: 55 },
    { week: '5', weight: 178, strength: 78, endurance: 60 },
    { week: '6', weight: 176, strength: 82, endurance: 65 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Link to="/trainer/clients" className="text-sm text-muted-foreground hover:text-foreground">
          ← Back to Clients
        </Link>
      </div>
      
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">{client.name}</h1>
        <div className="flex gap-2">
          <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
            Edit Client
          </button>
          <button className="bg-muted px-4 py-2 rounded-md hover:bg-muted/80 transition-colors">
            Schedule Session
          </button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Client Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p>{client.email}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p>{client.phone}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Member Since</p>
                <p>{new Date(client.joinDate).toLocaleDateString()}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Status</p>
                <p className="inline-block px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                  {client.status}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Training Goal</p>
                <p>{client.goal}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Progress Tracking</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={progressData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" label={{ value: 'Week', position: 'insideBottom', offset: -5 }} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="weight" stroke="#0d9488" name="Weight (lbs)" />
                <Line type="monotone" dataKey="strength" stroke="#3b82f6" name="Strength Score" />
                <Line type="monotone" dataKey="endurance" stroke="#f59e0b" name="Endurance Score" />
              </LineChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="bg-muted p-3 rounded-md">
                <p className="text-sm text-muted-foreground">Sessions Completed</p>
                <p className="text-xl font-bold">{client.sessionsCompleted}</p>
              </div>
              <div className="bg-muted p-3 rounded-md">
                <p className="text-sm text-muted-foreground">Sessions Remaining</p>
                <p className="text-xl font-bold">{client.sessionsRemaining}</p>
              </div>
              <div className="bg-muted p-3 rounded-md">
                <p className="text-sm text-muted-foreground">Next Session</p>
                <p className="text-sm font-medium">{client.nextSession}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Session History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {sessionHistory.map((session) => (
              <div key={session.id} className="border-b pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{session.date}</h3>
                    <p className="text-sm text-muted-foreground">Focus: {session.focus}</p>
                  </div>
                  <button className="text-xs px-2 py-1 bg-muted rounded-md hover:bg-muted/80">
                    View Details
                  </button>
                </div>
                <p className="text-sm mt-2">{session.notes}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      {/* TODO: Implement client edit functionality */}
      {/* TODO: Connect to client data API */}
      {/* TODO: Add session scheduling functionality */}
    </div>
  );
}

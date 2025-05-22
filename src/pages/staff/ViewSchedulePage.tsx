
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function ViewSchedulePage() {
  // Dummy schedule data (static placeholders)
  const todayClasses = [
    { id: 1, name: "Morning Yoga", time: "7:00 AM - 8:00 AM", instructor: "Jamie Lee", attendees: 12 },
    { id: 2, name: "HIIT Circuit", time: "9:00 AM - 10:00 AM", instructor: "Alex Smith", attendees: 15 },
    { id: 3, name: "Spin Class", time: "12:00 PM - 1:00 PM", instructor: "Taylor Johnson", attendees: 18 },
    { id: 4, name: "Pilates", time: "5:30 PM - 6:30 PM", instructor: "Jordan Wilson", attendees: 10 },
    { id: 5, name: "Evening Yoga", time: "7:00 PM - 8:00 PM", instructor: "Casey Brown", attendees: 14 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Link to="/staff/actions" className="text-sm text-muted-foreground hover:text-foreground">
          ← Back to Quick Actions
        </Link>
      </div>
      
      <h1 className="text-2xl font-bold tracking-tight">Today's Schedule</h1>
      <p className="text-muted-foreground">Classes and events for today</p>
      
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <button className="p-2 rounded-md hover:bg-muted">←</button>
          <h2 className="text-lg font-medium">June 15, 2023</h2>
          <button className="p-2 rounded-md hover:bg-muted">→</button>
        </div>
        
        <div className="flex gap-2">
          <button className="bg-muted px-3 py-1 rounded-md text-sm hover:bg-muted/80">Today</button>
          <button className="bg-muted px-3 py-1 rounded-md text-sm hover:bg-muted/80">Week</button>
          <button className="bg-muted px-3 py-1 rounded-md text-sm hover:bg-muted/80">Month</button>
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Classes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {todayClasses.map((cls) => (
              <div key={cls.id} className="border rounded-md p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-medium">{cls.name}</h3>
                    <p className="text-sm text-muted-foreground">{cls.time}</p>
                  </div>
                  <button className="text-xs px-2 py-1 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
                    View Roster
                  </button>
                </div>
                <div className="flex justify-between text-sm">
                  <p>Instructor: {cls.instructor}</p>
                  <p>{cls.attendees} attendees</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Room Usage</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="grid grid-cols-4">
            <div className="p-4 border-r border-b">
              <h3 className="font-medium">Studio A</h3>
              <p className="text-sm text-muted-foreground">3 classes today</p>
            </div>
            <div className="p-4 border-r border-b">
              <h3 className="font-medium">Studio B</h3>
              <p className="text-sm text-muted-foreground">2 classes today</p>
            </div>
            <div className="p-4 border-r border-b">
              <h3 className="font-medium">Spin Room</h3>
              <p className="text-sm text-muted-foreground">1 class today</p>
            </div>
            <div className="p-4 border-b">
              <h3 className="font-medium">Pool Area</h3>
              <p className="text-sm text-muted-foreground">2 classes today</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* TODO: Implement date picker */}
      {/* TODO: Connect to class schedule API */}
      {/* TODO: Add class roster functionality */}
    </div>
  );
}

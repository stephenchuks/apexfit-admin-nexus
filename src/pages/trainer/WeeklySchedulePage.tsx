
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function WeeklySchedulePage() {
  // Mock days of the week
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  
  // Mock time slots
  const timeSlots = ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", 
                     "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"];
  
  // Mock sessions (static placeholders)
  const sessions = [
    { id: 1, client: "Alex Johnson", day: "Monday", time: "10:00 AM", type: "Strength" },
    { id: 2, client: "Jamie Smith", day: "Wednesday", time: "1:00 PM", type: "Cardio" },
    { id: 3, client: "Casey Brown", day: "Friday", time: "4:00 PM", type: "Flexibility" },
  ];

  // Helper function to check if a session exists for a given day and time
  const getSession = (day: string, time: string) => {
    return sessions.find(session => session.day === day && session.time === time);
  };
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">Weekly Schedule</h1>
        <div className="flex gap-2">
          <button className="bg-muted px-3 py-1 rounded-md text-sm">Today</button>
          <button className="bg-muted px-3 py-1 rounded-md text-sm">This Week</button>
          <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
            Add Session
          </button>
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>June 12 - June 18, 2023</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-3 border-b border-r bg-muted/50 w-20">Time</th>
                  {days.map(day => (
                    <th key={day} className="p-3 border-b border-r bg-muted/50 w-40 text-center">{day}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {timeSlots.map(time => (
                  <tr key={time}>
                    <td className="p-3 border-b border-r bg-muted/30 text-sm font-medium">{time}</td>
                    {days.map(day => {
                      const session = getSession(day, time);
                      
                      return (
                        <td key={`${day}-${time}`} className="p-0 border-b border-r h-16 relative">
                          {session ? (
                            <div className={`absolute inset-1 rounded p-1 text-xs ${
                              session.type === 'Strength' 
                                ? 'bg-blue-100 text-blue-800' 
                                : session.type === 'Cardio'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-purple-100 text-purple-800'
                            }`}>
                              <p className="font-medium">{session.client}</p>
                              <p>{session.type}</p>
                            </div>
                          ) : null}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Sessions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {sessions.map(session => (
                <div key={session.id} className="flex justify-between items-center border-b pb-3">
                  <div>
                    <h3 className="font-medium">{session.client}</h3>
                    <p className="text-sm text-muted-foreground">
                      {session.day}, {session.time} - {session.type}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button className="text-xs px-2 py-1 bg-muted rounded-md hover:bg-muted/80">
                      Edit
                    </button>
                    <button className="text-xs px-2 py-1 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
                      View Notes
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Quick Add Session</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <label htmlFor="client" className="block text-sm font-medium mb-1">
                  Client
                </label>
                <select id="client" className="w-full p-2 border rounded-md">
                  <option value="">Select a client</option>
                  <option value="1">Alex Johnson</option>
                  <option value="2">Jamie Smith</option>
                  <option value="3">Taylor Wilson</option>
                  <option value="4">Jordan Lee</option>
                  <option value="5">Casey Brown</option>
                </select>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium mb-1">
                    Date
                  </label>
                  <input type="date" id="date" className="w-full p-2 border rounded-md" />
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-medium mb-1">
                    Time
                  </label>
                  <input type="time" id="time" className="w-full p-2 border rounded-md" />
                </div>
              </div>
              
              <div>
                <label htmlFor="type" className="block text-sm font-medium mb-1">
                  Session Type
                </label>
                <select id="type" className="w-full p-2 border rounded-md">
                  <option value="">Select a type</option>
                  <option value="strength">Strength</option>
                  <option value="cardio">Cardio</option>
                  <option value="flexibility">Flexibility</option>
                  <option value="endurance">Endurance</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="notes" className="block text-sm font-medium mb-1">
                  Notes
                </label>
                <textarea
                  id="notes"
                  className="w-full p-2 border rounded-md"
                  rows={3}
                  placeholder="Session plan or focus areas..."
                />
              </div>
              
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
                >
                  Add Session
                </button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
      
      {/* TODO: Implement calendar functionality */}
      {/* TODO: Connect to session scheduling API */}
      {/* TODO: Add drag-and-drop for scheduling */}
    </div>
  );
}


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from "react";

export default function WeeklySchedulePage() {
  const [date, setDate] = useState(new Date());
  
  // Mock sessions (static placeholders)
  const sessions = [
    { id: 1, client: "Alex Johnson", day: "Monday", time: "10:00 AM", type: "Strength" },
    { id: 2, client: "Jamie Smith", day: "Wednesday", time: "1:00 PM", type: "Cardio" },
    { id: 3, client: "Casey Brown", day: "Friday", time: "4:00 PM", type: "Flexibility" },
  ];

  const getDayName = (dateObj: Date) => {
    return dateObj.toLocaleDateString('en-US', { weekday: 'long' });
  };

  // Function to check if a date has a session
  const hasSession = (date: Date) => {
    const dayName = getDayName(date);
    return sessions.some(session => session.day === dayName);
  };
  
  const getSessionsForDate = (date: Date) => {
    const dayName = getDayName(date);
    return sessions.filter(session => session.day === dayName);
  };
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">Weekly Schedule</h1>
        <div className="flex gap-2">
          <button 
            className="bg-muted px-3 py-1 rounded-md text-sm"
            onClick={() => setDate(new Date())}
          >
            Today
          </button>
          <button className="bg-muted px-3 py-1 rounded-md text-sm">This Week</button>
          <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
            Add Session
          </button>
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>
            {date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="custom-calendar-container mb-6">
            <Calendar
              onChange={setDate}
              value={date}
              className="mx-auto rounded-md"
              calendarType="US"
              tileContent={({ date, view }) => 
                view === 'month' && hasSession(date) ? (
                  <div className="text-xs text-center mt-1">
                    <div className="bg-blue-100 text-blue-800 rounded-full px-1 w-full">
                      {getSessionsForDate(date).length} sessions
                    </div>
                  </div>
                ) : null
              }
            />
            <style jsx>{`
              .custom-calendar-container :global(.react-calendar) {
                width: 100%;
                border: none;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
              }
              .custom-calendar-container :global(.react-calendar__tile--active) {
                background: #0d9488;
                color: white;
              }
              .custom-calendar-container :global(.react-calendar__tile--now) {
                background: #e5e7eb;
              }
            `}</style>
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
    </div>
  );
}

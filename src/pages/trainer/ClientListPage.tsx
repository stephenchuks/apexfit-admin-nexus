
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function ClientListPage() {
  // Dummy client data (static placeholders)
  const clients = [
    { id: 1, name: "Alex Johnson", sessions: 12, nextSession: "June 16, 2023", goal: "Strength" },
    { id: 2, name: "Jamie Smith", sessions: 8, nextSession: "June 18, 2023", goal: "Weight Loss" },
    { id: 3, name: "Taylor Wilson", sessions: 15, nextSession: "June 15, 2023", goal: "Muscle Gain" },
    { id: 4, name: "Jordan Lee", sessions: 6, nextSession: "June 20, 2023", goal: "Endurance" },
    { id: 5, name: "Casey Brown", sessions: 10, nextSession: "June 17, 2023", goal: "Flexibility" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">Client List</h1>
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
          Add Client
        </button>
      </div>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Search clients..."
          className="flex-1 p-2 border rounded-md"
        />
        <select className="p-2 border rounded-md">
          <option value="">All Goals</option>
          <option value="strength">Strength</option>
          <option value="weight-loss">Weight Loss</option>
          <option value="muscle-gain">Muscle Gain</option>
          <option value="endurance">Endurance</option>
          <option value="flexibility">Flexibility</option>
        </select>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Your Clients</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left font-medium p-3">Name</th>
                  <th className="text-left font-medium p-3">Sessions</th>
                  <th className="text-left font-medium p-3">Next Session</th>
                  <th className="text-left font-medium p-3">Goal</th>
                  <th className="text-left font-medium p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {clients.map((client) => (
                  <tr key={client.id} className="border-b">
                    <td className="p-3">{client.name}</td>
                    <td className="p-3">{client.sessions} completed</td>
                    <td className="p-3">{client.nextSession}</td>
                    <td className="p-3">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs ${{
                        'Strength': 'bg-blue-100 text-blue-800',
                        'Weight Loss': 'bg-green-100 text-green-800',
                        'Muscle Gain': 'bg-purple-100 text-purple-800',
                        'Endurance': 'bg-amber-100 text-amber-800',
                        'Flexibility': 'bg-pink-100 text-pink-800',
                      }[client.goal]}`}>
                        {client.goal}
                      </span>
                    </td>
                    <td className="p-3">
                      <Link 
                        to={`/trainer/clients/${client.id}`}
                        className="text-sm px-3 py-1 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
                      >
                        View Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
      
      {/* TODO: Add client pagination */}
      {/* TODO: Implement search functionality */}
      {/* TODO: Add client creation form */}
    </div>
  );
}

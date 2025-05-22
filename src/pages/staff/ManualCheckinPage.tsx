
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function ManualCheckinPage() {
  // Dummy member search results (static placeholders)
  const searchResults = [
    { id: 1, name: "Alex Johnson", membershipType: "Premium", status: "Active" },
    { id: 2, name: "Jamie Smith", membershipType: "Standard", status: "Active" },
    { id: 3, name: "Taylor Wilson", membershipType: "Premium", status: "Active" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Link to="/staff/actions" className="text-sm text-muted-foreground hover:text-foreground">
          ← Back to Quick Actions
        </Link>
      </div>
      
      <h1 className="text-2xl font-bold tracking-tight">Manual Check-In</h1>
      <p className="text-muted-foreground">Manually check in a member who forgot their card or app</p>
      
      <Card>
        <CardHeader>
          <CardTitle>Search Member</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="flex gap-2">
              <input
                type="text"
                className="flex-1 p-2 border rounded-md"
                placeholder="Search by name, email, or ID"
              />
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
                Search
              </button>
            </div>
            
            <div className="overflow-x-auto mt-4">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left font-medium p-3">Name</th>
                    <th className="text-left font-medium p-3">Membership</th>
                    <th className="text-left font-medium p-3">Status</th>
                    <th className="text-left font-medium p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {searchResults.map((member) => (
                    <tr key={member.id} className="border-b">
                      <td className="p-3">{member.name}</td>
                      <td className="p-3">{member.membershipType}</td>
                      <td className="p-3">
                        <span className="inline-block px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                          {member.status}
                        </span>
                      </td>
                      <td className="p-3">
                        <button className="text-sm px-3 py-1 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
                          Check In
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Recent Check-ins</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-muted rounded-md">
              <div>
                <p className="font-medium">Casey Brown</p>
                <p className="text-xs text-muted-foreground">Checked in at 10:23 AM</p>
              </div>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                Successful
              </span>
            </div>
            <div className="flex justify-between items-center p-3 bg-muted rounded-md">
              <div>
                <p className="font-medium">Jordan Lee</p>
                <p className="text-xs text-muted-foreground">Checked in at 9:47 AM</p>
              </div>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                Successful
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* TODO: Implement member search functionality */}
      {/* TODO: Connect check-in to database */}
      {/* TODO: Add confirmation message after check-in */}
    </div>
  );
}


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function ContactManagerPage() {
  // Dummy manager data (static placeholders)
  const managers = [
    { id: 1, name: "Alex Rodriguez", role: "Branch Manager", phone: "(555) 123-4567", email: "alex@apexfit.com" },
    { id: 2, name: "Jamie Stevens", role: "Assistant Manager", phone: "(555) 987-6543", email: "jamie@apexfit.com" },
    { id: 3, name: "Casey Thompson", role: "Operations Manager", phone: "(555) 234-5678", email: "casey@apexfit.com" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Link to="/staff/actions" className="text-sm text-muted-foreground hover:text-foreground">
          ← Back to Quick Actions
        </Link>
      </div>
      
      <h1 className="text-2xl font-bold tracking-tight">Contact Manager</h1>
      <p className="text-muted-foreground">Quickly get in touch with management for assistance</p>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Management Team</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {managers.map((manager) => (
                <div key={manager.id} className="border rounded-md p-4">
                  <h3 className="font-medium">{manager.name}</h3>
                  <p className="text-sm text-muted-foreground">{manager.role}</p>
                  <div className="mt-2 space-y-1 text-sm">
                    <p>Phone: {manager.phone}</p>
                    <p>Email: {manager.email}</p>
                  </div>
                  <div className="mt-3 flex gap-2">
                    <button className="text-xs px-2 py-1 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
                      Call
                    </button>
                    <button className="text-xs px-2 py-1 bg-muted rounded-md hover:bg-muted/80">
                      Email
                    </button>
                    <button className="text-xs px-2 py-1 bg-muted rounded-md hover:bg-muted/80">
                      Message
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Send Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <label htmlFor="recipient" className="block text-sm font-medium mb-1">
                  Recipient
                </label>
                <select id="recipient" className="w-full p-2 border rounded-md">
                  <option value="">Select a manager</option>
                  {managers.map(manager => (
                    <option key={manager.id} value={manager.id}>{manager.name}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="urgency" className="block text-sm font-medium mb-1">
                  Urgency
                </label>
                <select id="urgency" className="w-full p-2 border rounded-md">
                  <option value="low">Low - For Information Only</option>
                  <option value="medium">Medium - Needs Attention Today</option>
                  <option value="high">High - Immediate Attention Required</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full p-2 border rounded-md"
                  rows={5}
                  placeholder="Type your message here..."
                />
              </div>
              
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
      
      {/* TODO: Implement messaging functionality */}
      {/* TODO: Add notification system for urgent messages */}
      {/* TODO: Connect to staff communication API */}
    </div>
  );
}

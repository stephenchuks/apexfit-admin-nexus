
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QrCode } from "lucide-react";

export default function CheckInsPage() {
  // Dummy check-in data (static placeholders)
  const checkIns = [
    { id: 1, memberName: "Alex Johnson", time: "08:30 AM", status: "Checked In" },
    { id: 2, memberName: "Taylor Smith", time: "09:15 AM", status: "Checked In" },
    { id: 3, memberName: "Jordan Lee", time: "10:00 AM", status: "Checked In" },
    { id: 4, memberName: "Casey Wilson", time: "11:30 AM", status: "Checked In" },
    { id: 5, memberName: "Morgan Brown", time: "01:45 PM", status: "Checked In" },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">Member Check-Ins</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>QR Scanner</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center gap-4 p-6 border-2 border-dashed rounded-xl">
              <QrCode className="h-16 w-16 text-muted-foreground" />
              <p className="text-center text-muted-foreground">
                QR Scanner will appear here. Scan a member's QR code to check them in.
              </p>
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors mt-2">
                Activate Scanner
              </button>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Today's Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-muted">
                <p className="text-sm text-muted-foreground">Total Check-ins</p>
                <p className="text-2xl font-bold">27</p>
              </div>
              <div className="p-4 rounded-lg bg-muted">
                <p className="text-sm text-muted-foreground">Busiest Hour</p>
                <p className="text-2xl font-bold">9-10 AM</p>
              </div>
              <div className="p-4 rounded-lg bg-muted">
                <p className="text-sm text-muted-foreground">New Members</p>
                <p className="text-2xl font-bold">3</p>
              </div>
              <div className="p-4 rounded-lg bg-muted">
                <p className="text-sm text-muted-foreground">Class Attendance</p>
                <p className="text-2xl font-bold">14</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Recent Check-ins</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left font-medium p-3">Member</th>
                  <th className="text-left font-medium p-3">Time</th>
                  <th className="text-left font-medium p-3">Status</th>
                  <th className="text-left font-medium p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {checkIns.map((checkIn) => (
                  <tr key={checkIn.id} className="border-b">
                    <td className="p-3">{checkIn.memberName}</td>
                    <td className="p-3">{checkIn.time}</td>
                    <td className="p-3">
                      <span className="inline-block px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                        {checkIn.status}
                      </span>
                    </td>
                    <td className="p-3">
                      <button className="text-sm px-3 py-1 bg-gray-100 rounded-md hover:bg-gray-200">
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
      
      {/* TODO: Integrate actual QR scanner */}
      {/* TODO: Fetch check-in data from Supabase */}
      {/* TODO: Add check-in notification system */}
    </div>
  );
}


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function BranchMembersPage() {
  // Dummy member data (static placeholders)
  const members = [
    { id: 1, name: "Jamie Smith", email: "jamie@example.com", joinDate: "2023-02-15", status: "Active" },
    { id: 2, name: "Chris Davis", email: "chris@example.com", joinDate: "2023-03-21", status: "Active" },
    { id: 3, name: "Pat Johnson", email: "pat@example.com", joinDate: "2023-04-08", status: "On Hold" },
    { id: 4, name: "Sam Wilson", email: "sam@example.com", joinDate: "2023-05-17", status: "Active" },
    { id: 5, name: "Alex Thompson", email: "alex@example.com", joinDate: "2023-06-30", status: "Inactive" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">Branch Members</h1>
        <div className="flex gap-2">
          <input 
            type="text" 
            placeholder="Search members..." 
            className="px-3 py-2 border rounded-md" 
          />
          <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
            Add Member
          </button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Downtown Branch Members</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left font-medium p-3">Name</th>
                  <th className="text-left font-medium p-3">Email</th>
                  <th className="text-left font-medium p-3">Joined Date</th>
                  <th className="text-left font-medium p-3">Status</th>
                  <th className="text-left font-medium p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {members.map((member) => (
                  <tr key={member.id} className="border-b">
                    <td className="p-3">{member.name}</td>
                    <td className="p-3">{member.email}</td>
                    <td className="p-3">{new Date(member.joinDate).toLocaleDateString()}</td>
                    <td className="p-3">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                        member.status === 'Active' 
                          ? 'bg-green-100 text-green-800' 
                          : member.status === 'Inactive'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {member.status}
                      </span>
                    </td>
                    <td className="p-3">
                      <Link 
                        to={`/branch-admin/members/${member.id}`}
                        className="text-sm px-3 py-1 bg-gray-100 rounded-md hover:bg-gray-200"
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
      
      {/* TODO: Fetch member data from Supabase */}
      {/* TODO: Add pagination */}
      {/* TODO: Add member detail page */}
    </div>
  );
}

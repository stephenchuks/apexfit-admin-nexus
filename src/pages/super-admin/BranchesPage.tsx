
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function BranchesPage() {
  // Dummy branch data (static placeholders)
  const branches = [
    { id: 1, name: "Downtown Fitness", location: "123 Main St", status: "Active" },
    { id: 2, name: "Westside Gym", location: "456 Park Ave", status: "Active" },
    { id: 3, name: "Northside Center", location: "789 Oak Rd", status: "Under Renovation" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">Branches</h1>
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
          Add Branch
        </button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Branches</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left font-medium p-3">Name</th>
                  <th className="text-left font-medium p-3">Location</th>
                  <th className="text-left font-medium p-3">Status</th>
                  <th className="text-left font-medium p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {branches.map((branch) => (
                  <tr key={branch.id} className="border-b">
                    <td className="p-3">{branch.name}</td>
                    <td className="p-3">{branch.location}</td>
                    <td className="p-3">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                        branch.status === 'Active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        {branch.status}
                      </span>
                    </td>
                    <td className="p-3">
                      <div className="flex gap-2">
                        <button className="text-sm px-3 py-1 bg-gray-100 rounded-md hover:bg-gray-200">
                          View
                        </button>
                        <button className="text-sm px-3 py-1 bg-gray-100 rounded-md hover:bg-gray-200">
                          Edit
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
      
      {/* TODO: Fetch branch data from Supabase */}
      {/* TODO: Add branch creation modal */}
      {/* TODO: Add branch edit functionality */}
    </div>
  );
}

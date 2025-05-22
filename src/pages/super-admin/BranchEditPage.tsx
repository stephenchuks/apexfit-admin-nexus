
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useParams } from "react-router-dom";

export default function BranchEditPage() {
  const { id } = useParams();
  
  // Dummy branch data (static placeholder)
  const branch = {
    id,
    name: "Downtown Fitness",
    location: "123 Main St, New York, NY 10001",
    status: "Active"
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">Edit Branch</h1>
        <Link 
          to={`/super-admin/branches/${id}`}
          className="text-sm px-3 py-1 bg-gray-100 rounded-md hover:bg-gray-200"
        >
          Cancel
        </Link>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Branch Information</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Branch Name
              </label>
              <input
                type="text"
                id="name"
                defaultValue={branch.name}
                className="w-full p-2 border rounded-md"
              />
            </div>
            
            <div>
              <label htmlFor="location" className="block text-sm font-medium mb-1">
                Location
              </label>
              <input
                type="text"
                id="location"
                defaultValue={branch.location}
                className="w-full p-2 border rounded-md"
              />
            </div>
            
            <div>
              <label htmlFor="status" className="block text-sm font-medium mb-1">
                Status
              </label>
              <select 
                id="status" 
                defaultValue={branch.status}
                className="w-full p-2 border rounded-md"
              >
                <option value="Active">Active</option>
                <option value="Under Renovation">Under Renovation</option>
                <option value="Closed">Closed</option>
                <option value="Coming Soon">Coming Soon</option>
              </select>
            </div>
            
            <div className="pt-4">
              <button
                type="submit"
                className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
              >
                Save Changes
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
      
      {/* TODO: Fetch real branch data from Supabase */}
      {/* TODO: Add form validation */}
      {/* TODO: Connect save functionality to API */}
    </div>
  );
}

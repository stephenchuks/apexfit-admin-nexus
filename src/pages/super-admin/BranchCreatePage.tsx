
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function BranchCreatePage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">Create New Branch</h1>
        <Link 
          to="/super-admin/branches"
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
                placeholder="Enter branch name"
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
                placeholder="Enter branch address"
                className="w-full p-2 border rounded-md"
              />
            </div>
            
            <div>
              <label htmlFor="status" className="block text-sm font-medium mb-1">
                Status
              </label>
              <select 
                id="status" 
                defaultValue="Coming Soon"
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
                Create Branch
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
      
      {/* TODO: Add form validation */}
      {/* TODO: Connect create functionality to API */}
    </div>
  );
}

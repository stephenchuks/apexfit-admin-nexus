
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useParams } from "react-router-dom";

export default function BranchViewPage() {
  const { id } = useParams();
  
  // Dummy branch data (static placeholder)
  const branch = {
    id,
    name: "Downtown Fitness",
    location: "123 Main St, New York, NY 10001",
    status: "Active",
    managerName: "Alex Johnson",
    phone: "(555) 123-4567",
    email: "downtown@apexfit.com",
    openingHours: "Monday-Friday: 6AM-10PM, Weekends: 8AM-8PM"
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">Branch Details</h1>
        <div className="flex gap-2">
          <Link 
            to="/super-admin/branches"
            className="text-sm px-3 py-1 bg-gray-100 rounded-md hover:bg-gray-200"
          >
            Back to Branches
          </Link>
          <Link 
            to={`/super-admin/branches/${id}/edit`}
            className="text-sm px-3 py-1 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
          >
            Edit Branch
          </Link>
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>{branch.name}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Location</p>
              <p>{branch.location}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Status</p>
              <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                branch.status === 'Active' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-amber-100 text-amber-800'
              }`}>
                {branch.status}
              </span>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Manager</p>
              <p>{branch.managerName}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Contact</p>
              <p>{branch.phone}</p>
              <p>{branch.email}</p>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Hours of Operation</p>
            <p>{branch.openingHours}</p>
          </div>
        </CardContent>
      </Card>
      
      {/* TODO: Fetch real branch data from Supabase */}
      {/* TODO: Add member statistics */}
      {/* TODO: Add revenue charts */}
    </div>
  );
}

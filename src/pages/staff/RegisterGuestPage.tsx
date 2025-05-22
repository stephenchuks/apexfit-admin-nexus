
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function RegisterGuestPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Link to="/staff/actions" className="text-sm text-muted-foreground hover:text-foreground">
          ← Back to Quick Actions
        </Link>
      </div>
      
      <h1 className="text-2xl font-bold tracking-tight">Register Guest</h1>
      <p className="text-muted-foreground">Register a guest for a day pass to the facility</p>
      
      <Card>
        <CardHeader>
          <CardTitle>Guest Information</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter first name"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter last name"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border rounded-md"
                placeholder="Enter email address"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full p-2 border rounded-md"
                placeholder="Enter phone number"
              />
            </div>
            
            <div>
              <label htmlFor="passType" className="block text-sm font-medium mb-1">
                Pass Type
              </label>
              <select id="passType" className="w-full p-2 border rounded-md">
                <option value="day">Day Pass</option>
                <option value="week">Week Pass</option>
                <option value="guest">Guest of Member</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="notes" className="block text-sm font-medium mb-1">
                Additional Notes
              </label>
              <textarea
                id="notes"
                className="w-full p-2 border rounded-md"
                rows={3}
                placeholder="Any additional information"
              />
            </div>
            
            <div className="flex justify-end mt-4">
              <button
                type="submit"
                className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
              >
                Register Guest
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
      
      {/* TODO: Implement form validation */}
      {/* TODO: Connect to guest registration API */}
      {/* TODO: Add success confirmation message */}
    </div>
  );
}

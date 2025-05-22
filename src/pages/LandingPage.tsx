
import { useNavigate } from 'react-router-dom';
import { Building, Shield, User, Users } from 'lucide-react';
import { RoleOption } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const roleOptions: RoleOption[] = [
  {
    id: 'super-admin',
    label: 'Super Admin',
    path: '/super-admin',
    description: 'Global metrics & branch management'
  },
  {
    id: 'branch-admin',
    label: 'Branch Admin',
    path: '/branch-admin',
    description: 'Branch operations & members'
  },
  {
    id: 'staff',
    label: 'Staff',
    path: '/staff',
    description: 'Front-desk & check-ins'
  },
  {
    id: 'trainer',
    label: 'Trainer',
    path: '/trainer',
    description: 'Personal training management'
  }
];

const getRoleIcon = (role: string) => {
  switch (role) {
    case 'super-admin':
      return <Shield className="h-12 w-12 text-primary" />;
    case 'branch-admin':
      return <Building className="h-12 w-12 text-primary" />;
    case 'staff':
      return <User className="h-12 w-12 text-primary" />;
    case 'trainer':
      return <Users className="h-12 w-12 text-primary" />;
    default:
      return null;
  }
};

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="container py-10">
      <h1 className="mb-10 text-center text-3xl font-bold">Welcome to ApexFit Admin Portal</h1>
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {roleOptions.map((role) => (
          <Card 
            key={role.id} 
            className="overflow-hidden transition-all hover:shadow-lg hover:scale-105"
          >
            <CardHeader className="p-6 flex items-center justify-center">
              {getRoleIcon(role.id)}
            </CardHeader>
            <CardContent className="px-6 py-2">
              <CardTitle className="text-xl text-center">{role.label}</CardTitle>
              <CardDescription className="text-center mt-2">
                {role.description}
              </CardDescription>
            </CardContent>
            <CardFooter className="p-6 flex justify-center">
              <Button onClick={() => navigate(role.path)} variant="default">
                Enter Dashboard
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

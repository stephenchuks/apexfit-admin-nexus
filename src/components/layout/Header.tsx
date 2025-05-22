
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Role, RoleOption } from '@/types';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from "@/components/ui/select";

interface HeaderProps {
  activeRole: Role;
  setActiveRole: (role: Role) => void;
}

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

export default function Header({ activeRole, setActiveRole }: HeaderProps) {
  const navigate = useNavigate();

  const handleRoleChange = (value: string) => {
    const role = value as Role;
    setActiveRole(role);
    
    // Navigate to the corresponding route
    const selectedRole = roleOptions.find(option => option.id === role);
    if (selectedRole) {
      navigate(selectedRole.path);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold text-primary">ApexFit Admin Portal</h1>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <label htmlFor="role-select" className="mr-2 text-sm font-medium">
              Role
            </label>
            <Select value={activeRole} onValueChange={handleRoleChange}>
              <SelectTrigger className="w-[180px]" id="role-select">
                <SelectValue placeholder="Select a role" />
              </SelectTrigger>
              <SelectContent>
                {roleOptions.map((role) => (
                  <SelectItem key={role.id} value={role.id}>
                    {role.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </header>
  );
}

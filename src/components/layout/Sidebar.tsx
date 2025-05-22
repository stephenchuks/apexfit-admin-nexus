
import { Building, Shield, User, Users, Calendar, QrCode, Clipboard, BarChart } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Role } from "@/types";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeRole: Role;
}

interface NavItem {
  label: string;
  path: string;
  icon: React.ReactNode;
}

export default function Sidebar({ activeRole }: SidebarProps) {
  // Navigation items based on active role
  const getNavItems = (role: Role): NavItem[] => {
    switch (role) {
      case 'super-admin':
        return [
          { label: 'Dashboard', path: '/super-admin', icon: <Shield className="h-5 w-5" /> },
          { label: 'Branches', path: '/super-admin/branches', icon: <Building className="h-5 w-5" /> },
          { label: 'Global Reports', path: '/super-admin/reports', icon: <BarChart className="h-5 w-5" /> },
          { label: 'Members', path: '/super-admin/members', icon: <Users className="h-5 w-5" /> },
          { label: 'Getting Started', path: '/super-admin/start', icon: <Clipboard className="h-5 w-5" /> },
        ];
      case 'branch-admin':
        return [
          { label: 'Dashboard', path: '/branch-admin', icon: <Building className="h-5 w-5" /> },
          { label: 'Revenue', path: '/branch-admin/revenue', icon: <BarChart className="h-5 w-5" /> },
          { label: 'Members', path: '/branch-admin/members', icon: <Users className="h-5 w-5" /> },
          { label: 'Recent Members', path: '/branch-admin/recent-members', icon: <User className="h-5 w-5" /> },
        ];
      case 'staff':
        return [
          { label: 'Dashboard', path: '/staff', icon: <User className="h-5 w-5" /> },
          { label: 'Check-ins', path: '/staff/checkins', icon: <QrCode className="h-5 w-5" /> },
          { label: 'Quick Actions', path: '/staff/actions', icon: <Clipboard className="h-5 w-5" /> },
        ];
      case 'trainer':
        return [
          { label: 'Dashboard', path: '/trainer', icon: <User className="h-5 w-5" /> },
          { label: 'Clients', path: '/trainer/clients', icon: <Users className="h-5 w-5" /> },
          { label: 'Schedule', path: '/trainer/schedule', icon: <Calendar className="h-5 w-5" /> },
          { label: 'Sessions', path: '/trainer/sessions', icon: <Building className="h-5 w-5" /> },
        ];
      default:
        return [];
    }
  };

  const navItems = getNavItems(activeRole);

  return (
    <aside className="hidden md:flex h-screen w-64 flex-col border-r bg-muted/40">
      <div className="flex flex-col gap-2 p-4">
        <div className="px-4 py-2">
          <h2 className="text-lg font-semibold">{activeRole.charAt(0).toUpperCase() + activeRole.slice(1).replace('-', ' ')}</h2>
        </div>
        <nav className="grid gap-1 px-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                  isActive ? "bg-accent text-accent-foreground" : "transparent"
                )
              }
            >
              {item.icon}
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
}

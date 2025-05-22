
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Role } from '@/types';
import Header from './Header';
import Sidebar from './Sidebar';

export default function AdminLayout() {
  const [activeRole, setActiveRole] = useState<Role>('super-admin');

  return (
    <div className="flex min-h-screen flex-col">
      <Header activeRole={activeRole} setActiveRole={setActiveRole} />
      <div className="flex flex-1">
        <Sidebar activeRole={activeRole} />
        <main className="flex-1 p-6 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import RoleToggle from './RoleToggle';

export default function MainLayout() {
  return (
    <div className="flex h-screen w-full bg-slate-50">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <RoleToggle />
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

import { useRole } from '../../context/RoleContext';
import CitizenView from './components/CitizenView';
import AdminView from './components/AdminView';

export default function IncidenciasUrbanas() {
  const { isAdmin } = useRole();

  return (
    <div className="h-full">
      {isAdmin ? <AdminView /> : <CitizenView />}
    </div>
  );
}

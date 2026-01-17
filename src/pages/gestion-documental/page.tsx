import { useRole } from '../../context/RoleContext';
import CitizenView from './components/CitizenView';
import AdminView from './components/AdminView';

export default function GestionDocumentalPage() {
  const { isAdminView } = useRole();

  return isAdminView ? <AdminView /> : <CitizenView />;
}

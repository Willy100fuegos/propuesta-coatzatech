import { useRole } from '../../context/RoleContext';
import { useLocation } from 'react-router-dom';

export default function RoleToggle() {
  const { role, toggleRole } = useRole();
  const location = useLocation();

  // Solo mostrar el toggle en estas rutas específicas
  const showToggle = [
    '/gestion-documental',
    '/incidencias-urbanas',
    '/tramites-servicios',
    '/gestion-activos'
  ].includes(location.pathname);

  if (!showToggle) return null;

  return (
    <div className="fixed top-6 right-6 z-50">
      <button
        onClick={toggleRole}
        className="flex items-center gap-3 bg-white shadow-lg rounded-full px-5 py-3 border border-slate-200 hover:shadow-xl transition-all cursor-pointer"
      >
        <span className="text-2xl">{role === 'citizen' ? '👁️' : '🔒'}</span>
        <div className="flex flex-col items-start">
          <span className="text-xs text-slate-500 font-medium">
            {role === 'citizen' ? 'Vista Ciudadana' : 'Vista Funcionaria/Admin'}
          </span>
          <span className="text-xs text-blue-600 font-semibold">Click para cambiar</span>
        </div>
      </button>
    </div>
  );
}

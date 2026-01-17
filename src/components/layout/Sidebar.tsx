
import { useLocation, Link } from 'react-router-dom';

interface NavItem {
  label: string;
  path: string;
  icon: string;
}

const navItems: NavItem[] = [
  { label: 'Propuesta Estratégica', path: '/', icon: 'ri-presentation-line' },
  { label: 'Gestión Documental', path: '/gestion-documental', icon: 'ri-file-text-line' },
  { label: 'Incidencias Urbanas', path: '/incidencias-urbanas', icon: 'ri-map-pin-line' },
  { label: 'Trámites y Servicios', path: '/tramites-servicios', icon: 'ri-service-line' },
  { label: 'Gestión de Activos', path: '/gestion-activos', icon: 'ri-building-line' },
  { label: 'Obras Transparentes', path: '/obras-transparentes', icon: 'ri-hammer-line' },
  { label: 'Coatzacoalcos Track', path: '/coatzacoalcos-track', icon: 'ri-satellite-line' }
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-72 flex-shrink-0 bg-gradient-to-b from-slate-900 to-slate-800 text-white flex flex-col shadow-2xl">
      {/* Logo */}
      <div className="p-6 border-b border-slate-700">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
            <i className="ri-government-line text-2xl text-white"></i>
          </div>
          <div>
            <h1 className="text-lg font-bold">Coatzacoalcos</h1>
            <p className="text-xs text-slate-400">Gobierno Digital</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-6 py-3 transition-all ${
                isActive
                  ? 'bg-teal-600 text-white border-r-4 border-teal-400'
                  : 'text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              <i className={`${item.icon} text-xl w-6 h-6 flex items-center justify-center`}></i>
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-6 border-t border-slate-700">
        <p className="text-xs text-slate-400 text-center">
          © 2026 Municipio de Coatzacoalcos
        </p>
      </div>
    </aside>
  );
}

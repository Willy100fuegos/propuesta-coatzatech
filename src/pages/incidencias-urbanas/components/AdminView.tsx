import { useState } from 'react';
import { MapContainer, TileLayer, Circle, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface Incident {
  id: number;
  type: string;
  location: string;
  priority: 'Alta' | 'Media' | 'Baja';
  status: string;
  time: string;
  x: number;
  y: number;
}

const mockIncidents: Incident[] = [
  { id: 1001, type: 'Bache', location: 'Av. Universidad esq. Zaragoza', priority: 'Alta', status: 'Pendiente', time: '2h', x: 35, y: 45 },
  { id: 1002, type: 'Luminaria', location: 'Col. Petrolera, Calle 5', priority: 'Media', status: 'En proceso', time: '5h', x: 55, y: 30 },
  { id: 1003, type: 'Fuga de agua', location: 'Malecón Costero km 3', priority: 'Alta', status: 'Pendiente', time: '1h', x: 70, y: 60 },
  { id: 1004, type: 'Basura', location: 'Mercado Morelos', priority: 'Media', status: 'Pendiente', time: '3h', x: 40, y: 55 },
  { id: 1005, type: 'Alcantarilla', location: 'Col. Olmeca, Calle 3ra', priority: 'Alta', status: 'Pendiente', time: '4h', x: 25, y: 35 },
  { id: 1006, type: 'Semáforo', location: 'Blvd. Independencia y Juárez', priority: 'Alta', status: 'En proceso', time: '6h', x: 60, y: 50 },
  { id: 1007, type: 'Bache', location: 'Col. Benito Juárez Norte', priority: 'Baja', status: 'Pendiente', time: '8h', x: 45, y: 25 },
  { id: 1008, type: 'Luminaria', location: 'Parque Independencia', priority: 'Media', status: 'Pendiente', time: '7h', x: 50, y: 70 },
];

export default function AdminView() {
  const [selectedIncident, setSelectedIncident] = useState<number | null>(null);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Alta': return 'bg-red-100 text-red-700 border-red-200';
      case 'Media': return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'Baja': return 'bg-green-100 text-green-700 border-green-200';
      default: return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const getHeatmapSize = (priority: string) => {
    switch (priority) {
      case 'Alta': return 'w-20 h-20';
      case 'Media': return 'w-16 h-16';
      case 'Baja': return 'w-12 h-12';
      default: return 'w-14 h-14';
    }
  };

  const highPriorityCount = mockIncidents.filter(i => i.priority === 'Alta').length;
  const resolvedToday = 18;
  const avgTime = '4h';

  return (
    <div className="h-full flex flex-col bg-slate-50">
      {/* Nota Estratégica - Vista Funcionaria */}
      <div className="mb-4 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg p-4 flex items-start gap-3">
        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
          <i className="ri-information-line text-white text-sm"></i>
        </div>
        <div className="pr-60">
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong className="text-blue-900">Lic. Mayra:</strong> Convierta las quejas de redes sociales en tickets 
            geolocalizados con prioridad automática. El mapa de calor le muestra las colonias con más reportes para 
            dirigir cuadrillas estratégicamente. Cada incidencia tiene foto, ubicación GPS y tiempo de respuesta medido. 
            Esto le permite demostrar con datos que su administración atiende el 95% de reportes en menos de 48 horas.
          </p>
        </div>
      </div>

      {/* Header con KPIs */}
      <div className="bg-white border-b border-slate-200 px-6 py-4">
        <h1 className="text-2xl font-bold text-slate-900 mb-4">Dashboard de Incidencias Urbanas</h1>
        
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-600 text-sm font-semibold">Reportes Hoy</p>
                <p className="text-3xl font-bold text-blue-900 mt-1">24</p>
              </div>
              <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
                <i className="ri-file-list-3-line text-2xl text-blue-700"></i>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 border border-green-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-600 text-sm font-semibold">Resueltos</p>
                <p className="text-3xl font-bold text-green-900 mt-1">{resolvedToday}</p>
              </div>
              <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center">
                <i className="ri-checkbox-circle-line text-2xl text-green-700"></i>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-4 border border-amber-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-amber-600 text-sm font-semibold">Tiempo Promedio</p>
                <p className="text-3xl font-bold text-amber-900 mt-1">{avgTime}</p>
              </div>
              <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center">
                <i className="ri-time-line text-2xl text-amber-700"></i>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-4 border border-red-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-red-600 text-sm font-semibold">Prioridad Alta</p>
                <p className="text-3xl font-bold text-red-900 mt-1">{highPriorityCount}</p>
              </div>
              <div className="w-12 h-12 bg-red-200 rounded-full flex items-center justify-center">
                <i className="ri-alert-line text-2xl text-red-700"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido Principal */}
      <div className="flex-1 flex overflow-hidden">
        {/* Mapa Heatmap */}
        <div className="flex-1 relative">
          <div 
            className="w-full h-full bg-slate-200 relative"
            style={{
              backgroundImage: 'url(https://readdy.ai/api/search-image?query=detailed%20street%20map%20of%20coatzacoalcos%20veracruz%20mexico%20urban%20area%20with%20neighborhoods%20and%20main%20avenues%20cartographic%20style%20clean%20professional%20municipal%20planning%20map&width=1200&height=900&seq=coatza-heatmap-002&orientation=landscape)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-slate-900/10"></div>

            {/* Puntos de calor (Heatmap) */}
            {mockIncidents.map((incident) => (
              <div
                key={incident.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all hover:scale-110"
                style={{ left: `${incident.x}%`, top: `${incident.y}%` }}
                onClick={() => setSelectedIncident(incident.id)}
              >
                {/* Círculo de calor */}
                <div className={`${getHeatmapSize(incident.priority)} rounded-full ${
                  incident.priority === 'Alta' ? 'bg-red-500/40' :
                  incident.priority === 'Media' ? 'bg-amber-500/40' :
                  'bg-green-500/40'
                } blur-xl animate-pulse`}></div>
                
                {/* Pin central */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <i className={`ri-map-pin-fill text-2xl ${
                    incident.priority === 'Alta' ? 'text-red-600' :
                    incident.priority === 'Media' ? 'text-amber-600' :
                    'text-green-600'
                  } drop-shadow-lg`}></i>
                </div>

                {/* Tooltip al hover */}
                {selectedIncident === incident.id && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white rounded-lg shadow-xl p-3 w-64 border border-slate-200 z-10 animate-in fade-in duration-200">
                    <div className="flex items-start justify-between mb-2">
                      <span className="font-bold text-slate-900">#{incident.id}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold border ${getPriorityColor(incident.priority)}`}>
                        {incident.priority}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-slate-700">{incident.type}</p>
                    <p className="text-xs text-slate-600 mt-1">{incident.location}</p>
                    <p className="text-xs text-slate-500 mt-2">Reportado hace {incident.time}</p>
                  </div>
                )}
              </div>
            ))}

            {/* Leyenda */}
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-3 text-sm">Nivel de Prioridad</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <span className="text-xs text-slate-700">Alta</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-amber-500 rounded-full"></div>
                  <span className="text-xs text-slate-700">Media</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-slate-700">Baja</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Panel Lateral de Tickets */}
        <div className="w-96 bg-white border-l border-slate-200 flex flex-col">
          <div className="px-6 py-4 border-b border-slate-200">
            <h3 className="font-bold text-slate-900">Tickets por Atender</h3>
            <p className="text-sm text-slate-600 mt-1">{mockIncidents.length} incidencias activas</p>
          </div>

          <div className="flex-1 overflow-y-auto">
            {mockIncidents
              .sort((a, b) => {
                const priorityOrder = { 'Alta': 0, 'Media': 1, 'Baja': 2 };
                return priorityOrder[a.priority] - priorityOrder[b.priority];
              })
              .map((incident) => (
                <div
                  key={incident.id}
                  className={`p-4 border-b border-slate-100 hover:bg-slate-50 transition-all cursor-pointer ${
                    selectedIncident === incident.id ? 'bg-teal-50 border-l-4 border-l-teal-600' : ''
                  }`}
                  onClick={() => setSelectedIncident(incident.id)}
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="font-bold text-slate-900 text-sm">#{incident.id}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold border ${getPriorityColor(incident.priority)}`}>
                      {incident.priority}
                    </span>
                  </div>
                  
                  <h4 className="font-semibold text-slate-800 text-sm mb-1">{incident.type}</h4>
                  <p className="text-xs text-slate-600 mb-2 flex items-start gap-1">
                    <i className="ri-map-pin-line text-sm mt-0.5"></i>
                    <span>{incident.location}</span>
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500">Hace {incident.time}</span>
                    <span className={`px-2 py-1 rounded-md text-xs font-medium ${
                      incident.status === 'Pendiente' ? 'bg-slate-100 text-slate-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {incident.status}
                    </span>
                  </div>

                  <div className="mt-3 flex gap-2">
                    <button className="flex-1 px-3 py-2 bg-teal-600 text-white rounded-lg text-xs font-semibold hover:bg-teal-700 transition-all whitespace-nowrap cursor-pointer">
                      Asignar Cuadrilla
                    </button>
                    <button className="px-3 py-2 border border-slate-300 text-slate-700 rounded-lg text-xs font-semibold hover:bg-slate-50 transition-all whitespace-nowrap cursor-pointer">
                      Ver Detalles
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

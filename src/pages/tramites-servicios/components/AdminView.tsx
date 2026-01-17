import { useState } from 'react';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface Solicitud {
  id: number;
  ciudadano: string;
  tramite: string;
  fecha: string;
  estatus: 'Pendiente' | 'En Revisión' | 'Aprobado';
  documentos: string[];
}

const mockSolicitudes: Solicitud[] = [
  { id: 1, ciudadano: 'Juan Pérez García', tramite: 'Licencia de Funcionamiento', fecha: '2024-01-15', estatus: 'Pendiente', documentos: ['INE', 'Comprobante Domicilio'] },
  { id: 2, ciudadano: 'María López Hernández', tramite: 'Pago de Predial', fecha: '2024-01-15', estatus: 'En Revisión', documentos: ['INE', 'Escrituras'] },
  { id: 3, ciudadano: 'Carlos Martínez Ruiz', tramite: 'Permiso de Construcción', fecha: '2024-01-14', estatus: 'Pendiente', documentos: ['INE', 'Planos', 'Uso de Suelo'] },
  { id: 4, ciudadano: 'Ana Rodríguez Silva', tramite: 'Licencia de Conducir', fecha: '2024-01-14', estatus: 'Aprobado', documentos: ['INE', 'Comprobante Domicilio', 'Examen Médico'] },
  { id: 5, ciudadano: 'Luis González Torres', tramite: 'Constancia de No Adeudo', fecha: '2024-01-13', estatus: 'En Revisión', documentos: ['INE', 'Recibo Predial'] },
  { id: 6, ciudadano: 'Patricia Sánchez Díaz', tramite: 'Registro de Negocio', fecha: '2024-01-13', estatus: 'Pendiente', documentos: ['INE', 'Acta Constitutiva', 'RFC'] },
];

export default function AdminView() {
  const [solicitudes] = useState<Solicitud[]>(mockSolicitudes);
  const [selectedSolicitud, setSelectedSolicitud] = useState<Solicitud | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pendiente': return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'En Revisión': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Aprobado': return 'bg-green-100 text-green-700 border-green-200';
      default: return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const pendientes = solicitudes.filter(s => s.estatus === 'Pendiente').length;
  const enRevision = solicitudes.filter(s => s.estatus === 'En Revisión').length;
  const aprobados = solicitudes.filter(s => s.estatus === 'Aprobado').length;

  // Datos para gráficas simuladas
  const tramitesPorTipo = [
    { tipo: 'Licencias', cantidad: 45 },
    { tipo: 'Predial', cantidad: 32 },
    { tipo: 'Construcción', cantidad: 28 },
    { tipo: 'Otros', cantidad: 15 }
  ];

  return (
    <div className="h-full flex flex-col bg-slate-50">
      {/* Nota Estratégica - Vista Funcionaria */}
      <div className="mb-6 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg p-4 flex items-start gap-3">
        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
          <i className="ri-information-line text-white text-sm"></i>
        </div>
        <div className="pr-60">
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong className="text-blue-900">Lic. Mayra:</strong> Valide documentos digitalmente desde su escritorio 
            sin que el ciudadano haga filas en el palacio. El sistema detecta automáticamente documentos duplicados o 
            fraudulentos mediante OCR e inteligencia artificial. Puede ver en tiempo real cuántos trámites están pendientes, 
            quién los tiene detenidos y el tiempo promedio de respuesta. Esto reduce la corrupción en ventanillas y aumenta 
            la recaudación al facilitar los pagos en línea.
          </p>
        </div>
      </div>

      {/* Header con KPIs */}
      <div className="bg-white border-b border-slate-200 px-6 py-4">
        <h1 className="text-2xl font-bold text-slate-900 mb-4">Panel de Control - Ventanilla Única</h1>
        
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-4 border border-amber-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-amber-600 text-sm font-semibold">Pendientes</p>
                <p className="text-3xl font-bold text-amber-900 mt-1">{pendientes}</p>
              </div>
              <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center">
                <i className="ri-time-line text-2xl text-amber-700"></i>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-600 text-sm font-semibold">En Revisión</p>
                <p className="text-3xl font-bold text-blue-900 mt-1">{enRevision}</p>
              </div>
              <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
                <i className="ri-search-eye-line text-2xl text-blue-700"></i>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 border border-green-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-600 text-sm font-semibold">Aprobados</p>
                <p className="text-3xl font-bold text-green-900 mt-1">{aprobados}</p>
              </div>
              <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center">
                <i className="ri-checkbox-circle-line text-2xl text-green-700"></i>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 border border-purple-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-600 text-sm font-semibold">Total</p>
                <p className="text-3xl font-bold text-purple-900 mt-1">{solicitudes.length}</p>
              </div>
              <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center">
                <i className="ri-file-list-3-line text-2xl text-purple-700"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido Principal */}
      <div className="flex-1 overflow-auto p-6">
        <div className="grid grid-cols-3 gap-6 mb-6">
          {/* Gráfica de Barras Simulada */}
          <div className="col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="font-bold text-slate-900 mb-4">Trámites por Tipo</h3>
            <div className="space-y-3">
              {tramitesPorTipo.map((item, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-slate-700">{item.tipo}</span>
                    <span className="text-sm font-bold text-slate-900">{item.cantidad}</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all"
                      style={{ width: `${(item.cantidad / 50) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gráfica Circular Simulada */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="font-bold text-slate-900 mb-4">Estatus General</h3>
            <div className="flex items-center justify-center mb-4">
              <div className="relative w-40 h-40">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="80" cy="80" r="70" fill="none" stroke="#f1f5f9" strokeWidth="20" />
                  <circle cx="80" cy="80" r="70" fill="none" stroke="#10b981" strokeWidth="20" strokeDasharray={`${(aprobados / solicitudes.length) * 440} 440`} />
                  <circle cx="80" cy="80" r="70" fill="none" stroke="#3b82f6" strokeWidth="20" strokeDasharray={`${(enRevision / solicitudes.length) * 440} 440`} strokeDashoffset={`-${(aprobados / solicitudes.length) * 440}`} />
                  <circle cx="80" cy="80" r="70" fill="none" stroke="#f59e0b" strokeWidth="20" strokeDasharray={`${(pendientes / solicitudes.length) * 440} 440`} strokeDashoffset={`-${((aprobados + enRevision) / solicitudes.length) * 440}`} />
                </svg>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-slate-600">Aprobados</span>
                </div>
                <span className="text-xs font-bold text-slate-900">{Math.round((aprobados / solicitudes.length) * 100)}%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-xs text-slate-600">En Revisión</span>
                </div>
                <span className="text-xs font-bold text-slate-900">{Math.round((enRevision / solicitudes.length) * 100)}%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                  <span className="text-xs text-slate-600">Pendientes</span>
                </div>
                <span className="text-xs font-bold text-slate-900">{Math.round((pendientes / solicitudes.length) * 100)}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabla de Solicitudes */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200">
          <div className="px-6 py-4 border-b border-slate-200">
            <h3 className="font-bold text-slate-900">Solicitudes por Validar</h3>
            <p className="text-sm text-slate-600 mt-1">{solicitudes.length} trámites en proceso</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">Ciudadano</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">Trámite</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">Fecha</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">Estatus</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {solicitudes.map((solicitud) => (
                  <tr key={solicitud.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-semibold text-slate-900">#{solicitud.id}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-slate-700">{solicitud.ciudadano}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-slate-700">{solicitud.tramite}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-slate-600">{solicitud.fecha}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(solicitud.estatus)}`}>
                        {solicitud.estatus}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex gap-2">
                        {solicitud.estatus === 'Pendiente' && (
                          <>
                            <button className="px-3 py-1.5 bg-green-600 text-white rounded-lg text-xs font-semibold hover:bg-green-700 transition-all whitespace-nowrap cursor-pointer">
                              <i className="ri-check-line mr-1"></i>
                              Aprobar
                            </button>
                            <button className="px-3 py-1.5 bg-red-600 text-white rounded-lg text-xs font-semibold hover:bg-red-700 transition-all whitespace-nowrap cursor-pointer">
                              <i className="ri-close-line mr-1"></i>
                              Rechazar
                            </button>
                          </>
                        )}
                        <button 
                          onClick={() => setSelectedSolicitud(solicitud)}
                          className="px-3 py-1.5 border border-slate-300 text-slate-700 rounded-lg text-xs font-semibold hover:bg-slate-50 transition-all whitespace-nowrap cursor-pointer"
                        >
                          <i className="ri-eye-line mr-1"></i>
                          Ver
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal de Detalles */}
      {selectedSolicitud && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-slate-900">Detalles de Solicitud #{selectedSolicitud.id}</h3>
              <button 
                onClick={() => setSelectedSolicitud(null)}
                className="text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <i className="ri-close-line text-2xl"></i>
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-semibold text-slate-700">Ciudadano</label>
                <p className="text-slate-900 mt-1">{selectedSolicitud.ciudadano}</p>
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-700">Trámite</label>
                <p className="text-slate-900 mt-1">{selectedSolicitud.tramite}</p>
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-700">Documentos Adjuntos</label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedSolicitud.documentos.map((doc, index) => (
                    <span key={index} className="px-3 py-1.5 bg-green-100 text-green-700 rounded-lg text-sm font-medium border border-green-200">
                      <i className="ri-checkbox-circle-fill mr-1"></i>
                      {doc} ✓
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all cursor-pointer whitespace-nowrap">
                  <i className="ri-check-line mr-2"></i>
                  Aprobar Solicitud
                </button>
                <button className="flex-1 px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all cursor-pointer whitespace-nowrap">
                  <i className="ri-close-line mr-2"></i>
                  Rechazar Solicitud
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

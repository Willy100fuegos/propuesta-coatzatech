import { useState } from 'react';

interface Document {
  id: string;
  folio: string;
  asunto: string;
  remitente: string;
  fecha: string;
  estatus: 'pendiente' | 'revision' | 'firmado' | 'turnado';
}

const mockDocuments: Document[] = [
  {
    id: '1',
    folio: 'SGD-2026-001',
    asunto: 'Solicitud de Licencia de Funcionamiento',
    remitente: 'Comercio Local "El Buen Sabor"',
    fecha: '15/01/2026',
    estatus: 'revision'
  },
  {
    id: '2',
    folio: 'SGD-2026-002',
    asunto: 'Permiso de Construcción Residencial',
    remitente: 'Constructora del Golfo S.A.',
    fecha: '15/01/2026',
    estatus: 'pendiente'
  },
  {
    id: '3',
    folio: 'SGD-2026-003',
    asunto: 'Renovación de Contrato de Servicios',
    remitente: 'Dirección de Limpia Pública',
    fecha: '14/01/2026',
    estatus: 'firmado'
  },
  {
    id: '4',
    folio: 'SGD-2026-004',
    asunto: 'Solicitud de Apoyo Social',
    remitente: 'DIF Municipal',
    fecha: '14/01/2026',
    estatus: 'turnado'
  },
  {
    id: '5',
    folio: 'SGD-2026-005',
    asunto: 'Informe Mensual de Actividades',
    remitente: 'Dirección de Obras Públicas',
    fecha: '13/01/2026',
    estatus: 'revision'
  }
];

const statusConfig = {
  pendiente: { label: 'Pendiente', color: 'bg-amber-100 text-amber-700', icon: 'ri-time-line' },
  revision: { label: 'En Revisión', color: 'bg-blue-100 text-blue-700', icon: 'ri-eye-line' },
  firmado: { label: 'Firmado', color: 'bg-emerald-100 text-emerald-700', icon: 'ri-checkbox-circle-line' },
  turnado: { label: 'Turnado', color: 'bg-purple-100 text-purple-700', icon: 'ri-send-plane-line' }
};

export default function AdminView() {
  const [documents] = useState<Document[]>(mockDocuments);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Nota Estratégica - Vista Funcionaria */}
      <div className="mb-6 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg p-4 flex items-start gap-3">
        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
          <i className="ri-information-line text-white text-sm"></i>
        </div>
        <div className="pr-60">
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong className="text-blue-900">Lic. Mayra:</strong> Este módulo elimina el rezago de papel y los documentos 
            extraviados. Puede rastrear en tiempo real dónde está cada oficio, quién lo tiene detenido y cuánto tiempo lleva 
            en cada escritorio. La firma digital tiene validez legal y genera una cadena de custodia inquebrantable. 
            Esto reduce los tiempos de respuesta hasta en un 70% y elimina el pretexto de "no me llegó el documento".
          </p>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
          <div className="flex items-center justify-between mb-2">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <i className="ri-inbox-line text-2xl text-white"></i>
            </div>
            <span className="text-3xl font-bold text-blue-900">1,240</span>
          </div>
          <p className="text-sm font-semibold text-blue-900">Documentos Recibidos</p>
          <p className="text-xs text-blue-700 mt-1">Este mes</p>
        </div>

        <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-6 border border-emerald-200">
          <div className="flex items-center justify-between mb-2">
            <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center">
              <i className="ri-checkbox-circle-line text-2xl text-white"></i>
            </div>
            <span className="text-3xl font-bold text-emerald-900">98%</span>
          </div>
          <p className="text-sm font-semibold text-emerald-900">Atendidos a Tiempo</p>
          <p className="text-xs text-emerald-700 mt-1">Meta: 95%</p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
          <div className="flex items-center justify-between mb-2">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
              <i className="ri-time-line text-2xl text-white"></i>
            </div>
            <span className="text-3xl font-bold text-purple-900">4.2h</span>
          </div>
          <p className="text-sm font-semibold text-purple-900">Tiempo Promedio</p>
          <p className="text-xs text-purple-700 mt-1">Por documento</p>
        </div>
      </div>

      {/* Tabla de Documentos */}
      <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
        <div className="px-6 py-4 bg-gradient-to-r from-slate-50 to-slate-100 border-b border-slate-200">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <i className="ri-file-list-3-line text-blue-600"></i>
            Dashboard de Productividad Administrativa
          </h2>
          <p className="text-sm text-slate-600 mt-1">Gestión de oficios y documentos oficiales</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Folio
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Asunto
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Remitente
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Estatus
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Acción
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {documents.map((doc) => {
                const status = statusConfig[doc.estatus];
                return (
                  <tr key={doc.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-semibold text-blue-600">{doc.folio}</span>
                      <p className="text-xs text-slate-500">{doc.fecha}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm font-medium text-slate-900">{doc.asunto}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-slate-700">{doc.remitente}</p>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${status.color}`}>
                        <i className={status.icon}></i>
                        {status.label}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {doc.estatus === 'pendiente' && (
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2 whitespace-nowrap cursor-pointer">
                          <i className="ri-edit-line"></i>
                          Firmar Digitalmente
                        </button>
                      )}
                      {doc.estatus === 'revision' && (
                        <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-semibold hover:bg-emerald-700 transition-colors flex items-center gap-2 whitespace-nowrap cursor-pointer">
                          <i className="ri-send-plane-line"></i>
                          Turnar
                        </button>
                      )}
                      {doc.estatus === 'firmado' && (
                        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-semibold hover:bg-purple-700 transition-colors flex items-center gap-2 whitespace-nowrap cursor-pointer">
                          <i className="ri-send-plane-line"></i>
                          Turnar
                        </button>
                      )}
                      {doc.estatus === 'turnado' && (
                        <button className="px-4 py-2 bg-slate-600 text-white rounded-lg text-sm font-semibold hover:bg-slate-700 transition-colors flex items-center gap-2 whitespace-nowrap cursor-pointer">
                          <i className="ri-eye-line"></i>
                          Ver Detalles
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

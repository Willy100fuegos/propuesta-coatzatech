import { useState } from 'react';

interface TimelineStep {
  fecha: string;
  descripcion: string;
  responsable: string;
  completado: boolean;
}

const mockTimeline: TimelineStep[] = [
  {
    fecha: '15/01/2026 09:30',
    descripcion: 'Documento recibido en Oficialía de Partes',
    responsable: 'Sistema Automático',
    completado: true
  },
  {
    fecha: '15/01/2026 10:15',
    descripcion: 'Turnado a Dirección de Comercio',
    responsable: 'Lic. María González',
    completado: true
  },
  {
    fecha: '15/01/2026 14:00',
    descripcion: 'En revisión técnica',
    responsable: 'Ing. Carlos Ramírez',
    completado: true
  },
  {
    fecha: 'Pendiente',
    descripcion: 'Firma de autorización',
    responsable: 'Director de Comercio',
    completado: false
  },
  {
    fecha: 'Pendiente',
    descripcion: 'Notificación al solicitante',
    responsable: 'Sistema Automático',
    completado: false
  }
];

export default function CitizenView() {
  const [folio, setFolio] = useState('SGD-2026-001');
  // Timeline visible automáticamente al cargar
  const [showTimeline] = useState(true);

  return (
    <div className="max-w-4xl mx-auto">
      {/* Nota Estratégica - Vista Ciudadana */}
      <div className="mb-6 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg p-4 flex items-start gap-3 pr-64">
        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
          <i className="ri-information-line text-white text-sm"></i>
        </div>
        <div>
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong className="text-blue-900">Para Ciudadanos:</strong> Consulta en tiempo real dónde está tu documento. 
            Ya no necesitas llamar o ir al palacio municipal. Cada oficio tiene un folio único que puedes rastrear 
            desde tu celular, como si fuera un paquete de mensajería. Transparencia total en cada paso del proceso.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="ri-search-line text-3xl text-blue-600"></i>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Consultar Estatus de Oficio</h2>
          <p className="text-slate-600">Ingresa el folio de tu documento para conocer su estado actual</p>
        </div>

        <div className="max-w-md mx-auto mb-8">
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Folio del Documento
          </label>
          <div className="flex gap-3">
            <input
              type="text"
              value={folio}
              onChange={(e) => setFolio(e.target.value)}
              placeholder="Ej: SGD-2026-001"
              className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
            <button
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap flex items-center gap-2 cursor-pointer"
            >
              <i className="ri-search-line"></i>
              Buscar
            </button>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            Ejemplo de folio: SGD-2026-001
          </p>
        </div>

        {showTimeline && (
          <div className="border-t border-slate-200 pt-8">
            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <i className="ri-time-line text-blue-600"></i>
              Seguimiento del Documento: {folio}
            </h3>

            <div className="relative">
              {mockTimeline.map((step, index) => (
                <div key={index} className="flex gap-4 pb-8 last:pb-0">
                  <div className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      step.completado 
                        ? 'bg-emerald-500 text-white' 
                        : 'bg-slate-200 text-slate-400'
                    }`}>
                      {step.completado ? (
                        <i className="ri-check-line text-lg"></i>
                      ) : (
                        <i className="ri-time-line text-lg"></i>
                      )}
                    </div>
                    {index < mockTimeline.length - 1 && (
                      <div className={`w-0.5 h-full mt-2 ${
                        step.completado ? 'bg-emerald-500' : 'bg-slate-200'
                      }`}></div>
                    )}
                  </div>

                  <div className="flex-1 pb-4">
                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-slate-900">{step.descripcion}</h4>
                        <span className={`text-xs px-2 py-1 rounded-full whitespace-nowrap ${
                          step.completado 
                            ? 'bg-emerald-100 text-emerald-700' 
                            : 'bg-amber-100 text-amber-700'
                        }`}>
                          {step.completado ? 'Completado' : 'Pendiente'}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-slate-600">
                        <span className="flex items-center gap-1">
                          <i className="ri-calendar-line"></i>
                          {step.fecha}
                        </span>
                        <span className="flex items-center gap-1">
                          <i className="ri-user-line"></i>
                          {step.responsable}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-start gap-3">
                <i className="ri-information-line text-xl text-blue-600 mt-0.5"></i>
                <div>
                  <p className="text-sm font-semibold text-blue-900 mb-1">Tiempo estimado de respuesta</p>
                  <p className="text-sm text-blue-700">Tu documento será procesado en un plazo máximo de 48 horas hábiles</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

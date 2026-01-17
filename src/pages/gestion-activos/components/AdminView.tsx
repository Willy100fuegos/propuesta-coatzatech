import { useState } from 'react';

interface Evento {
  id: number;
  titulo: string;
  espacio: string;
  dia: string;
  hora: string;
  color: string;
}

interface Item {
  id: number;
  nombre: string;
  categoria: string;
  total: number;
  disponible: number;
  enReparacion: number;
}

const mockEventos: Evento[] = [
  { id: 1, titulo: 'Evento DIF', espacio: 'Auditorio Municipal', dia: 'Lunes', hora: '10:00', color: 'bg-blue-500' },
  { id: 2, titulo: 'Sesión de Cabildo', espacio: 'Sala de Juntas', dia: 'Martes', hora: '09:00', color: 'bg-purple-500' },
  { id: 3, titulo: 'Capacitación Personal', espacio: 'Sala de Capacitación', dia: 'Miércoles', hora: '14:00', color: 'bg-green-500' },
  { id: 4, titulo: 'Conferencia de Prensa', espacio: 'Auditorio Municipal', dia: 'Jueves', hora: '11:00', color: 'bg-red-500' },
  { id: 5, titulo: 'Reunión Directores', espacio: 'Sala de Juntas', dia: 'Viernes', hora: '16:00', color: 'bg-amber-500' },
];

const mockInventario: Item[] = [
  { id: 1, nombre: 'Sillas Plegables', categoria: 'Mobiliario', total: 500, disponible: 450, enReparacion: 50 },
  { id: 2, nombre: 'Equipo de Sonido', categoria: 'Audio', total: 15, disponible: 12, enReparacion: 3 },
  { id: 3, nombre: 'Vallas Metálicas', categoria: 'Seguridad', total: 200, disponible: 180, enReparacion: 20 },
  { id: 4, nombre: 'Proyectores', categoria: 'Tecnología', total: 10, disponible: 8, enReparacion: 2 },
  { id: 5, nombre: 'Mesas Rectangulares', categoria: 'Mobiliario', total: 100, disponible: 95, enReparacion: 5 },
  { id: 6, nombre: 'Carpas 6x6', categoria: 'Eventos', total: 20, disponible: 18, enReparacion: 2 },
];

export default function AdminView() {
  const [activeTab, setActiveTab] = useState<'calendario' | 'inventario'>('calendario');

  const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
  const horas = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];

  const totalItems = mockInventario.reduce((sum, item) => sum + item.total, 0);
  const totalDisponible = mockInventario.reduce((sum, item) => sum + item.disponible, 0);
  const totalReparacion = mockInventario.reduce((sum, item) => sum + item.enReparacion, 0);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Nota Estratégica - Vista Funcionaria */}
      <div className="mb-6 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg p-4 flex items-start gap-3">
        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
          <i className="ri-information-line text-white text-sm"></i>
        </div>
        <div>
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong className="text-blue-900">Lic. Mayra:</strong> Evite la pérdida de equipo y mobiliario municipal 
            con un control patrimonial digital. Cada silla, carpa o proyector tiene un código QR y registro de salida/entrada. 
            El calendario de espacios evita duplicidad de eventos y conflictos políticos. Puede generar reportes automáticos 
            de inventario para auditorías y saber en tiempo real qué está disponible, qué está en uso y qué necesita reparación. 
            Esto reduce las compras innecesarias hasta en un 40%.
          </p>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-6 py-4">
        <h1 className="text-2xl font-bold text-slate-900 mb-4">Gestión de Activos Municipales</h1>
        
        {/* Tabs */}
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('calendario')}
            className={`px-6 py-2.5 rounded-lg font-semibold text-sm transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'calendario'
                ? 'bg-blue-600 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <i className="ri-calendar-line mr-2"></i>
            Calendario de Espacios
          </button>
          <button
            onClick={() => setActiveTab('inventario')}
            className={`px-6 py-2.5 rounded-lg font-semibold text-sm transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'inventario'
                ? 'bg-blue-600 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <i className="ri-box-3-line mr-2"></i>
            Inventario Físico
          </button>
        </div>
      </div>

      {/* Contenido */}
      <div className="flex-1 overflow-auto p-6">
        {activeTab === 'calendario' ? (
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="font-bold text-slate-900 mb-4">Calendario Semanal</h3>
            
            {/* Vista de Calendario */}
            <div className="overflow-x-auto">
              <div className="grid grid-cols-6 gap-2 min-w-[800px]">
                {/* Header */}
                <div className="font-semibold text-slate-700 text-sm p-2">Hora</div>
                {dias.map(dia => (
                  <div key={dia} className="font-semibold text-slate-700 text-sm p-2 text-center">
                    {dia}
                  </div>
                ))}

                {/* Filas de horas */}
                {horas.map(hora => (
                  <>
                    <div key={`hora-${hora}`} className="text-xs text-slate-600 p-2 border-t border-slate-100">
                      {hora}
                    </div>
                    {dias.map(dia => {
                      const evento = mockEventos.find(e => e.dia === dia && e.hora === hora);
                      return (
                        <div key={`${dia}-${hora}`} className="border-t border-slate-100 p-1">
                          {evento && (
                            <div className={`${evento.color} text-white rounded-lg p-2 text-xs`}>
                              <div className="font-semibold">{evento.titulo}</div>
                              <div className="text-xs opacity-90 mt-1">{evento.espacio}</div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </>
                ))}
              </div>
            </div>

            {/* Lista de Eventos */}
            <div className="mt-6 pt-6 border-t border-slate-200">
              <h4 className="font-semibold text-slate-900 mb-3">Eventos de la Semana</h4>
              <div className="space-y-2">
                {mockEventos.map(evento => (
                  <div key={evento.id} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                    <div className={`w-3 h-3 ${evento.color} rounded-full`}></div>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-900 text-sm">{evento.titulo}</p>
                      <p className="text-xs text-slate-600">{evento.espacio} - {evento.dia} {evento.hora}</p>
                    </div>
                    <button className="px-3 py-1.5 border border-slate-300 text-slate-700 rounded-lg text-xs font-semibold hover:bg-white transition-all cursor-pointer whitespace-nowrap">
                      Editar
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div>
            {/* KPIs de Inventario */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-600 text-sm font-semibold">Total Items</p>
                    <p className="text-3xl font-bold text-blue-900 mt-1">{totalItems}</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
                    <i className="ri-box-3-line text-2xl text-blue-700"></i>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 border border-green-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-600 text-sm font-semibold">Disponibles</p>
                    <p className="text-3xl font-bold text-green-900 mt-1">{totalDisponible}</p>
                  </div>
                  <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center">
                    <i className="ri-checkbox-circle-line text-2xl text-green-700"></i>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-4 border border-red-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-red-600 text-sm font-semibold">En Reparación</p>
                    <p className="text-3xl font-bold text-red-900 mt-1">{totalReparacion}</p>
                  </div>
                  <div className="w-12 h-12 bg-red-200 rounded-full flex items-center justify-center">
                    <i className="ri-tools-line text-2xl text-red-700"></i>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabla de Inventario */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200">
              <div className="px-6 py-4 border-b border-slate-200">
                <h3 className="font-bold text-slate-900">Inventario de Recursos</h3>
                <p className="text-sm text-slate-600 mt-1">{mockInventario.length} categorías registradas</p>
              </div>

              <div className="p-6 space-y-4">
                {mockInventario.map(item => (
                  <div key={item.id} className="border border-slate-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-slate-900">{item.nombre}</h4>
                        <p className="text-sm text-slate-600">{item.categoria}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-slate-900">{item.total}</p>
                        <p className="text-xs text-slate-600">Total</p>
                      </div>
                    </div>

                    {/* Barra de Progreso */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">Stock Disponible</span>
                        <span className="font-semibold text-green-600">{item.disponible} ({Math.round((item.disponible / item.total) * 100)}%)</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-3">
                        <div 
                          className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all"
                          style={{ width: `${(item.disponible / item.total) * 100}%` }}
                        ></div>
                      </div>

                      {item.enReparacion > 0 && (
                        <>
                          <div className="flex items-center justify-between text-sm mt-2">
                            <span className="text-slate-600">En Reparación</span>
                            <span className="font-semibold text-red-600">{item.enReparacion} ({Math.round((item.enReparacion / item.total) * 100)}%)</span>
                          </div>
                          <div className="w-full bg-slate-100 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-red-500 to-red-600 h-2 rounded-full transition-all"
                              style={{ width: `${(item.enReparacion / item.total) * 100}%` }}
                            ></div>
                          </div>
                        </>
                      )}
                    </div>

                    <div className="flex gap-2 mt-4">
                      <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all cursor-pointer whitespace-nowrap">
                        <i className="ri-add-line mr-1"></i>
                        Registrar Salida
                      </button>
                      <button className="flex-1 px-4 py-2 border border-slate-300 text-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-50 transition-all cursor-pointer whitespace-nowrap">
                        <i className="ri-edit-line mr-1"></i>
                        Editar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

import { useState } from 'react';
import { useRole } from '../../context/RoleContext';

interface TimelinePhase {
  id: number;
  name: string;
  date: string;
  status: 'completed' | 'current' | 'pending';
}

const timelinePhases: TimelinePhase[] = [
  { id: 1, name: 'Licitación', date: '15 Nov 2023', status: 'completed' },
  { id: 2, name: 'Arranque', date: '10 Dic 2023', status: 'completed' },
  { id: 3, name: 'Avance 50%', date: '15 Ene 2024', status: 'completed' },
  { id: 4, name: 'Avance 75%', date: '22 Ene 2024', status: 'current' },
  { id: 5, name: 'Entrega', date: '28 Feb 2024', status: 'pending' }
];

const projectImages = [
  {
    title: 'Estado Inicial',
    url: 'https://readdy.ai/api/search-image?query=before%20construction%20site%20of%20coastal%20boardwalk%20malecon%20in%20coatzacoalcos%20mexico%20showing%20old%20deteriorated%20pavement%20and%20infrastructure%20needing%20renovation%20urban%20development%20documentary%20photography%20realistic%20daytime&width=600&height=400&seq=obra-antes-001&orientation=landscape'
  },
  {
    title: 'Construcción en Proceso',
    url: 'https://readdy.ai/api/search-image?query=active%20construction%20site%20of%20modern%20coastal%20boardwalk%20malecon%20with%20workers%20machinery%20and%20new%20pavement%20being%20installed%20in%20coatzacoalcos%20mexico%20progress%20documentation%20realistic%20construction%20photography&width=600&height=400&seq=obra-durante-002&orientation=landscape'
  },
  {
    title: 'Avance Actual',
    url: 'https://readdy.ai/api/search-image?query=nearly%20completed%20modern%20coastal%20boardwalk%20malecon%20with%20new%20pavement%20lighting%20and%20landscaping%20in%20coatzacoalcos%20mexico%20showing%20significant%20progress%20urban%20improvement%20realistic%20photography%20daytime&width=600&height=400&seq=obra-actual-003&orientation=landscape'
  }
];

export default function ObrasTransparentes() {
  const { isAdmin } = useRole();
  const [showEditMode] = useState(false);

  const physicalProgress = 75;
  const financialProgress = 70;

  return (
    <div className="h-full overflow-y-auto bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Nota Estratégica */}
        <div className="mb-6 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg p-4 flex items-start gap-3">
          <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
            <i className="ri-information-line text-white text-sm"></i>
          </div>
          <div>
            {isAdmin ? (
              <p className="text-sm text-slate-700 leading-relaxed">
                <strong className="text-blue-900">Lic. Mayra:</strong> Publique el avance físico vs. financiero de cada obra 
                en tiempo real para generar confianza ciudadana. El sistema permite subir fotos semanales, actualizar porcentajes 
                y generar fichas técnicas descargables. Esto neutraliza críticas en redes sociales al demostrar con evidencia 
                fotográfica que las obras avanzan según lo programado. Cumple automáticamente con las obligaciones de transparencia 
                y reduce las solicitudes de información hasta en un 60%.
              </p>
            ) : (
              <p className="text-sm text-slate-700 leading-relaxed">
                <strong className="text-blue-900">Rendición de Cuentas:</strong> Consulta el avance de cualquier obra pública 
                en tu ciudad. Descarga la ficha técnica con presupuesto, contratista y fechas. Ve fotos del progreso actualizadas 
                semanalmente. Compara el avance físico (construcción real) contra el avance financiero (dinero gastado) para 
                verificar que los recursos se estén usando correctamente. Transparencia total en cada peso invertido.
              </p>
            )}
          </div>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">Visor de Obras Públicas</h1>
              <p className="text-slate-600">Transparencia y seguimiento en tiempo real de proyectos municipales</p>
            </div>
            {isAdmin && (
              <button className="px-4 py-2 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer">
                <i className="ri-edit-line"></i>
                Modo Edición
              </button>
            )}
          </div>
        </div>

        {/* Ficha de Obra */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden mb-8 shadow-lg">
          <div className="bg-gradient-to-r from-orange-600 to-orange-500 px-8 py-6">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Pavimentación Malecón Costero</h2>
                <p className="text-orange-50">Modernización de infraestructura turística y vial</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <p className="text-orange-50 text-sm font-semibold">Obra Pública 2024</p>
                <p className="text-white text-lg font-bold">OB-2024-015</p>
              </div>
            </div>
          </div>

          <div className="p-8">
            {/* Información General */}
            <div className="grid grid-cols-4 gap-6 mb-8">
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <i className="ri-money-dollar-circle-line text-xl text-orange-600"></i>
                  </div>
                  <div>
                    <p className="text-xs text-slate-600 font-semibold">Presupuesto</p>
                    <p className="text-lg font-bold text-slate-900">$8.5M</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <i className="ri-building-line text-xl text-blue-600"></i>
                  </div>
                  <div>
                    <p className="text-xs text-slate-600 font-semibold">Contratista</p>
                    <p className="text-sm font-bold text-slate-900">Constructora del Golfo</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <i className="ri-calendar-line text-xl text-green-600"></i>
                  </div>
                  <div>
                    <p className="text-xs text-slate-600 font-semibold">Inicio</p>
                    <p className="text-sm font-bold text-slate-900">10 Dic 2023</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <i className="ri-calendar-check-line text-xl text-red-600"></i>
                  </div>
                  <div>
                    <p className="text-xs text-slate-600 font-semibold">Entrega</p>
                    <p className="text-sm font-bold text-slate-900">28 Feb 2024</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline Horizontal */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Ciclo de Vida del Proyecto</h3>
              <div className="relative">
                {/* Línea de conexión */}
                <div className="absolute top-6 left-0 right-0 h-1 bg-slate-200"></div>
                <div 
                  className="absolute top-6 left-0 h-1 bg-gradient-to-r from-orange-600 to-orange-500 transition-all duration-500"
                  style={{ width: `${(timelinePhases.filter(p => p.status === 'completed').length / timelinePhases.length) * 100}%` }}
                ></div>

                {/* Fases */}
                <div className="relative flex justify-between">
                  {timelinePhases.map((phase, index) => (
                    <div key={phase.id} className="flex flex-col items-center" style={{ width: `${100 / timelinePhases.length}%` }}>
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center border-4 bg-white transition-all ${
                        phase.status === 'completed' ? 'border-orange-600' :
                        phase.status === 'current' ? 'border-orange-600 animate-pulse' :
                        'border-slate-300'
                      }`}>
                        {phase.status === 'completed' ? (
                          <i className="ri-checkbox-circle-fill text-2xl text-orange-600"></i>
                        ) : phase.status === 'current' ? (
                          <i className="ri-loader-4-line text-2xl text-orange-600 animate-spin"></i>
                        ) : (
                          <i className="ri-time-line text-2xl text-slate-400"></i>
                        )}
                      </div>
                      <div className="mt-3 text-center">
                        <p className={`text-sm font-bold ${
                          phase.status === 'current' ? 'text-orange-600' : 'text-slate-900'
                        }`}>{phase.name}</p>
                        <p className="text-xs text-slate-600 mt-1">{phase.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Barras de Progreso */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold text-green-900">Avance Físico</h4>
                  <span className="text-2xl font-bold text-green-900">{physicalProgress}%</span>
                </div>
                <div className="w-full bg-green-200 rounded-full h-4 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-green-600 to-green-500 h-full rounded-full transition-all duration-500 flex items-center justify-end pr-2"
                    style={{ width: `${physicalProgress}%` }}
                  >
                    <i className="ri-hammer-line text-white text-xs"></i>
                  </div>
                </div>
                <p className="text-xs text-green-700 mt-2">Construcción y obra física completada</p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold text-blue-900">Avance Financiero</h4>
                  <span className="text-2xl font-bold text-blue-900">{financialProgress}%</span>
                </div>
                <div className="w-full bg-blue-200 rounded-full h-4 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-blue-600 to-blue-500 h-full rounded-full transition-all duration-500 flex items-center justify-end pr-2"
                    style={{ width: `${financialProgress}%` }}
                  >
                    <i className="ri-money-dollar-circle-line text-white text-xs"></i>
                  </div>
                </div>
                <p className="text-xs text-blue-700 mt-2">Presupuesto ejercido del total</p>
              </div>
            </div>

            {/* Galería de Fotos */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Galería de Avances</h3>
              <div className="grid grid-cols-3 gap-4">
                {projectImages.map((image, index) => (
                  <div key={index} className="group relative rounded-xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all cursor-pointer">
                    <div className="w-full h-64 bg-slate-100">
                      <img 
                        src={image.url} 
                        alt={image.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                      <div className="p-4 w-full">
                        <p className="text-white font-bold">{image.title}</p>
                        <p className="text-white/80 text-sm">22 Ene 2024</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Botón de Descarga */}
            <div className="flex justify-center pt-4">
              <button className="px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-xl font-bold hover:from-orange-700 hover:to-orange-600 transition-all shadow-lg shadow-orange-500/30 flex items-center gap-3 whitespace-nowrap cursor-pointer">
                <i className="ri-download-cloud-line text-2xl"></i>
                <div className="text-left">
                  <p className="text-sm">Descargar Ficha Técnica PDF</p>
                  <p className="text-xs text-orange-100">Datos Abiertos - Formato Estándar</p>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Información Adicional */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <i className="ri-file-list-line text-orange-600"></i>
              Especificaciones Técnicas
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <i className="ri-checkbox-circle-line text-green-600 mt-0.5"></i>
                <span>3.2 km de pavimentación con concreto hidráulico</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-checkbox-circle-line text-green-600 mt-0.5"></i>
                <span>Sistema de iluminación LED de bajo consumo</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-checkbox-circle-line text-green-600 mt-0.5"></i>
                <span>Áreas verdes y mobiliario urbano</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-checkbox-circle-line text-green-600 mt-0.5"></i>
                <span>Ciclovía de 2.5 metros de ancho</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <i className="ri-shield-check-line text-orange-600"></i>
              Supervisión y Control
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <i className="ri-user-line text-blue-600 mt-0.5"></i>
                <span><strong>Residente de Obra:</strong> Ing. Roberto Méndez</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-user-line text-blue-600 mt-0.5"></i>
                <span><strong>Supervisor:</strong> Arq. Patricia Gómez</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-building-line text-blue-600 mt-0.5"></i>
                <span><strong>Dependencia:</strong> Dirección de Obras Públicas</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-phone-line text-blue-600 mt-0.5"></i>
                <span><strong>Contacto:</strong> 921 145 3200 ext. 205</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState } from 'react';

const ejes = [
  {
    id: 'gobernabilidad',
    title: 'Eje A: Gobernabilidad',
    icon: 'ri-government-line',
    color: 'blue',
    items: [
      {
        name: 'Nube Privada',
        description: 'Infraestructura cloud segura y escalable para datos gubernamentales críticos'
      },
      {
        name: 'Digitalización Certificada',
        description: 'Transformación digital de documentos con validez legal y trazabilidad completa'
      },
      {
        name: 'Portal de Transparencia',
        description: 'Plataforma pública para consulta de información gubernamental en tiempo real'
      }
    ]
  },
  {
    id: 'austeridad',
    title: 'Eje B: Austeridad',
    icon: 'ri-money-dollar-circle-line',
    color: 'teal',
    items: [
      {
        name: 'Control de Combustible',
        description: 'Sistema automatizado de monitoreo y gestión de consumo vehicular'
      },
      {
        name: 'Videotelemática',
        description: 'Seguimiento en tiempo real de unidades con análisis de comportamiento de conducción'
      },
      {
        name: 'Geocercas',
        description: 'Delimitación virtual de zonas autorizadas con alertas automáticas'
      }
    ]
  },
  {
    id: 'seguridad',
    title: 'Eje C: Seguridad',
    icon: 'ri-shield-star-line',
    color: 'indigo',
    items: [
      {
        name: 'CCTV Inteligente',
        description: 'Red de videovigilancia con análisis de video y reconocimiento de patrones'
      },
      {
        name: 'Enlaces Inalámbricos',
        description: 'Conectividad de alta velocidad entre dependencias municipales'
      },
      {
        name: 'Ciberseguridad',
        description: 'Protección perimetral, detección de amenazas y respuesta a incidentes'
      }
    ]
  }
];

export default function EjesEstrategicos() {
  const [activeEje, setActiveEje] = useState('gobernabilidad');

  const currentEje = ejes.find(e => e.id === activeEje);

  return (
    <section>
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-slate-900 mb-3">Ejes Estratégicos</h2>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
          Tres pilares fundamentales para la transformación digital de Coatzacoalcos
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
        <div className="flex border-b border-slate-200">
          {ejes.map((eje) => (
            <button
              key={eje.id}
              onClick={() => setActiveEje(eje.id)}
              className={`flex-1 px-6 py-4 text-left transition-all cursor-pointer ${
                activeEje === eje.id
                  ? `bg-${eje.color}-50 border-b-2 border-${eje.color}-600`
                  : 'hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <i className={`${eje.icon} text-2xl w-8 h-8 flex items-center justify-center ${
                  activeEje === eje.id ? `text-${eje.color}-600` : 'text-slate-400'
                }`}></i>
                <span className={`font-semibold ${
                  activeEje === eje.id ? `text-${eje.color}-900` : 'text-slate-600'
                }`}>
                  {eje.title}
                </span>
              </div>
            </button>
          ))}
        </div>

        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentEje?.items.map((item, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className={`w-8 h-8 rounded-lg bg-${currentEje.color}-100 flex items-center justify-center flex-shrink-0`}>
                    <i className={`ri-checkbox-circle-line text-${currentEje.color}-600`}></i>
                  </div>
                  <h4 className="font-bold text-slate-900 text-lg">{item.name}</h4>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

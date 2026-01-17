const visionCards = [
  {
    title: 'Auditoría Estratégica',
    description: 'Análisis profundo de la infraestructura tecnológica actual y detección de áreas de oportunidad.',
    icon: 'ri-search-line',
    color: 'from-blue-500 to-blue-600'
  },
  {
    title: 'Diseño de Soluciones',
    description: 'Arquitectura de sistemas personalizados que se adaptan a las necesidades específicas del municipio.',
    icon: 'ri-lightbulb-line',
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    title: 'Implementación Segura',
    description: 'Despliegue controlado con protocolos de seguridad y respaldo de información crítica.',
    icon: 'ri-shield-check-line',
    color: 'from-teal-500 to-teal-600'
  },
  {
    title: 'Continuidad Operativa 24/7',
    description: 'Soporte técnico permanente y monitoreo continuo para garantizar disponibilidad total.',
    icon: 'ri-time-line',
    color: 'from-emerald-500 to-emerald-600'
  }
];

export default function VisionSection() {
  return (
    <section>
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-slate-900 mb-3">Nuestra Visión de Implementación</h2>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
          Un enfoque integral que garantiza resultados medibles y sostenibles en cada fase del proyecto
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {visionCards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer border border-slate-100 group"
          >
            <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${card.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
              <i className={`${card.icon} text-2xl text-white`}></i>
            </div>
            
            <h3 className="text-lg font-bold text-slate-900 mb-2">{card.title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

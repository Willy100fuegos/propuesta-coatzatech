export default function ROICasosExito() {
  const casos = [
    {
      icon: 'ri-gas-station-line',
      porcentaje: '35%',
      titulo: 'Ahorro en Combustible',
      descripcion: 'Reorientación de recursos a programas sociales mediante control satelital y geocercas.',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: 'ri-file-chart-line',
      porcentaje: '80%',
      titulo: 'Eficiencia Documental',
      descripcion: 'Menos tiempo en búsquedas, más atención ciudadana con gestión digital certificada.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: 'ri-checkbox-circle-line',
      porcentaje: '100%',
      titulo: 'Cumplimiento Normativo',
      descripcion: 'Transparencia verificable ante auditorías con trazabilidad completa de procesos.',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            ROI y Casos de Éxito
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Resultados medibles y verificables que transforman la gestión municipal
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {casos.map((caso, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all cursor-pointer group"
            >
              <div className={`bg-gradient-to-r ${caso.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <i className={`${caso.icon} text-4xl`}></i>
                  <span className="text-5xl font-bold opacity-90">{caso.porcentaje}</span>
                </div>
                <h3 className="text-xl font-bold">{caso.titulo}</h3>
              </div>
              <div className="p-6">
                <p className="text-slate-600 leading-relaxed">
                  {caso.descripcion}
                </p>
              </div>
              <div className="px-6 pb-6">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <i className="ri-check-line text-green-600"></i>
                  <span>Caso verificado</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-6 py-3">
            <i className="ri-trophy-line text-blue-600 text-xl"></i>
            <span className="text-sm font-semibold text-blue-900">
              Resultados respaldados por implementaciones reales en gobiernos municipales
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

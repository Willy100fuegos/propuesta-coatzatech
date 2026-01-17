export default function PerfilValores() {
  const valores = [
    { icon: 'ri-shield-check-line', text: 'Discreción Absoluta' },
    { icon: 'ri-heart-line', text: 'Lealtad Institucional' },
    { icon: 'ri-rocket-line', text: 'Capacidad de Ejecución' },
    { icon: 'ri-lightbulb-line', text: 'Innovación Constante' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Columna Izquierda - Perfil */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 text-white">
            <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
              <i className="ri-user-star-line text-3xl"></i>
            </div>
            <h3 className="text-2xl font-bold mb-4">Perfil Profesional</h3>
            <div className="space-y-3">
              <p className="text-lg font-semibold text-blue-300">
                Mtro. William Velázquez Valenzuela
              </p>
              <p className="text-slate-300">
                Director de Tecnologías de la Información
              </p>
              <div className="pt-4 space-y-2">
                <div className="flex items-center gap-2">
                  <i className="ri-shield-keyhole-line text-blue-400"></i>
                  <span className="text-sm">Especialista en Ciberseguridad</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="ri-server-line text-blue-400"></i>
                  <span className="text-sm">Experto en Infraestructura Cloud</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="ri-government-line text-blue-400"></i>
                  <span className="text-sm">Consultor en Gobierno Digital</span>
                </div>
              </div>
            </div>
          </div>

          {/* Columna Derecha - Valores */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Valores y Compromiso
            </h3>
            <p className="text-slate-600 mb-8">
              Principios que guían cada proyecto y decisión tecnológica en el servicio público.
            </p>
            <div className="space-y-4">
              {valores.map((valor, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all cursor-pointer"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className={`${valor.icon} text-xl text-white`}></i>
                  </div>
                  <span className="font-semibold text-slate-900">{valor.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

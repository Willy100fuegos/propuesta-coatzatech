export default function CartaPresentacion() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-10">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <i className="ri-mail-line text-2xl text-blue-600"></i>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                Mensaje a la Secretaria del Ayuntamiento
              </h2>
              <p className="text-sm text-slate-500">Lic. Mayra Gutiérrez Cruz</p>
            </div>
          </div>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-700 leading-relaxed mb-4">
              Estimada Lic. Gutiérrez Cruz: Su trayectoria es testimonio de compromiso con la función pública. 
              Los desafíos modernos de la administración municipal requieren herramientas tecnológicas que 
              conviertan la visión en resultados medibles y verificables.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Pongo a su disposición mis capacidades técnicas no como un simple proveedor de servicios, 
              sino como un consultor tecnológico que entiende que cada decisión digital tiene un impacto 
              humano directo en la ciudadanía.
            </p>
            <p className="text-slate-700 leading-relaxed font-medium">
              La tecnología es la columna vertebral de la transparencia y la eficiencia gubernamental. 
              Estoy listo para acompañar esta transformación con profesionalismo y resultados tangibles.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">WV</span>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Mtro. William Velázquez Valenzuela</p>
                <p className="text-sm text-slate-600">Director de Tecnologías | PixMedia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

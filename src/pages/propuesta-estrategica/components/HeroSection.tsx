export default function HeroSection() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 rounded-2xl p-12 text-white shadow-2xl">
      <div className="max-w-4xl">
        <div className="inline-block bg-blue-600/30 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
          <span className="text-sm font-semibold text-blue-200">Propuesta Gubernamental 2026</span>
        </div>
        
        <h1 className="text-5xl font-bold mb-4 leading-tight">
          Innovación, Certeza y Gobernabilidad
        </h1>
        
        <p className="text-2xl text-blue-200 mb-8 font-light">
          Estrategias Tecnológicas para el Coatzacoalcos de 2026
        </p>

        <div className="space-y-3 mb-8">
          <div className="flex items-center gap-3">
            <i className="ri-user-star-line text-xl w-6 h-6 flex items-center justify-center text-blue-400"></i>
            <div>
              <p className="text-sm text-slate-300">Dirigido a</p>
              <p className="font-semibold text-lg">Lic. Mayra Gutiérrez Cruz</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <i className="ri-user-line text-xl w-6 h-6 flex items-center justify-center text-blue-400"></i>
            <div>
              <p className="text-sm text-slate-300">Presentado por</p>
              <p className="font-semibold text-lg">Mtro. William Velázquez</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 pt-6 border-t border-slate-700">
          <img 
            src="https://static.readdy.ai/image/fed6b371770be9defbe288b77a595288/667ae8e053c92fa886f8c193d1fc06d5.png" 
            alt="PixMedia Logo" 
            className="h-8 w-auto"
          />
          <span className="text-slate-400 text-sm">Soluciones Tecnológicas Gubernamentales</span>
        </div>
      </div>
    </div>
  );
}

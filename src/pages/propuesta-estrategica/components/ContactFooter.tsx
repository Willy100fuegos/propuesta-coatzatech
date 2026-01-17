export default function ContactFooter() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 to-slate-800 py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8">
          <img 
            src="https://static.readdy.ai/image/fed6b371770be9defbe288b77a595288/667ae8e053c92fa886f8c193d1fc06d5.png" 
            alt="PixMedia Logo" 
            className="h-10 w-auto mx-auto mb-6"
          />
          <h3 className="text-2xl font-bold text-white mb-3">
            ¿Listo para transformar Coatzacoalcos?
          </h3>
          <p className="text-slate-300 mb-8">
            Descarga la propuesta completa y descubre cómo la tecnología puede impulsar tu gestión
          </p>
        </div>

        <a
          href="https://propuestas.pixmedia.agency/Innovacion-Certeza-y-Gobernabilidad.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl cursor-pointer whitespace-nowrap"
        >
          <i className="ri-download-cloud-line text-2xl"></i>
          <span>Descargar Propuesta Completa PDF</span>
        </a>

        <div className="mt-12 pt-8 border-t border-slate-700">
          <div className="grid md:grid-cols-3 gap-6 text-slate-300">
            <div className="flex flex-col items-center gap-2">
              <i className="ri-user-line text-2xl text-blue-400"></i>
              <p className="font-semibold text-white">Mtro. William Velázquez Valenzuela</p>
              <p className="text-sm">Director de Tecnologías</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <i className="ri-phone-line text-2xl text-blue-400"></i>
              <p className="font-semibold text-white">921 145 3200</p>
              <p className="text-sm">Disponible 24/7</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <i className="ri-mail-line text-2xl text-blue-400"></i>
              <p className="font-semibold text-white">info@pixmedia.agency</p>
              <p className="text-sm">Respuesta inmediata</p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-slate-400 text-sm">
          <p>© 2026 PixMedia | Innovación, Certeza y Gobernabilidad</p>
        </div>
      </div>
    </footer>
  );
}

import { useState } from 'react';

export default function CitizenView() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    fecha: '',
    lugar: '',
    motivo: '',
    asistentes: ''
  });

  const lugares = [
    'Parque Central',
    'Auditorio Municipal',
    'Plaza Cívica',
    'Explanada del Malecón',
    'Sala de Usos Múltiples',
    'Canchas Deportivas'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Solicitud enviada correctamente. Recibirás una respuesta en 48 horas hábiles.');
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Nota Estratégica - Vista Ciudadana */}
      <div className="mb-6 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg p-4 flex items-start gap-3 pr-64">
        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
          <i className="ri-information-line text-white text-sm"></i>
        </div>
        <div>
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong className="text-blue-900">Reserva de Espacios Públicos:</strong> Solicita el auditorio municipal, 
            parques o equipo (sillas, sonido, carpas) directamente desde tu celular. El sistema te muestra la disponibilidad 
            en tiempo real y evita que dos eventos se programen al mismo tiempo. Recibes confirmación inmediata y un 
            contrato digital con las condiciones de uso. Ya no necesitas ir a la presidencia ni esperar días para una respuesta.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-calendar-check-line text-3xl text-emerald-600"></i>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Solicitud de Espacio Público</h2>
            <p className="text-slate-600">Completa el formulario para reservar un espacio municipal</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  required
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Correo Electrónico *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
                  placeholder="correo@ejemplo.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.telefono}
                  onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
                  placeholder="921 123 4567"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Fecha del Evento *
                </label>
                <input
                  type="date"
                  required
                  value={formData.fecha}
                  onChange={(e) => setFormData({ ...formData, fecha: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Espacio Solicitado *
              </label>
              <select
                required
                value={formData.lugar}
                onChange={(e) => setFormData({ ...formData, lugar: e.target.value })}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
              >
                <option value="">Selecciona un espacio</option>
                {lugares.map((lugar) => (
                  <option key={lugar} value={lugar}>
                    {lugar}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Número de Asistentes Estimado *
              </label>
              <input
                type="number"
                required
                value={formData.asistentes}
                onChange={(e) => setFormData({ ...formData, asistentes: e.target.value })}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
                placeholder="Ej: 50"
                min="1"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Motivo del Evento *
              </label>
              <textarea
                required
                value={formData.motivo}
                onChange={(e) => setFormData({ ...formData, motivo: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm resize-none"
                placeholder="Describe brevemente el motivo de tu solicitud..."
                maxLength={500}
              />
              <p className="text-xs text-slate-500 mt-1">
                {formData.motivo.length}/500 caracteres
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <i className="ri-information-line text-xl text-blue-600 mt-0.5"></i>
                <div className="text-sm text-blue-800">
                  <p className="font-semibold mb-1">Información importante:</p>
                  <ul className="list-disc list-inside space-y-1 text-blue-700">
                    <li>Las solicitudes deben realizarse con al menos 15 días de anticipación</li>
                    <li>Recibirás una respuesta en un plazo máximo de 48 horas hábiles</li>
                    <li>La autorización está sujeta a disponibilidad y cumplimiento de requisitos</li>
                  </ul>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-4 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors whitespace-nowrap flex items-center justify-center gap-2"
            >
              <i className="ri-send-plane-line"></i>
              Enviar Solicitud
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

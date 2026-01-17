import { useState, useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface ReportForm {
  tipo: string;
  comentarios: string;
  lat: number;
  lng: number;
}

// Mock Data: Incidencias existentes en el mapa
const mockIncidents = [
  { id: 1, lat: 18.140, lng: -94.450, type: 'Bache', folio: 'INC-001', status: 'Pendiente', color: '#ef4444' },
  { id: 2, lat: 18.135, lng: -94.440, type: 'Luminaria', folio: 'INC-002', status: 'Pendiente', color: '#f59e0b' },
  { id: 3, lat: 18.145, lng: -94.460, type: 'Fuga Agua', folio: 'INC-003', status: 'Pendiente', color: '#3b82f6' }
];

export default function CitizenView() {
  const [showForm, setShowForm] = useState(false);
  const [markerPosition, setMarkerPosition] = useState<[number, number] | null>(null);
  const [formData, setFormData] = useState<ReportForm>({
    tipo: '',
    comentarios: '',
    lat: 0,
    lng: 0
  });
  const mapRef = useRef<L.Map | null>(null);
  const markerRef = useRef<L.Marker | null>(null);
  const mockMarkersRef = useRef<L.Marker[]>([]);

  useEffect(() => {
    if (!mapRef.current) {
      // Inicializar mapa centrado en Coatzacoalcos
      mapRef.current = L.map('citizen-map').setView([18.1350, -94.4550], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
        maxZoom: 19
      }).addTo(mapRef.current);

      // Agregar marcadores de incidencias existentes (Mock Data)
      mockIncidents.forEach(incident => {
        const icon = L.divIcon({
          className: 'custom-marker',
          html: `<div style="background-color: ${incident.color}; width: 28px; height: 28px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.4); display: flex; align-items: center; justify-center;">
            <i class="ri-alert-line" style="color: white; font-size: 14px;"></i>
          </div>`,
          iconSize: [28, 28],
          iconAnchor: [14, 14]
        });

        const marker = L.marker([incident.lat, incident.lng], { icon }).addTo(mapRef.current!);
        
        // Popup con información
        marker.bindPopup(`
          <div style="font-family: sans-serif; min-width: 180px;">
            <strong style="font-size: 14px; color: #1e293b;">${incident.type}</strong><br/>
            <span style="font-size: 12px; color: #64748b;">Folio: ${incident.folio}</span><br/>
            <span style="font-size: 12px; color: #64748b;">Estatus: <strong style="color: #f59e0b;">${incident.status}</strong></span>
          </div>
        `);

        mockMarkersRef.current.push(marker);
      });

      // Click en el mapa para colocar pin
      mapRef.current.on('click', (e: L.LeafletMouseEvent) => {
        const { lat, lng } = e.latlng;
        setMarkerPosition([lat, lng]);
        setFormData(prev => ({ ...prev, lat, lng }));
        setShowForm(true);

        // Remover marcador anterior
        if (markerRef.current) {
          markerRef.current.remove();
        }

        // Crear nuevo marcador
        const icon = L.divIcon({
          className: 'custom-marker',
          html: '<div style="background-color: #10b981; width: 30px; height: 30px; border-radius: 50% 50% 50% 0; transform: rotate(-45deg); border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.4);"><div style="width: 10px; height: 10px; background: white; border-radius: 50%; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(45deg);"></div></div>',
          iconSize: [30, 30],
          iconAnchor: [15, 30]
        });

        markerRef.current = L.marker([lat, lng], { icon }).addTo(mapRef.current!);
      });
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Reporte enviado:\nTipo: ${formData.tipo}\nUbicación: ${formData.lat.toFixed(4)}, ${formData.lng.toFixed(4)}\nComentarios: ${formData.comentarios}`);
    setShowForm(false);
    setFormData({ tipo: '', comentarios: '', lat: 0, lng: 0 });
    if (markerRef.current) {
      markerRef.current.remove();
      markerRef.current = null;
    }
  };

  return (
    <div className="h-full flex flex-col bg-slate-50">
      {/* Nota Estratégica - Vista Ciudadana */}
      <div className="mb-4 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg p-4 flex items-start gap-3 pr-64">
        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
          <i className="ri-information-line text-white text-sm"></i>
        </div>
        <div>
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong className="text-blue-900">Inteligencia Ciudadana:</strong> Reporta baches, luminarias fundidas o fugas 
            de agua directamente desde tu celular. Tu reporte queda geolocalizado y con folio de seguimiento. 
            Ya no necesitas llamar múltiples veces o ir a la presidencia. El sistema asigna automáticamente 
            la cuadrilla más cercana y te notifica cuando el problema esté resuelto.
          </p>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-6 py-4">
        <h1 className="text-2xl font-bold text-slate-900">Reportar Incidencia Urbana</h1>
        <p className="text-slate-600 text-sm mt-1">Haz clic en el mapa para marcar la ubicación del problema</p>
      </div>

      {/* Contenedor del Mapa */}
      <div className="flex-1 relative">
        <div id="citizen-map" className="w-full h-[600px]"></div>

        {/* Formulario Flotante */}
        {showForm && (
          <div className="absolute top-6 right-6 bg-white rounded-xl shadow-2xl p-6 w-96 border border-slate-200 z-[1000]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 text-lg">Nueva Incidencia</h3>
              <button 
                onClick={() => setShowForm(false)}
                className="text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <i className="ri-close-line text-2xl"></i>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Tipo de Reporte
                </label>
                <select
                  value={formData.tipo}
                  onChange={(e) => setFormData({ ...formData, tipo: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                  required
                >
                  <option value="">Selecciona un tipo</option>
                  <option value="Bache">Bache</option>
                  <option value="Luminaria">Luminaria</option>
                  <option value="Fuga de agua">Fuga de agua</option>
                  <option value="Basura">Basura acumulada</option>
                  <option value="Alcantarilla">Alcantarilla dañada</option>
                  <option value="Semáforo">Semáforo descompuesto</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Subir Foto
                </label>
                <button
                  type="button"
                  className="w-full px-4 py-3 border-2 border-dashed border-slate-300 rounded-lg hover:border-teal-500 transition-all cursor-pointer text-slate-600 hover:text-teal-600 text-sm font-medium whitespace-nowrap"
                >
                  <i className="ri-camera-line mr-2"></i>
                  Tomar o Seleccionar Foto
                </button>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Comentarios Adicionales
                </label>
                <textarea
                  value={formData.comentarios}
                  onChange={(e) => setFormData({ ...formData, comentarios: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                  rows={3}
                  placeholder="Describe el problema..."
                  required
                />
              </div>

              <div className="bg-slate-50 rounded-lg p-3">
                <p className="text-xs text-slate-600">
                  <i className="ri-map-pin-line mr-1"></i>
                  Ubicación: {markerPosition?.[0].toFixed(4)}, {markerPosition?.[1].toFixed(4)}
                </p>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-all cursor-pointer whitespace-nowrap"
              >
                <i className="ri-send-plane-line mr-2"></i>
                Enviar Reporte
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

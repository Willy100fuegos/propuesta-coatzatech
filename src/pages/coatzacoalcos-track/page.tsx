import { useState, useEffect } from 'react';
import MapView from './components/MapView';
import UnitsPanel from './components/UnitsPanel';
import FuelChart from './components/FuelChart';

export interface Unit {
  id: string;
  nombre: string;
  tipo: 'Patrulla' | 'Limpia Pública' | 'Ambulancia';
  estado: 'movimiento' | 'detenido' | 'alerta';
  velocidad: number;
  chofer: string;
  combustible: number;
  lat: number;
  lng: number;
}

// Coordenadas base de Coatzacoalcos (TIERRA FIRME - MÁS AL SUR)
const BASE_LAT = 18.1300;
const BASE_LNG = -94.4600;

const initialUnits: Unit[] = [
  { id: 'PM-04', nombre: 'Patrulla PM-04', tipo: 'Patrulla', estado: 'movimiento', velocidad: 35, chofer: 'J. Pérez', combustible: 75, lat: BASE_LAT + 0.005, lng: BASE_LNG + 0.005 },
  { id: 'PM-12', nombre: 'Patrulla PM-12', tipo: 'Patrulla', estado: 'movimiento', velocidad: 42, chofer: 'M. García', combustible: 82, lat: BASE_LAT + 0.010, lng: BASE_LNG - 0.006 },
  { id: 'LP-08', nombre: 'Limpia LP-08', tipo: 'Limpia Pública', estado: 'detenido', velocidad: 0, chofer: 'R. López', combustible: 45, lat: BASE_LAT - 0.008, lng: BASE_LNG + 0.008 },
  { id: 'LP-15', nombre: 'Limpia LP-15', tipo: 'Limpia Pública', estado: 'movimiento', velocidad: 25, chofer: 'A. Martínez', combustible: 15, lat: BASE_LAT + 0.003, lng: BASE_LNG - 0.004 },
  { id: 'AM-03', nombre: 'Ambulancia AM-03', tipo: 'Ambulancia', estado: 'alerta', velocidad: 65, chofer: 'L. Hernández', combustible: 88, lat: BASE_LAT - 0.005, lng: BASE_LNG - 0.006 },
];

export default function CoatzacoalcosTrackPage() {
  const [units, setUnits] = useState<Unit[]>(initialUnits);
  const [selectedUnit, setSelectedUnit] = useState<string | null>(null);

  // Simular movimiento de unidades
  useEffect(() => {
    const interval = setInterval(() => {
      setUnits(prevUnits => 
        prevUnits.map(unit => {
          if (unit.estado === 'movimiento') {
            // Variación muy pequeña para mantener en tierra firme
            const deltaLat = (Math.random() - 0.5) * 0.001;
            const deltaLng = (Math.random() - 0.5) * 0.001;
            const newVelocidad = Math.max(15, Math.min(70, unit.velocidad + (Math.random() - 0.5) * 10));
            const newCombustible = Math.max(10, unit.combustible - Math.random() * 0.5);
            
            return {
              ...unit,
              lat: unit.lat + deltaLat,
              lng: unit.lng + deltaLng,
              velocidad: Math.round(newVelocidad),
              combustible: Math.round(newCombustible * 10) / 10,
              estado: newCombustible < 20 ? 'alerta' as const : unit.estado
            };
          }
          return unit;
        })
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full flex flex-col bg-slate-950">
      {/* Header Dark */}
      <div className="bg-slate-900 border-b border-slate-800 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white flex items-center gap-3">
              <i className="ri-satellite-line text-teal-400"></i>
              CoatzaTrack - Rastreo Satelital
            </h1>
            <p className="text-slate-400 text-sm mt-1">Monitoreo en tiempo real de unidades municipales</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-slate-800 px-4 py-2 rounded-lg border border-slate-700">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-slate-300">Sistema Activo</span>
              </div>
            </div>
            <div className="bg-slate-800 px-4 py-2 rounded-lg border border-slate-700">
              <div className="text-sm text-slate-300">
                <i className="ri-car-line mr-2"></i>
                {units.length} Unidades
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido Principal */}
      <div className="flex-1 flex overflow-hidden">
        {/* Mapa */}
        <div className="flex-1 relative">
          <MapView 
            units={units} 
            selectedUnit={selectedUnit}
            onSelectUnit={setSelectedUnit}
          />
        </div>

        {/* Panel Lateral Derecho - Solo Unidades */}
        <div className="w-80 bg-slate-900 border-l border-slate-800 flex flex-col overflow-hidden">
          <UnitsPanel 
            units={units}
            selectedUnit={selectedUnit}
            onSelectUnit={setSelectedUnit}
          />
        </div>
      </div>

      {/* Botón Flotante para Alertas y Combustible (Colapsable) */}
      <button 
        className="fixed bottom-6 right-6 bg-slate-800 hover:bg-slate-700 text-white px-4 py-3 rounded-full shadow-2xl border border-slate-700 transition-all cursor-pointer whitespace-nowrap z-10"
        onClick={() => {
          const panel = document.getElementById('alerts-panel');
          if (panel) {
            panel.classList.toggle('hidden');
          }
        }}
      >
        <i className="ri-alert-line mr-2"></i>
        Ver Alertas y Combustible
      </button>

      {/* Panel de Alertas Colapsable */}
      <div 
        id="alerts-panel"
        className="hidden fixed bottom-24 right-6 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl w-96 z-10"
      >
        <div className="p-4 border-b border-slate-800 flex items-center justify-between">
          <h3 className="text-sm font-semibold text-white">Alertas y Combustible</h3>
          <button 
            onClick={() => {
              const panel = document.getElementById('alerts-panel');
              if (panel) {
                panel.classList.add('hidden');
              }
            }}
            className="text-slate-400 hover:text-white cursor-pointer"
          >
            <i className="ri-close-line text-xl"></i>
          </button>
        </div>
        <div className="p-4">
          <FuelChart units={units} />
        </div>
      </div>
    </div>
  );
}

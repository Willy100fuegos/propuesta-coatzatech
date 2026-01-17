import type { Unit } from '../page';

interface UnitsPanelProps {
  units: Unit[];
  selectedUnit: string | null;
  onSelectUnit: (id: string | null) => void;
}

export default function UnitsPanel({ units, selectedUnit, onSelectUnit }: UnitsPanelProps) {
  const getStatusColor = (estado: Unit['estado']) => {
    switch (estado) {
      case 'movimiento':
        return 'text-emerald-400';
      case 'detenido':
        return 'text-amber-400';
      case 'alerta':
        return 'text-red-400';
      default:
        return 'text-slate-400';
    }
  };

  const getStatusIcon = (estado: Unit['estado']) => {
    switch (estado) {
      case 'movimiento':
        return 'ri-play-circle-line';
      case 'detenido':
        return 'ri-pause-circle-line';
      case 'alerta':
        return 'ri-alert-line';
      default:
        return 'ri-question-line';
    }
  };

  const getTipoIcon = (tipo: Unit['tipo']) => {
    switch (tipo) {
      case 'Patrulla':
        return 'ri-police-car-line';
      case 'Limpia':
        return 'ri-truck-line';
      case 'Ambulancia':
        return 'ri-ambulance-line';
      case 'Bomberos':
        return 'ri-fire-line';
      default:
        return 'ri-car-line';
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
        <i className="ri-list-check text-emerald-500"></i>
        Unidades en Línea
      </h2>

      <div className="space-y-3">
        {units.map((unit) => (
          <div
            key={unit.id}
            onClick={() => onSelectUnit(unit.id === selectedUnit ? null : unit.id)}
            className={`bg-slate-800 rounded-lg p-4 border cursor-pointer transition-all hover:bg-slate-750 ${
              selectedUnit === unit.id
                ? 'border-emerald-500 ring-2 ring-emerald-500/20'
                : 'border-slate-700'
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center">
                  <i className={`${getTipoIcon(unit.tipo)} text-lg text-emerald-400`}></i>
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm">{unit.nombre}</h3>
                  <p className="text-xs text-slate-400">{unit.tipo}</p>
                </div>
              </div>
              <div className={`flex items-center gap-1 ${getStatusColor(unit.estado)}`}>
                <i className={`${getStatusIcon(unit.estado)} text-sm`}></i>
                <span className="text-xs font-semibold capitalize">{unit.estado}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-slate-900 rounded p-2">
                <div className="flex items-center gap-1 text-slate-400 mb-1">
                  <i className="ri-speed-line"></i>
                  <span>Velocidad</span>
                </div>
                <p className="text-white font-semibold">{unit.velocidad} km/h</p>
              </div>

              <div className="bg-slate-900 rounded p-2">
                <div className="flex items-center gap-1 text-slate-400 mb-1">
                  <i className="ri-gas-station-line"></i>
                  <span>Combustible</span>
                </div>
                <p className={`font-semibold ${unit.combustible < 30 ? 'text-red-400' : 'text-white'}`}>
                  {unit.combustible}%
                </p>
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-slate-700">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <i className="ri-user-line"></i>
                <span>Chofer: {unit.chofer}</span>
              </div>
            </div>

            {unit.estado === 'alerta' && (
              <div className="mt-3 bg-red-500/10 border border-red-500/30 rounded p-2">
                <div className="flex items-center gap-2 text-xs text-red-400">
                  <i className="ri-alert-line animate-pulse"></i>
                  <span className="font-semibold">Alerta: Nivel bajo de combustible</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

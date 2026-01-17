import type { Unit } from '../page';

interface FuelChartProps {
  units: Unit[];
}

export default function FuelChart({ units: _units }: FuelChartProps) {
  const fuelData = [
    { hora: '08:00', nivel: 95 },
    { hora: '10:00', nivel: 88 },
    { hora: '12:00', nivel: 75 },
    { hora: '14:00', nivel: 68 },
    { hora: '16:00', nivel: 45 },
    { hora: '18:00', nivel: 22 }
  ];

  const maxNivel = 100;
  const alertThreshold = 30;

  return (
    <div className="p-4 border-t border-slate-800">
      <div className="bg-slate-800 rounded-lg p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <i className="ri-line-chart-line text-emerald-500"></i>
            Consumo de Combustible
          </h3>
          <span className="text-xs text-slate-400">Últimas 10 horas</span>
        </div>

        <div className="relative h-40 flex items-end justify-between gap-2">
          <div className="absolute left-0 right-0 bottom-0 h-px bg-slate-700"></div>
          
          <div
            className="absolute left-0 right-0 border-t border-dashed border-red-500/30"
            style={{ bottom: `${(alertThreshold / maxNivel) * 100}%` }}
          >
            <span className="absolute -top-2 right-0 text-xs text-red-400 bg-slate-900 px-1">
              Alerta
            </span>
          </div>

          {fuelData.map((data, index) => {
            const height = (data.nivel / maxNivel) * 100;
            const isAlert = data.nivel < alertThreshold;

            return (
              <div key={index} className="flex-1 flex flex-col items-center gap-2">
                <div className="relative w-full h-full flex items-end">
                  <div
                    className={`w-full rounded-t transition-all ${
                      isAlert ? 'bg-red-500' : 'bg-emerald-500'
                    }`}
                    style={{ height: `${height}%` }}
                  >
                    {isAlert && (
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                        <i className="ri-alert-line text-red-400 text-sm animate-pulse"></i>
                      </div>
                    )}
                  </div>
                </div>
                <div className="text-xs text-slate-400 whitespace-nowrap">{data.hora}</div>
              </div>
            );
          })}
        </div>

        <div className="mt-4 pt-4 border-t border-slate-700">
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
            <div className="flex items-start gap-2">
              <i className="ri-error-warning-line text-red-400 text-lg mt-0.5"></i>
              <div>
                <p className="text-xs font-semibold text-red-400 mb-1">Alerta de Ordeña Detectada</p>
                <p className="text-xs text-red-300">
                  Caída anormal de combustible detectada en unidad PM-07 a las 16:30 hrs
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="bg-slate-900 rounded p-3">
            <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
              <i className="ri-gas-station-line"></i>
              <span>Consumo Promedio</span>
            </div>
            <p className="text-white font-bold text-lg">12.5 L/h</p>
          </div>
          <div className="bg-slate-900 rounded p-3">
            <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
              <i className="ri-alert-line"></i>
              <span>Alertas Hoy</span>
            </div>
            <p className="text-red-400 font-bold text-lg">3</p>
          </div>
        </div>
      </div>
    </div>
  );
}

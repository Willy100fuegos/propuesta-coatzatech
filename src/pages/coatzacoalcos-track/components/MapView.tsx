import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { Unit } from '../page';

interface MapViewProps {
  units: Unit[];
  selectedUnit: string | null;
  onSelectUnit: (id: string) => void;
}

export default function MapView({ units, selectedUnit, onSelectUnit }: MapViewProps) {
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<{ [key: string]: L.Marker }>({});

  useEffect(() => {
    if (!mapRef.current) {
      // Inicializar mapa centrado en Coatzacoalcos (RECENTRADO MÁS AL SUR)
      mapRef.current = L.map('map').setView([18.1300, -94.4600], 14);

      // Tiles oscuros de CartoDB
      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
        subdomains: 'abcd',
        maxZoom: 19
      }).addTo(mapRef.current);
    }

    // Actualizar marcadores
    units.forEach(unit => {
      const color = unit.estado === 'movimiento' ? '#10b981' : 
                    unit.estado === 'detenido' ? '#f59e0b' : '#ef4444';

      if (markersRef.current[unit.id]) {
        // Actualizar posición
        markersRef.current[unit.id].setLatLng([unit.lat, unit.lng]);
      } else {
        // Crear nuevo marcador
        const icon = L.divIcon({
          className: 'custom-marker',
          html: `<div style="background-color: ${color}; width: 24px; height: 24px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.4);"></div>`,
          iconSize: [24, 24],
          iconAnchor: [12, 12]
        });

        const marker = L.marker([unit.lat, unit.lng], { icon })
          .addTo(mapRef.current!)
          .on('click', () => onSelectUnit(unit.id));

        markersRef.current[unit.id] = marker;
      }

      // Actualizar popup
      const popupContent = `
        <div style="color: #1e293b; font-family: sans-serif;">
          <strong style="font-size: 14px;">${unit.nombre}</strong><br/>
          <span style="font-size: 12px;">Velocidad: ${unit.velocidad} km/h</span><br/>
          <span style="font-size: 12px;">Chofer: ${unit.chofer}</span><br/>
          <span style="font-size: 12px;">Combustible: ${unit.combustible}%</span>
        </div>
      `;
      markersRef.current[unit.id].bindPopup(popupContent);

      // Abrir popup si está seleccionado
      if (selectedUnit === unit.id) {
        markersRef.current[unit.id].openPopup();
      }
    });

    return () => {
      // Cleanup
      Object.values(markersRef.current).forEach(marker => marker.remove());
      markersRef.current = {};
    };
  }, [units, selectedUnit, onSelectUnit]);

  return <div id="map" className="w-full h-full"></div>;
}

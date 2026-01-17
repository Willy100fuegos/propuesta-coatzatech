import { useState } from 'react';
import { useRole } from '../../context/RoleContext';
import AdminView from './components/AdminView';
import CitizenView from './components/CitizenView';

export default function GestionActivos() {
  const { isAdmin } = useRole();

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Gestión de Activos Municipales</h1>
        <p className="text-slate-600">Control de espacios públicos e inventario de recursos materiales</p>
      </div>

      {isAdmin ? <AdminView /> : <CitizenView />}
    </div>
  );
}

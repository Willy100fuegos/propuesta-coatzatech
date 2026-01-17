import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';
import MainLayout from '../components/layout/MainLayout';

const PropuestaEstrategica = lazy(() => import('../pages/propuesta-estrategica/page'));
const GestionDocumental = lazy(() => import('../pages/gestion-documental/page'));
const IncidenciasUrbanas = lazy(() => import('../pages/incidencias-urbanas/page'));
const TramitesServicios = lazy(() => import('../pages/tramites-servicios/page'));
const GestionActivos = lazy(() => import('../pages/gestion-activos/page'));
const ObrasTransparentes = lazy(() => import('../pages/obras-transparentes/page'));
const CoatzacoalcosTrack = lazy(() => import('../pages/coatzacoalcos-track/page'));
const NotFound = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <PropuestaEstrategica />
      },
      {
        path: 'gestion-documental',
        element: <GestionDocumental />
      },
      {
        path: 'incidencias-urbanas',
        element: <IncidenciasUrbanas />
      },
      {
        path: 'tramites-servicios',
        element: <TramitesServicios />
      },
      {
        path: 'gestion-activos',
        element: <GestionActivos />
      },
      {
        path: 'obras-transparentes',
        element: <ObrasTransparentes />
      },
      {
        path: 'coatzacoalcos-track',
        element: <CoatzacoalcosTrack />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
];

export default routes;

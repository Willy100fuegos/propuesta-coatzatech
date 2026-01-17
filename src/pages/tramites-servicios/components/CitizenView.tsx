import { useState } from 'react';

interface Document {
  id: string;
  name: string;
  icon: string;
  validated: boolean;
  uploadDate: string;
}

interface Tramite {
  id: string;
  name: string;
  description: string;
  icon: string;
  requiredDocs: string[];
  estimatedTime: string;
  cost: string;
}

const myDocuments: Document[] = [
  { id: 'ine', name: 'INE / Credencial de Elector', icon: 'ri-bank-card-line', validated: true, uploadDate: '15 Ene 2024' },
  { id: 'comprobante', name: 'Comprobante de Domicilio', icon: 'ri-file-text-line', validated: true, uploadDate: '15 Ene 2024' },
  { id: 'acta', name: 'Acta de Nacimiento', icon: 'ri-file-user-line', validated: true, uploadDate: '20 Ene 2024' },
  { id: 'curp', name: 'CURP', icon: 'ri-profile-line', validated: true, uploadDate: '20 Ene 2024' },
];

const availableTramites: Tramite[] = [
  {
    id: 'licencia',
    name: 'Licencia de Funcionamiento',
    description: 'Permiso para operar un negocio o establecimiento comercial',
    icon: 'ri-store-2-line',
    requiredDocs: ['INE', 'Comprobante de Domicilio'],
    estimatedTime: '5 días hábiles',
    cost: '$1,200 MXN'
  },
  {
    id: 'predial',
    name: 'Pago de Predial',
    description: 'Liquidación del impuesto predial anual',
    icon: 'ri-home-4-line',
    requiredDocs: ['Comprobante de Domicilio'],
    estimatedTime: 'Inmediato',
    cost: 'Variable'
  },
  {
    id: 'construccion',
    name: 'Permiso de Construcción',
    description: 'Autorización para obras de construcción o remodelación',
    icon: 'ri-hammer-line',
    requiredDocs: ['INE', 'Comprobante de Domicilio', 'Planos'],
    estimatedTime: '10 días hábiles',
    cost: '$2,500 MXN'
  },
  {
    id: 'matrimonio',
    name: 'Registro de Matrimonio',
    description: 'Inscripción de acta de matrimonio civil',
    icon: 'ri-heart-line',
    requiredDocs: ['INE', 'Acta de Nacimiento', 'CURP'],
    estimatedTime: '3 días hábiles',
    cost: '$800 MXN'
  },
  {
    id: 'defuncion',
    name: 'Acta de Defunción',
    description: 'Certificado oficial de defunción',
    icon: 'ri-file-list-line',
    requiredDocs: ['INE del solicitante', 'Certificado médico'],
    estimatedTime: '2 días hábiles',
    cost: '$350 MXN'
  },
  {
    id: 'agua',
    name: 'Contrato de Agua Potable',
    description: 'Alta de servicio de agua potable',
    icon: 'ri-drop-line',
    requiredDocs: ['INE', 'Comprobante de Domicilio'],
    estimatedTime: '7 días hábiles',
    cost: '$500 MXN'
  }
];

export default function CitizenView() {
  const [showModal, setShowModal] = useState(false);
  const [selectedTramite, setSelectedTramite] = useState<Tramite | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleStartTramite = (tramite: Tramite) => {
    setSelectedTramite(tramite);
    setShowModal(true);
    setIsProcessing(true);

    // Simular procesamiento
    setTimeout(() => {
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <div className="h-full overflow-y-auto bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Nota Estratégica - Vista Ciudadana */}
        <div className="mb-6 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg p-4 flex items-start gap-3 pr-64">
          <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
            <i className="ri-information-line text-white text-sm"></i>
          </div>
          <div>
            <p className="text-sm text-slate-700 leading-relaxed">
              <strong className="text-blue-900">Ventanilla Única Digital:</strong> Crea tu "Bóveda de Documentos" una sola vez 
              (INE, comprobante de domicilio, CURP). Cuando solicites cualquier trámite, el sistema reutiliza tus documentos 
              ya validados. Ya no necesitas hacer filas ni llevar copias físicas. Puedes pagar en línea y recibir notificaciones 
              en tiempo real del estatus de tu solicitud.
            </p>
          </div>
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Mi Bóveda Digital</h1>
          <p className="text-slate-600">Gestiona tus documentos y realiza trámites de forma rápida y segura</p>
        </div>

        {/* Sección: Mis Documentos */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-slate-900">Mis Documentos</h2>
            <button className="px-4 py-2 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer">
              <i className="ri-upload-cloud-line text-lg"></i>
              Subir Documento
            </button>
          </div>

          <div className="grid grid-cols-4 gap-4">
            {myDocuments.map((doc) => (
              <div key={doc.id} className="bg-white rounded-xl p-5 border border-slate-200 hover:shadow-lg transition-all cursor-pointer group">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center group-hover:bg-teal-200 transition-all">
                    <i className={`${doc.icon} text-2xl text-teal-600`}></i>
                  </div>
                  {doc.validated && (
                    <div className="bg-green-100 rounded-full p-1">
                      <i className="ri-checkbox-circle-fill text-green-600 text-lg"></i>
                    </div>
                  )}
                </div>
                <h3 className="font-semibold text-slate-900 text-sm mb-1">{doc.name}</h3>
                <p className="text-xs text-slate-500">Subido: {doc.uploadDate}</p>
                {doc.validated && (
                  <div className="mt-3 pt-3 border-t border-slate-100">
                    <span className="text-xs font-semibold text-green-600 flex items-center gap-1">
                      <i className="ri-shield-check-line"></i>
                      Validado
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Sección: Trámites Disponibles */}
        <div>
          <div className="mb-4">
            <h2 className="text-xl font-bold text-slate-900 mb-1">Trámites Disponibles</h2>
            <p className="text-sm text-slate-600">Inicia tu trámite usando los documentos de tu bóveda</p>
          </div>

          <div className="grid grid-cols-3 gap-5">
            {availableTramites.map((tramite) => (
              <div key={tramite.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all group">
                <div className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-100 to-teal-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <i className={`${tramite.icon} text-3xl text-teal-600`}></i>
                  </div>
                  
                  <h3 className="font-bold text-slate-900 mb-2">{tramite.name}</h3>
                  <p className="text-sm text-slate-600 mb-4">{tramite.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-xs text-slate-600">
                      <i className="ri-time-line text-teal-600"></i>
                      <span>{tramite.estimatedTime}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-600">
                      <i className="ri-money-dollar-circle-line text-teal-600"></i>
                      <span>{tramite.cost}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs font-semibold text-slate-700 mb-2">Documentos requeridos:</p>
                    <div className="flex flex-wrap gap-1">
                      {tramite.requiredDocs.map((doc, idx) => (
                        <span key={idx} className="px-2 py-1 bg-slate-100 text-slate-700 rounded-md text-xs">
                          {doc}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => handleStartTramite(tramite)}
                    className="w-full px-4 py-3 bg-gradient-to-r from-teal-600 to-teal-500 text-white rounded-lg font-semibold hover:from-teal-700 hover:to-teal-600 transition-all shadow-lg shadow-teal-500/30 whitespace-nowrap cursor-pointer"
                  >
                    Iniciar Trámite
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal de Pre-aprobación */}
      {showModal && selectedTramite && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden animate-in zoom-in duration-300">
            {isProcessing ? (
              <div className="p-12 text-center">
                <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                  <i className="ri-file-search-line text-4xl text-teal-600"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Verificando documentos...</h3>
                <p className="text-slate-600 text-sm">Usando documentos de tu Bóveda Digital</p>
                <div className="mt-6 flex justify-center">
                  <div className="w-8 h-8 border-4 border-teal-600 border-t-transparent rounded-full animate-spin"></div>
                </div>
              </div>
            ) : (
              <>
                <div className="bg-gradient-to-r from-green-600 to-green-500 p-6 text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-checkbox-circle-fill text-4xl text-green-600"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">¡Trámite Pre-aprobado!</h3>
                  <p className="text-green-50">Todos tus documentos están validados</p>
                </div>

                <div className="p-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                    <h4 className="font-bold text-green-900 mb-2">{selectedTramite.name}</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-green-700">
                        <i className="ri-checkbox-line"></i>
                        <span>Documentos verificados automáticamente</span>
                      </div>
                      <div className="flex items-center gap-2 text-green-700">
                        <i className="ri-checkbox-line"></i>
                        <span>Tiempo estimado: {selectedTramite.estimatedTime}</span>
                      </div>
                      <div className="flex items-center gap-2 text-green-700">
                        <i className="ri-checkbox-line"></i>
                        <span>Costo: {selectedTramite.cost}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-lg p-4 mb-6">
                    <p className="text-sm text-slate-700 mb-3 font-semibold">Siguiente paso:</p>
                    <p className="text-sm text-slate-600">
                      Procede al pago en línea o acude a las oficinas municipales con tu número de folio para completar el trámite.
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setShowModal(false)}
                      className="flex-1 px-4 py-3 border border-slate-300 text-slate-700 rounded-lg font-semibold hover:bg-slate-50 transition-all whitespace-nowrap cursor-pointer"
                    >
                      Cerrar
                    </button>
                    <button className="flex-1 px-4 py-3 bg-gradient-to-r from-teal-600 to-teal-500 text-white rounded-lg font-semibold hover:from-teal-700 hover:to-teal-600 transition-all shadow-lg shadow-teal-500/30 whitespace-nowrap cursor-pointer">
                      Pagar en Línea
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

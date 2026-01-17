import HeroSection from './components/HeroSection';
import VisionSection from './components/VisionSection';
import EjesEstrategicos from './components/EjesEstrategicos';
import CartaPresentacion from './components/CartaPresentacion';
import PerfilValores from './components/PerfilValores';
import ROICasosExito from './components/ROICasosExito';
import ContactFooter from './components/ContactFooter';

export default function PropuestaEstrategica() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <VisionSection />
      <EjesEstrategicos />
      <CartaPresentacion />
      <PerfilValores />
      <ROICasosExito />
      <ContactFooter />
    </div>
  );
}

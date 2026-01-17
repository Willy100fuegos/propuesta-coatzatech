
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type Role = 'citizen' | 'admin';

interface RoleContextType {
  role: Role;
  toggleRole: () => void;
  isAdmin: boolean;
  isAdminView: boolean;
}

const RoleContext = createContext<RoleContextType | undefined>(undefined);

export function RoleProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<Role>('citizen');
  const location = useLocation();

  // Reiniciar a Vista Ciudadana cada vez que cambia la ruta
  useEffect(() => {
    setRole('citizen');
  }, [location.pathname]);

  const toggleRole = () => {
    setRole((prev) => (prev === 'citizen' ? 'admin' : 'citizen'));
  };

  const isAdmin = role === 'admin';
  const isAdminView = role === 'admin';

  return (
    <RoleContext.Provider value={{ role, toggleRole, isAdmin, isAdminView }}>
      {children}
    </RoleContext.Provider>
  );
}

export function useRole() {
  const context = useContext(RoleContext);
  if (context === undefined) {
    throw new Error('useRole must be used within a RoleProvider');
  }
  return context;
}

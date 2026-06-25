import { createContext, use } from 'react';

// Creamos el contexto aquí
export const AuthContext = createContext(null);

// Creamos un hook personalizado para usar el contexto de autenticación
// Para esto usamos "use" y "createContext"
export function useAuth() {
  return use(AuthContext);
}
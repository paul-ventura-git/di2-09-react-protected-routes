import { createContext, use } from 'react';

// Creamos el contexto aquí
export const AuthContext = createContext(null);

// Exportamos el hook aquí
export function useAuth() {
  return use(AuthContext);
}
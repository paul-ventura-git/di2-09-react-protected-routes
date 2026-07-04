import { useState } from 'react';
import { AuthContext } from './AuthContext'; // Importamos el contexto del otro archivo

/**
 * Provee el contexto de autenticación a los componentes hijos
 * Definir el "namespace" del contexto, para que los componentes hijos puedan acceder a él.
 * Wrapper (envoltorio)
 * @param {*} param0 
 * @returns 
 */
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  return (
    <AuthContext value={{ user, login, logout }}>
      {children}
    </AuthContext>
  );
}
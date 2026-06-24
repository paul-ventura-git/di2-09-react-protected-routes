import { useState } from 'react';
import { AuthContext } from './AuthContext'; // Importamos el contexto del otro archivo

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  return (
    // Usamos el contexto importado
    <AuthContext value={{ user, login, logout }}>
      {children}
    </AuthContext>
  );
}
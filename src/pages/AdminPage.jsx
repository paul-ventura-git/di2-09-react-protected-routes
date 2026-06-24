import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext'; // Asegúrate de ajustar la ruta según tu estructura de carpetas

export default function AdminPage() {
  // Extraemos la función logout del contexto de autenticación
  const { logout } = useContext(AuthContext);

  return (
    <div style={{ padding: '20px' }}>
      <h1>AdminPage</h1>
      <p>Bienvenido al panel de administración.</p>
      
      <button 
        onClick={logout} 
      >
        Cerrar Sesión
      </button>
    </div>
  );
}

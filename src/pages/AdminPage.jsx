import { useAuth } from '../hooks/useAuth';

export default function AdminPage() {
  const { logout } = useAuth();
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

import { useAuth } from '../hooks/useAuth';

export default function DashboardPage() {
  const { logout } = useAuth();
  return (
    <div style={{ padding: '20px' }}>
      <h1>DashboardPage</h1>
      <p>Bienvenido a tu panel de control.</p>
      <button onClick={logout}>Cerrar Sesión</button>
    </div>
  )
}

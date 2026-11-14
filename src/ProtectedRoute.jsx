import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';

export function ProtectedRoute({ allowedRoles }) {
  const { user } = useAuth();

  // Authentication: Si no hay usuario logueado, redirige a la página de login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Authorización (basada en roles RBAC): Si el usuario no tiene el rol permitido, redirige a la página de "no autorizado"
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  // Si pasa la seguridad, renderiza la ruta hija correspondiente
  return <Outlet />;
}
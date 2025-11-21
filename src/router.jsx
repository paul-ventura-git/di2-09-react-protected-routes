import { createBrowserRouter } from 'react-router-dom';
import LoginPage from './LoginPage'; // Tus páginas...
import DashboardPage from './DashboardPage';
import AdminPage from './AdminPage';
import { ProtectedRoute } from './ProtectedRoute';

export const router = createBrowserRouter([
  // Rutas Públicas
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/unauthorized',
    element: <div>Acceso Denegado</div>,
  },

  // Rutas Privadas (Usuarios y Admins)
  {
    element: <ProtectedRoute allowedRoles={['admin', 'user']} />,
    children: [
      {
        path: '/dashboard',
        element: <DashboardPage />,
      },
      // Puedes agregar más rutas aquí que compartan este nivel de acceso
    ],
  },

  // Rutas Exclusivas Admin
  {
    element: <ProtectedRoute allowedRoles={['admin']} />,
    children: [
      {
        path: '/admin',
        element: <AdminPage />,
      },
    ],
  },
  
  // Redirección por defecto (404 o raíz)
  {
    path: '*',
    element: <LoginPage />,
  }
]);
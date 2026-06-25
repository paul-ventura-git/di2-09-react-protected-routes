import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage'; // Tus páginas...
import LoginPage from './pages/LoginPage'; // Tus páginas...
import DashboardPage from './pages/DashboardPage';
import AdminPage from './pages/AdminPage';
import { ProtectedRoute } from './ProtectedRoute';

export const router = createBrowserRouter([
  // Rutas Públicas
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/unauthorized',
        element: <div>Acceso Denegado</div>,
      },

      // Rutas Privadas (Usuarios, Admin)
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
      }
    ]
  }
  ,
  
  // Redirección por defecto (404 o raíz)
  {
    path: '*',
    element: <LoginPage />,
  }
]);
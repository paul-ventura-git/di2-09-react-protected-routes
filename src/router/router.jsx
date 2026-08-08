import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import HomePage from '../pages/HomePage'; // Tus páginas...
import LoginPage from '../pages/LoginPage'; // Tus páginas...
import DashboardPage from '../pages/DashboardPage';
import AdminPage from '../pages/AdminPage';
import { ProtectedRoute } from '../ProtectedRoute';

import productsLoader from '../services/loaders/productsLoader';
import FormNewProduct from '../components/FormNewProduct';
import newProductAction from '../services/actions/newProductAction';
import ProductDetails from '../components/ProductDetails';
import { productDetailsLoader } from '../services/loaders/productDetailsLoader';
import Products from '../pages/Products';
import Customers from '../pages/Customers';
import NotFound from '../pages/NotFound'
import FormNewCustomer from '../components/FormNewCustomer';
import CustomerDetails from '../components/CustomerDetails';

import FormEditCustomer from '../components/FormEditCustomer';
import DeleteCustomer from '../components/DeleteCustomer';

import FormEditProduct from '../components/FormEditProduct';
import { productEditLoader } from '../services/loaders/productEditLoader';
import editProductAction from '../services/actions/editProductAction';
import DeleteProduct from '../components/DeleteProduct';
import { deleteProductLoader } from '../services/loaders/deleteProductLoader';
import deleteProductAction from '../services/actions/deleteProductAction';

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
          {
            path: '/products',
            element: <Products />,
            loader: productsLoader,
            children: [
              { path: '/products/:id', element: <ProductDetails />, loader: productDetailsLoader},
              { path: '/products/create-product', element: <FormNewProduct />, action: newProductAction },          
              { path: '/products/edit-product/:id', element: <FormEditProduct />, loader: productEditLoader, action: editProductAction },
              { path: '/products/delete-product/:id', element: <DeleteProduct />, loader: deleteProductLoader, action: deleteProductAction },
            ],
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

/*
useState y useEffect.
useContext. [localStorage para estados]
useReducer. [consola de videojuegos + juegos]: JSX + JS
RTK Redux Toolkit. [herramienta para gestión del estado global más escalable y eficiente]
*/
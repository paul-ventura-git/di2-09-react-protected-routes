import { useAuth } from '../hooks/useAuth';

import React, { useState } from 'react';
import { products } from '../data/products';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import CartOffcanvas from '../components/CartOffcanvas';

export default function DashboardPage() {
  const { logout } = useAuth();

  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Contador total de productos agregados
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <>
      <div style={{ padding: '20px' }}>
        <h1>DashboardPage</h1>
        <p>Bienvenido a tu panel de control.</p>
        <button className="btn btn-dark py-2 fw-semibold" onClick={logout}>Cerrar Sesión</button>
      </div>
      <div className="container py-5 position-relative" style={{ minHeight: '100vh' }}>
        <header className="mb-5 border-bottom pb-3">
          <h2>🏪 TechStore - Catálogo</h2>
          <p className="text-muted">Bienvenido a tu panel de compras global.</p>
        </header>

        {/* Grilla de los 5 productos */}
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {products.map((product) => (
            <div key={product.id} className="col">
              <div className="card h-100 shadow-sm">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text text-muted small flex-grow-1">{product.desc}</p>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <span className="fs-5 fw-bold">${product.price.toFixed(2)}</span>
                    <button 
                      className="btn btn-outline-primary btn-sm"
                      onClick={() => dispatch(addToCart(product))}
                    >
                      Agregar al carrito
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botón Flotante del Carrito (Esquina inferior derecha) */}
        <button 
          className="btn btn-dark btn-lg position-fixed rounded-circle shadow d-flex align-items-center justify-content-center"
          style={{ bottom: '30px', right: '30px', width: '65px', height: '65px', zIndex: 1040 }}
          onClick={() => setIsCartOpen(true)}
        >
          🛒
          {totalItems > 0 && (
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {totalItems}
            </span>
          )}
        </button>

        {/* Componente Offcanvas Inyectado */}
        <CartOffcanvas isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </>
  )
}

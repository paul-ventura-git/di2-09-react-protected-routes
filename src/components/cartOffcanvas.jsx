import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../store/cartSlice';

export default function CartOffcanvas({ isOpen, onClose }) {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      {/* Backdrop oscuro nativo controlado manualmente */}
      {isOpen && <div className="offcanvas-backdrop fade show" onClick={onClose}></div>}

      <div className={`offcanvas offcanvas-end ${isOpen ? 'show' : ''}`} tabIndex="-1" style={{ visibility: isOpen ? 'visible' : 'hidden' }}>
        <div className="offcanvas-header bg-dark text-white">
          <h5 className="offcanvas-title">Tu Carrito 🛒</h5>
          <button type="button" className="btn-close btn-close-white" onClick={onClose}></button>
        </div>
        
        <div className="offcanvas-body d-flex flex-column">
          {cartItems.length === 0 ? (
            <p className="text-muted text-center my-auto">El carrito está vacío.</p>
          ) : (
            <>
              <div className="flex-grow-1 overflow-y-auto">
                {cartItems.map((item) => (
                  <div key={item.id} className="d-flex justify-content-between align-items-center mb-3 pb-2 border-bottom">
                    <div>
                      <h6 className="mb-0">{item.name}</h6>
                      <small className="text-muted">
                        {item.quantity} x ${item.price.toFixed(2)}
                      </small>
                    </div>
                    <button 
                      className="btn btn-sm btn-outline-danger" 
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-3 border-top">
                <div className="d-flex justify-content-between fw-bold mb-3 fs-5">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="d-grid gap-2">
                  <button className="btn btn-primary" onClick={() => alert('¡Compra simulada con éxito!')}>
                    Proceder al Pago (Simulado)
                  </button>
                  <button className="btn btn-sm btn-link text-danger" onClick={() => dispatch(clearCart())}>
                    Vaciar Carrito
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
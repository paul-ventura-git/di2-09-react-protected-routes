import { useActionState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
// import { users } from '../data/users';

export default function LoginPage() {
  const { user, login } = useAuth();
  const navigate = useNavigate();

  // Action del formulario
  const loginAction = async (prevState, formData) => {
    const email = formData.get('email');
    const password = formData.get('password');

    // Caso 1: Es Admin
    if (email === 'admin@test.com' && password === 'admin123') {
      login({ name: 'Administrador', role: 'admin' });
      return null; 
    }

    // Caso 2: Es Usuario (NUEVO)
    if (email === 'user@test.com' && password === 'user123') {
      login({ name: 'Usuario Estándar', role: 'user' });
      return null;
    }

    return 'Credenciales incorrectas';
  };

  const [error, submitAction, isPending] = useActionState(loginAction, null);

  // EFECTO: Redirección dinámica según el rol
  useEffect(() => {
    if (user) {
      // Si el rol es admin -> /admin
      if (user.role === 'admin') {
        navigate('/admin');
      } 
      // Si el rol es user -> /dashboard
      else if (user.role === 'user') {
        navigate('/dashboard');
      }
    }
  }, [user, navigate]);

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      <div className="card shadow-sm border-0" style={{ width: '100%', maxWidth: '420px', borderRadius: '12px' }}>
        
        {/* Encabezado de la tarjeta similar a la Tienda */}
        <div className="card-body p-4 p-md-5">
          <div className="text-center mb-4">
            <h3 className="fw-bold text-dark mb-1">🏪 TechStore</h3>
            <p className="text-muted small">Ingresa tus credenciales para acceder</p>
          </div>

          <form action={submitAction}>
            {/* Campo de Email */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label text-secondary small fw-semibold">
                Correo Electrónico
              </label>
              <input 
                id="email999"
                name="email" 
                type="email" 
                className="form-control" 
                placeholder="ejemplo@test.com"
                required 
              />
            </div>
            
            <div className="mb-3">
              <label htmlFor="password" className="form-label text-secondary small fw-semibold">
                Contraseña
              </label>
              <input 
                id="password999"
                name="password" 
                type="password" 
                className="form-control" 
                placeholder="Ingresa tu contraseña"
                 
              />
            </div>

            {/* Botón de envío (Estilo oscuro/gris básico como el botón flotante de la tienda) */}
            <div className="d-grid mt-4">
              <button 
                type="submit" 
                className="btn btn-dark py-2 fw-semibold" 
                disabled={isPending}
              >
                {isPending ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Iniciando...
                  </>
                ) : 'Iniciar Sesión'}
              </button>
            </div>
            
            {/* Mensaje de Error */}
            {error && (
              <div className="alert alert-danger text-center mt-3 py-2 small border-0" role="alert">
                ⚠️ {error}
              </div>
            )}
          </form>

          {/* Tarjeta de ayuda para pruebas (Colores muy sutiles grisáceos) */}
          <div className="mt-4 p-3 bg-light border rounded-3 text-start">
            <span className="text-secondary d-block mb-1 small fw-bold">Cuentas de prueba:</span>
            <code className="d-block text-dark small" style={{ fontSize: '0.85em' }}>👤 user@test.com: user123</code>
            <code className="d-block text-dark small" style={{ fontSize: '0.85em' }}>🛠️ admin@test.com: admin123</code>
          </div>

        </div>
      </div>
    </div>
  );
}
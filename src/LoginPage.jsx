import { useActionState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

export default function LoginPage() {
  const { login, user } = useAuth();
  const navigate = useNavigate();

  // Action del formulario
  const loginAction = async (prevState, formData) => {
    const email = formData.get('email');
    
    // Caso 1: Es Admin
    if (email === 'admin@test.com') {
      login({ name: 'Administrador', role: 'admin' });
      return null; 
    }

    // Caso 2: Es Usuario (NUEVO)
    if (email === 'user@test.com') {
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
    <form action={submitAction}>
      <label>
        Email (prueba admin@test.com o user@test.com):
        <input name="email" type="email" required />
      </label>
      
      <button disabled={isPending}>
        {isPending ? 'Entrando...' : 'Iniciar Sesión'}
      </button>
      
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}
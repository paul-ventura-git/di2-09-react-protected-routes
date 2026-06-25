import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
}

/**
 * useState, useEffect
 * useContext -> AuthProvider (Authentication, Authorization, Theme:dark, Light, Language)
 * useReducer
 * RTK - Redux Toolkit -> Provider-REACT-REDUX (ShoppingCart, UserProfile, Notifications)
*/
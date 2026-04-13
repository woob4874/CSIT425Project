import { useAppAuth } from '../context/AuthContext.jsx';
import { Navigate } from 'react-router-dom';

export function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading, login } = useAppAuth();

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="spinner" />
        <p>Loading…</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    // For demo mode: redirect to landing so user can click "Sign In"
    // For Auth0: trigger the redirect automatically
    if (login.length === 0 || typeof login === 'function') {
      // If it's the real Auth0 login, call it
      return <Navigate to="/" replace />;
    }
    return <Navigate to="/" replace />;
  }

  return children;
}

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PublicRoute({ children }) {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      console.log('Token found, redirecting to home...');
      navigate('/dashboard'); // Programmatically navigate to the home page
    }
  }, [token, navigate]);

  // Render children only if no token exists
  return !token ? children : null;
}

import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/products');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <button onClick={handleRedirect} style={{ padding: '10px 20px', cursor: 'pointer' }}>
        Go to Products
      </button>
    </div>
  );
}

export default NotFound;

import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <div>This is page not found!</div>
      <Link to="/">back to main page</Link>
    </div>
  );
};

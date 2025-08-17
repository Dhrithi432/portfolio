import React from 'react';

export default function Card({ children, className = '' }) {
  return (
    <div className= {`bg-white rounded-xl shadow-lg p-2 w-120 ${className}`}>
      {children}
    </div>
  );
}

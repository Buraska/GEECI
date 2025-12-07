'use client';

import { useState } from 'react';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      style={{
        ...cardStyle,
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: isHovered ? '0 8px 16px rgba(0,0,0,0.15)' : '0 2px 4px rgba(0,0,0,0.1)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={imageContainerStyle}>
        <img 
          src={product.image || 'https://via.placeholder.com/300x300?text=Product'} 
          alt={product.name}
          style={{
            ...imageStyle,
            transform: isHovered ? 'scale(1.05)' : 'scale(1)'
          }}
        />
      </div>
      <div style={contentStyle}>
        <h3 style={nameStyle}>{product.name}</h3>
        <p style={priceStyle}>
          {product.originalPrice && (
            <span style={originalPriceStyle}>{product.originalPrice} €</span>
          )}
          <span style={currentPriceStyle}>{product.price} €</span>
        </p>
        <p style={descriptionStyle}>{product.description}</p>
        <button 
          style={{
            ...addToCartStyle,
            backgroundColor: isHovered ? '#e74c3c' : '#333'
          }}
        >
          Lisa ostukorvi
        </button>
      </div>
    </div>
  );
}

const cardStyle = {
  backgroundColor: '#fff',
  border: '1px solid #e0e0e0',
  borderRadius: '8px',
  overflow: 'hidden',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column'
};

const imageContainerStyle = {
  width: '100%',
  height: '300px',
  overflow: 'hidden',
  backgroundColor: '#f5f5f5',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform 0.3s'
};

const contentStyle = {
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  flex: 1
};

const nameStyle = {
  fontSize: '18px',
  fontWeight: '600',
  color: '#333',
  margin: 0
};

const priceStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  margin: '8px 0'
};

const originalPriceStyle = {
  fontSize: '14px',
  color: '#999',
  textDecoration: 'line-through'
};

const currentPriceStyle = {
  fontSize: '20px',
  fontWeight: 'bold',
  color: '#e74c3c'
};

const descriptionStyle = {
  fontSize: '14px',
  color: '#666',
  lineHeight: '1.5',
  margin: '8px 0',
  flex: 1
};

const addToCartStyle = {
  padding: '12px 24px',
  backgroundColor: '#333',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  fontSize: '14px',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  marginTop: 'auto'
};


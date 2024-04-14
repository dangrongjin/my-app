// ProductsList.js
import React from 'react';
import Product from './Product';

export default function ProductsList({ products, onAddToCart }) {
  return (
    <div>
      {products.map(product => (
        <Product key={product.code} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}

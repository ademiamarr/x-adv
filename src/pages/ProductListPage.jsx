import React from 'react';

const products = [
  { id: 1, name: 'Product A', price: 29.99, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product B', price: 49.99, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Product C', price: 19.99, image: 'https://via.placeholder.com/150' },
];

const ProductListPage = () => {
  return (
    <div id="productlist-page">
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {products.map(product => (
          <div key={product.id} style={{ border: '1px solid #eee', padding: '16px', width: '200px' }}>
            <img src={product.image} alt={product.name} style={{ width: '100%' }} />
            <h2 style={{ fontSize: '1.2em' }}>{product.name}</h2>
            <p>${product.price.toFixed(2)}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;
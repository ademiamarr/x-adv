import React from 'react';

const products = [
  { id: 1, name: 'Product A', price: 29.99, image: 'https://via.placeholder.com/150' },
];

const ProductListPage = () => {
  return (
    <div id="productlist-page">
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {products.map(product => (
          <div id='product-box' key={product.id} >
            <img src={product.image} alt={product.name} style={{ width: '100%',height: '50%', border: '1px solid red' }} />
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
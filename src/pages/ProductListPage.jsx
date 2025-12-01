import React from 'react';
import adv1 from '../assetss/adv1.png';
import adv2 from '../assetss/xadv2.png';
import adv3 from '../assetss/adv3.png';
import adv4 from '../assetss/adv4.png';
import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';


const products = [
  { id: 1, name: 'Honda X-Adv 750', price: 19.000, image: adv1, cc: '750' },
  { id: 3, name: 'Honda X-Adv 450', price: 14.999, image: adv2, cc: '450' },
  { id: 2, name: 'Honda X-Adv 700', price: 17.999, image: adv3, cc: '700' },
  { id: 4, name: 'Honda X-Adv 350', price: 12.999, image: adv4, cc: '350' },
];



const ProductListPage = () => {
  return (
    <div id="productlist-page">
      <Link id='backIcon' to='/' aria-label='Back to home'>
        <IoArrowBackOutline />      
      </Link>
      <div
        className="product-list-container"
        style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'stretch' }}
      >
        {products.map(product => (
          <div
            className='product-box'
            key={product.id}
            style={{
              width: '99%',
              margin: '0 auto',
              height: '97vh',
              borderBottom: '1px solid white',
              boxSizing: 'border-box',
              display: 'flex',
              gap: 12,
              alignContent: 'center',
              alignItems: 'center', 
              justifyContent: 'space-between',
              flexDirection: 'column',
            }}
          >
            <img src={product.image} 
            alt={product.name} 
            style={{ 
              width: '46%',
              height: 440, 
              objectFit: 'cover',
              zIndex: '1',
              }} />
              
            <h1 style={{marginTop: '-45%',
               marginLeft: '-6%',
               fontSize: '180px',
               zIndex: '-1',
               fontWeight:  400,
               fontFamily: "Raleway, sans-serif",
               color: 'rgba(255, 255, 255, 0.301)',
               }}>{product.cc}</h1>
            <div className='box-ctn'>
              <h2 style={{ fontSize: '1.45rem', borderRight: '1px solid white', width: '35%', height: '100%' }}>{product.name}</h2>
              <p style={{ fontWeight: 450, fontSize: 30, borderRight: '1px solid white', width: '45%', height: '100%' }}>${product.price.toFixed(3)}</p>
              <button style={{ fontSize: '60px',border: '0px', backgroundColor: 'transparent' ,padding: '8px 12px', cursor: 'pointer', width: '20%', height: '100%' }}>+</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;
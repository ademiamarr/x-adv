import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MasterCard from '../assetss/mastercard.png';
import Visa from '../assetss/visa.png';
import { IoArrowBackOutline } from "react-icons/io5";

const CartPage = () => {
  const [cardHolder, setCardHolder] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  // Helpers
  const formatCardDisplay = (digits) => {
    // show entered digits from the start, mask the remaining digits on the right
    const d = (digits || '').toString().padEnd(16, '*').slice(0, 16);
    return d.replace(/(.{4})/g, '$1 ').trim();
  };

  const formatCardInput = (digits) => {
    const d = (digits || '').replace(/\D/g, '').slice(0, 16);
    return d.replace(/(.{4})/g, '$1 ').trim();
  };

  const handleCardNumberChange = (e) => {
    const digits = e.target.value.replace(/\D/g, '').slice(0, 16);
    setCardNumber(digits);
  };

  const handleExpiryChange = (e) => {
    const digits = e.target.value.replace(/\D/g, '').slice(0, 4);
    if (digits.length >= 3) setExpiry(digits.slice(0,2) + '/' + digits.slice(2));
    else setExpiry(digits);
  };

  const handleCvvChange = (e) => {
    const digits = e.target.value.replace(/\D/g, '').slice(0, 3);
    setCvv(digits);
  };

  return (
    <div  className='CartPage'>
      <div className='shoppingBsk'>
        <IoArrowBackOutline id='backIcon' />
        <h2 style={{marginTop: '-40px'}}>Shopping Cart</h2>
        <h2 style={{opacity: '0.2'}}>Basket Is Empty.</h2>
        <div id='subTotal'>
          <Link id='linkSub' to='/products'>&larr; Continue Shopping</Link>
          <p style={{ color: 'black' }}>Subtotal: $0.00</p>
        </div>
      </div>
      <div className='Payment'>
        <div id='paymentInfo'>
          <h1 style={{color: 'white'}}>Card Details</h1>
          <p style={{color: 'grey'}}>Card Type</p>
          <div id='Card'>
            <div className='cardInfo'>
              <img id='Visa' src={Visa} alt="Visa" />
              <span id='cardNumbers'>{cardNumber ? formatCardDisplay(cardNumber) : '**** **** **** ****'}</span>
              <span id='cardHolder'>{cardHolder.trim() ? cardHolder : 'John Doe'}</span>
              <span id='expiryDate'>{expiry ? expiry : '12/24'}</span>
            </div>
            <img id='MasterCard' alt='MasterCard' src={MasterCard} />
            <div className='personalInfo'>
              <label htmlFor='CardHolder'>Name on Card</label>
              <input
                id='CardHolder'
                type='text'
                value={cardHolder}
                onChange={(e) => setCardHolder(e.target.value)}
                placeholder='Full name'
              />
              <br />
              <label htmlFor='CardNumber'>Card Numbers</label>
              <input
                id='CardNumber'
                placeholder='**** **** **** ****'
                type='text'
                value={formatCardInput(cardNumber)}
                onChange={handleCardNumberChange}
                maxLength={19}
              />
              <br />
              <div id='expCvv'>
                <label htmlFor="exp">Expiration Date</label>
                <input
                  id='exp'
                  placeholder='MM/YY'
                  type='text'
                  value={expiry}
                  onChange={handleExpiryChange}
                  maxLength={5}
                />
                <br />
                <label htmlFor="cvv">CVV</label>
                <input id='cvv' placeholder='***' maxLength={3} type='password' value={cvv} onChange={handleCvvChange}></input>
              </div>
              <button id='payBtn'>Check Out</button>
            </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default CartPage;

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';


import './checkout.scss';

const CheckoutPage = ({ total, cartItems }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className ='header-block'>
        <span>Product</span>
      </div>
      <div className ='header-block'>
        <span>Description</span>
      </div>
      <div className ='header-block'>
        <span>Quantity</span>
      </div>
      <div className ='header-block'>
        <span>Price</span>
      </div>
      <div className ='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {
      cartItems.map(cartItem => // map through the cart and render a CheckoutItem component for each item onto the checkout page
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      )
    }
    <div className='total'>
      <span>TOTAL: ${total}</span>
    </div>
    <div className='test-warning'>
      *Please use the following test credit card for payments*
      <br />
      Card Num: 4242 4242 4242 4242 - Exp: any future date (MM/YY) - CVV: 123
    </div>
    <StripeCheckoutButton price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal // calculates cart total amount
});



export default connect(mapStateToProps)(CheckoutPage);
import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

import './checkout-item.scss';

export const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;

  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow left-arrow' onClick={() => removeItem(cartItem)}>&#10094;</div> {/* left-facing decrease arrow */}
        <span className='value'>{quantity}</span>
        <div className='arrow right-arrow' onClick={() => addItem(cartItem)}>&#10095;</div> {/* right-facing increase arrow */}
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={() => clearItem(cartItem)}>&#10005;</div>
    </div>
)};

const mapDispatchToProps = dispatch => ({ // clearItem, addItem, removeItem will now be accessible in props above for button onClick event
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
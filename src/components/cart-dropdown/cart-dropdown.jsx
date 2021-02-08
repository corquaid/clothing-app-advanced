import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import './cart-dropdown.scss';

const CartDropdown = ({ cartItems }) => ( // cartItems from props
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />) // map through cartItems and create a div for each cartItem
      }
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = state => ({ // destructure cart / cartItems from state
  cartItems: selectCartItems(state) // from selector file
})

export default connect(mapStateToProps)(CartDropdown);
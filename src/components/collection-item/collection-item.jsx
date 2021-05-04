import React from 'react';

import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button'
import { addItem } from '../../redux/cart/cart.actions';

import './collection-item.scss';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item; // desctructure values from the item object

  return(
  <div className='collection-item'>
    <div 
      className='image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}      
    />
    <div className='collection-footer'>
      <span className='name'>{ name }</span>
      <span className='price'>{ price }</span>
    </div>
  <CustomButton className='custom-button' onClick={() => addItem(item)} inverted> Add to Cart</CustomButton> 
  {/* addItem function is fired on each button click */}
  </div>
  )
};

const mapDispatchToProps = dispatch => ({ // addItem will now be accessible in the props
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
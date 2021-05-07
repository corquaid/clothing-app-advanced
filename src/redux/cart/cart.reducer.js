import CartActionTypes from './cart.types';

import { addItemToCart, removeItemFromCart } from './cart.utils';

const INITIAL_STATE = {
  hidden: true, // dropdown is hidden when website loads initially
  cartItems: [] // cart is initially an empty array
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden // bang ! operator converts the hidden state to the opposite of the current true/false value
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload) // external utils function to create new cart array with new item to add, taken from the payload value
      };
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter( // function that removes item from cart, returning a new array with the item to be removed filtered out
          cartItem => cartItem.id !== action.payload.id // keep any items whose id does not match the item that we are trying to remove
        )
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      };
    case CartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: []
      }
    default:
      return state;
  }
}

export default cartReducer;
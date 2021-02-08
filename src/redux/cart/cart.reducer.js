import CartActionTypes from './cart.types';
import { addItemToCart } from './cart.utils';

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
      }
    default:
      return state;
  }
}

export default cartReducer;
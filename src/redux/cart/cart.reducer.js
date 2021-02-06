import CartActionTypes from './cart.types';

const INITIAL_STATE = {
  hidden: true // dropdown is hidden when website loads initially
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden // bang ! operator converts the hidden state to the opposite of the current true/false value
      }
      default:
        return state;
  }
}

export default cartReducer;
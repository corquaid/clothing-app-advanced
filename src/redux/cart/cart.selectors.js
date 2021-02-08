import { createSelector } from 'reselect';

// Input selector
const selectCart = state => state.cart; // this selects only the cart component of state

// Replacing mapstatetoprops in cart-dropdown
export const selectCartItems = createSelector( // 1st arg is the input selectors, 2nd arg is a function
  [selectCart],
  (cart) => cart.cartItems
);

// Replacing mapstatetoprops with reduce function in cart-icon
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((totalQuantity, cartItem) => totalQuantity + cartItem.quantity , 0)
);
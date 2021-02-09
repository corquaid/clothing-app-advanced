import { createSelector } from 'reselect';

// Input selector
const selectCart = state => state.cart; // this selects only the cart component of state

// Replacing mapstatetoprops in cart-dropdown
export const selectCartItems = createSelector( // 1st arg is the input selectors, 2nd arg is a function
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
)

// Replacing mapstatetoprops with reduce function in cart-icon
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((totalQuantity, cartItem) => totalQuantity + cartItem.quantity , 0)
);

// Another reduce function to calculate the total cost of items in the cart
export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((totalPrice, cartItem) => totalPrice + (cartItem.price * cartItem.quantity), 0)
);
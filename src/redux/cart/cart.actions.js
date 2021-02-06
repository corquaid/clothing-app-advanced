import CartActionTypes from './cart.types'

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN // no need to pass an optional payload as there is no new state data, the state is only being toggled true / false
})
import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN, // no need to pass an optional payload as there is no new state data, the state is only being toggled true / false
});

export const addItem = item => ({
    // item is passed into addItem function as designated as the payload for the cart reducer
    type: CartActionTypes.ADD_ITEM,
    payload: item,
});

export const clearItemFromCart = item => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item,
});

export const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item,
});

export const clearCart = () => ({
    type: CartActionTypes.CLEAR_CART,
});

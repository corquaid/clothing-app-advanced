// Function to check if item to be added to the cart already exists in the cart or not

export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find( //.find() check will return the first matching value based on the condition passed in
    cartItem => cartItem.id === cartItemToAdd.id // check if IDs match
    );

    if (existingCartItem) { // this if block will not run at all if the item is new, will fgo directly to return statement below
      return cartItems.map(cartItem => // needs to be a map function to return a brand-new array to force React to re-render
        cartItem.id === cartItemToAdd.id // same check as above
        ? { ...cartItem, quantity: cartItem.quantity + 1 } // return new object including the item plus the incremented quantity value
        : cartItem // return cartItem as is with no modification
        )
    }
    return [...cartItems, {...cartItemToAdd, quantity: 1 }]; // if item to be added is not found above, then return a new array with all existing items plus the new item with an initial quantity of 1
};

// Funtion to remove/decrement items from cart using checkout page arrows
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) { // if there is only one of these items in the cart
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id) // keep the items whose id does not match the id to remove
  }

  return cartItems.map( // if there is more than one of the item to be removed in the cart
    cartItem => cartItem.id === cartItemToRemove.id ?
    {...cartItem, quantity: cartItem.quantity - 1}
    : cartItem
  );
};
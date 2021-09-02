import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CustomButton from "../custom-button/custom-button";
import CartItem from "../cart-item/cart-item";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import "./cart-dropdown.scss";

export const CartDropdown = (
    { cartItems, history, dispatch }, // cartItems from props, history also, dispatch refers to mapDispatchToProps, it can be passed in singly from connect()
) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.length ? ( // if cartItems.length is empty, this is zero or FALSY
                cartItems.map(cartItem => <CartItem id="cart-item" key={cartItem.id} item={cartItem} />) // map through cartItems and create a div for each cartItem
            ) : (
                <span className="empty-message">You don't have anything in your cart</span>
            )}
        </div>
        <CustomButton
            id="button"
            onClick={() => {
                history.push("/checkout"); // routing to the checkout page
                dispatch(toggleCartHidden()); // toggle function to hide the cart dropdown when the button is clicked
            }}
        >
            GO TO CHECKOUT
        </CustomButton>

        {/* this history one is a bit odd */}
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems, // from selector file
});

export default withRouter(connect(mapStateToProps)(CartDropdown)); // connect () automatically passes a mapdispatchtoprops into the component if a 2nd argument is not specified after mapStateToProps meaning that the dispatch properties are accessible inside the component

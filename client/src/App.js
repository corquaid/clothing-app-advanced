import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./App.css";

import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import CheckoutPage from "./pages/checkout/checkout.jsx";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";

import Header from "./components/header/header";

import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user-actions";

const App = ({ checkUserSession, currentUser }) => {
    useEffect(() => {
        checkUserSession();
    }, [checkUserSession]); // checkUserSession added to dependency array to prevent re-renders

    return (
        <div>
            {/* app state currentUser removed from Header component as the state is now stored by Redux */}
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/shop" component={ShopPage} />
                <Route exact path="/checkout" component={CheckoutPage} />
                <Route exact path="/signin" render={() => (currentUser ? <Redirect to="/" /> : <SignInAndSignUp />)} />
            </Switch>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    // using createStructuredSelector from reselect module to allow for code extension in future
    currentUser: selectCurrentUser,
    // collectionsArray: selectCollectionsForPreview
});

const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

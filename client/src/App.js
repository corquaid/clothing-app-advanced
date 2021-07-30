import React, { useEffect, lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { GlobalStyle } from "./global.styles";

import Header from "./components/header/header";
import Spinner from "./components/spinner/spinner";

import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user-actions";

import ErrorBoundary from "./components/error-boundary/error-boundary";

// New lazy loading which is asynchronous and requires the Suspense wrapper
const HomePage = lazy(() => import("./pages/homepage/homepage"));
const ShopPage = lazy(() => import("./pages/shop/shop"));
const SignInAndSignUp = lazy(() => import("./pages/sign-in-and-sign-up/sign-in-and-sign-up"));
const CheckoutPage = lazy(() => import("./pages/checkout/checkout"));

const App = ({ checkUserSession, currentUser }) => {
    useEffect(() => {
        checkUserSession();
    }, [checkUserSession]); // checkUserSession added to dependency array to prevent re-renders

    return (
        <div>
            {/* GlobalStyle wrapper component applies CSS styling to the entire application */}
            <GlobalStyle />
            {/* app state currentUser removed from Header component as the state is now stored by Redux */}
            <Header />
            <Switch>
                <ErrorBoundary>
                    <Suspense fallback={<Spinner />}>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/shop" component={ShopPage} />
                        <Route exact path="/checkout" component={CheckoutPage} />
                        <Route
                            exact
                            path="/signin"
                            render={() => (currentUser ? <Redirect to="/" /> : <SignInAndSignUp />)}
                        />
                    </Suspense>
                </ErrorBoundary>
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

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user-actions'; // setCurrentUser action is imported

import './App.css';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
// constructor deleted as state is now handled in Redux

  // Firebase/Google signin authentication code:
  unsubscribeFromAuth = null;

  componentDidMount() {

    const { setCurrentUser } = this.props; // destructure setCurrentUser from props for ease-of-use below

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // Need to add current user data into app state
      // If userAuth object contains information:
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        // Looking for snapshot data newly created or already existing
        userRef.onSnapshot(snapShot => {
          // Update state with id and snapShot.data() method
          setCurrentUser({ // user action called here from the props instead of local app.js state
            id: snapShot.id,
            ...snapShot.data()
          });
        });
       } 
        // If userAuth object returns as null, i.e. no user signed in:
        setCurrentUser(userAuth); // current user key removed
      
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  // to here.


  render() {
    return (
      <div>
      {/* app state currentUser removed from Header component as the state is now stored by Redux */}
      <Header />
      
      <Switch>
        <Route  exact path='/' component={HomePage}/>
        <Route  exact path='/shop' component={ShopPage}/>
        <Route  exact path='/signin' component={SignInAndSignUp}/>
      </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({ // mapDispatchToProps
  setCurrentUser: user => dispatch(setCurrentUser(user)) // pass user into the setCurrentUser action that is then used as the payload for the next state, returning the new state object
})

export default connect(null, mapDispatchToProps)(App); // null means that no state needs to passed to props from root reducer as App.js is not setting state anywhere


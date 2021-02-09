import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; // connect is a higher-order component that allows us to connect our current component (header) to the redux library
import { createStructuredSelector } from 'reselect'; // this cuts down on the code required in the mapstatetoprops function

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { auth } from '../../firebase/firebase.utils';

import './header.scss';

const Header = ({ currentUser, hidden }) => ( // currentUser here will contain the initial null value because of the mapStateToProps function below
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/contact'>
        CONTACT
      </Link>
      {currentUser ?
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
          :
          <Link className='option' to='/signin'>SIGN IN</Link>
        }
      <CartIcon />
    </div>
    {/* CartDropdown component is placed just after options div */}
    {hidden ? null : <CartDropdown />} 
    {/* Ternary operator to render or not the cart dropdown based on the current "hidden" state */}
  </div>
);

const mapStateToProps = state => createStructuredSelector({ // state argument is automatically passed in by this createStructuredSelector call
  currentUser: selectCurrentUser, 
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header); // Header component is exported with the redux state in-built
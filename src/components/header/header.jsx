import React from 'react';

import { connect } from 'react-redux'; // connect is a higher-order component that allows us to connect our current component (header) to the redux library
import { createStructuredSelector } from 'reselect'; // this cuts down on the code required in the mapstatetoprops function

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { auth } from '../../firebase/firebase.utils';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles';

const Header = ({ currentUser, hidden }) => ( // currentUser here will contain the initial null value because of the mapStateToProps function below
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>SHOP</OptionLink>
      <OptionLink to='/contact'>CONTACT</OptionLink>
      {currentUser ? 
          <OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
          /* the as prop renders this OptionLink component as a div component in terms of design */
          :
          <OptionLink to='/signin'>SIGN IN</OptionLink>
        }
      <CartIcon />
    </OptionsContainer>
    {/* CartDropdown component is placed just after options div */}
    {hidden ? null : <CartDropdown />} 
    {/* Ternary operator to render or not the cart dropdown based on the current "hidden" state */}
  </HeaderContainer>
);

const mapStateToProps = state => createStructuredSelector({ // state argument is automatically passed in by this createStructuredSelector call
  currentUser: selectCurrentUser, 
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header); // Header component is exported with the redux state in-built
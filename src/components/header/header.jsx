import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; // connect is a higher-order component that allows us to connect our current component (header) to the redux library

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';

import './header.scss';

const Header = ({ currentUser }) => ( // currentUser here will contain the initial null value because of the mapStateToProps function below
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
      <Link className='option' to='/contact'>
        {
          currentUser ?
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
          :
          <Link className='option' to='/signin'>SIGN IN</Link>
        }
      </Link>
    </div>
  </div>
);

const mapStateToProps = state => ({ // state argument is the root reducer contents
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header); // Header component is exported with the redux state in-built
import React from 'react';
import './custom-button.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button 
    // If isGoogleSignIn property is true then add the corresponding className for styling, otherwise add empty string and allow 'custom-button' as default className for styling
    className={`${isGoogleSignIn ? 'google-sign-in' : '' } custom-button`} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
import React from 'react';

import { CustomButtonContainer } from './custom-button.styles';

const CustomButton = ({ children, ...props}) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;

// REMOVED CODE USING TERNARY OPERATOR LOGIC
  // If isGoogleSignIn property is true then add the corresponding className for styling, otherwise add empty string and allow 'custom-button' as default className for styling
    // Inverted property if true will add 'inverted' className which inverts the button colours on the CSS
    // className={`${inverted ? 'inverted' : '' } ${isGoogleSignIn ? 'google-sign-in' : '' } custom-button`} {...otherProps}>
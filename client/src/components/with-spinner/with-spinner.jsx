import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

// WrappedComponent is the component that will be passed into the Higher-Order WithSpinner component
const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
  // if isLoading prop is true, i.e. app is in state of loading some data / components then the spinner is rendered
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    // if isLoading is false, render the regular component as normal
    <WrappedComponent {...otherProps} />
  );
};

export default WithSpinner;

// NOTE: isLoading boolean logic is contained in shop.jsx because the data fetch is fired from that component and only that component knows if / when good data is returned
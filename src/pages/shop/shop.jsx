import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview';
import CollectionPage from '../collection/collection';

const ShopPage = ({ match }) => { // match is a prop that contains info on the current path, using match.path as the path value allows the component to be re-used elsewhere and not hard-coded
  console.log(match)
  return (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    {/* NEW TYPE OF SYNTAX!!! */}
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
  )
};
  
export default ShopPage;
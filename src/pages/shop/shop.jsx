import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/collections-overview';
import CollectionPage from '../collection/collection';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';

class ShopPage extends React.Component  {
  unsubscribeFromSnapshot = null; // refers to snapshot representation of collections array from Firestore

  // Code to fetch shop data from Firestore goes in here:
  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections'); // defining reference for 'collections' collection in Firestore
    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot); // taking snapshot "array" and converting to object with selected fields
      updateCollections(collectionsMap);
    })
  
  }

  render() {
    const { match } = this.props; // match is a prop that contains info on the current path, using match.path as the path value allows the component to be re-used elsewhere and not hard-coded
    return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      {/* NEW TYPE OF SYNTAX!!! */}
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
    )
  }
};

const mapDispatchToProps= dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})
  
export default connect(null, mapDispatchToProps)(ShopPage);
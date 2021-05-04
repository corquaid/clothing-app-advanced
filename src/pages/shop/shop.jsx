import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionsOverview from "../../components/collections-overview/collections-overview";
import CollectionPage from "../collection/collection";

import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shop.actions";

import WithSpinner from "../../components/with-spinner/with-spinner";

// New components to incorporate WithSpinner HOC
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    state = {
        // NOTE: declaring state like this automatically runs the super() call under the hood
        loading: true, // loading boolean set to true on initial component render
    };

    unsubscribeFromSnapshot = null; // refers to snapshot representation of collections array from Firestore

    // Code to fetch shop data from Firestore goes in here:
    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection("collections"); // defining reference for 'collections' collection in Firestore

        // Alternative to onSnapshot method is fetch API
        // fetch(
        //     "https://firestore.googleapis.com/v1/projects/clothing-app-5d0b4/databases/(default)/documents/collections",
        // )
        //     .then(response => response.json())
        //     .then(collections => console.log(collections));

        // Using .get Promise method
        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            // taking snapshot "array" and converting to object with selected fields
            updateCollections(collectionsMap);
            this.setState({ loading: false });
        });

        // Using provided Firebase onSnapshot method
        // collectionRef.onSnapshot(async snapshot => {
        //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot); // taking snapshot "array" and converting to object with selected fields
        //   updateCollections(collectionsMap);
        //   this.setState({ loading: false }); // once good data is returned, set loading state back to false to remove spinner
        // });
    }

    render() {
        const { match } = this.props; // match is a prop that contains info on the current path, using match.path as the path value allows the component to be re-used elsewhere and not hard-coded
        const { loading } = this.state;
        return (
            <div className="shop-page">
                <Route
                    exact
                    path={`${match.path}`}
                    render={props => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />}
                />
                {/* NEW TYPE OF SYNTAX!!! */}
                <Route
                    path={`${match.path}/:collectionId`}
                    render={props => <CollectionPageWithSpinner isLoading={loading} {...props} />}
                />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);

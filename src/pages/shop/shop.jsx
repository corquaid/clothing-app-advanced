import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

class ShopPage extends React.Component {
        
    // Code to fetch shop data from Firestore goes in here:
    componentDidMount() {
      const { fetchCollectionsStart } = this.props;
      fetchCollectionsStart();
    }

    render() {
        const { match } = this.props; // match is a prop that contains info on the current path, using match.path as the path value allows the component to be re-used elsewhere and not hard-coded

        return (
            <div className="shop-page">
                <Route
                    exact
                    path={`${match.path}`}
                    component={CollectionsOverviewContainer}
                />
                {/* NEW TYPE OF SYNTAX!!! */}
                <Route
                    path={`${match.path}/:collectionId`}
                    component={CollectionPageContainer}
                />
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);


// Shop Component is now not doing anything except for initialising API calls on componentDidMount and passing components into its Routes.
// This is all achieved using Container patterns.
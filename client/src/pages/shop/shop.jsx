import React, { useEffect, lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import Spinner from "../../components/spinner/spinner";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

const CollectionsOverviewContainer = lazy(() =>
    import("../../components/collections-overview/collections-overview.container"),
);
const CollectionPageContainer = lazy(() => import("../collection/collection.container"));

const ShopPage = ({ fetchCollectionsStart, match }) => {
    useEffect(() => {
        fetchCollectionsStart();
    }, [fetchCollectionsStart]);

    return (
        <div className="shop-page">
            <Suspense fallback={<Spinner />}>
                <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
                {/* NEW TYPE OF SYNTAX!!! */}
                <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
            </Suspense>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);

// Shop Component is now not doing anything except for initialising API calls on componentDidMount and passing components into its Routes.
// This is all achieved using Container patterns.

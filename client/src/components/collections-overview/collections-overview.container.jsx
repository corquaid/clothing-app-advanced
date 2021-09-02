import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from 'redux' // this import allows us to pass in all the HOCs by calling the function, USING CURRYING

import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";

import WithSpinner from "../with-spinner/with-spinner";
import CollectionsOverview from "../collections-overview/collections-overview";

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching,
}); // this will provide the isLoading prop to the WithSpinner component which is expecting the isLoading prop

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
    )(CollectionsOverview);
    // this is using Currying to make more readable code and easier follow the sequence of what is happening

export default CollectionsOverviewContainer;

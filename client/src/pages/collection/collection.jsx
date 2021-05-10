import React from "react";

import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item";
import { selectCollection } from "../../redux/shop/shop.selectors";

import "./collection.scss";

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {items.map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    // 2nd parameter ownProps is the props of the CollectionPage component that is being wrapped inside the connect function below
    collection: selectCollection(ownProps.match.params.collectionId)(state), // state must be passed here because unlike other selectors, this selector needs a part of the state depending on the URL parameter, dynamically.
});

export default connect(mapStateToProps)(CollectionPage);

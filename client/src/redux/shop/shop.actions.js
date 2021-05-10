import ShopActionTypes from "./shop.types";

import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
    // payload: collectionsMap // payload removed for THUNK version
});

export const fetchCollectionsSuccess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap,
});

export const fetchCollectionsFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage,
});
// Introducing THUNKS

// This function will execute the actual API call taken from the Shop component
export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection("collections");

        dispatch(fetchCollectionsStart()); // this will run FETCH_COLLECTIONS_START and set isFetching to true

        // asynchronous request runs
        collectionRef
            .get()
            .then(snapshot => {
                const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
                // taking snapshot "array" and converting to object with selected fields
                // updateCollections(collectionsMap);
                dispatch(fetchCollectionsSuccess(collectionsMap));
            })
            .catch(error => dispatch(fetchCollectionsFailure(error.message)));
    };
};

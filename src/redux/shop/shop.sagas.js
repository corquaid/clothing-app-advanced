import { call, put, takeLatest, all } from "redux-saga/effects"; // listens to every action of a specific type that are passed to it.

import ShopActionTypes from "./shop.types";

import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";

import { fetchCollectionsSuccess, fetchCollectionsFailure } from "./shop.actions";

// Saga generator function that fires the async code
export function* fetchCollectionsAsync() {
    try {
        // Generator function is similiar in syntax to async await, i.e. declaring constants for each step.
        const collectionRef = firestore.collection("collections");
        const snapshot = yield collectionRef.get(); // returns in promise form, set in const value
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot); // "call" saga method takes function as 1st argument and parameters as subsequent arguments. It defers control back to the sage middleware in case it needs to cancel the call and interrupt the code. Yield corresponds to await.
        yield put(fetchCollectionsSuccess(collectionsMap)); // put is the saga method that replaces regular dispatch.
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message));
    }

    // asynchronous request runs
    // collectionRef
    //     .get()
    //     .then(snapshot => {
    //         const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //         // taking snapshot "array" and converting to object with selected fields
    //         // updateCollections(collectionsMap);
    //         dispatch(fetchCollectionsSuccess(collectionsMap));
    //     })
    //     .catch(error => dispatch(fetchCollectionsFailure(error.message)));
}

// Saga generator function that listens for start action
// First argument is action to listen for, 2nd argument is callback function to run once listener fires.
export function* fetchCollectionsStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}

export function* shopSagas() {
    yield all([call(fetchCollectionsStart)])
}

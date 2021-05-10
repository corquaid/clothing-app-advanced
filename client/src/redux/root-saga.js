import { all, call } from "redux-saga/effects";

import { fetchCollectionsStart, shopSagas } from '../redux/shop/shop.sagas';
import { userSagas } from '../redux/user/user.sagas';
import { cartSagas } from "./cart/cart.sagas";

export default function* rootSaga() {
    yield all([ // all takes an array of different sagas and bundles them together, calling them on their each task stream
        call(fetchCollectionsStart), call(userSagas), call(cartSagas), call(shopSagas)
    ]);
}

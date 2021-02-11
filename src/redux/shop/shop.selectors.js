import { createSelector } from 'reselect';
import shopReducer from './shop.reducer';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  // converting functionality from manipulating data array to data object instead
  collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
  )
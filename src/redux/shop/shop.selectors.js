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
  // need to add ternary operator to handle empty collections object on startup
  collections => 
    collections ? Object.keys(collections).map(key => collections[key]) : []
)

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    // ternary added to handle case of an empty collections object, if null is returned then child components will render an empty state
    collections => collections ? collections[collectionUrlParam] : null
  )
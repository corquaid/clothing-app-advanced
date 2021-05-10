import { findAllByTitle } from '@testing-library/react';
import React from 'react';
import CollectionItem from '../collection-item/collection-item';
import './collection-preview.scss';

const CollectionPreview = ({title, items}) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {
        items
          .filter((item, index) => index < 4) // filtering to return only the first 4 items to the preview component
          .map(item => ( // whole item is now being passed into the component instead of particular properties
            <CollectionItem key={item.id} item={item}/>
          ))
      }
    </div>
  </div>
);

export default CollectionPreview;
import { findAllByTitle } from '@testing-library/react';
import React from 'react';
import CollectionItem from '../../components/collection-item/collection-item';
import './preview-collection.scss';

const CollectionPreview = ({title, items}) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {
        items
          .filter((item, index) => index < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} {...otherItemProps}/>
          ))
      }
    </div>
  </div>
)

export default CollectionPreview;
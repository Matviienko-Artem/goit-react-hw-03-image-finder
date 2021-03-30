import React from 'react';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ data, onChangeCurrentImage, openModal }) => (
  <ul className={s.ImageGallery}>
    {data.map(i => (
      <ImageGalleryItem
        item={i}
        onChangeCurrentImage={onChangeCurrentImage}
        openModal={openModal}
      />
    ))}
  </ul>
);

export default ImageGallery;

import React from 'react';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ item, onChangeCurrentImage, openModal }) => {
  const handleChange = () => {
    openModal();
    onChangeCurrentImage(item.largeImageURL);
  };

  return (
    <li key={item.id} className={s.ImageGalleryItem}>
      <img
        src={item.webformatURL}
        alt={item.tags}
        className={s.ImageGalleryItem_image}
        onClick={handleChange}
      />
    </li>
  );
};

export default ImageGalleryItem;

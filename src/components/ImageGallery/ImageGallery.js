import React, { Component } from 'react';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
  handleImage = e => {
    this.props.onChangeCurrentImage(e);
  };

  render() {
    const { data } = this.props;

    return (
      <ul className={s.ImageGallery}>
        {data.map(i => (
          <ImageGalleryItem
            item={i}
            onChangeCurrentImage={this.handleImage}
            openModal={this.props.openModal}
          />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;

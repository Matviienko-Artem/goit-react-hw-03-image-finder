import React, { Component } from 'react';
import s from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  state = {
    image: '',
  };

  handleChange = e => {
    // this.setState({
    //   image: this.props.item.largeImageURL,
    // });
    this.props.openModal();
    this.props.onChangeCurrentImage(this.props.item.largeImageURL);
  };

  render() {
    const { item } = this.props;

    return (
      <li key={item.id} className={s.ImageGalleryItem}>
        <img
          src={item.webformatURL}
          alt={item.tags}
          className={s.ImageGalleryItem_image}
          onClick={this.handleChange}
        />
      </li>
    );
  }
}

export default ImageGalleryItem;

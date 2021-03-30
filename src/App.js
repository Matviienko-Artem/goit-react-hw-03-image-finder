import React, { Component } from 'react';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Searchbar from './components/Searchbar/Searchbar';
import Button from './components/Button/Button';
import Spinner from './components/Loader/Loader';
import Modal from './components/Modal/Modal';
import fetchPixabay from './services/pixabay';
import './styles.css';

class App extends Component {
  state = {
    image: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
    currentImage: '',
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  toggleModal = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      image: [],
      error: null,
    });
  };

  onChangeCurrentImage = imageUrl => {
    this.setState({
      currentImage: imageUrl,
    });
  };

  fetchImages = () => {
    const { currentPage, searchQuery } = this.state;
    const options = { currentPage, searchQuery };

    this.setState({ isLoading: true });

    fetchPixabay
      .fetchImages(options)
      .then(images => {
        this.setState(prevState => ({
          image: [...prevState.image, ...images],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { image, isLoading, error, showModal, currentImage } = this.state;
    const shouldRenderLoadMoreButton = image.length > 0 && !isLoading;

    return (
      <>
        <div className="App">
          {error && <h1>Произошла ошибка, повторите запрос позже</h1>}
          <Searchbar onSubmit={this.onChangeQuery} />
          <ImageGallery
            data={image}
            onChangeCurrentImage={this.onChangeCurrentImage}
            openModal={this.toggleModal}
          />
          {showModal && (
            <Modal onClose={this.toggleModal} image={currentImage} />
          )}

          {isLoading && <Spinner />}
          {shouldRenderLoadMoreButton && <Button onClick={this.fetchImages} />}
        </div>
      </>
    );
  }
}

export default App;

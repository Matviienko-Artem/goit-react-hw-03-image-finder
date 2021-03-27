import Loader from 'react-loader-spinner';
import React, { Component } from 'react';

class Spinner extends Component {
  render() {
    return <Loader type="Puff" color="#ff3a00" height={60} width={60} />;
  }
}

export default Spinner;

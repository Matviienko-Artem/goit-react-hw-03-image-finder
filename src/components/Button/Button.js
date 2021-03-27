import React, { Component } from 'react';
import s from './Button.module.css';

class Button extends Component {
  componentWillMount() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }
  render() {
    return (
      <button onClick={this.props.onClick} className={s.Button} type="button">
        Загрузить еще...
      </button>
    );
  }
}

export default Button;

import React from 'react';
import style from './index.module.css';

class Image extends React.Component {
  render() {
    const { src, alt, } = this.props;
    return (
      <img className={style.image} src={src} alt={alt} />
    );
  }
}

export default Image;

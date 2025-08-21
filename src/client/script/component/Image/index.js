import React from 'react';
import style from './index.module.css';

class Image extends React.Component {
  render() {
    const { src, alt, width, } = this.props;
    return (
      <img style={{ width, }} className={style.image} src={src} alt={alt} />
    );
  }
}

export default Image;

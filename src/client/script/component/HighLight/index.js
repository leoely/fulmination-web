import React from 'react';
import style from './index.module.css';

class HighLight extends React.Component {
  render() {
    return (
      <span className={style.highLight}>{this.props.children}</span>
    );
  }
}

export default HighLight;

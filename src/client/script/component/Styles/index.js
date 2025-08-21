import React from 'react';
import style from './index.module.css';

class Styles extends React.Component {
  render() {
    return (
      <div className={style.styles}>{this.props.children}</div>
    );
  }
}

export default Styles;

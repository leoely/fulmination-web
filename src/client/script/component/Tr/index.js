import React from 'react';
import style from './index.module.css';

class Tr extends React.Component {
  render() {
    return (
      <div className={style.tr}>{this.props.children}</div>
    );
  }
}

export default Tr;

import React from 'react';
import style from './index.module.css';

class Td extends React.Component {
  render() {
    return (
      <span className={style.td}>{this.props.children}</span>
    );
  }
}

export default Td;

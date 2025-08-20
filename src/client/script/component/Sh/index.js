import React from 'react';
import style from './index.module.css';

class Sh extends React.Component {
  render() {
    return (
      <ul className={style.sh}>{this.props.children}</ul>
    );
  }
}

export default Sh;

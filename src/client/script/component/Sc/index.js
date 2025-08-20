import React from 'react';
import style from './index.module.css';

class Sc extends React.Component {
  render() {
    return (
      <ul className={style.sc}>{this.props.children}</ul>
    );
  }
}

export default Sc;

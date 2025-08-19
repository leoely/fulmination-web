import React from 'react';
import style from './index.module.css';

class Li extends React.Component {
  render() {
    return (
      <li className={style.li}>
        {this.props.children}
      </li>
    );
  }
}

export default Li;

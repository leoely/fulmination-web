import React from 'react';
import style from './index.module.css';

class Ul extends React.Component {
  render() {
    return (
      <ul className={style.ul}>
        {this.props.children}
      </ul>
    );
  }
}

export default Ul;

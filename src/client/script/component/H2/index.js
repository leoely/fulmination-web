import React from 'react';
import style from './index.module.css';

class H2 extends React.Component {
  render() {
    return (
      <h2 className={style.h2}>
        {this.props.children}
      </h2>
    );
  }
}

export default H2;

import React from 'react';
import style from './index.module.css';

class H1 extends React.Component {
  render() {
    return (
      <h1 className={style.h1}>
        {this.props.children}
      </h1>
    );
  }
}

export default H1;

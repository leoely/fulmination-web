import React from 'react';
import style from './index.module.css';

class Th extends React.Component {
  render() {
    return (
      <div className={style.th}>{this.props.children}</div>
    );
  }
}

export default Th;

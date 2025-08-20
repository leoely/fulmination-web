import React from 'react';
import style from './index.module.css';

class Switch extends React.Component {
  render() {
    return (
      <div className={style.switch}>
        {this.props.children}
      </div>
    );
  }
}

export default Switch;

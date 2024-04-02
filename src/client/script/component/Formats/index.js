import React from 'react';
import style from './index.module.css';

class Formats extends React.Component {
  render() {
    return (
      <div className={style.formats}>
        {this.props.children}
      </div>
    );
  }
}

export default Formats;

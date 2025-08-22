import React from 'react';
import style from './index.module.css';

class Achor extends React.Component {
  render() {
    const { href, } = this.props;
    return (
      <a className={style.achor} href={href}>{this.props.children}</a>
    );
  }
}

export default Achor;

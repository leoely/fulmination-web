import React from 'react';
import style from './index.module.css';

class Table extends React.Component {
  render() {
    return (
      <div className={style.table}>{this.props.children}</div>
    );
  }
}

export default Table;

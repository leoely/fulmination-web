import React from 'react';
import style from './index.module.css';
import formatCtf from '~/client/script/lib/formateCtf';

class Format extends React.Component {
  render() {
    return (
      <div className={style.format}>
        {formatCtf(this.props.children)}
      </div>
    );
  }
}

export default Format;

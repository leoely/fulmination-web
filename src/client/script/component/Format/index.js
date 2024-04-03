import React from 'react';
import style from './index.module.css';
import formatCtf from '~/client/script/lib/formateCtf';
import formatShell from '~/client/script/lib/formatShell';

class Format extends React.Component {
  render() {
    const { format, } = this.props;
    let content;
    if (format === 'shell') {
      content = <div className={style.format}>
        {formatShell(this.props.children)}
      </div>
    } else {
      content = <div className={style.format}>
        {formatCtf(this.props.children)}
      </div>
    }
    return content;
  }
}

export default Format;

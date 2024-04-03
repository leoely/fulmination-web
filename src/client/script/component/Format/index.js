import React from 'react';
import style from './index.module.css';
import formatCtf from '~/client/script/lib/formatCtf';
import formatShell from '~/client/script/lib/formatShell';
import formatJavascript from '~/client/script/lib/formatJavascript';

class Format extends React.Component {
  render() {
    const { format, } = this.props;
    let content;
    if (format === 'shell') {
      content = <div className={style.format}>
        {formatShell(this.props.children)}
      </div>
    } else if (format === 'javascript') {
      content = <div className={style.format}>
        {formatJavascript(this.props.children)}
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

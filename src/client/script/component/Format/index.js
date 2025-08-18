import React from 'react';
import style from './index.module.css';
import formatFulmination from '~/client/script/lib/util/formatFulmination';
import formatJavascript from '~/client/script/lib/util/formatJavascript';
import formatShell from '~/client/script/lib/util/formatShell';

class Format extends React.Component {
  render() {
    const { format, } = this.props;
    let content;
    if (format === 'shell') {
      content = <div className={style.format}>
        {formatShell(this.props.children)}
      </div>
    } else if (format === 'javascript') {
      const html = formatJavascript(this.props.children);
      content = <div
        className={style.format}
        dangerouslySetInnerHTML={{__html: html}}
      >
      </div>
    } else {
      content = <div className={style.format}>
        {formatFulmination(this.props.children)}
      </div>
    }
    return content;
  }
}

export default Format;

import React from 'react';
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
import style from './index.module.css';

hljs.registerLanguage('javascript', javascript);

class MultiLineJavascript extends React.Component {
  render() {
    const { javascriptCode, } = this.props;
    const html = hljs.highlight(javascriptCode, { language: 'javascript', }).value;
    return (
      <pre className={style.multiLineJavascript} dangerouslySetInnerHTML={{__html: html}} />
    );
  }
}

export default MultiLineJavascript;

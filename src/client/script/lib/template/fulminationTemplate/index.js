import React from 'react';
import style from './index.module.css';

export default function fulminationTemplate(e, idx) {
  const { type, elem, } = e;
  switch (type) {
    case ' ':
      return <span>&nbsp;</span>;
    case 'asterisk':
      return <span key={idx} className={style.asterisk}>{elem}</span>;
    case 'semicolon':
      return <span key={idx} className={style.semicolon}>{elem}</span>;
    case 'format':
      return <span key={idx} className={style.format}>{elem}</span>;
    case 'and':
      return <span key={idx} className={style.and}>{elem}</span>;
    case 'escape':
      return <span key={idx} className={style.escape}>{elem}</span>;
    case 'line':
      return <span key={idx} className={style.line}>{elem}</span>;
    case 'colon':
      return <span key={idx} className={style.colon}>{elem}</span>;
    case 'text':
      return <span key={idx} className={[style.inlineFlex, style.text].join(' ')}>{elem}</span>;
    case 'format':
      return <span key={idx} className={style.format}>{elem}</span>;
    case 'angleBracket':
      return <span key={idx} className={style.angleBracket}>{elem}</span>;
    case 'parenthese':
      return <span key={idx} className={style.parenthese}>{elem}</span>;
    case 'plus':
      return <span key={idx} className={style.plus}>{elem}</span>;
    case 'squareParenthese':
      return <span key={idx} className={style.squareParenthese}>{elem}</span>;
    case 'dividing':
      return <span key={idx} className={style.dividng}>{elem}</span>;
    case 'and':
      return <span key={idx} className={style.and}>{elem}</span>;
  }
}

import React from 'react';
import style from './index.module.css';

export default function fulminationTemplate(e) {
  const { type, elem, } = e;
  switch (type) {
    case 'asterisk':
    case ' ':
      return <span> </span>;
    case 'semicolon':
      return <span className={style.semicolon}>{elem}</span>;
    case 'format':
      return <span className={style.format}>{elem}</span>;
    case 'and':
      return <span className={style.and}>{elem}</span>;
    case 'escape':
      return <span className={style.escape}>{elem}</span>;
    case 'line':
      return <span className={style.line}>{elem}</span>;
    case 'colon':
      return <span className={style.colon}>{elem}</span>;
    case 'text':
      return <span className={style.text}>{elem}</span>;
    case 'format':
      return <span className={style.format}>{elem}</span>;
    case 'parenthese':
      return <span className={style.parenthese}>{elem}</span>;
    case 'plus':
      return <span className={style.plus}>{elem}</span>;
    case 'squareParenthese':
      return <span className={style.squareParenthese}>{elem}</span>;
    case 'dividing':
      return <span className={style.dividng}>{elem}</span>;
    case 'and':
      return <span className={style.and}>{elem}</span>;
  }
}

import React from 'react';
import style from './index.module.css';

export default function locationTemplate(e) {
  const { type, elem, } = e;
  console.log(e);
  switch (type) {
    case ' ':
      return <span> </span>;
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

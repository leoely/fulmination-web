import React from 'react';
import style from './index.module.css';

export default function javascriptTemplate(e) {
  console.log(e);
  const { type, elem, } = e;
  switch (type) {
    case ' ':
      return <span> </span>;
    case 'module':
      return <span className={style.module}>{elem}</span>;
    case 'identifer':
      return <span className={style.identifer}>{elem}</span>;
    case 'quotation':
      return <span className={style.quotation}>{elem}</span>;
    case 'string':
      return <span className={style.string}>{elem}</span>;
    case 'function':
      return <span className={style.function}>{elem}</span>;
    case 'declare':
      return <span className={style.declare}>{elem}</span>;
    case 'arithmetic':
      return <span className={style.arithmetic}>{elem}</span>;
    case 'class':
      return <span className={style.class}>{elem}</span>;
    case 'parenthese':
      return <span className={style.parenthese}>{elem}</span>;
    case 'call':
      return <span className={style.call}>{elem}</span>;
  }
}

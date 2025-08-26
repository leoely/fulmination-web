import React from 'react';
import style from './index.module.css';

export default function shellTemplate(e, idx) {
  const { type, elem, } = e;
  switch (type) {
    case ' ':
      return <span key={idx}> </span>;
    case 'filename':
      return <span key={idx} className={style.filename}>{elem}</span>;
    case 'command':
      return <span key={idx} className={style.command}>{elem}</span>;
    case 'subCommand':
      return <span key={idx} className={style.subCommand}>{elem}</span>;
    case 'dot':
      return <span key={idx} className={style.dot}>{elem}</span>;
    case 'format':
      return <span key={idx} className={style.format}>{elem}</span>;
    case 'centerLine':
      return <span key={idx} className={style.centerLine}>{elem}</span>;
  }
}

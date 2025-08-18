import React from 'react';
import style from './index.module.css';

export default function shellTemplate(e) {
  const { type, elem, } = e;
  switch (type) {
    case ' ':
      return <span> </span>;
    case 'filename':
      return <span className={style.filename}>{elem}</span>;
    case 'command':
      return <span className={style.command}>{elem}</span>;
    case 'dot':
      return <span className={style.dot}>{elem}</span>;
    case 'format':
      return <span className={style.format}>{elem}</span>;
  }
}

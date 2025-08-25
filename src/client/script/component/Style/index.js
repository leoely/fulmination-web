import React from 'react';
import style from './index.module.css';

class Style extends React.Component {
  render() {
    let { styls, idx, } = this.props;
    if (styls === undefined) {
      styls = [];
    }
    const classes = styls.map((styl) => {
      switch (styl) {
        case 'green':
          return style.green;
        case 'red':
          return style.red;
        case 'yellow':
          return style.yellow;
        case 'blue':
          return style.blue;
        case 'black':
          return style.black;
        case 'cyan':
          return style.cyan;
        case 'magenta':
          return style.magenta;
        case 'bold':
          return style.bold;
        case 'bgWhite':
          return style.bgWhite;
        case 'normal':
          return style.normal;
        case 'inline':
          return style.inline;
      }
    });
    return (
      <div key={idx} className={[style.style].concat(classes).join(' ')}>
        {this.props.children}
      </div>
    );
  }
}

export default Style;

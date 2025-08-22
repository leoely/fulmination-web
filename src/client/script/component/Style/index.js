import React from 'react';
import style from './index.module.css';

class Style extends React.Component {
  render() {
    let { styls, } = this.props;
    if (styls === undefined) {
      styls = [];
    }
    const classes = styls.map((styl) => {
      switch (styl) {
        case 'green':
          return style.green;
        case 'red':
          return style.red;
        case 'blue':
          return style.blue;
        case 'black':
          return style.black;
        case 'cyan':
          return style.cyan;
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
      <div className={[style.style].concat(classes).join(' ')}>
        {this.props.children}
      </div>
    );
  }
}

export default Style;

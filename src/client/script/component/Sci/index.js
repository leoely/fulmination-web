import React from 'react';
import style from './index.module.css';

class Sci extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { idx, className, } = this.props;
    return (
      <li
        key={idx}
        className={[style.sci].concat(className).join(' ')}
      >
        {this.props.children}
      </li>
    );
  }
}

export default Sci;

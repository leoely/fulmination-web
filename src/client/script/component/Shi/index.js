import React from 'react';
import global from '~/client/script/obj/global';
import style from './index.module.css';

const {
  emitter,
} = global;

class Shi extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { idx, } = this.props
    emitter.send('install:active', { idx, });
  }

  render() {
    const { style: inlineStyle, className, idx, } = this.props;
    return (
      <li
        key={idx}
        className={[style.shi].concat(className).join(' ')} style={inlineStyle}
        onClick={this.handleClick}
      >
        {this.props.children}
      </li>
    );
  }
}

export default Shi;

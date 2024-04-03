import React from 'react';
import style from './index.module.css';
import global from '~/client/script/obj/global';

const {
  emitter,
} = global;

class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 1,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(active) {
    this.setState({
      active,
    });
    switch (active) {
      case 1:
        emitter.send('page/');
        break;
      case 2:
        emitter.send('page/reference');
        break;
      case 3:
        emitter.send('page/commandLine');
        break;
      case 4:
        emitter.send('page/codeStyle');
        break;
      case 5:
        emitter.send('page/api');
        break;
    }
  }

  render() {
    const { active, } = this.state;
    return (
      <ul className={style.tab}>
        <li key={1} className={[style.item, active === 1 ? style.active : null].join(' ')} onClick={(e) => this.handleClick(1)} >Quick Start</li>
        <li key={2} className={[style.item, active === 2 ? style.active : null].join(' ')} onClick={(e) => this.handleClick(2)} >Reference</li>
        <li key={3} className={[style.item, active === 3 ? style.active : null].join(' ')} onClick={(e) => this.handleClick(3)} >Command Line</li>
        <li key={4} className={[style.item, active === 4 ? style.active : null].join(' ')} onClick={(e) => this.handleClick(4)} >Code Style</li>
        <li key={5} className={[style.item, active === 5 ? style.active : null].join(' ')} onClick={(e) => this.handleClick(5)} >API</li>
      </ul>
    );
  }
}

export default Tab;

import React from 'react';
import style from './index.module.css';

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
  }

  render() {
    const { active, } = this.state;
    return (
      <ul className={style.tab}>
        <li key={1} className={[style.item, active === 1 ? style.active : null].join(' ')} onClick={(e) => this.handleClick(1)} >Quick Start</li>
        <li key={1} className={[style.item, active === 2 ? style.active : null].join(' ')} onClick={(e) => this.handleClick(2)} >Reference</li>
        <li key={1} className={[style.item, active === 3 ? style.active : null].join(' ')} onClick={(e) => this.handleClick(3)} >Command Line</li>
        <li key={1} className={[style.item, active === 4 ? style.active : null].join(' ')} onClick={(e) => this.handleClick(4)} >Code Style</li>
      </ul>
    );
  }
}

export default Tab;
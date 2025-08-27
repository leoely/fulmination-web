import React from 'react';
import {
  FontAwesomeIcon,
} from '@fortawesome/react-fontawesome';
import {
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import style from './index.module.css';
import global from '~/client/script/obj/global';

const {
  emitter,
} = global;

function getInitActive() {
  switch (location.pathname) {
    case '/':
      return 1;
    case '/quickStart':
      return 2;
    case '/reference':
      return 3;
    case '/applicationProgramInterface':
      return 4;
    case '/codeStyle':
      return 5;
    case '/commandLine':
      return 6;
  }
}


class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: getInitActive(),
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(active) {
    this.setState({
      active,
    });
    const {
      pathname,
      search,
      hash,
    } = window.location;
    const path = pathname + search + hash;
    switch (active) {
      case 1:
        emitter.send('page/', { path: '/', });
        break;
      case 2:
        emitter.send('page/quickStart', { path: '/quickStart', });
        break;
      case 3:
        emitter.send('page/reference', { path: '/reference', });
        break;
      case 4:
        emitter.send('page/applicationProgramInterface', { path: '/applicationProgramInterface', });
        break;
      case 5:
        emitter.send('page/codeStyle', { path: '/codeStyle', });
        break;
      case 6:
        emitter.send('page/commandLine', { path: '/commandLine', });
        break;
    }
  }

  toGithub() {
    window.open('https://github.com/leoely/fulmination', '_blank');
  }

  render() {
    const { active, } = this.state;
    return (
      <ul className={style.tab}>
        <li key={1} className={[style.item, active === 1 ? style.active : null].join(' ')} onClick={(e) => this.handleClick(1)} >Home</li>
        <li key={2} className={[style.item, active === 2 ? style.active : null].join(' ')} onClick={(e) => this.handleClick(2)} >Quick Start</li>
        <li key={3} className={[style.item, active === 3 ? style.active : null].join(' ')} onClick={(e) => this.handleClick(3)} >Reference</li>
        <li key={4} className={[style.item, active === 4 ? style.active : null].join(' ')} onClick={(e) => this.handleClick(4)} >API</li>
        <li key={5} className={[style.item, active === 5 ? style.active : null].join(' ')} onClick={(e) => this.handleClick(5)} >Code Style</li>
        <li key={6} className={[style.item, active === 6 ? style.active : null].join(' ')} onClick={(e) => this.handleClick(6)} >Command Line</li>
        <li key={7} className={[style.item, style.githubIcon].join(' ')} onClick={this.toGithub}>
          <FontAwesomeIcon className={style.handIcon} icon={faGithub} />
        </li>
      </ul>
    );
  }
}

export default Tab;

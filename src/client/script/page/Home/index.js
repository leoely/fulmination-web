import React from 'react';
import Tab from '~/client/script/component/Tab';
import style from './index.module.css';

class Home extends React.Component {
  render() {
    return(
      <div className={style.main}>
        <Tab />
      </div>
    );
  }
}

export default Home;

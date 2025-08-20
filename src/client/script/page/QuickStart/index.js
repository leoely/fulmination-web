import React from 'react';
import Page from '~/client/script/component/Page';
import H2 from '~/client/script/component/H2';
import HighLight from '~/client/script/component/HighLight';
import Text from '~/client/script/component/Text';
import Format from '~/client/script/component/Format';
import Formats from '~/client/script/component/Formats';
import Switch from '~/client/script/component/Switch';
import Sh from '~/client/script/component/Sh';
import Sc from '~/client/script/component/Sc';
import Sci from '~/client/script/component/Sci';
import Shi from '~/client/script/component/Shi';
import global from '~/client/script/obj/global';
import style from './index.module.css';

const {
  emitter,
} = global;

class QuickStart extends Page {
  constructor(props) {
    super(props);
    this.state = {
      installActive: 0,
      upgradeActive: 0,
    };
    this.bindEvent();
  }

  bindEvent() {
    emitter.on('install:active', ({ idx, }) => {
      this.setState({
        installActive: idx,
      });
    });
  }

  render() {
    const { installActive, } = this.state;
    return(
      <div className={style.quickstart}>
        <H2>*Prerequisites:</H2>
        <Text>
          <HighLight>"Fulmination"</HighLight> is developed using the
          <HighLight>"Node.js"</HighLight> platform.This means that if the main
          program interface is also expose to
          <HighLight>"Javascript"</HighLight>, most of the time you need to use
          the <HighLight>"Javascript"</HighLight> language to use fulmination.
          Therefore,you need to master <HighLight>"Javascript"</HighLight> to
          use <HighLight>"Fulmination"</HighLight>.The terminal only exists in
          the <HighLight>"Node.js"</HighLight>.The
          <HighLight>"Node.js"</HighLight> also needs to be installed.
        </Text>
        <Text>
          <HighLight>"Fulmination"</HighLight> is implemented through
          compilation and defines new syntax and comceptual operations.
          <HighLight>"Fulmination"</HighLight> handles the color and formatting
          of text in the underlying terminal.Therefore,beyond the information
          provided in this document,knowledge of the underlying terminals is not
          required to use <HighLight>"Fulmination"</HighLight>.
        </Text>
        <H2>*Installation:</H2>
        <Text>
          <HighLight>"Fulmination"</HighLight> is a
          <HighLight>"Javascript"</HighLight>package that needs to be installed
          using a <HighLight>"Javascript"</HighLight> package mananger.
        </Text>
        <Switch>
          <Sh>
            <Shi
              key={0} idx={0} type="install"
              className={[installActive === 0 ? style.installActive : null]}
            >
              yarn
            </Shi>
            <Shi
              key={1} idx={1} type="install"
              className={[installActive === 1 ? style.installActive : null]}
            >
              pnpm
            </Shi>
            <Shi
              key={2} idx={2} type="install"
              className={[installActive === 2 ? style.installActive : null]}
            >
              npm
            </Shi>
          </Sh>
          <Sc>
            <Sci key={0}
              className={[installActive === 0 ? style.installShow : null]}
            >
              <Format format="shell">yarn add fulmination</Format>
            </Sci>
            <Sci key={1}
              className={[installActive === 1 ? style.installShow : null]}
            >
              <Format format="shell">pnpm add fulmination</Format>
            </Sci>
            <Sci key={2}
              className={[installActive === 2 ? style.installShow : null]}
            >
              <Format format="shell">npm install fulmination</Format>
            </Sci>
          </Sc>
        </Switch>
        <H2>*Conception:</H2>
      </div>
    );
  }
}

export default QuickStart;

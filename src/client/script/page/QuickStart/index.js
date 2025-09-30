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
import Style from '~/client/script/component/Style';
import Styles from '~/client/script/component/Styles';
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
    this.handleClick = this.handleClick.bind(this);
    this.bindEvent();
  }

  bindEvent() {
    emitter.on('install:active', ({ idx, }) => {
      this.setState({
        installActive: idx,
      });
    });
  }

  handleClick() {
    const { idx, } = this.props
    emitter.send('install:active', { idx, });
  }

  render() {
    const { installActive, } = this.state;
    return(
      <div className={style.quickStart}>
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
              idx={0}
              className={[installActive === 0 ? style.installActive : null]}
            >
              yarn
            </Shi>
            <Shi
              idx={1}
              className={[installActive === 1 ? style.installActive : null]}
            >
              pnpm
            </Shi>
            <Shi
              idx={2}
              className={[installActive === 2 ? style.installActive : null]}
            >
              npm
            </Shi>
          </Sh>
          <Sc>
            <Sci idx={0}
              className={[installActive === 0 ? style.installShow : null]}
            >
              <Format idx={0} format="shell">yarn add fulmination</Format>
            </Sci>
            <Sci idx={1}
              className={[installActive === 1 ? style.installShow : null]}
            >
              <Format idx={1} format="shell">pnpm add fulmination</Format>
            </Sci>
            <Sci idx={3}
              className={[installActive === 2 ? style.installShow : null]}
            >
              <Format idx={1} format="shell">npm install fulmination</Format>
            </Sci>
          </Sc>
        </Switch>
        <H2>*Conception:</H2>
        <Text>
          Files written according to fulmination's syntax should have a suffix
          of <HighLight>".fulmination"</HighLight> suffix.fulmination contains
          two different syntaxes:<HighLight>"text"</HighLight>,
          <HighLight>"paragraph"</HighLight> and
          <HighLight>"content"</HighLight>.
        </Text>
        <Text>
          The synatx of fulmination beign with <HighLight>"(+)"</HighLight>,
          <HighLight>"[+]"</HighLight> and
          <HighLight>"&lt;+&gt;"</HighLight>.<HighLight>"+"</HighLight> is a semantic
          symbol indicating the addition of a text or paragraph.
          <HighLight>"Parenthesess"</HighLight>,
          <HighLight>"Breacktes"</HighLight> and
          <HighLight>"Angle Brackets"</HighLight>are used to disinguish between
          text and paragraphs,and brackets are used to indicate the color and
          formatting of the newly added text or paragraph.
        </Text>
        <Text>
          A fulmination consists of a single <HighLight>"text"</HighLight>,
          while a paragrph consists of mutlple <HighLight>"lines"</HighLight>.
        </Text>
        <Text>
          Fulmination text begins with <HighLight>"(+)"</HighLight> and does
          not wrap.You must manually add the <HighLight>"&"</HighLight> symbol
          to wrap it.The formatting applies only to the text in the current
          area.It's suitable for formatting small amounts of text with complex
          formatting.
        </Text>
        <Formats>
          <Format idx={0} format="fulmination">
            (+) red; bold: this is fulmination an example of fulmination text. &
          </Format>
          <Format idx={1} format="fulmination">
            (+) green; bold: this is an example of fulmination text without line breaks.
          </Format>
        </Formats>
        <Text>
          This is the <HighLight>"effect picture"</HighLight> in the terminal
          after the above code is
          actually executed.
        </Text>
        <Styles>
          <Style idx={0} styls={['bold', 'red']}>this is fulmination an example of fulmination text.</Style>
          <Style idx={1} styls={['inline', 'bold', 'green']}>this is an example of fulmination text without line breaks.</Style>
          <Style idx={2} styls={['inline', 'black', 'bgWhite', 'bold']}>%</Style>
        </Styles>
        <Text>
          A fulmination paragraph begins with <HighLight>"[+]"</HighLight> and
          automatically wraps each lineformatting described is
          automatically applied to the paragraph.This is useful for applying
          repetitive formatting to a large number of paragraphs.Each line in a
          paragraph starts with <HighLight>"|"</HighLight>.Each
          <HighLight>"|"</HighLight> indicates an independent line and is
          displayed as independent line on the terminal.
        </Text>
        <Formats>
          <Format idx={0} format="fulmination">[+] bold; green:</Format>
          <Format idx={1} format="fulmination">| this is an exmpale of a fulmination paragraph.</Format>
          <Format idx={2} format="fulmination">| each line will automatically wrap.</Format>
        </Formats>
        <Text>
          This is the <HighLight>"effect picture"</HighLight> in the terminal
          after the above code is
          actually executed.
        </Text>
        <Styles>
          <Style idx={0} styls={['bold', 'green']}>this is an exmpale of a fulmination paragraph.</Style>
          <Style idx={1} styls={['bold', 'green']}>each line will automatically wrap.</Style>
        </Styles>
        <Text>
          Fulmination <HighLight>"content"</HighLight> begins with
          <HighLight>"&lt;+&gt;"</HighLight>.This is primarily intended for use
          with words copied and pasted from other locations,or words generated
          elsewhere.it is not recommended for other purposes.The displayed
          formatting retains the original formatting of the text.
        </Text>
        <Formats>
          <Format idx={0} format="fulmination">&lt;+&gt; bold; red:</Format>
          <Format idx={1} format="fulmination">this is an exmpale of a fulmination content.</Format>
          <Format idx={2} format="fulmination">this is primarily intended for use words.</Format>
          <Format idx={2} format="fulmination">copied and pasted from other locations or words generated elsewhere.</Format>
        </Formats>
        <Text>
          This is the <HighLight>"effect picture"</HighLight> in the terminal
          after the above code is
          actually executed.
        </Text>
        <Styles>
          <Style idx={0} styls={['bold', 'red']}>this is an exmpale of a fulmination content.</Style>
          <Style idx={1} styls={['bold', 'red']}>this is primarily intended for use words.</Style>
          <Style idx={1} styls={['bold', 'red']}>copied and pasted from other locations or words generated elsewhere.</Style>
        </Styles>
      </div>
    );
  }
}

export default QuickStart;

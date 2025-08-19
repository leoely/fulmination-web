import React from 'react';
import Page from '~/client/script/component/Page';
import Text from '~/client/script/component/Text';
import MultiLineJavascript from '~/client/script/component/MultiLineJavascript';
import H1 from '~/client/script/component/H1';
import H2 from '~/client/script/component/H2';
import Ul from '~/client/script/component/Ul';
import Li from '~/client/script/component/Li';
import style from './index.module.css';
import '~/client/style/hljs.css';

class Home extends Page {
  constructor() {
    super();
    this.javascriptCode1 = "fulmination.scan('(+) bold: hello fulmination text.')";
    this.javascriptCode2 = [
      "fulmination.scan(`",
      "  [+] bold:",
      "  | hello fulmination passage.",
      "  | hello fulmination passage.",
      "  | hello fulmination passage.",
      "`);",
    ].join('\n');
    this.javascriptCode3 = [
      "fulmination.scanAll([",
      "  [`",
      "    [+] bold:",
      "    |",
      "  `, 1],",
      "  ['(+) dim: This is the fulmination transfer text.', 2],",
      "  ['(+) dim: This is the original text fulmination.', 0],",
      "]);",
    ].join('\n');
  }

  render() {
    const { javascriptCode1, javascriptCode2, javascriptCode3, } = this;
    return (
      <div className={style.home}>
        <div className={style.header}>
          <H1>Fulmination</H1>
          <span className={style.introduce}>
            is a library and peripherals based on dynamic compilation to
            implement the color and format of command line plain text.
          </span>
        </div>
        <H2>*Advantage:</H2>
        <Ul>
          <Li>
            Based on dynmaic compilation,the code is more compact and the
            developement efficiency is high.
          </Li>
          <Li>
            The newly designed syntax makes the code more elegant.It is easier
            to write and read in the early stages of development,and easier to
            maintain later.
          </Li>
          <Li>
            Using efficient algorithm optimization,although an extra layer is
            introduced,the code execution speed is still very fast.
          </Li>
          <Li>
            It exposes a variety of rich development interfaces that can be
            applied in various scenarious.
          </Li>
          <Li>
            Providers debugging and testing interface, and the code using
            fulmination is given better robusteness.
          </Li>
          <Li>
            Using text as carrier and using various transmission methods such as
            the internet has become possible.
          </Li>
          <Li>
            Provides various cross-platform command line tools, so that the use
            of fulmination is not limited to the node.js environment.
          </Li>
          <Li>
            The author heavily uses the fulmination project,contine to develop
            and maintain it.
          </Li>
          <Li>
            Provide a dedicated documentation website for easy use at all times,
            so that novices can quickly get started with th fulmination project.
          </Li>
        </Ul>
        <H2>*Example:</H2>
        <Text>Fulmination output code example 1:</Text>
        <MultiLineJavascript javascriptCode={javascriptCode1} />
        <Text>Fulmination output code example 2:</Text>
        <MultiLineJavascript javascriptCode={javascriptCode2} />
        <Text>Fulmination output code example 3:</Text>
        <MultiLineJavascript javascriptCode={javascriptCode3} />
        <H2>*Result:</H2>
      </div>
    );
  }
}

export default Home;

import React from 'react';
import style from './index.module.css';
import Text from '~/client/script/component/Text';
import Format from '~/client/script/component/Format';
import Formats from '~/client/script/component/Formats';

class CommandLine extends React.Component {
  render() {
    return (
      <div className={style.commandline}>
        <Text>
          Fulmination provide two command line commnads.First is "parse" which
          can parse ctf file and output parse result to screen.
        </Text>
        <Formats>
          <Format format="shell">fulmination parse text.ctf</Format>
        </Formats>
        <Text>
          Second is "minify" which can compress ctf file content.After minify
          before ctf file most space and breakline will be remove,only keep must
          exist space.
        </Text>
        <Formats>
          <Format format="shell">fulmination minify text.ctf</Format>
        </Formats>
        <Text>This is ctf file without use minify.</Text>
        <Formats>
          <Format>
            (+) bold; gray: text1 (+) bold; green: text2 (+) red: text3 &
          </Format>
          <Format>
            (+) bold; red: text4
          </Format>
          <Format> </Format>
          <Format>
            [+] bold; red:
          </Format>
          <Format>| passage1</Format>
          <Format>| passage2</Format>
          <Format>| passage3</Format>
          <Format>| passage4</Format>
        </Formats>
        <Text>This is ctf file with minify.</Text>
        <Format>(+)bold;gray:text1(+)bold;green:text2(+)red:text3 &(+)bold;red:text4[+]bold;red:|passage1|passage2|passage3|passage4</Format>
      </div>
    );
  }
}

export default CommandLine;

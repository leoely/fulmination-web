import React from 'react';
import style from './index.module.css';
import Text from '~/client/script/component/Text';
import Formats from '~/client/script/component/Formats';
import Format from '~/client/script/component/Format';

class Reference extends React.Component {
  render() {
    return (
      <div className={style.reference}>
        <Text>
          ctf file start with "(+)" or "[+]"."(+)" which mean add a text."[+]"
          which add a passage.Text and passage difference is text is one line
          text and passage is multi-line text.
        </Text>
        <Formats>
          <Format>(+) format1; format2; format3: text section</Format>
        </Formats>
        <Formats>
          <Format>[+] format1; format2; format3: text section</Format>
          <Format>| passage section1</Format>
          <Format>| passage section2</Format>
        </Formats>
        <Text>
          Then is format which belong to text and passage.Format is come from
          chalk project.Because fulmination use chalk color text."format1;
          format2; format3; ...; formatn:" syntax.Each format is correspond
          a chalk style.";" is each format delimiter.And end with ":".Chalk
          document website is https://github.com/chalk/chalk.
        </Text>
        <Formats>
          <Format>(+) bold; dim; underline: text section</Format>
        </Formats>
        <Text>
          The next is text part.As for text is follow by formats.As for passage
          is delimiter with "|".When text need split into two line which need
          use "&" as delimiter.
        </Text>
        <Formats>
          <Format>[+] dim:</Format>
          <Format>| passage section1</Format>
          <Format>| passage section2</Format>
        </Formats>
        <Formats>
          <Format>(+) bold; green: text section1 (+) bold: text section2 &</Format>
          <Format>(+) red: text section3 (+) bold: text section4</Format>
        </Formats>
      </div>
    );
  }
}

export default Reference;

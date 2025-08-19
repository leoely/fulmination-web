import React from 'react';
import Page from '~/client/script/component/Page';
import Text from '~/client/script/component/Text';
import Format from '~/client/script/component/Format';
import Formats from '~/client/script/component/Formats';
import style from './index.module.css';

class QuickStart extends Page {
  render() {
    return(
      <div className={style.quickstart}>
        <Text>
          Fulmination is a pure text color project.Parse input file format as
          "ctf" output pure text with color."ctf" mean color text format.ctf
          file format has own syntax,user can color text by their own special
          need.ctf syntax is semantic and beatiful syntax.User will enjoy when
          they write ctf file.ctf use by chalk project to color pure text.User
          can also watch and learn chalk.That's will be helpful for you use ctf
          file.
        </Text>
        <Text>
          Text below is use ctf syntax.ctf format text with "format" and "text"
          and so on concept.
        </Text>
        <Formats>
          <Format>
            (+) bold; red: This is ctf text syntax (+) dim; underline: ctf text will be in same line.
          </Format>
          <Format> </Format>
          <Format>
            [+] bold; green:
          </Format>
          <Format>
              | This is ctf passage syntax.
          </Format>
          <Format>
              | Each passage will in different line.
          </Format>
          <Format>
              | Each passage is start with delimiter.
          </Format>
        </Formats>
        <Text>
          And ctf also has chalk syntax section.
        </Text>
        <Formats>
          <Format>
            (+) bold: bold, underline and so on is chalk style. (+) underline:
            You can get this section document in chalk. &
          </Format>
          <Format>
            (+) bold: text and passage use same chalk style.
          </Format>
          <Format> </Format>
          <Format>
            [+] bold:
          </Format>
          <Format>
            | style use "" as delimiter, passage use "| as delimiter.
          </Format>
          <Format>
            | Passage apply style to all passage.Text apply style only to one
            text.
          </Format>
        </Formats>
      </div>
    );
  }
}

export default QuickStart;

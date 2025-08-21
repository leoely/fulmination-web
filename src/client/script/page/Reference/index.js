import React from 'react';
import Page from '~/client/script/component/Page';
import H2 from '~/client/script/component/H2';
import HighLight from '~/client/script/component/HighLight';
import Text from '~/client/script/component/Text';
import Formats from '~/client/script/component/Formats';
import Format from '~/client/script/component/Format';
import Styles from '~/client/script/component/Styles';
import Style from '~/client/script/component/Style';
import style from './index.module.css';

class Reference extends Page {
  render() {
    return (
      <div className={style.reference}>
        <H2>#Symbol "+"</H2>
        <Text>
          The symbol <HighLight>"+"</HighLight> in fulmination grammar is at the
          beginning of the grammar.<HighLight>"+"</HighLight> is semantic,
          meaning to add new text or a group of paragraph here.When adding a
          text or paragraph,you can use<HighLight>"+"</HighLight>to continue
          adding text or paragraphs of other colors or styles.
        </Text>
        <Formats>
          <Format format="fulmiation">(+) bold: add a fulmination text.</Format>
          <Format format="fulmiation">(+) bold: symbol """+"" sign in front.</Format>
        </Formats>
        <Text>
          The following is the corresponding terminal effect display:
        </Text>
        <Styles>
          <Style styls={['bold', 'inline']}>add a fulmination text.symbol "+" sign in front</Style>
          <Style styls={['inline', 'black', 'bgWhite', 'bold']}>%</Style>
        </Styles>
        <H2>#Symbol "(" and ")"</H2>
        <Text>
          Parentheses must be used with the symnol<HighLight>"+"</HighLight> and
          cannot appear alone.<HighLight>"(+)"</HighLight> is the only way to
          combine text.It adds a text with color and style.By default,the text
          does not wrap.If the terminal does not have a default lien break,the
          <HighLight>"%"</HighLight> symbol will be used to supplement the
          description.
       </Text>
        <Formats>
          <Format format="fulmiation">(+) green; bold: this is a fulmination text.</Format>
        </Formats>
        <Text>
          The following is the corresponding terminal effect display:
        </Text>
        <Styles>
          <Style styls={['bold', 'green', 'inline']}>this is a fulmination text.</Style>
          <Style styls={['inline', 'black', 'bgWhite', 'bold']}>%</Style>
        </Styles>
        <H2>#Symbol "[" and "]"</H2>
        <Text>
          Brackets and parenthese are similar,and the <HighLight>"+"</HighLight>
          symbol combination indicates a group of paragraphs.
        </Text>
        <Formats>
          <Format format="fulmiation">[+] blue:</Format>
          <Format format="fulmiation">| This is a line of paragraph text</Format>
          <Format format="fulmiation">| This is a line of paragraph text</Format>
          <Format format="fulmiation">| This is a line of paragraph text</Format>
        </Formats>
        <Text>
          The following is the corresponding terminal effect display:
        </Text>
        <Styles>
          <Style styls={['blue']}>This is a line of paragraph text</Style>
          <Style styls={['blue']}>This is a line of paragraph text</Style>
          <Style styls={['blue']}>This is a line of paragraph text</Style>
        </Styles>
      </div>
    );
  }
}

export default Reference;

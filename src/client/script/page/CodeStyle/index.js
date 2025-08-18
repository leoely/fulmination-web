import React from 'react';
import Page from '~/client/script/component/Page';
import Text from '~/client/script/component/Text';
import Format from '~/client/script/component/Format';
import Formats from '~/client/script/component/Formats';
import style from './index.module.css';

class CodeStyle extends Page {
  render() {
    return (
      <div className={style.codestyle}>
        <Text>"(+)" and "[+]" should write on head.</Text>
        <Formats>
          <Format>(+) bold; green: text1</Format>
        </Formats>
        <Text>"(+)" and "[+]" should has a blank before formats.</Text>
        <Formats>
          <Format>[+] bold; green:</Format>
          <Format>| passage</Format>
        </Formats>
        <Text>Text should has a space before ":".</Text>
        <Formats>
          <Format>(+) red: text1</Format>
        </Formats>
        <Text>Passage should has a blank before "|".</Text>
        <Formats>
          <Format>[+] bold; green:</Format>
          <Format>| passage1</Format>
          <Format>| passage2</Format>
        </Formats>
        <Text>Different passage should has a newline split.</Text>
        <Formats>
          <Format>[+] bold:</Format>
          <Format>| passage1</Format>
          <Format>| passage2</Format>
          <Format>| passage2</Format>
        </Formats>
        <Text>Text section and Passage should split by newline.</Text>
        <Formats>
          <Format>(+) red: text1</Format>
          <Format> </Format>
          <Format>[+] bold:</Format>
          <Format>| passage1</Format>
          <Format>| passage2</Format>
          <Format>| passage2</Format>
        </Formats>
        <Text>"&" should has a blank before text section</Text>
        <Formats>
          <Format>(+) red: text1 &</Format>
          <Format>(+) green: text1</Format>
        </Formats>
        <Text>Different text section should split with new line.</Text>
        <Formats>
          <Format>(+) red: text1 &</Format>
          <Format>(+) green: text1</Format>
        </Formats>
      </div>
    );
  }
}

export default CodeStyle;

import React from 'react';
import Page from '~/client/script/component/Page';
import H2 from '~/client/script/component/H2';
import HighLight from '~/client/script/component/HighLight';
import Table from '~/client/script/component/Table';
import Th from '~/client/script/component/Th';
import Tr from '~/client/script/component/Tr';
import Td from '~/client/script/component/Td';
import Text from '~/client/script/component/Text';
import Style from '~/client/script/component/Style';
import Styles from '~/client/script/component/Styles';
import MultiLineJavascript from '~/client/script/component/MultiLineJavascript';
import style from './index.module.css';
import '~/client/style/hljs.css';

class ApplicationProgramInterface extends Page {
  constructor(prop) {
    super(prop);
    this.javascriptCode1 = [
      "import Fulmination from 'fulmination';",
      "const fulmination = new Fulmination();",
    ].join('\n');
    this.javascriptCode2 = [
      "const fulmination = new Fulmination({ debug, });",
      "fulmination.scan('(+) bold: will not de displayed on the terminal screen.');"
    ].join('\n');
    this.javascriptCode3 = [
      "const fulmination = new Fulmination();",
      "fulmination.scan(`",
      "  [+] bold:",
      "  | a string using the fulmination syntax",
      "  | by default,the output is sent to the terminal screen",
      "`);",
    ].join('\n');
    this.javascriptCode4 = [
      "[",
      "  '\x1B[1ma string using the fulmination syntax\x1B[22m',",
      "  '\\n',",
      "  '\x1B[1mby default,the output is sent to the terminal screen\x1B[22m',",
      "  '\\n'",
      "]",
    ].join('\n');
    this.javascriptCode5 = [
      "const fulmination = new Fulmination({ debug: true, });",
      "fulmination.scan(`",
      "  [+] bold:",
      "  | a string using the fulmination syntax",
      "  | by default,the output is sent to the terminal screen",
      "`);",
    ].join('\n');
    this.javascriptCode6 = [
      "const fulmination = new Fulmination();",
      "fulmination.scanAll([",
      "  ['(+) green: this is case of code 0', 0],",
      "  ['(+) magenta: ', 1],",
      "  ['(+) cyan: this is case of code 1', 2],",
      "]);",
    ].join('\n');
    this.javascriptCode7 = [
      "const fulmination = new Fulmination({ debug: true, });",
      "fulmination.scanAll([",
      "  [`",
      "    [+] bold:",
      "    |",
      "  `, 1],",
      "  ['(+) cyan: this is case of code 2', 2],",
      "  ['(+) magenta: this is case of code 0', 0],",
      "]);",
    ].join('\n');
    this.javascriptCode8 = [
      "[",
      "  '\x1B[1m(+) cyan: this is case of code 1\x1B[22m',",
      "  '\\n',",
      "  '\x1B[35mthis is case of code 2\x1B[39m'",
      "]",
    ].join('\n');
  }

  render() {
    const {
      javascriptCode1, javascriptCode2, javascriptCode3, javascriptCode4,
      javascriptCode5, javascriptCode6, javascriptCode7, javascriptCode8,
    } = this;
    return (
      <div className={style.applicationProgramInterface}>
        <H2>#Preface</H2>
        <Text>
          The primary way to use <HighLight>"Fulmination"</HighLight> is through
          a <HighLight>"Node.js"</HighLight> wrapper.This is because the
          terminal exists within<HighLight>"Node.js"</HighLight>,not the browser.
          Using this <HighLight>"Node.js"</HighLight> interface allows you to
          leverage <HighLight>"Javascript's"</HighLight> rich and elegant core
          syntax while also utilizing <HighLight>"Node.js"</HighLight> diverse
          and concise libraries.This is the recommended approach for using
          <HighLight>"Fulmination"</HighLight> in most situations.
        </Text>
        <H2>#Usage</H2>
        <Text>
          Install <HighLight>"fulmination"</HighLight> in the
          <HighLight>"node.js"</HighLight> environment and you can use
          <HighLight>"fulmination"</HighLight>.
        </Text>
        <Text>
          Instantiating a <HighLight>"Fulmination"</HighLight> object has a
          certain performance overhead.When used correctly,
          <HighLight>"fulmination"</HighLight>
          instances can be reused.There is no need to create them repeatedly.
        </Text>
        <MultiLineJavascript javascriptCode={javascriptCode1}/>
        <H2>#Interface List</H2>
        <Text>
          Each <HighLight>"fulmination"</HighLight> intance recommends using
          only the following methods:
        </Text>
        <Th>Fulmination interface list</Th>
        <Table>
          <Tr>
            <Td>scan</Td>
            <Td>parse the fulmination string output results to the terminal.</Td>
          </Tr>
          <Tr>
            <Td>scanAll</Td>
            <Td>
              Parse the list containing fulmination string and output the
              results to the terminal
            </Td>
          </Tr>
          <Tr>
            <Td>generate</Td>
            <Td>parse the fulmination string to produce an output string</Td>
          </Tr>
          <Tr>
            <Td>generate</Td>
            <Td>
              parse a list of strings containing fulmination string to produce
              outputtable strings
            </Td>
          </Tr>
        </Table>
        <H2>#Method "scan"</H2>
        <Text>
          The <HighLight>"scan"</HighLight> method display the results to the
          terminal screen by default.However,this is not convenient development
          and debugging.If <HighLight>"debug"</HighLight> options is set when
          instantiating the function during development,the results will not be
          output to the terminal screen,but the formatted results will be ouput
          to the return value.
        </Text>
        <MultiLineJavascript javascriptCode={javascriptCode2}  />
        <Text>The <HighLight>parameter</HighLight> list is as follows:</Text>
        <Th>Parameter list of the scan method:</Th>
        <Table>
          <Tr>
            <Td>text</Td>
            <Td>string</Td>
            <Td>using fulmination syntax strings</Td>
          </Tr>
        </Table>
        <Text>
          The <HighLight>"return"</HighLight> value of the scan method in
          <HighLight>"debug"</HighLight>
          mode:
        </Text>
        <Th>return value in debug mode</Th>
        <Table>
          <Tr>
            <Td>string</Td>
            <Td>display string results for debugging</Td>
          </Tr>
        </Table>
        <MultiLineJavascript javascriptCode={javascriptCode5}  />
        <Text>
          This is the <HighLight>"return"</HighLight> value of the above code.
        </Text>
        <MultiLineJavascript javascriptCode={javascriptCode4} />
        <Text>
          <HighLight>"without the debug"</HighLight> option,the parsing results
          are output directly to the termianl screen.Therefore,there is no
          usable <HighLight>"return"</HighLight> value.
        </Text>
        <Th>return value</Th>
        <Table>
          <Tr>
            <Td>undefined</Td>
            <Td>no return value</Td>
          </Tr>
        </Table>
        <MultiLineJavascript javascriptCode={javascriptCode3}  />
        <Text>
          The following is the corresponding terminal effect display:
        </Text>
        <Styles>
          <Style styls={['bold']}>a string using the fulmination syntax</Style>
          <Style styls={['bold']}>by default,the output is sent to the terminal screen</Style>
        </Styles>
        <H2>#Method "scanAll"</H2>
        <Text>
          Previously,introduced pure <HighLight>'fulmination'</HighLight> escape
          solutions,which don't require <HighLight>"Javascript"</HighLight>
          APIs.each of these solution has its own advantages and disadvantages.
          The <HighLight>"scanAll"</HighLight> escape solutions is arguably most
          recommended.
        </Text>
        <Text>The <HighLight>parameter</HighLight> list is as follows:</Text>
        <Th>Parameter list of the scan method:</Th>
        <Table>
          <Tr>
            <Td>array</Td>
            <Td>array</Td>
            <Td>
              none of elements are typed using the fulmination syntax string and
              and numeric types
            </Td>
          </Tr>
        </Table>
        <Text>
          The format of the elements of the <HighLight>"scanAll"</HighLight>
          array is <HighLight>"[text, code]"</HighLight>.
        </Text>
        <Th>Specific format of scanAll array elements:</Th>
        <Table>
          <Tr>
            <Td>text</Td>
            <Td>string</Td>
            <Td>a string using the fulmination syntax</Td>
          </Tr>
          <Tr>
            <Td>code</Td>
            <Td>number</Td>
            <Td>number representing the type</Td>
          </Tr>
        </Table>
        <Text>
          The following is a list of <HighLight>code</HighLight> meanings:
        </Text>
        <Th>List of code:</Th>
        <Table>
          <Tr>
            <Td>0</Td>
            <Td>
              The string is parsed as a normal fulmination syntax string.
            </Td>
          </Tr>
          <Tr>
            <Td>1</Td>
            <Td>
              The string is parsed as a format list,which is the part before
              the fulmination words.
            </Td>
          </Tr>
          <Tr>
            <Td>2</Td>
            <Td>
              The string will be fully escaped.
            </Td>
          </Tr>
        </Table>
        <Text>
          <HighLight>"Code 0"</HighLight> is a string with normal
          <HighLight>"fulmination"</HighLight> syntax,so it can appear anywhere
          in the array.<HighLight>"Code 1"</HighLight> specifies the format and
          type,and <HighLight>"Code 2"</HighLight> defineds the content that
          needs to be escaped.Therefore,<HighLight>"Code 1"</HighLight>must
          appera first,following by <HighLight>"Code 2"</HighLight>.
        </Text>
        <MultiLineJavascript javascriptCode={javascriptCode6} />
        <Text>
          The above format and tpye correspond to the code
          <HighLight>"(+) magenta:"</HighLight>."(+)" corresponding type is
          text.<HighLight>"maganta"</HighLight> corresponding format is
          <HighLight>"magenta"</HighLight>.
        </Text>
        <Th>Code correspondance table:</Th>
        <Table>
          <Tr>
            <Td>(+)</Td>
            <Td>
              type
            </Td>
            <Td>
              type is text
            </Td>
          </Tr>
          <Tr>
            <Td>magenta:</Td>
            <Td>
              format
            </Td>
            <Td>
              format is magenta
            </Td>
          </Tr>
        </Table>
        <Text>
          The following is the corresponding terminal effect display:
        </Text>
        <Styles>
          <Style styls={['green', 'inline']}>this is case of code 0</Style>
          <Style styls={['magenta', 'inline']}>(+) cyan: this is case of code 1</Style>
          <Style styls={['inline', 'black', 'bgWhite', 'bold']}>%</Style>
        </Styles>
        <Th>return value</Th>
        <Table>
          <Tr>
            <Td>undefined</Td>
            <Td>no return value</Td>
          </Tr>
        </Table>
        <Text>
          <HighLight>"scanAll"</HighLight> can also instantiate
          <HighLight>"fulmination"</HighLight> and add
          <HighLight>"debug"</HighLight> to enable the debug funciton.
        </Text>
        <Text>
          The <HighLight>"return"</HighLight> value of the scan method in
          <HighLight>"debug"</HighLight>
          mode:
        </Text>
        <Th>return value in debug mode</Th>
        <Table>
          <Tr>
            <Td>string</Td>
            <Td>display string results for debugging</Td>
          </Tr>
        </Table>
        <MultiLineJavascript javascriptCode={javascriptCode7} />
        <Text>
          This is the <HighLight>"return"</HighLight> value of the above code.
        </Text>
        <MultiLineJavascript javascriptCode={javascriptCode8} />
        <H2>#Method "generate"</H2>
      </div>
    );
  }
}

export default ApplicationProgramInterface;

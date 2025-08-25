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
import Cursor from '~/client/script/component/Cursor';
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
    this.javascriptCode9 = [
      "import * as readline from 'readline';",
      "import { stdin as input, stdout as output } from 'process';",
      "import Fulmination from 'fulmination';",
      "",
      "const fulmination = new Fulmination();",
      "const rl = readline.createInterface({ input, output });",
      "rl.question(",
      "  fulmination.generate('(+) yellow: the result string after parsing is returned as the return value.'),",
      "  (answer) => {",
      "    rl.close();",
      "  },",
      ");",
    ].join('\n');
    this.javascriptCode10 = [
      "const fulmination = new Fulmination();",
      "console.log(JSON.stringify(fulmination.generate('(+) yellow: the result string after parsing is returned as the return value.')));",
    ].join('\n')
    this.javascriptCode11 = '"\\u001b[33mthe result string after parsing is returned as the return value.\\u001b[39m"';
    this.javascriptCode12 = [
      "const fulmination = new Fulmination();",
      "console.log(JSON.stringify(fulmination.generateAll([",
      "  ['(+) yellow: the doucment here will be yellow', 0],",
      "  ['(+) blue:', 1],",
      "  ['(+) yellow: this doucment here will be blue', 2],",
      "])));",
    ].join('\n');
    this.javascriptCode13 = '"\u001b[33mthe doucment here will be yellow\u001b[39m\u001b[34m(+) yellow: this doucment here will be blue\u001b[39m"';
    this.javascriptCode14 = [
      "const fulmination = new Fulmination();",
      "console.log(fulmination.generateAll([",
      "  ['(+) yellow: the doucment here will be yellow', 0],",
      "  ['(+) blue:', 1],",
      "  ['(+) yellow: this doucment here will be blue', 2],",
      "]));",
    ].join('\n');
  }

  render() {
    const {
      javascriptCode1, javascriptCode2, javascriptCode3, javascriptCode4,
      javascriptCode5, javascriptCode6, javascriptCode7, javascriptCode8,
      javascriptCode9, javascriptCode10, javascriptCode11, javascriptCode12,
      javascriptCode13, javascriptCode14,
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
        <Text>The <HighLight>"parameter"</HighLight> list is as follows:</Text>
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
          <Style idx={0} styls={['bold']}>a string using the fulmination syntax</Style>
          <Style idx={1} styls={['bold']}>by default,the output is sent to the terminal screen</Style>
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
              each of elements are typed using the fulmination syntax string and
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
              The string is parsed as a type and format list,which is the part before
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
          it is important to note that the <HighLight>"paragraph"</HighLight>
          type and format string contain<HighLight>"|"</HighLight>,because the
          actual words is after <HighLight>"|"</HighLight>.The following two
          types and format strings are compared:
        </Text>
        <Th>List of type and format string:</Th>
        <Table>
          <Tr>
            <Td>text</Td>
            <Td>(+) format1; format2:</Td>
            <Td>(+) bold:</Td>
          </Tr>
          <Tr>
            <Td>paragraph</Td>
            <Td>[+] format1; format2: <br/>|</Td>
            <Td>[+] red: <br/>|</Td>
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
          <Style idx={0} styls={['green', 'inline']}>this is case of code 0</Style>
          <Style idx={1} styls={['magenta', 'inline']}>(+) cyan: this is case of code 1</Style>
          <Style idx={2} styls={['inline', 'black', 'bgWhite', 'bold']}>%</Style>
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
        <Text>
          Often,the need isn't to output text directly to the screen,but rather
          to compile the result,combine it,and then output it to the screen.This
          can also be be a <HighLight>"Node.js"</HighLight> interface that
          requires a string containing the parsed result,such as
          <HighLight>"rl.question"</HighLight>.This is where
          <HighLight>"generate"</HighLight> comes in handy.Many libraries are
          unaware of <HighLight>"fulmination"</HighLight>,and many don't use it.
          In these cases,passing the parsed result string is the only solution.
        </Text>
        <MultiLineJavascript javascriptCode={javascriptCode9} />
        <Text>
          The following is the corresponding terminal effect display:
        </Text>
        <Styles>
          <Style idx={0} styls={['yellow', 'inline']}>the result string after parsing is returned as the return value.</Style>
          <Cursor />
        </Styles>
        <Text>
          There are no line breaks,but no <HighLight>"%"</HighLight> signs are
          added,which is what <HighLight>"rl.question"</HighLight> displays.
        </Text>
        <MultiLineJavascript javascriptCode={javascriptCode10} />
        <Text>
          Print out the parsed results:
        </Text>
        <MultiLineJavascript javascriptCode={javascriptCode11} />
        <Text>
          The <HighLight>"generate"</HighLight> method does not provide a
          <HighLight>"debug"</HighLight> mode,because usiing
          <HighLight>"JSON.stringify"</HighLight>,debugging is already very
          convenient.
        </Text>
        <Text>The <HighLight>"parameter"</HighLight> list is as follows:</Text>
        <Th>Parameter list of the generate method:</Th>
        <Table>
          <Tr>
            <Td>text</Td>
            <Td>string</Td>
            <Td>using fulmination syntax strings</Td>
          </Tr>
        </Table>
        <Text>
          The <HighLight>"return"</HighLight> value of the
          <HighLight>"generate"</HighLight> method:
        </Text>
        <Th>the <HighLight>"return"</HighLight> value of the generate method:</Th>
        <Table>
          <Tr>
            <Td>string</Td>
            <Td>string parsing results that can be recognized by node.js</Td>
          </Tr>
        </Table>
        <H2>#Method "generateAll"</H2>
        <Text>
          <HighLight>"scanAll"</HighLight> is designed to solve the problem of
          <HighLight>"scan"</HighLight> escaping,and
          <HighLight>"generateAll"</HighLight> is also designed to solve the
          problem of <HighLight>"generate"</HighLight> escapeing.it is also the
          most recommended escaping solution for the
          <HighLight>"generate"</HighLight> series.
        </Text>
        <Text>The <HighLight>parameter</HighLight> list is as follows:</Text>
        <Th>Parameter list of the scan method:</Th>
        <Table>
          <Tr>
            <Td>array</Td>
            <Td>array</Td>
            <Td>
              each of elements are typed using the fulmination syntax string and
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
              The string is parsed as a type and format list,which is the part before
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
          it is important to note that the <HighLight>"paragraph"</HighLight>
          type and format string contain<HighLight>"|"</HighLight>,because the
          actual words is after <HighLight>"|"</HighLight>.The following two
          types and format strings are compared:
        </Text>
        <Th>List of type and format string:</Th>
        <Table>
          <Tr>
            <Td>text</Td>
            <Td>(+) format1; format2:</Td>
            <Td>(+) bold:</Td>
          </Tr>
          <Tr>
            <Td>paragraph</Td>
            <Td>[+] format1; format2: <br/>|</Td>
            <Td>[+] red: <br/>|</Td>
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
        <MultiLineJavascript javascriptCode={javascriptCode12} />
        <Text>
          The above format and tpye correspond to the code
          <HighLight>"(+) blue:"</HighLight>."(+)" corresponding type is
          text.<HighLight>"blue"</HighLight> corresponding format is
          <HighLight>"blue"</HighLight>.
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
            <Td>blue:</Td>
            <Td>
              format
            </Td>
            <Td>
              format is blue
            </Td>
          </Tr>
        </Table>
        <Text>
          Print out the parsed results:
        </Text>
        <MultiLineJavascript javascriptCode={javascriptCode13} />
        <Text>
          The string contents reveal how the terminal's underlying layer
          recoginzes and parses them.The essentially involves setting the style
          and color,then reset the words.This process repeats until all words is
          formatted as desired.This process reveals which string are directoly
          recognized by the terminal's underlying layter.Of course,since
          <HighLight>"fulmination"</HighLight>
          is used for processing,understanding this is not essential.
        </Text>
        <MultiLineJavascript javascriptCode={javascriptCode14} />
        <Text>
          Using <HighLight>"Node.js"</HighLight> like
          <HighLight>"console.log"</HighLight>,string that can be recoginized
          by the underlying terminal can be displayed on the screen.This is also
          main application scenario of the <HighLight>"generate"</HighLight>
          series of APIs.
        </Text>
        <Text>
          The following is the corresponding terminal effect display:
        </Text>
        <Styles>
          <Style idx={0} styls={['yellow', 'inline']}>the doucment here will be yellow</Style>
          <Style idx={1} styls={['blue', 'inline']}>(+) yellow: this doucment here will be blue</Style>
        </Styles>
        <Text>
          <HighLight>"console.log"</HighLight> adds line breaks by default,so
          there are <HighLight>"%"</HighLight> prompts.
        </Text>
        <H2>#Postscript</H2>
        <Text>
          Compared to pure <HighLight>"Fulmination"</HighLight>,the
          <HighLight>"Javascript-based"</HighLight> API is more powerful,
          expressive,and has a more elegant syntax.while it might not be
          immedidately apparent when you're new to
          <HighLight>"Fulmination"</HighLight>,it's easy to see the benefits as
          you use it.Therefore,in most cases,
          <HighLight>"Fulmination"</HighLight> is the recommended approach.
        </Text>
      </div>
    );
  }
}

export default ApplicationProgramInterface;

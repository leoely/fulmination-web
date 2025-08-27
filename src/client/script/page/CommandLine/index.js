import React from 'react';
import Page from '~/client/script/component/Page';
import H2 from '~/client/script/component/H2'
import HighLight from '~/client/script/component/HighLight';
import Text from '~/client/script/component/Text';
import Format from '~/client/script/component/Format';
import Formats from '~/client/script/component/Formats';
import Style from '~/client/script/component/Style';
import Styles from '~/client/script/component/Styles';
import Table from '~/client/script/component/Table';
import Th from '~/client/script/component/Th';
import Tr from '~/client/script/component/Tr';
import Td from '~/client/script/component/Td';
import style from './index.module.css';

class CommandLine extends Page {
  render() {
    return (
      <div className={style.commandline}>
        <Text>
          After installing the <HighLight>"fulmination"</HighLight> package,the
          <HighLight>"fulmination"</HighLight> command line tool will also be
          installed by default.The following is a list of
          <HighLight>"fulmination"</HighLight>:
        </Text>
        <Th>List of fulmination subcommands:</Th>
        <Table>
          <Tr><Td>parse</Td><Td>Parse input fulmination file and output to terminal</Td></Tr>
          <Tr><Td>minify</Td><Td>Minify input fulmination file and output to terminal</Td></Tr>
        </Table>
        <Text>
          <HighLight>"Fulmination"</HighLight> only provides
          <HighLight>"Node.js"</HighLight> software packages.If you are not
          using <HighLight>"Node.js"</HighLight> and you also need to use
          <HighLight>"Fulmination"</HighLight> to complete the terminal display
          problem.The <HighLight>"Fulmination"</HighLight> command line tool
          <HighLight>"parse"</HighLight> may be a better solution at present.
        </Text>
        <Th>parse command parameter list:</Th>
        <Table>
          <Tr><Td>[filePath]</Td><Td>parameter</Td><Td>./text.fulmination</Td><Td>must</Td></Tr>
        </Table>
        <Text>
          The <HighLight>"parse"</HighLight> command of
          <HighLight>"fulmination"</HighLight> requires a parameter file path to
          be passed,and the content of the file should be written using the
          <HighLight>"fulmination"</HighLight> syntax.
        </Text>
        <Formats>
          <Format idx={0} format="shell">fulmination parse text.fulmination</Format>
        </Formats>
        <Text>
          Below is the content of file <HighLight>"text.fulmination"</HighLight>:
        </Text>
        <Formats>
          <Format idx={0}>[+] bold:</Format>
          <Format idx={1}>| if you are not using node.js</Format>
          <Format idx={2}>| fulmination command line tool parse may be a better soulution at present</Format>
        </Formats>
        <Text>
          The following is the corresponding terminal effect display:
        </Text>
        <Styles>
          <Style idx={0} styls={['bold']}>if you are not using node.js</Style>
          <Style idx={1} styls={['bold']}>fulmination command line tool parse may be a better soulution at present</Style>
        </Styles>
        <Text>
          As mentioned previously,<HighLight>"fulmination"</HighLight> ignores
          <HighLight>"spaces"</HighLight> and
          <HighLight>"line breaks"</HighLight>.This feature allow for
          compression,which takes up less space and makes parsing faster.
        </Text>
        <Th>minify command parameter list:</Th>
        <Table>
          <Tr><Td>[filePath]</Td><Td>parameter</Td><Td>./text.fulmination</Td><Td>must</Td></Tr>
          <Tr><Td>-o,--ouput</Td><Td>options</Td><Td>./mini.fulmination</Td><Td>optional</Td></Tr>
        </Table>
        <Text>
          If you pass <HighLight>"-o,--output"</HighLight>,
          <HighLight>"minify"</HighLight> will output the compressed results
          to the specified file.
        </Text>
        <Formats>
          <Format idx={0} format="shell">fulmination minify text.fulmination --output mini.fulmination</Format>
        </Formats>
        <Text>
          If <HighLight>"-o,--output"</HighLight> is not passed,
          <HighLight>"minify"</HighLight> will output the compressed results to
          the terminal screen.
        </Text>
        <Formats>
          <Format idx={0} format="shell">fulmination minify text.fulmination</Format>
        </Formats>
        <Text>
          Below is the content of file <HighLight>"text.fulmination"</HighLight>:
        </Text>
        <Formats>
          <Format idx={0}>
            (+) blue; italic: which takes up less space (+) underline; green: makes parsing faster &
          </Format>
          <Format idx={1}>[+] bold:</Format>
          <Format idx={2}>| if yout pass -o,--output,minify will output the compress result to the specified file</Format>
          <Format idx={3}>| if -o,--output is not passed,minify will ouput the compressed results to the terminal screen</Format>
        </Formats>
        <Text>The following is the compressiong result:</Text>
        <Formats>
          <Format idx={0}>
            (+)blue;italic:which takes up less space(+)underline;green:makes parsing faster&[+]bold:|if yout pass -o,--output,minify will output the compress result to the specified file|if -o,--output is not passed,minify will ouput the compressed results to the terminal screen
          </Format>
        </Formats>
      </div>
    );
  }
}

export default CommandLine;

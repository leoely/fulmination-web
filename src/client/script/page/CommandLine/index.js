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
          <Format format="shell">fulmination parse text.fulmination</Format>
        </Formats>
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
        <Formats>
          <Format format="shell">fulmination minify text.fulmination --output mini.fulmination</Format>
        </Formats>
      </div>
    );
  }
}

export default CommandLine;

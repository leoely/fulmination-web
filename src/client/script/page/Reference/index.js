import React from 'react';
import Page from '~/client/script/component/Page';
import Achor from '~/client/script/component/Achor';
import Table from '~/client/script/component/Table';
import Th from '~/client/script/component/Th';
import Tr from '~/client/script/component/Tr';
import Td from '~/client/script/component/Td';
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
        <H2>#Preface</H2>
        <Text>
          <HighLight>"Fulmination"</HighLight> isn't complex at this point.
          However,If you don't fully understand the underlying concepts,you
          might find that some scenarios don't meet your expectations.This lack
          of understanding can slow down development time.If you decide to use
          <HighLight>"Fulmiantion"</HighLight>,It's a good idea to read the
          entire documentation.
        </Text>
        <H2>#Spaces and line breaks</H2>
        <Formats>
          <Format idx={0} format="fulmiation">[+] bold: </Format>
          <Format idx={1} format="fulmiation">| the display will be the same</Format>
          <Format idx={2} format="fulmiation">[+] bold:| the display will be the same</Format>
        </Formats>
        <Text>
          The following is the corresponding terminal effect display:
        </Text>
        <Styles>
          <Style idx={0} styls={['bold']}>the display will be the same</Style>
          <Style idx={1} styls={['bold']}>the display will be the same</Style>
        </Styles>
        <Text>
          <HighLight>"Fulmination"</HighLight> will ignore
          <HighLight>"space"</HighLight> and <HighLight>"line"</HighLight>
          breaks,and the output style will be same even if the
          <HighLight>"spaces"</HighLight> and
          <HighLight>"line breaks"</HighLight> are different.This means that
          <HighLight>"Fulmination"</HighLight>can adjust the format and sytle
          of the code as you like.
        </Text>
        <H2>#Symbol "+"</H2>
        <Text>
          The symbol <HighLight>"+"</HighLight> in fulmination grammar is at the
          beginning of the grammar.<HighLight>"+"</HighLight> is semantic,
          meaning to add new text or a group of paragraph here.When adding a
          text or paragraph,you can use<HighLight>"+"</HighLight>to continue
          adding text or paragraphs of other colors or styles.
        </Text>
        <Formats>
          <Format idx={0} format="fulmiation">(+) bold: add a fulmination text.</Format>
          <Format idx={1} format="fulmiation">(+) bold; green: symbol """+"" sign in front.</Format>
        </Formats>
        <Text>
          The following is the corresponding terminal effect display:
        </Text>
        <Styles>
          <Style idx={0} styls={['bold', 'inline']}>add a fulmination text.</Style>
          <Style idx={1} styls={['bold', 'green', 'inline']}>symbol "+" sign in front</Style>
          <Style idx={2} styls={['inline', 'black', 'bgWhite', 'bold']}>%</Style>
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
          <Format idx={0} format="fulmiation">(+) green; bold: this is a fulmination text.</Format>
        </Formats>
        <Text>
          The following is the corresponding terminal effect display:
        </Text>
        <Styles>
          <Style idx={0} styls={['bold', 'green', 'inline']}>this is a fulmination text.</Style>
          <Style idx={1} styls={['inline', 'black', 'bgWhite', 'bold']}>%</Style>
        </Styles>
        <H2>#Symbol "[" and "]"</H2>
        <Text>
          Brackets and parenthese are similar,and the <HighLight>"+"</HighLight>
          symbol combination indicates a group of paragraphs.
        </Text>
        <Formats>
          <Format idx={0} format="fulmiation">[+] blue:</Format>
          <Format idx={1} format="fulmiation">| This is a line of paragraph text</Format>
          <Format idx={2} format="fulmiation">| This is a line of paragraph text</Format>
          <Format idx={3} format="fulmiation">| This is a line of paragraph text</Format>
        </Formats>
        <Text>
          The following is the corresponding terminal effect display:
        </Text>
        <Styles>
          <Style idx={0} styls={['blue']}>This is a line of paragraph text</Style>
          <Style idx={1} styls={['blue']}>This is a line of paragraph text</Style>
          <Style idx={2} styls={['blue']}>This is a line of paragraph text</Style>
        </Styles>
        <H2>#Format</H2>
        <Text>
          <HighLight>"Fulmination's"</HighLight> colors and functionality are
          based on the open source project <HighLight>"Chalk"</HighLight>.
          However,<HighLight>"Fulmination"</HighLight> does not fully adapt to
          all of <HighLight>"Chalk's"</HighLight> interfaces,but rather
          selectively selects some useful functions.For detailed documentation,
          please refer to the doucmentation provided by
          <HighLight>"Chalk"</HighLight>.
        </Text>
        <Th>Chalk colors and styles documentation</Th>
        <Table>
          <Tr>
            <Td>Chalk github address</Td>
            <Td>
              <Achor href="https://github.com/chalk/chalk">https://github.com/chalk/chalk</Achor>
            </Td>
          </Tr>
          <Tr>
            <Td>Chalk npm address</Td>
            <Td>
              <Achor href="https://www.npmjs.com/package/chalk">https://www.npmjs.com/package/chalk</Achor>
            </Td>
          </Tr>
        </Table>
        <Text>
          The adapted interfaces are as follows:
        </Text>
        <Th>List of compatible chalk interface</Th>
        <Table>
          <Tr><Td>bold</Td><Td>chalk.bold</Td></Tr>
          <Tr><Td>dim</Td><Td>chalk.dim</Td></Tr>
          <Tr><Td>italic</Td><Td>chalk.italic</Td></Tr>
          <Tr><Td>underline</Td><Td>chalk.underline</Td></Tr>
          <Tr><Td>inverse</Td><Td>chalk.inverse</Td></Tr>
          <Tr><Td>strikethrough</Td><Td>strikethrough</Td></Tr>
          <Tr><Td>red</Td><Td>chalk.red</Td></Tr>
          <Tr><Td>green</Td><Td>chalk.green</Td></Tr>
          <Tr><Td>yellow</Td><Td>chalk.yellow</Td></Tr>
          <Tr><Td>blue</Td><Td>chalk.blue</Td></Tr>
          <Tr><Td>magenta</Td><Td>chalk.magenta</Td></Tr>
          <Tr><Td>cyan</Td><Td>chalk.cyan</Td></Tr>
          <Tr><Td>white</Td><Td>chalk.white</Td></Tr>
          <Tr><Td>gray</Td><Td>chalk.gray</Td></Tr>
          <Tr><Td>bgBlack</Td><Td>chalk.bgBlack</Td></Tr>
          <Tr><Td>bgRed</Td><Td>chalk.bgRed</Td></Tr>
          <Tr><Td>bgGreen</Td><Td>chalk.bgGreen</Td></Tr>
          <Tr><Td>bgYellow</Td><Td>chalk.bgYellow</Td></Tr>
          <Tr><Td>bgBlue</Td><Td>chalk.bgBlue</Td></Tr>
          <Tr><Td>bgMagenta</Td><Td>chalk.bgMagenta</Td></Tr>
          <Tr><Td>bgCyan</Td><Td>chalk.bgCyan</Td></Tr>
          <Tr><Td>bgWhite</Td><Td>chalk.bgWhite</Td></Tr>
          <Tr><Td>rgb</Td><Td>chalk.rgb</Td></Tr>
          <Tr><Td>bgRgb</Td><Td>chalk.bgRgb</Td></Tr>
        </Table>
        <Text>
          At the same time,this list is also list of
          <HighLight>"formats"</HighLight> supported by
          <HighLight>"Fulmination"</HighLight>
        </Text>
        <H2>#Symbol ";"</H2>
        <Text>
          <HighLight>";"</HighLight> suitable for separating different types of
          custom <HighLight>"colors"</HighLight> and
          <HighLight>"styles"</HighLight>,so that the syntax use both
          <HighLight>"text"</HighLight> and <HighLight>"paragraphs"</HighLight>.
          Multiple <HighLight>"formats"</HighLight> without duplicaiton can be
          combined.
        </Text>
        <Formats>
          <Format idx={0}>
            (+) forma1; format2: !!! This is just a demo format,not actual runable
            code.
        </Format>
        </Formats>
        <Formats>
          <Format idx={0}>
            (+) black; bgWhite: apply both ""black"" and ""bgWhile"" formats
            at the same time
            code.
        </Format>
        </Formats>
        <Text>
          The following is the corresponding terminal effect display:
        </Text>
        <Styles>
          <Style idx={0} styls={['inline', 'bgWhite', 'black', 'normal']}>apply both "black" and "bgWhile" formats at the same time code.</Style>
          <Style idx={1} styls={['inline', 'bgWhite', 'black', 'normal']}>%</Style>
        </Styles>
        <H2>#Symbol ":"</H2>
        <Text>
          <HighLight>":"</HighLight> is the end fo the format list and the
          beginning of the text or paragraph.The format list part indicates
          that it is consistent with the text or paragraph.The format list can
          be empty,just add one<HighLight>":"</HighLight>this shows the
          terminal <HighLight>"default"</HighLight> color and format.The
          <HighLight>"deafult"</HighLight> is white,no style.
        </Text>
        <Formats>
          <Format idx={0}>
            [+] format1, format2:
          </Format>
          <Format idx={1}>
            | !!! This is just a demo format,not actual runable code.
          </Format>
          <Format idx={2}>
            | !!! This is just a demo format,not actual runable code.
          </Format>
        </Formats>
        <Formats>
          <Format idx={0}>
            [+]:
          </Format>
          <Format idx={1}>
            | this is the default style
          </Format>
          <Format idx={2}>
            | white,no style
          </Format>
        </Formats>
        <Text>
          The following is the corresponding terminal effect display:
        </Text>
        <Styles>
          <Style idx={0}>this is the default style</Style>
          <Style idx={1}>white,no style</Style>
        </Styles>
        <H2>#Symbol "|"</H2>
        <Text>
          <HighLight>"|"</HighLight> is a syntax unique to
          <HighLight>"paragraphs"</HighLight>,while text is simply words,.There
          is no separate lines.Different <HighLight>lines</HighLight>
          use a list of functional fromats.Without separate
          <HighLight>"lines"</HighLight>,the default is to automatically wrao.
          <HighLight>"Paragraphs"</HighLight> use multiple
          <HighLight>"lines"</HighLight> of text with the same style.
          <HighLight>"Text"</HighLight> is suitable for situations with complex
          and varied colors and styles.
        </Text>
        <Formats>
          <Format idx={0}>
            [+] red:
          </Format>
          <Format idx={1}>
            | will automatically wrap
          </Format>
          <Format idx={2}>
            | the same style will be applied
          </Format>
        </Formats>
        <Text>
          The following is the corresponding terminal effect display:
        </Text>
        <Styles>
          <Style idx={0} styls={['red']}>will automatically wrap</Style>
          <Style idx={1} styls={['red']}>the same style will be applied</Style>
        </Styles>
        <H2>#Symbol "*"</H2>
        <Text>
          <HighLight>"*"</HighLight> is primarilly designed to address
          <HighLight>"whitespace"</HighLight> issue.In
          <HighLight>"fulmiantion"</HighLight>,whitespace is divided into two
          distinct categories.First,<HighLight>"spaces"</HighLight> at the
          beginning and end of a words represented by<HighLight>"*"</HighLight>,
          a <HighLight>"*"</HighLight>,a space without
          <HighLight>"*"</HighLight> corresponds to the beginning and end of the
          words.Second,<HighLight>"spaces"</HighLight> within words do not
          require special processing and can be represented directly by
          <HighLight>spaces</HighLight>.This allows
          <HighLight>"fulmination"</HighLight> to have both flexible formatting
          and more visual semantic representation.
        </Text>
        <Formats>
          <Format idx={0}>
            (+) green: ** asterisks are required at the beginning and end ** (+) bold: use a spece   directly in the middle
          </Format>
        </Formats>
        <Text>
          The following is the corresponding terminal effect display:
        </Text>
        <Styles>
          <Style idx={0} styls={['green', 'inline']}>&nbsp;&nbsp;asterisks are required at the beginning and end&nbsp;&nbsp;</Style>
          <Style idx={1} styls={['bold', 'inline']}>use a spece&nbsp;&nbsp;&nbsp;directly in the middle</Style>
          <Style idx={2} styls={['inline', 'bgWhite', 'black', 'normal']}>%</Style>
        </Styles>
        <H2>#Symbol """</H2>
        <Text>
          <HighLight>"""</HighLight> is designed to solve the
          <HighLight>"keyword"</HighLight> problem used in
          <HighLight>"fulmination"</HighLight>.The original underlying solution
          also has this problem,but generally there is no need to spend extra
          energy to pay attention to this problem.First,we will introduce the
          solution for <HighLight>"single-word"</HighLight> escape.The following
          is a list of <HighLight>keyword</HighLight>
          escapes.Other solutions also handle these keywords,so they are
          universal.
        </Text>
        <Th>Single-word escape list</Th>
        <Table>
          <Tr><Td>(</Td><Td>"(</Td></Tr>
          <Tr><Td>)</Td><Td>")</Td></Tr>
          <Tr><Td>[</Td><Td>"[</Td></Tr>
          <Tr><Td>]</Td><Td>"]</Td></Tr>
          <Tr><Td>+</Td><Td>"+</Td></Tr>
          <Tr><Td>:</Td><Td>":</Td></Tr>
          <Tr><Td>;</Td><Td>";</Td></Tr>
          <Tr><Td>&</Td><Td>"&</Td></Tr>
          <Tr><Td>"</Td><Td>""</Td></Tr>
          <Tr><Td>|</Td><Td>"|</Td></Tr>
          <Tr><Td>*</Td><Td>"*</Td></Tr>
        </Table>
        <Formats>
          <Format idx={0}>
            [+] bold:
          </Format>
          <Format idx={1}>
            | "" need to be escaped
          </Format>
          <Format idx={2}>
            | "* need to be escaped
          </Format>
          <Format idx={3}>
            | ect need to be escaped
          </Format>
        </Formats>
        <Text>
          The following is the corresponding terminal effect display:
        </Text>
        <Styles>
          <Style idx={0} styls={['bold']}>" need to be escaped</Style>
          <Style idx={1} styls={['bold']}>&nbsp;&nbsp;need to be escaped</Style>
          <Style idx={2} styls={['bold']}>ect need to be escaped</Style>
        </Styles>
        <Text>
          The above solution handles many places that need to escaped,and the
          effect is not as good as this one.it requires adding a lot of
          <HighLight>"""</HighLight>.Therefore,
          <HighLight>"fulmination"</HighLight>also privdes other ways to batch
          process.The specific syntax is:<HighLight>""[num]"</HighLight>.The
          number can be any integer.When processing unknown strings passed in,
          the length of th string is relatively easy to know,so a better
          processing method is used.
        </Text>
        <Formats>
          <Format idx={0}>
            (+) green: "40 (+) green: These will be displayed as is
          </Format>
        </Formats>
        <Text>
          The following is the corresponding terminal effect display:
        </Text>
        <Styles>
          <Style idx={0} styls={['green', 'inline']}>(+) green: These will be displayed as is</Style>
          <Style idx={1} styls={['inline', 'black', 'bgWhite', 'bold']}>%</Style>
        </Styles>
        <Text>
          If you don't want to deal with string length issues,there is a simpler
          and more straightforward approach.
          <HighLight>""b[string]""</HighLight>However,this approach may cause
          other problems.Since <HighLight>"""</HighLight> is used as the end,
          if there is <HighLight>"""</HighLight> in the string,an error may
          occur.
        </Text>
        <Formats>
          <Format idx={0}>
            [+] bold:
          </Format>
          <Format idx={1}>
            | "b (+): this will be any string"
          </Format>
          <Format idx={2}>
            | "b (+) red: an error will occur if the string contains quotes"
          </Format>
        </Formats>
        <Text>
          The following is the corresponding terminal effect display:
        </Text>
        <Styles>
          <Style idx={0} styls={['bold']}>(+): this will be any string</Style>
          <Style idx={1} styls={['bold']}>(+) red: an error will occur if the string contains quotes</Style>
        </Styles>
        <H2>#Symbol "&"</H2>
        <Text>
          As mentioned before,text does not wrap automatically by default.
          However,if many scenes with comnplex colors and styles require line
          breaks,the <HighLight>"&"</HighLight> is needed to handle this problem
          .the specific syntax is <HighLight>"[num]&"</HighLight>.The number
          can be any integer.
        </Text>
        <Formats>
          <Format idx={0}>
            (+) cyan: there are three line breaks here 3&
          </Format>
        </Formats>
        <Text>
          The following is the corresponding terminal effect display:
        </Text>
        <Styles>
          <Style idx={0} styls={['cyan']}>there are three line breaks here</Style>
          <Style idx={1}>&nbsp;</Style>
          <Style idx={2}>&nbsp;</Style>
        </Styles>
        <H2>#Postscript</H2>
        <Text>
          Pure <HighLight>"Fulmination"</HighLight> can be used directly,using
          the command-line tools it provides for parsing.However,this isn't a
          common approach.Most people use it through the
          <HighLight>"Javascript"</HighLight> API.Don't worry,the syntax
          describe there is universally applicable there;it simply provides a
          variety of APIs of ease of use.
        </Text>
      </div>
    );
  }
}

export default Reference;

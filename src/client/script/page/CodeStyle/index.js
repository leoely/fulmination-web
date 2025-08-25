import React from 'react';
import Page from '~/client/script/component/Page';
import HighLight from '~/client/script/component/HighLight';
import MultiLineJavascript from '~/client/script/component/MultiLineJavascript';
import H2 from '~/client/script/component/H2';
import Ul from '~/client/script/component/Ul';
import Li from '~/client/script/component/Li';
import Text from '~/client/script/component/Text';
import Format from '~/client/script/component/Format';
import Formats from '~/client/script/component/Formats';
import style from './index.module.css';

class CodeStyle extends Page {
  render() {
    return (
      <div className={style.codestyle}>
        <H2>#Reason</H2>
        <Ul>
          <Li>
            Following the code style can make the code more beautiful and
            elegant.After all,the code style is optimal solution summarized from
            long-term code use.
          </Li>
          <Li>
            Following the coding style can make the code more semantic,easiser
            to read,and easier to maintain.
          </Li>
          <Li>
            If multiple people are collaboration on coding,following the coding
            style can avoid the cost of becoming familiar with other people's
            code.
          </Li>
          <Li>
            Following the code style can significantly improve the quality of
            the output code.Improve your coding skills.
          </Li>
        </Ul>
        <H2>#Fulmination syntax</H2>
        <Text>
          <HighLight>"(+)"</HighLight> and <HighLight>"[+]"</HighLight> are
          written at the beginning of line.After all,there is no special purpose
          and no need to use <HighLight>"spaces"</HighLight> and
          <HighLight>"line breaks"</HighLight>.This is both compact and
          semantic,and the final terminal display is also at the forefront.
        </Text>
        <Formats>
          <Format idx={0}>
            (+) bold: """("+")"" write at the beginning of line
          </Format>
          <Format idx={1}>
            [+] underline:
          </Format>
          <Format idx={2}>
            | """["+"]"" write at the beginning of line
          </Format>
          <Format idx={3}>
            | this is both compact and semantic
          </Format>
        </Formats>
        <Text>
          There should be a
          <HighLight>"space"</HighLight> before <HighLight>"(+)"</HighLight> and
          <HighLight>"[+]"</HighLight> and the
          <HighLight>"format list"</HighLight> to avoid confusion between the
          two and making it difficult to read.
        </Text>
        <Formats>
          <Format idx={0}>(+) dim: there should be a space before """("+")""</Format>
          <Format idx={1}>[+] italic:</Format>
          <Format idx={2}>| there should be a space before """["+"]""</Format>
          <Format idx={3}>| avoid confusion between the two</Format>
        </Formats>
        <Text>
          There should be a
          <HighLight>"space"</HighLight> after each <HighLight>";"</HighLight> to
          make it easier to distinguish different <HighLight>"formats"</HighLight>.
        </Text>
        <Formats>
          <Format idx={0}>
            (+) yellow; bold: there should be a space after each """;""
          </Format>
          <Format idx={1}>[+] yellow; underline:</Format>
          <Format idx={2}>| there should be a space after each """;""</Format>
        </Formats>
        <Text>
          There should a
          <HighLight>"space"</HighLight> after the <HighLight>":"</HighLight>
          to avoid the code being stuck together.
        </Text>
        <Formats>
          <Format idx={0}>
            (+) italic; yellow: there should a space after the """:""
          </Format>
          <Format idx={1}>
            [+] black; bgYellow:
          </Format>
          <Format idx={2}>
            | there should a space after the """:""
          </Format>
          <Format idx={3}>
            | avoid the code being stuck together
          </Format>
        </Formats>
        <Text>
          There should be a
          <HighLight>"space"</HighLight>
          after each <HighLight>"|"</HighLight> to avoid the code being too
          compact and not elegant enough.
        </Text>
        <Formats>
          <Format idx={0}>[+] black; bgYellow:</Format>
          <Format idx={1}>| There should be a space after each """|""</Format>
          <Format idx={2}>| avoid the code being too compact</Format>
        </Formats>
        <Text>
          Each line of a <HighLight>"paragraph"</HighLight> should occupy a
          separate line.Ater all,it will also occupy a separate line when
          displayed in the terminal.
        </Text>
        <Formats>
          <Format idx={0}>[+] yellow:</Format>
          <Format idx={1}>| each line of a paragraph should occupy a separate line</Format>
          <Format idx={2}>| it will also occcupy a separate line when displayed in the terminal</Format>
        </Formats>
        <Text>
          Different text should be written on the same line if there is
          <HighLight>"no line break"</HighLight>.This is more consistent with
          the terminal display.
        </Text>
        <Formats>
          <Format idx={0}>
            (+) yellow: dfferent text should be written on the same line
            (+) black; bgYellow: This is more consisttent with the terminal
            display
          </Format>
        </Formats>
        <Text>
          There should be a
          <HighLight>"space"</HighLight>
          before <HighLight>"&"</HighLight>.
          <HighLight>"&"</HighLight> and text are grammaticallly different
          concept and need to be separated.
        </Text>
        <Formats>
          <Format>(+) underline; yellow: there should be space before """&"" &</Format>
        </Formats>
        <Text>
          If different text have <HighLight>"line breaks"</HighLight>,a line
          breaK should be added at the
          <HighLight>"line break"</HighLight>.This will help you locate
          the line break quickly.
        </Text>
        <Formats>
          <Format idx={0}>(+) yellow: a line break should be added at ""line break"" &</Format>
          <Format idx={1}>
            (+) underline; yellow: this will help you locate the line break quickly.
          </Format>
        </Formats>
        <Text>
          When the text encounters a <HighLight>"line break"</HighLight>,the
          <HighLight>"[num]&"</HighLight> syntax should be used,which makes the
          code more expressive.
        </Text>
        <Formats>
          <Format>(+) yellow: the """[num"]"&"" syntax should be used 5&</Format>
        </Formats>
        <Text>
          Use <HighLight>"*"</HighLight> to represent a
          <HighLight>"space"</HighLight>.it can only used at the beginning or end
          of a words,and should be separated from the text by a
          <HighLight>"space"</HighLight>.
        </Text>
        <Formats>
          <Format idx={0}>
            (+) yellow; bold: ** it can only used at the beginning or end of a words
          </Format>
          <Format>(+) yellow; bold: should be separated from the text by a space **</Format>
        </Formats>
        <Text>
          If you need a <HighLight>"space"</HighLight>
          in the middle of text,just use a
          <HighLight>"space"</HighLight>.Each
          <HighLight>"spaces"</HighLight>
          will correspond to a space on the output terminal,so don't use more or
          less.
        </Text>
        <Formats>
          <Format idx={0}>[+] black; bgYellow:</Format>
          <Format idx={1}>| just use a space</Format>
          <Format idx={2}>| each spaces will correspond to a space on the outpu terminal</Format>
        </Formats>
        <Text>
          For escapes like <HighLight>""[num]"</HighLight>,fulmination allows
          any number of <HighLight>"spaces"</HighLight> in front,so make full
          use of this feature.<HighLight>"""</HighLight> a space needs to be
          left between <HighLight>""[num]"</HighLight> and the text that needs
          to escaped,so that number and text content are confused.
        </Text>
        <Formats>
          <Format idx={0}>[+] yellow:</Format>
          <Format idx={1}>| "11 (+) yellow: a space needs to be between</Format>
          <Format idx={2}>| avoid confusion between numbers and text</Format>
        </Formats>
        <Text>
          The situation <HighLight>""b"</HighLight> is the same as above,expect
          that a <HighLight>"""</HighLight> is needed at the end.However,
          <HighLight>"""</HighLight> can be distingusihed from words,so there
          no need to add extra spaces.
        </Text>
        <Formats>
          <Format idx={0}>[+] yellow:</Format>
          <Format idx={1}>| "b (+) yellow: can be distinguished from words."</Format>
          <Format idx={2}>| so there no need to add extra spaces.</Format>
        </Formats>
        <H2>#Javascript part</H2>
      </div>
    );
  }
}

export default CodeStyle;

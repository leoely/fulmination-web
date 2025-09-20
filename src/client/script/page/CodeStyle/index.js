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
import '~/client/style/hljs.css';

class CodeStyle extends Page {
  constructor(props) {
    super(props);
    this.javascriptCode1 = [
      "import Fulmination from 'fulmination';",
      "",
      "const fulmination = new Fulmination();",
      "fulmination.scan('(+) yellow: single-line fulmination');",
      "fulmination.generate('(+) yellow: single-line fulmination');",
    ].join('\n');
    this.javascriptCode2 = [
      "import Fulmination from 'fulmination';",
      "",
      "const fulmination = new Fulmination();",
      "fulmination.scan(`",
      "  (+) italic; yellow: a line break is added to each line &",
      "  (+) black; bgYellow: last apostrophe is at the beginning and aligned with the first line",
      "`);",
      "fulmination.generate(`",
      "  (+) italic; yellow: a line break is added to each line &",
      "  (+) black; bgYellow: last apostrophe is at the beginning and aligned with the first line",
      "`);",
    ].join('\n');
    this.javascriptCode3 = [
      "import Fulmination from 'fulmination';",
      "",
      "const fulmination = new Fulmination();",
      "fulmination.scanAll([",
      "  ['(+) bold; yellow:  each of the array is separated by a newline &', 0],",
      "  ['(+) black; bgYellow:', 1],",
      "  ['(+) black; bgYellow: align the closing bracket of the array with first code', 2],",
      "]);",
      "fulmination.generateAll([",
      "  ['(+) bold; yellow:  each of the array is separated by a newline &', 0],",
      "  ['(+) black; bgYellow:', 1],",
      "  ['(+) black; bgYellow: align the closing bracket of the array with first code', 2],",
      "]);",
    ].join('\n');
    this.javascriptCode4 = [
      "import Fulmination from 'fulmination';",
      "",
      "const fulmination = new Fulmination();",
      "fulmination.scanAll([",
      "  ['(+) bold; yellow: make style simple and easy to learn', 0],",
      "  [`",
      "    [+] underline; yellow:",
      "    |",
      "  `, 1],",
      "  ['(+) black; bgYellow: this will make the code more elegant', 2],",
      "]);",
      "fulmination.generateAll([",
      "  ['(+) bold; yellow: make style simple and easy to learn', 0],",
      "  [`",
      "    [+] underline; yellow:",
      "    |",
      "  `, 1],",
      "  ['(+) black; bgYellow: this will make the code more elegant', 2],",
      "]);",
    ].join('\n');
    this.javascriptCode5 = [
      "import Fulmination from 'fulmination';",
      "",
      "const fulmination = new Fulmination();",
      "fulmination.scanAll([",
      "  ['(+) black; bgYellow: if you use the scan metho multiple', 0],",
      "  ['(+) yellow: should use scanAll method insteal', 0],",
      "  ['(+) bold; yellow:  avoids grammatical duplication', 0],",
      "]);",
      "fulmination.generateAll([",
      "  ['(+) black; bgYellow: if you use the generate metho multiple', 0],",
      "  ['(+) yellow: should use generateAll method insteal', 0],",
      "  ['(+) bold; yellow:  avoids grammatical duplication', 0],",
      "]);",
    ].join('\n');
    this.javascriptCode6 = [
      "import Fulmination from 'fulmination';",
      "",
      "const fulmination = new Fulmination();",
      "const originalContent = `",
      "  this is piece of orginal content text",
      "  this is may be copy-pasted text",
      "  cannot be used directly",
      "`;",
      "const content = Fulmination.processOriginalContent(originalContent)",
      "fulmination.scan(`<+> red: ${content}`);",
      "fulmination.generate(`<+> red: ${content}`);",
    ].join('\n');
    this.javascriptCode7 = [
      "import Fulmination from 'fulmination';",
      "",
      "const fulmination = new Fulmination();",
      "const content = Fulmination.processOriginalContent(error.stack);",
      "fulmination.scan(`<+> red: ${content}`);",
      "fulmination.generate(`<+> red: ${content}`);",
    ].join('\n');
  }

  render() {
    const {
      javascriptCode1, javascriptCode2, javascriptCode3, javascriptCode4,
      javascriptCode5, javascriptCode6, javascriptCode7,
    } = this;
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
          <HighLight>"[+]"</HighLight> and <HighLight>"{'<+>'}"</HighLight>the
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
          If it is text,there should a
          <HighLight>"space"</HighLight> after the <HighLight>":"</HighLight>
          If it is paragraph,there should be a
          <HighLight>"line break"</HighLight> after <HighLight>":"</HighLight>
          .to avoid the code being stuck together.
        </Text>
        <Formats>
          <Format idx={0}>
            (+) italic; yellow: there should a space after the """:""
          </Format>
        </Formats>
        <Formats>
          <Format idx={0}>
            [+] black; bgYellow:
          </Format>
          <Format idx={1}>
            | there should a line break after the """:""
          </Format>
          <Format idx={2}>
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
          <Format idx={0}>(+) underline; yellow: there should be space before """&"" &</Format>
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
          <HighLight>"space"</HighLight>.<HighLight>"*"</HighLight> and text
          should be separated by a <HighLight>"space"</HighLight>.Avoid sticking
          together.
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
          <Format idx={1}>| use spaces    directly</Format>
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
          <Format idx={1}>| "b (+) yellow: can be distinguished from words"</Format>
          <Format idx={2}>| so there no need to add extra spaces</Format>
        </Formats>
        <Text>
          <HighLight>"Paragraphs"</HighLight> and <HighLight>"paragraph"</HighLight>,
          <HighLight>"paragrah"</HighLight> and <HighLight>"text"</HighLight> and
          <HighLight>"text"</HighLight> and <HighLight>"paragraph"</HighLight>
          should all be separated by a <HighLight>"line break"</HighLight>.
          Paragraph and text are also displayed with a line break in the
          terminal display.However,alothough text and paragraphs do not hav line
          breaks in the terminal display,a line break is added to avoid
          confusing cdoe formatting.
        </Text>
        <Formats>
          <Format idx={0}>[+] italic; yellow:</Format>
          <Format idx={1}>| should all be separated by line break</Format>
          <Format idx={2}>| added to avoid confusing code formatting</Format>
          <Format idx={3}>[+] italic; yellow:</Format>
          <Format idx={4}>| should all be separated by line break</Format>
          <Format idx={5}>| added to avoid confusing code formatting</Format>
        </Formats>
        <Formats>
          <Format idx={0}>[+] italic; yellow:</Format>
          <Format idx={1}>| should all be separated by line break</Format>
          <Format idx={2}>| added to avoid confusing code formatting</Format>
          <Format idx={3}>(+) black; bgYellow: should all be separated by line break</Format>
        </Formats>
        <Text>
          Each line of <HighLight>"fulmiantion"</HighLight> <HighLight>"content"</HighLight>
          should be marked with <HighLight>"*"</HighLight> at the beginning,
          and the <HighLight>"*"</HighLight> and the following text should be
          separarated by a space.This will make code cleaner.Other spaces can
          be left as is.
        </Text>
        <Formats>
          <Format idx={0}>{'<+> bgRed:'}</Format>
          <Format idx={1}>** should be marked with "*</Format>
          <Format idx={2}>** this will make code cleaner.</Format>
          <Format idx={2}>** other spaces   can be left as is</Format>
        </Formats>
        <Text>
          The main text of the <HighLight>"fulmination"</HighLight> content
          occupies one line each,because each blank line will correspond to a
          blank line when displayed.
        </Text>
        <Formats>
          <Format idx={0}>{'<+> bold; red:'}</Format>
          <Format idx={1}>** content occupies one line each</Format>
          <Format idx={2}>** each blank line will correspond to a blank line</Format>
        </Formats>
        <Text>
          To avoid escaping,the
          <HighLight>"fulmination"</HighLight> content is parsed until the end
          of the <HighLight>"fulmination"</HighLight> text.Therefore,
          there is usually no other words after
          <HighLight>"fulmination"</HighLight> content.
        </Text>
        <Formats>
          <Format idx={0}>{'<+> red:'}</Format>
          <Format idx={1}>** content is parsed until the end of</Format>
          <Format idx={2}>** there is usually no other words after fulmination content</Format>
        </Formats>
        <Text>
          If the <HighLight>"fulmination"</HighLight> <HighLight>"content"</HighLight>
          is combined with
          <HighLight>"text"</HighLight> or <HighLight>"paragraphs"</HighLight>,
          they should be separated by blank lines to avoid code confusion.
        </Text>
        <Formats>
          <Format idx={0}>(+) bold: This is the text of fulmination</Format>
          <Format idx={1}>{'<+> red:'}</Format>
          <Format idx={2}>** fulmination content is combined with text</Format>
          <Format idx={3}>** they should be separated by blank lines</Format>
        </Formats>
        <Formats>
          <Format idx={0}>[+] dim:</Format>
          <Format idx={1}>| This is the fulmination paragraph</Format>
          <Format idx={2}>| they should be seprarated by blank lines</Format>
          <Format idx={3}>{'<+> red:'}</Format>
          <Format idx={4}>** fulmination content is combined with text</Format>
          <Format idx={5}>** they should be separated by blank lines</Format>
        </Formats>
        <H2>#Javascript part</H2>
        <Text>
          If it is a single-line <HighLight>"fulmintion" </HighLight> string
          ,to pass it directly in single quotes.
        </Text>
        <MultiLineJavascript javascriptCode={javascriptCode1} />
        <Text>
          If a multi-line <HighLight>"fulmination"</HighLight> string is passed
          with apostrophes,a line break is added to each line of the
          <HighLight>"fulmination"</HighLight> string.The last apostrophe is at
          the beginning and aligned with the first line.
        </Text>
        <MultiLineJavascript javascriptCode={javascriptCode2} />
        <Text>
          For the <HighLight>"scanAll"</HighLight> and
          <HighLight>"generateAll"</HighLight> methods,you need to pass an array,
          and align the closing bracket of the arrary with first code.Each
          element of the array is separated by a
          <HighLight>"newline"</HighLight> to ensure that the code is aligned.
          A space is added between the text and the code to make the code more
          beautiful.
        </Text>
        <MultiLineJavascript javascriptCode={javascriptCode3} />
        <Text>
          The case of multi-line <HighLight>"fulmination"</HighLight> text is
          actually the same style as mentioned above,which makes the style
          simple and easy to learn.It is important to note that for multi-line
          <HighLight>"fulmination"</HighLight>,each line needs to be indented
          two spaces.This will make the code more elegant.
        </Text>
        <MultiLineJavascript javascriptCode={javascriptCode4} />
        <Text>
          If you use the <HighLight>"scan"</HighLight> or
          <HighLight>"generate"</HighLight> method multiple times,you should
          use the <HighLight>"scanAll"</HighLight> method and the
          <HighLight>"generateAll"</HighLight> method instead.This avoids
          grammatical duplication,make the makes the code more effcient,and
          improves coding efficiency.After all,you can omit the beginning of
          <HighLight>"fulmination.scan"</HighLight> or
          <HighLight>"fulmination.generate"</HighLight>.
        </Text>
        <MultiLineJavascript javascriptCode={javascriptCode5} />
        <Text>
          To avoid escaping issue,the <HighLight>"content"</HighLight> is always
          paresed to the end of the <HighLight>"fulmination"</HighLight>,so if
          you use the <HighLight>"content"</HighLight>,you should use a separate
          <HighLight>"scan"</HighLight> or <HighLight>"generate"</HighLight>.
          The copied and pasted <HighLight>"fulmiantion"</HighLight> and other
          output string are processed in the same way.
        </Text>
        <MultiLineJavascript javascriptCode={javascriptCode6} />
        <MultiLineJavascript javascriptCode={javascriptCode7} />
      </div>
    );
  }
}

export default CodeStyle;

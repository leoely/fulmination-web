import { HighLight, JavascriptLexer, }from 'glow.js';
import javascriptTemplate from '~/client/script/lib/template/javascriptTemplate';

export default function formatJavascript(text) {
  const highLight = new HighLight();
  highLight.addLexer(JavascriptLexer);
  return highLight.parse(text).map((e) => javascriptTemplate(e));
}

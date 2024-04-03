import { HighLight, ShellLexer, }from 'glow.js';
import shellTemplate from '~/client/script/lib/template/shellTemplate';

export default function formateLocation(text) {
  const highLight = new HighLight();
  highLight.addLexer(ShellLexer);
  return highLight.parse(text).map((e) => shellTemplate(e));
}

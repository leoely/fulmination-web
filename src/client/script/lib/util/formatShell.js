import {
  HighLight,
  ShellLexer,
  LocationLexer,
} from 'glow.js';
import shellTemplate from '~/client/script/lib/template/shellTemplate';

export default function formateLocation(text) {
  const highLight = new HighLight();
  highLight.addLexer(ShellLexer);
  highLight.addLexer(LocationLexer);
  return highLight.parse(text).map((e, idx) => shellTemplate(e, idx));
}

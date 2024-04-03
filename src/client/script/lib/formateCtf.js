import { HighLight, CtfLexer, }from 'glow.js';
import ctfTemplate from '~/client/script/lib/template/ctfTemplate';

export default function formateLocation(text) {
  const highLight = new HighLight();
  highLight.addLexer(CtfLexer);
  return highLight.parse(text).map((e) => ctfTemplate(e));
}

import { HighLight, CtfLexer, }from 'glow.js';
import ctfTemplate from '~/client/script/lib/template/ctfTemplate';

export default function formateLocation(version) {
  const highLight = new HighLight();
  highLight.addLexer(CtfLexer);
  return highLight.parse(version).map((e) => ctfTemplate(e));
}

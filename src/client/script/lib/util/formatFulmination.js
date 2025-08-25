import {
  HighLight,
  FulminationLexer,
} from 'glow.js';
import fulminationTemplate from '~/client/script/lib/template/fulminationTemplate';

export default function formatFulmination(text) {
  const highLight = new HighLight(FulminationLexer);
  highLight.addLexer(FulminationLexer);
  return highLight.parse(text).map((e, idx) => fulminationTemplate(e, idx));
}

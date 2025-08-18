import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';

hljs.registerLanguage('javascript', javascript);

export default function formatJavascript(text) {
  return hljs.highlight(text, { language: 'javascript', }).value;
}

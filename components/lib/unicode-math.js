import {combineWithMathJax} from '../../node_modules/mathjax-full/mjs/components/global.js';
import {VERSION} from '../../node_modules/mathjax-full/mjs/components/version.js';

import * as module1 from '../../js/unicode-math.js';

if (MathJax.loader) {
  MathJax.loader.checkVersion('[ams]/unicode-math', VERSION, 'tex-extension');
}

combineWithMathJax({_: {
  "unicode-math": module1
}});

import { mathjax } from '@mathjax/src/js/mathjax.js';
// mathjax.asyncLoad = async (name) => import(name + '.js');
import '@mathjax/src/js/util/asyncLoad/esm.js';

import { TeX } from '@mathjax/src/js/input/tex.js';
import { SVG } from '@mathjax/src/js/output/svg.js';
import { liteAdaptor } from '@mathjax/src/js/adaptors/liteAdaptor.js';
import { RegisterHTMLHandler } from '@mathjax/src/js/handlers/html.js';

import {
  BaseConfiguration,
} from '@mathjax/src/js/input/tex/base/BaseConfiguration.js';
import {
  AmsConfiguration,
} from '@mathjax/src/js/input/tex/ams/AmsConfiguration.js';
import {
  BoldsymbolConfiguration,
} from '@mathjax/src/js/input/tex/boldsymbol/BoldsymbolConfiguration.js';

import { configuration as unicodeMath } from '../js/unicode-math.js';

const adaptor = liteAdaptor();
RegisterHTMLHandler(adaptor);

const tex = new TeX({
  packages: [
    BaseConfiguration.name,
    AmsConfiguration.name,
    BoldsymbolConfiguration.name,
    unicodeMath.name,
  ],
});

import { MathJaxStix2Font } from '@mathjax/mathjax-stix2-font/js/svg.js';

MathJaxStix2Font.defaultParams.separation_factor = 1;
const stix2Font = new MathJaxStix2Font({
  dynamicPrefix: '@mathjax/mathjax-stix2-font/js/svg/dynamic'
});

const svg = new SVG({
  fontData: stix2Font,
  fontCache: 'global',
  displayAlign: 'left',
  displayIndent: '0',
});

export const mj = async (documentstring) => {
  const mjDoc = mathjax.document(documentstring, {
    InputJax: tex,
    OutputJax: svg,
  });
  await mathjax.handleRetriesFor(() => {
    mjDoc.render()
  });
  return `<!DOCTYPE html>${adaptor.outerHTML(adaptor.root(mjDoc.document))}`;
};

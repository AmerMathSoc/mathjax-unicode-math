import { mathjax } from 'mathjax-full/js/mathjax.js';
mathjax.asyncLoad = async (name) => import(name + '.js');

import { TeX } from 'mathjax-full/js/input/tex.js';
import { SVG } from 'mathjax-full/js/output/svg.js';
import { liteAdaptor } from 'mathjax-full/js/adaptors/liteAdaptor.js';
import { RegisterHTMLHandler } from 'mathjax-full/js/handlers/html.js';

import {
  BaseConfiguration,
} from 'mathjax-full/js/input/tex/base/BaseConfiguration.js';
import {
  AmsConfiguration,
} from 'mathjax-full/js/input/tex/ams/AmsConfiguration.js';
import {
  BoldsymbolConfiguration,
} from 'mathjax-full/js/input/tex/boldsymbol/BoldsymbolConfiguration.js';

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

import { MathJaxStix2Font } from 'mathjax-stix2-font/mjs/svg.js';

MathJaxStix2Font.defaultParams.separation_factor = 1;
const stix2Font = new MathJaxStix2Font({
  dynamicPrefix: 'mathjax-stix2-font/mjs/svg/dynamic'
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

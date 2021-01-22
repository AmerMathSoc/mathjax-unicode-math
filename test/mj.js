const { mathjax } = require('mathjax-full/js/mathjax.js');
const { TeX } = require('mathjax-full/js/input/tex.js');
const { SVG } = require('mathjax-full/js/output/svg.js');
const { liteAdaptor } = require('mathjax-full/js/adaptors/liteAdaptor.js');
const { RegisterHTMLHandler } = require('mathjax-full/js/handlers/html.js');

const {
  BaseConfiguration,
} = require('mathjax-full/js/input/tex/base/BaseConfiguration.js');
const {
  AmsConfiguration,
} = require('mathjax-full/js/input/tex/ams/AmsConfiguration.js');
const {
  BoldsymbolConfiguration,
} = require('mathjax-full/js/input/tex/boldsymbol/BoldsymbolConfiguration.js');

const unicodeMath = require('../js/unicode-math.js').configuration;

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
const { STIX2Font } = require('mathjax-full/js/output/svg/fonts/stix2.js');
const stix2Font = new STIX2Font();
const svg = new SVG({
  fontCache: 'global',
  font: stix2Font,
  displayAlign: 'left',
  displayIndent: '0',
});

module.exports = (documentstring) => {
  const mj = mathjax.document(documentstring, {
    InputJax: tex,
    OutputJax: svg,
  });
  mj.render();
  return (
    adaptor.doctype(mj.document) + adaptor.outerHTML(adaptor.root(mj.document))
  );
};

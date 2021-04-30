const PACKAGE = require('mathjax-full/components/webpack.common.js');

module.exports = PACKAGE(
  'unicode-math',                       // the name of the package to build
  '../node_modules/mathjax-full/js',    // location of the mathjax library
  [                                     // packages to link to
    'components/src/core/lib',
    'components/src/input/tex-base/lib'
  ],
  __dirname+'/js/',                            // our directory
  __dirname+'/browser/'                                   // where to put the packaged component
);

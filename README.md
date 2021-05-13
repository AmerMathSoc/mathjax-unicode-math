# mathjax-unicode-math

MathJax TeX extension aiming to (partially) implement the [unicode-math package](https://ctan.org/pkg/unicode-math).

## MathJax Extension: `unicode-math.js`

For supported macros and environments, see [./test/unicode-math.html](test/unicode-math.html)


## Using NodeJS

For example, install `mathjax-full` and `mathjax-unicode-math` and use something like

    const { TeX } = require('mathjax/js/input/tex.js');
    const unicodeMath = require('mathjax-unicode-math').configuration;
    const tex = new TeX({
        packages: [unicodeMath.name]
    });


## Using a browser

For client-side use, you need load `browser/unicode-math.js`, e.g., from a CDN.

Follow the instructions from the MathJax documentation on [loading a third-party extensions](http://docs.mathjax.org/en/latest/web/webpack.html#loading-the-extension), e.g.,

    MathJax = {
        loader: {
            load: ['[unicodeMath]/unicode-math.js'],
            paths: {unicodeMath: 'https://cdn.jsdelivr.net/npm/@amermathsoc/mathjax-unicode-math@1/browser'}
        },
        tex: {
            packages: {'[+]': ['unicode-math']}
        }
    };

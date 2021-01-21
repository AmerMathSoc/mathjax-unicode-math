import { Configuration } from 'mathjax-full/js/input/tex/Configuration.js';
import { CommandMap, EnvironmentMap, DelimiterMap } from 'mathjax-full/js/input/tex/SymbolMap.js';
import { ParseMethod } from 'mathjax-full/js/input/tex/Types.js';
import ParseMethods from 'mathjax-full/js/input/tex/ParseMethods.js';
import BaseMethods from 'mathjax-full/js/input/tex/base/BaseMethods.js';

let Methods: Record<string, ParseMethod> = {};

new CommandMap(
    'unicode-math-macros',
    {
    },
    Methods
);

new DelimiterMap('unicode-math-delimiters', ParseMethods.delimiter, {
});

new EnvironmentMap(
    'unicode-math-environments',
    ParseMethods.environment,
    {
    },
    {
        Array: BaseMethods.Array,
    }
);

export const configuration = Configuration.create('unicode-math', {
    handler: {
        delimiter: ['unicode-math-delimiters'],
        macro: ['unicode-math-macros', 'unicode-math-delimiters'],
        environment: ['unicode-math-environments'],
    },
});

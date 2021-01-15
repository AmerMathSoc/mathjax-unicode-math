/*************************************************************
 *  Copyright (c) 2020 Peter Krautzberger
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import NodeUtil from 'mathjax-full/js/input/tex/NodeUtil.js';
import { Configuration } from 'mathjax-full/js/input/tex/Configuration.js';
import { CommandMap, EnvironmentMap, DelimiterMap } from 'mathjax-full/js/input/tex/SymbolMap.js';
import { ParseMethod } from 'mathjax-full/js/input/tex/Types.js';
import { TexConstant } from 'mathjax-full/js/input/tex/TexConstants.js';
import ParseMethods from 'mathjax-full/js/input/tex/ParseMethods.js';
import BaseMethods from 'mathjax-full/js/input/tex/base/BaseMethods.js';
import TexParser from 'mathjax-full/js/input/tex/TexParser';

let Methods: Record<string, ParseMethod> = {};

// EXAMPLE: custom methods from mathjax-ams-macros
// Methods.accentset = function (parser: TexParser, name: string) {
//     const accent = parser.ParseArg(name);
//     const expression = parser.ParseArg(name);
//     NodeUtil.setAttribute(accent, 'accent', true);
//     NodeUtil.setAttribute(accent, 'mathsize', 'small');
//     if (parser.stack.env.font) {
//         NodeUtil.setAttribute(accent, 'mathvariant', parser.stack.env.font);
//     }
//     const mpadded = parser.create('node', 'mpadded', [accent], { height: 0 });
//     const mover = parser.create('node', 'mover', [expression, mpadded]);
//     const texatom = parser.create('node', 'TeXAtom', [mover]);
//     parser.Push(texatom);
// };

// Methods.smallcaps = function (parser: TexParser, name: string) {
//     let argument = parser.GetArgument(name);
//     const def = {
//         mathsize: '1em',
//         mathvariant: 'normal', // TODO why does TexConstants.TexConstant.VARIANT.NORMAL throw?
//     };
//     for (let char of argument) {
//         if (char.toLowerCase() === char) {
//             def.mathsize = '0.8em';
//         } else def.mathsize = '1em';
//         parser.Push(parser.create('token', 'mi', def, char.toUpperCase()));
//     }
// };

// Methods.bevelledFraction = function (parser: TexParser, name: string) {
//     const num = parser.ParseArg(name);
//     const den = parser.ParseArg(name);
//     const frac = parser.create('node', 'mfrac', [num, den], {
//         bevelled: true,
//     });
//     parser.Push(frac);
// };


// EXAMPLE: Importing MathJax methods
// Methods.Macro = BaseMethods.Macro;
// Methods.Accent = BaseMethods.Accent;
// Methods.SetFont = BaseMethods.SetFont;

new CommandMap(
    'unicode-math-macros',
    {
        // EXAMPLE: macros from mathjax-ams-macros
        // pmod: [
        //     'Macro',
        //     '\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}(\\operatorname{mod}\\mkern6mu #1)',
        //     1,
        // ],
        // bigsqcap: ['Macro', '\\mmlToken{mo}{\u2a05}'],
        // lefteqn: ['Macro', '\\rlap{\\displaystyle{#1}}', 1],
        // mathds: ['Macro', '\\mathbb{#1}', 1],
        // adots: ['Macro', '⋰'],
        // overarc: ['Accent', '2312', 1],
        // accentset: 'accentset',
        // intbar: ['Macro', '\\mmlToken{mo}{\u2a0d}'],
        // bfit: ['SetFont', TexConstant.Variant.BOLDITALIC],
        // mathbfit: ['Macro', '{\\bfit #1}', 1],
        // mathsc: 'smallcaps',
        // mathbfcal: ['Macro', '\\boldsymbol{\\mathcal{#1}}', 1],
        // sfrac: 'bevelledFraction', // NOTE does not support optional arguments from xfrac package
    },
    Methods
);

new DelimiterMap('unicode-math-delimiters', ParseMethods.delimiter, {
    // EXAMPLE: delimiters from mathjax-ams-macros
    // '\\Vvert': '\u2980',
    // '\\llbracket': '\u27E6',
    // '\\rrbracket': '\u27E7',
});

new EnvironmentMap(
    'unicode-math-environments',
    ParseMethods.environment,
    {
        // EXAMPLE: environments from mathjax-ams-macros
        // dcases: ['Array', null, '\\{', '.', 'll', null, '.2em', 'D'],
        // bsmallmatrix: ['Array', null, '[', ']', 'c', '0.333em', '.2em', 'S', 1],
    },
    {
        Array: BaseMethods.Array,
    }
);

export const configuration = Configuration.create('ams-macros', {
    handler: {
        delimiter: ['unicode-math-delimiters'],
        macro: ['unicode-math-macros', 'unicode-math-delimiters'],
        environment: ['unicode-math-environments'],
    },
});

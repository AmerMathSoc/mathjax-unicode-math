/*!
 *  Copyright (c) 2021 American Mathematical Society
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

import { Configuration } from 'mathjax-full/js/input/tex/Configuration.js';
import { CommandMap, CharacterMap, DelimiterMap } from 'mathjax-full/js/input/tex/SymbolMap.js';
import { ParseMethod } from 'mathjax-full/js/input/tex/Types.js';
import ParseMethods from 'mathjax-full/js/input/tex/ParseMethods.js';
import BaseMethods from 'mathjax-full/js/input/tex/base/BaseMethods.js';

import { TEXCLASS } from 'mathjax-full/js/core/MmlTree/MmlNode.js';

let unicodeMathMethods: Record<string, ParseMethod> = {};

unicodeMathMethods.Macro = BaseMethods.Macro;
unicodeMathMethods.Accent = BaseMethods.Accent;
unicodeMathMethods.UnderOver = BaseMethods.UnderOver;
unicodeMathMethods.Not = BaseMethods.Not;

export const configuration = Configuration.create('unicode-math', {
    handler: {
        delimiter: ['unicode-math-delimiters'],
        macro: ['unicode-math-macros', 'unicode-math-delimiters', 'unicode-math-mathchar0mi', 'unicode-math-mathchar0mo']
    },
});

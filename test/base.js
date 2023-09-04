import * as fs from 'node:fs';
import { mj } from './mj.js'

const theBigString = fs.readFileSync( './test/unicode-math.html').toString();

fs.writeFileSync( './test/unicode-math-output.html', await mj(theBigString));

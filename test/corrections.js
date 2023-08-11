import * as fs from 'node:fs';
import { mj } from './mj.js'

const theSmallString = fs.readFileSync('./test/corrections.html').toString();

fs.writeFileSync('./test/corrections-output.html', await mj(theSmallString));

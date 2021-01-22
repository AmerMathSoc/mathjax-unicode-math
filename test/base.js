const mj = require('./mj');

const theBigString =
  '<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title></head><body>' +
  '$$\\mathsemicolon$$' +
  '$$ \\eqqslantless$$' +
  '$$\\overbracket x$$' +
  '</body></html>';

console.log(mj(theBigString, true));

const fs =  require('fs');
const mj = require('./mj');

const theBigString = fs.readFileSync(__dirname +'/unicode-math.html').toString();

fs.writeFileSync(__dirname+'/unicode-math-output.html', mj(theBigString));

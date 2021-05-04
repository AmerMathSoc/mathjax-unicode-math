const fs =  require('fs');
const mj = require('./mj');

const theSmallString = fs.readFileSync(__dirname +'/corrections.html').toString();

fs.writeFileSync(__dirname+'/corrections-output.html', mj(theSmallString));

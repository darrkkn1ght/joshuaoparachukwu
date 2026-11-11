const fs = require('fs');
const lines = fs.readFileSync('preview/index.html', 'utf8').split('\n');
console.log(lines.slice(1370, 1440).join('\n'));

const fs = require('fs');
const about = fs.readFileSync('preview/about.html', 'utf8');
const idx = about.indexOf('Ready to work together?');
console.log('ABOUT:');
console.log(about.slice(idx - 100, idx + 200));

const index = fs.readFileSync('preview/index.html', 'utf8');
const idx2 = index.indexOf('Ready to work together?');
console.log('\nINDEX:');
console.log(index.slice(idx2 - 100, idx2 + 200));


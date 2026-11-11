const fs = require('fs');
const html = fs.readFileSync('preview/index.html', 'utf8');

const idx = html.indexOf('resDots');
console.log(html.slice(idx + 700, idx + 1300));

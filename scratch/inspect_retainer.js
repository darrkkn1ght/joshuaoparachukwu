const fs = require('fs');
const html = fs.readFileSync('preview/performance-retainer.html', 'utf8');

const fIdx = html.indexOf('<footer');
const endIdx = html.indexOf('</footer>') + 9;
console.log('RETAINER FOOTER:');
console.log(html.slice(fIdx, endIdx));

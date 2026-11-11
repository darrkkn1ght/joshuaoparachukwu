const fs = require('fs');
const html = fs.readFileSync('preview/case-studies.html', 'utf8');
const lines = html.split('\n');
console.log(lines.slice(70, 95).join('\n'));

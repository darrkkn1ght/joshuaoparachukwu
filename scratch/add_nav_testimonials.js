const fs = require('fs');

const indexHtml = fs.readFileSync('preview/index.html', 'utf8');
const nStart = indexHtml.indexOf('<nav');
const nEnd = indexHtml.indexOf('</nav>') + 6;
let nav = indexHtml.slice(nStart, nEnd);

// In testimonials.html, mark Testimonials as active
nav = nav.replace('href="#written-testimonials"', 'href="testimonials.html" class="active"');

let testHtml = fs.readFileSync('preview/testimonials.html', 'utf8');
testHtml = testHtml.replace('<body>', '<body>\n  ' + nav);
fs.writeFileSync('preview/testimonials.html', testHtml);
console.log('Added canonical nav to preview/testimonials.html!');


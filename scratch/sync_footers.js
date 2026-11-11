const fs = require('fs');

const indexHtml = fs.readFileSync('preview/index.html', 'utf8');
const start = indexHtml.indexOf('<footer>');
const end = indexHtml.indexOf('</footer>') + 9;
const standardFooter = indexHtml.slice(start, end);

const previewFiles = [
  'preview/performance-retainer.html',
  'preview/about.html',
  'preview/services.html',
  'preview/case-studies.html',
  'preview/research.html',
  'preview/privacy-policy.html',
  'preview/terms.html'
];

previewFiles.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');
  const fStart = content.indexOf('<footer');
  const fEnd = content.indexOf('</footer>');
  if (fStart !== -1 && fEnd !== -1) {
    const oldFooter = content.slice(fStart, fEnd + 9);
    content = content.replace(oldFooter, standardFooter);
    fs.writeFileSync(file, content);
    console.log(`Synced footer for ${file}`);
  } else {
    console.log(`No footer tag in ${file}`);
  }
});


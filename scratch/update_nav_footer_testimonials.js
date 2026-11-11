const fs = require('fs');

const previewFiles = [
  'preview/index.html',
  'preview/testimonials.html',
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

  // Update footer link
  content = content.replace(
    /<div class="footer-nav">\s*<a href="[^"]*">(?:Testimonials|Results)<\/a>/i,
    `<div class="footer-nav">\n        <a href="testimonials.html">Testimonials</a>`
  );

  // For non-index files, update nav to point to testimonials.html
  if (file !== 'preview/index.html') {
    content = content.replace(
      /<a href="index\.html#written-testimonials"( class="[^"]*")?>Testimonials<\/a>/g,
      `<a href="testimonials.html"$1>Testimonials</a>`
    );
  }

  fs.writeFileSync(file, content);
  console.log(`Updated footer/nav in ${file}`);
});


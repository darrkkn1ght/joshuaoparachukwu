const fs = require('fs');

const files = fs.readdirSync('preview').filter(f => f.endsWith('.html'));

files.forEach(f => {
  const path = 'preview/' + f;
  const content = fs.readFileSync(path, 'utf8');
  const matches = content.match(/<a[^>]*>(?:Testimonials|Results)<\/a>/gi) || [];
  console.log(f, matches);
});


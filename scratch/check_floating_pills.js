const fs = require('fs');

const files = fs.readdirSync('preview').filter(f => f.endsWith('.html'));

files.forEach(f => {
  const path = 'preview/' + f;
  const content = fs.readFileSync(path, 'utf8');
  const matches = content.match(/See What People Say[^\n<]*/gi) || [];
  if (matches.length > 0) {
    console.log(f, matches);
  }
});


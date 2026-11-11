const fs = require('fs');
const html = fs.readFileSync('preview/performance-retainer.html', 'utf8');

function findEnd(title) {
  const idx = html.indexOf(title);
  if (idx === -1) {
    console.log(`Title "${title}" not found`);
    return;
  }
  console.log(`=== "${title}" from index ${idx} ===`);
  console.log(html.slice(idx, idx + 400).replace(/\r?\n/g, ' '));
  // find next section or container
  const nextSec = html.indexOf('<!-- ═══', idx + 50);
  console.log(`Next section marker at ${nextSec}:`);
  console.log(html.slice(nextSec - 200, nextSec + 100).replace(/\r?\n/g, ' '));
}

findEnd('What You Get');
findEnd('Who This Is For');
findEnd('HOW ENROLMENT WORKS');


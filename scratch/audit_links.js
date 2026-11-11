const fs = require('fs');
const path = require('path');

let totalLinks = 0;
let brokenLinks = 0;

function checkFile(file) {
  const content = fs.readFileSync(file, 'utf8');
  const dir = path.dirname(file);
  const regex = /href="([^"#:]+)(#[^"]*)?"/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    totalLinks++;
    let targetFile = match[1].split('?')[0]; // Strip query
    if (targetFile.startsWith('mailto:') || targetFile.startsWith('tel:') || targetFile.startsWith('javascript:')) continue;
    if (targetFile.includes('${') || targetFile.includes('\' +')) continue; // Template strings in inline scripts
    
    // Resolve relative path
    let targetPath;
    if (targetFile.startsWith('/')) {
      targetPath = path.join(process.cwd(), targetFile);
    } else {
      targetPath = path.join(dir, targetFile);
    }

    if (!fs.existsSync(targetPath)) {
      brokenLinks++;
      console.log(`BROKEN LINK in ${file}: ${match[0]} -> ${targetPath}`);
    }
  }
}

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
    } else if (entry.name.endsWith('.html')) {
      checkFile(full);
    }
  }
}

walk('preview');
console.log(`Audit complete: ${totalLinks} links checked, ${brokenLinks} broken.`);

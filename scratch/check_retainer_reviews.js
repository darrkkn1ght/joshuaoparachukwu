const fs = require('fs');

const content = fs.readFileSync('preview/performance-retainer.html', 'utf8');

const matches = content.match(/<[^>]*>[\s\S]*?REVIEWS[\s\S]*?<\/[^>]*>/gi) || [];
console.log('Matches with REVIEWS:');
matches.forEach(m => console.log(m.slice(0, 200)));

const evMatches = content.match(/Evidence &amp; Social Proof/gi) || [];
console.log('Evidence & Social Proof count:', evMatches.length);


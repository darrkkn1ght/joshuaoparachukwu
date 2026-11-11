const fs = require('fs');
const { execSync } = require('child_process');

const oldPreview = execSync('git show 7e0421d~1:preview/index.html', { encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 });
const mainIndex = fs.readFileSync('index.html', 'utf8');

const reviews = [];
const seenNames = new Set();

// 1. Old preview 24 cohort reviews
const cohortRegex = /<div class="vf-review-group-panel[^"]*" id="vf-review-group-(\d+)">([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/g;
const cohortNames = [
  'Football & Team Sports',
  'Athletics & Track',
  'International Football',
  'Tennis & Court Sports',
  'High Performance & Parents',
  'Aquatics & Global Competition'
];

// Let's parse cards in old preview:
const oldCardRegex = /<div class="vf-review-card">[\s\S]*?<div class="vf-card-body">\s*<p>([\s\S]*?)<\/p>\s*<\/div>\s*<div class="vf-card-author">\s*<div class="vf-author-info">\s*<div class="vf-author-name">([\s\S]*?)<\/div>/g;
let m;
let count = 0;
while ((m = oldCardRegex.exec(oldPreview)) !== null) {
  const text = m[1].trim();
  const name = m[2].trim();
  const groupIdx = Math.floor(count / 4);
  const category = cohortNames[groupIdx] || 'Performance';
  if (!seenNames.has(name.toLowerCase())) {
    seenNames.add(name.toLowerCase());
    reviews.push({ name, text, category });
  }
  count++;
}

// 2. Index.html #reviews (13 reviews)
const idxReviewsSplit = mainIndex.split('class="review-block-card"');
idxReviewsSplit.slice(1).forEach(c => {
  const pMatch = c.match(/<p[^>]*>([\s\S]*?)<\/p>/i);
  const nameMatch = c.match(/<div style="font-family:var\(--font-display\);font-size:16px;font-weight:700;color:var\(--navy,#0B2545\);line-height:1\.2;">([\s\S]*?)<\/div>/i);
  if (pMatch && nameMatch) {
    const text = pMatch[1].replace(/<[^>]+>/g, '').trim().replace(/^"|"$/g, '');
    const name = nameMatch[1].replace(/<[^>]+>/g, '').trim();
    if (!seenNames.has(name.toLowerCase())) {
      seenNames.add(name.toLowerCase());
      reviews.push({ name, text, category: 'Executive & Sport Performance' });
    }
  }
});

// 3. Carlos Rivera and Laila Hassan from more-testimonials
const extraRegex = /<p style="font-size:14\.5px;line-height:1\.7;color:var\(--ink2,#334155\);font-style:italic;margin-bottom:16px;">\s*"([\s\S]*?)"\s*<\/p>[\s\S]*?<div style="font-family:var\(--font-display\);font-size:16px;font-weight:700;color:var\(--navy,#00102A\);">([\s\S]*?)<\/div>/g;
while ((m = extraRegex.exec(oldPreview)) !== null) {
  const text = m[1].trim();
  const name = m[2].trim();
  if (!seenNames.has(name.toLowerCase())) {
    seenNames.add(name.toLowerCase());
    reviews.push({ name, text, category: 'International Performance' });
  }
}

console.log('Total unique verified reviews gathered:', reviews.length);
fs.writeFileSync('scratch/all_compiled_reviews.json', JSON.stringify(reviews, null, 2));
console.log('Written to scratch/all_compiled_reviews.json');


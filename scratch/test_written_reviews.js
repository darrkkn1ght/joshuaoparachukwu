const fs = require('fs');

const allReviews = JSON.parse(fs.readFileSync('scratch/all_compiled_reviews.json', 'utf8'));

// Filter out anyone who is already in the photo slider
const sliderNames = [
  'belief anozie',
  'oyejide temiloluwa',
  'olusola kayode',
  'olowoyo martins eniola',
  'oluwoye martins eniola',
  'joshua ademola jomiloju',
  'ayodele adebayo',
  'ilori johnson oluwadamilare',
  'khazim korede',
  'adedeji abdulroqeeb'
];

const filteredReviews = allReviews.filter(r => !sliderNames.includes(r.name.toLowerCase().trim()));
console.log('Filtered written reviews count:', filteredReviews.length);

filteredReviews.forEach((r, i) => {
  console.log(`${i+1}. ${r.name} - ${r.category}`);
});


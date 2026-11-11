const fs = require('fs');

const allReviews = JSON.parse(fs.readFileSync('scratch/all_compiled_reviews.json', 'utf8'));

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

// Map categories to simple keys
function getCatKey(cat) {
  const c = cat.toLowerCase();
  if (c.includes('football')) return 'football';
  if (c.includes('athletics') || c.includes('track')) return 'athletics';
  if (c.includes('tennis') || c.includes('court') || c.includes('aquatics')) return 'court';
  return 'executive';
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const cardsHtml = filteredReviews.map((r, i) => {
  const catKey = getCatKey(r.category);
  const hiddenStyle = i >= 9 ? 'display:none;' : '';
  return `
          <!-- Review ${i+1}: ${escapeHtml(r.name)} -->
          <div class="written-review-card" data-cat="${catKey}" data-index="${i}" style="background:#FFFFFF;border:1px solid #E8E5DF;border-radius:14px;padding:26px 24px;display:flex;flex-direction:column;justify-content:space-between;box-shadow:0 3px 12px rgba(0,0,0,0.03);transition:transform 0.25s ease, box-shadow 0.25s ease;${hiddenStyle}">
            <div>
              <div style="font-family:var(--font-display,Georgia,serif);font-size:38px;color:var(--gold,#C8A830);line-height:1;margin-bottom:8px;font-style:normal;">“</div>
              <p style="font-size:14.5px;line-height:1.72;color:var(--ink2,#2D3748);margin:0 0 20px;font-style:italic;">
                ${escapeHtml(r.text)}
              </p>
            </div>
            <div style="padding-top:14px;border-top:1px solid #ECE8E0;">
              <div style="font-family:var(--font-display,Georgia,serif);font-size:16px;font-weight:700;color:var(--navy,#00102A);line-height:1.2;">
                ${escapeHtml(r.name)}
              </div>
            </div>
          </div>`;
}).join('\r\n');

const sectionHtml = `
    <!-- ═══ SECTION: MORE WRITTEN TESTIMONIALS (CLEAN AUTHENTIC REVIEWS - JUST NAME & REVIEW) ═══ -->
    <section id="written-testimonials" style="background:#F9F8F5;padding:76px 32px;border-bottom:1px solid var(--border,#E4E0D8);">
      <div id="more-testimonials" style="position:relative;top:-90px;visibility:hidden;"></div>
      <div style="max-width:1200px;margin:0 auto;">
        <div style="text-align:center;margin-bottom:36px;">
          <span class="section-label" style="display:inline-block;color:var(--gold,#C8A830);font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:8px;">Client Feedback</span>
          <div class="section-rule" style="width:48px;height:2px;background:var(--gold,#C8A830);margin:0 auto 16px;"></div>
          <h2 style="font-family:var(--font-display,Georgia,serif);font-size:36px;font-weight:700;color:var(--navy,#00102A);margin:0 0 10px;line-height:1.25;">
            More Testimonials &amp; Written Reflections
          </h2>
          <p style="font-size:15px;color:var(--ink2,#4A5568);max-width:680px;margin:0 auto;line-height:1.65;">
            Authentic reflections from athletes, coaches, and sports executives across competitive football, athletics, court sports, and high-pressure environments.
          </p>
        </div>

        <!-- Category Filter Tabs -->
        <div class="written-reviews-filter" style="display:flex;justify-content:center;gap:10px;flex-wrap:wrap;margin-bottom:32px;">
          <button type="button" class="written-filter-pill active" data-cat="all" onclick="filterWrittenReviews('all')">All Reviews (${filteredReviews.length})</button>
          <button type="button" class="written-filter-pill" data-cat="football" onclick="filterWrittenReviews('football')">Football &amp; Pitch Sports</button>
          <button type="button" class="written-filter-pill" data-cat="athletics" onclick="filterWrittenReviews('athletics')">Athletics &amp; Track</button>
          <button type="button" class="written-filter-pill" data-cat="court" onclick="filterWrittenReviews('court')">Tennis, Court &amp; Aquatics</button>
          <button type="button" class="written-filter-pill" data-cat="executive" onclick="filterWrittenReviews('executive')">Executive &amp; Sport Leadership</button>
        </div>

        <!-- Review Cards Grid -->
        <div id="writtenReviewsGrid" style="display:grid;grid-template-columns:repeat(auto-fill, minmax(320px, 1fr));gap:24px;">
${cardsHtml}
        </div>

        <!-- Expand / Collapse All Button -->
        <div style="text-align:center;margin-top:36px;">
          <button id="toggleMoreReviewsBtn" type="button" onclick="toggleAllWrittenReviews()" style="display:inline-flex;align-items:center;gap:8px;padding:12px 30px;background:#FFFFFF;border:1.5px solid var(--navy,#00102A);color:var(--navy,#00102A);border-radius:999px;font-size:14.5px;font-weight:600;cursor:pointer;transition:all 0.25s ease;box-shadow:0 2px 8px rgba(0,0,0,0.04);">
            <span id="toggleReviewsText">Show All ${filteredReviews.length} Client Reviews (+${filteredReviews.length - 9} More)</span>
            <svg id="toggleReviewsIcon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="transition:transform 0.3s ease;"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
        </div>
      </div>
    </section>

    <script>
      let isAllReviewsExpanded = false;
      let activeReviewsFilter = 'all';

      function filterWrittenReviews(cat) {
        activeReviewsFilter = cat;
        document.querySelectorAll('.written-filter-pill').forEach(btn => {
          btn.classList.toggle('active', btn.getAttribute('data-cat') === cat);
        });

        const cards = document.querySelectorAll('#writtenReviewsGrid .written-review-card');
        let visibleCount = 0;
        cards.forEach((card, idx) => {
          const cardCat = card.getAttribute('data-cat');
          const matches = (cat === 'all' || cardCat === cat);
          if (!matches) {
            card.style.display = 'none';
          } else {
            if (isAllReviewsExpanded || cat !== 'all') {
              card.style.display = 'flex';
              visibleCount++;
            } else {
              if (idx < 9) {
                card.style.display = 'flex';
                visibleCount++;
              } else {
                card.style.display = 'none';
              }
            }
          }
        });

        const toggleBtn = document.getElementById('toggleMoreReviewsBtn');
        if (toggleBtn) {
          toggleBtn.style.display = (cat === 'all') ? 'inline-flex' : 'none';
        }
      }

      function toggleAllWrittenReviews() {
        isAllReviewsExpanded = !isAllReviewsExpanded;
        const text = document.getElementById('toggleReviewsText');
        const icon = document.getElementById('toggleReviewsIcon');
        const cards = document.querySelectorAll('#writtenReviewsGrid .written-review-card');

        if (isAllReviewsExpanded) {
          cards.forEach(card => card.style.display = 'flex');
          if (text) text.textContent = 'Show Fewer Testimonials';
          if (icon) icon.style.transform = 'rotate(180deg)';
        } else {
          cards.forEach((card, idx) => {
            card.style.display = idx < 9 ? 'flex' : 'none';
          });
          if (text) text.textContent = 'Show All ${filteredReviews.length} Client Reviews (+${filteredReviews.length - 9} More)';
          if (icon) icon.style.transform = 'rotate(0deg)';
          const sec = document.getElementById('written-testimonials');
          if (sec) sec.scrollIntoView({ behavior: 'smooth' });
        }
      }
    </script>
`;

let html = fs.readFileSync('preview/index.html', 'utf8');

// Insert sectionHtml before SECTION 03: VIDEO TESTIMONIALS
const videoRegex = /(<!-- ═══ SECTION 03: VIDEO TESTIMONIALS)/i;
if (videoRegex.test(html)) {
  html = html.replace(videoRegex, sectionHtml + '\r\n\r\n    $1');
  console.log('Successfully inserted written-testimonials section right after testimonials slider and before video-testimonials!');
} else {
  console.error('videoRegex NOT found');
}

fs.writeFileSync('preview/index.html', html);
console.log('Preview index.html updated successfully!');

/* ═══════════════════════════════════════════════════════════════
 GOOGLE SHEETS CONFIG
 1. Create a Google Sheet
 2. Go to Extensions → Apps Script → paste the Apps Script below
 3. Deploy as Web App → copy the URL
 4. Paste that URL as the value of GOOGLE_SHEET_URL below
 ═══════════════════════════════════════════════════════════════
 
 APPS SCRIPT TO PASTE IN GOOGLE SHEETS:
 ───────────────────────────────────────
 function doPost(e) {
 var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 var data = JSON.parse(e.postData.contents);
 sheet.appendRow([
 new Date(),
 data.form || '',
 data.name || '',
 data.email || '',
 data.phone || '',
 data.country || '',
 data.timezone || '',
 data.org || '',
 data.role || '',
 data.challenge || '',
 data.extra || ''
 ]);
 return ContentService.createTextOutput(JSON.stringify({status:'ok'}))
 .setMimeType(ContentService.MimeType.JSON);
 }
 ─────────────────────────────────────── */

const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbwsStYis7kBxhw_gZ-lYXfpj3Htvja8UIruZ6BeKlIM9DG3SDacOYLcPzAfIK95m6enSA/exec";

function sendToSheets(data) {
 if (!GOOGLE_SHEET_URL || GOOGLE_SHEET_URL === "PASTE_YOUR_APPS_SCRIPT_URL_HERE") return;
 fetch(GOOGLE_SHEET_URL, {
 method: "POST",
 headers: { "Content-Type": "application/json" },
 body: JSON.stringify(data),
 mode: "no-cors"
 }).catch(function() {});
}

function getVal(id) {
 var el = document.getElementById(id);
 return el ? el.value || '' : '';
}
/* ═══════════════════════════════════════════════════════
 MEDIA CONFIG Update all your links & media here only
 ═══════════════════════════════════════════════════════ */
const MEDIA = {

 /* ── HERO ─────────────────────────────────────────────
 Replace with a real photo of Dr. Joshua */
 heroThumb: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1200&q=80",

 /* ── YOUTUBE VIDEOS ───────────────────────────────────
 Add real YouTube URLs and thumbnail images */
 youtube: [
 {
 title: "The Reset Protocol: How Elite Players Bounce Back Fast",
 url: "#", // e.g. https://youtu.be/XXXXXXXXXX
 thumb: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80"
 },
 {
 title: "Why Your Mind is the Last Frontier in Sport Performance",
 url: "#",
 thumb: "https://images.unsplash.com/photo-1576858574144-9ae1ebcf5ae5?w=400&q=80"
 },
 {
 title: "Confidence Is Not a Feeling It Is a Decision",
 url: "#",
 thumb: "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=400&q=80"
 },
 {
 title: "What Happens in the Brain 3 Seconds After a Mistake",
 url: "#",
 thumb: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=400&q=80"
 },
 ],

 /* ── SOCIAL LINKS ─────────────────────────────────────*/
 social: {
 youtube: "https://www.youtube.com/@dr.joshuaoparachukwu",
 instagram: "https://www.instagram.com/thedrjoshuaoparachukwu",
 tiktok: "https://www.tiktok.com/@thedrjoshuaoparachukwu",
 facebook: "https://www.facebook.com/people/Dr-Joshua-Oparachukwu/61564682447955/",
 twitter: "https://x.com/thedrjoshuaOp",
 },

 /* ── BOOKING / CALENDLY LINKS ─────────────────────────
 Replace with real Calendly or booking page URLs */
 booking: {
 discovery: "https://selar.com/15minuteindividualperformanceconsultation", // Form A - Individual
 individual: "https://selar.com/30minuteteamorganisationperformanceconsultation", // Form B - Team & Org
 executive: "https://selar.com/30minuteexecutivehigh-pressureperformanceconsulting", // Form C - Executive
 },

 /* ── PARTNER / ORG LINKS ──────────────────────────────*/
 partners: {
 mindgame: "#", // e.g. https://mindgameafrica.com
 sportlead: "#", // e.g. https://sportleadafrica.com
 },

};
/* ══════════════════════════════════════════════════════ */

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
 entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* ── PUB ABSTRACT TOGGLE ── */
function openAbstract(id) {
 const el = document.getElementById(id);
 if (!el) return;
 const isOpen = el.style.display !== 'none';
 el.style.display = isOpen ? 'none' : 'block';
 // Update button text
 const btn = el.previousElementSibling ? el.previousElementSibling.querySelector('button') : null;
}
/* Publication download links keyed by title */
const PUB_DOWNLOAD_LINKS = {
 "Effect of taekwondo mental toughness skill training on assertive behaviour among University of Ibadan football players": "https://drive.google.com/file/d/1hXP4n8q04uRSZSKbDSwjz9izhdqf7oa0/view?usp=drive_link",
 "The effect of martial arts training on the performance of football skills among football players in University of Ibadan": "https://drive.google.com/file/d/1T_3QbMf4sZtbNJW-qLVCdqjjvD5EpgMt/view?usp=drive_link",
};

function openManuscriptModal(title) {
 document.getElementById('ms-modal-title').textContent = title;
 // Store download url on modal for submit to use
 const url = PUB_DOWNLOAD_LINKS[title] || null;
 document.getElementById('manuscript-modal').setAttribute('data-url', url || '');
 document.getElementById('manuscript-modal').style.display = 'flex';
 document.body.style.overflow = 'hidden';
}


/* ── CASE STUDY ACCORDION ── */
function toggleAccordion(btn) {
 const body = btn.nextElementSibling;
 const isOpen = body.classList.contains('open');
 body.classList.toggle('open', !isOpen);
 btn.classList.toggle('open', !isOpen);
}


/* ── CASE STUDY 01 FULL PAGE ── */




/* ── CASE STUDY 01 PAGE ── */
function openCaseStudy01() {
 document.getElementById('main-page').style.display = 'none';
 document.getElementById('cs01-page').style.display = 'block';
 window.scrollTo({ top: 0, behavior: 'instant' });
}
function closeCaseStudy01() {
 document.getElementById('cs01-page').style.display = 'none';
 document.getElementById('main-page').style.display = 'block';
 // Scroll back to case studies section
 setTimeout(function() {
 const el = document.getElementById('case-studies');
 if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
 }, 50);
}


/* ═══ BOOKING FLOW JS ═══ */
const bkPages = ['booking-selector','booking-form-A','booking-form-B','booking-form-C','booking-form-D','booking-confirm'];

function showBkPage(id) {
 bkPages.forEach(p => document.getElementById(p).style.display = 'none');
 document.getElementById(id).style.display = 'block';
 window.scrollTo({ top: 0, behavior: 'instant' });
}

function openBooking(service) {
 if (service) {
 goToForm(service);
 } else {
 showBkPage('booking-selector');
 }
}

function goToSelector() {
 showBkPage('booking-selector');
}

function goToForm(service) {
 showBkPage('booking-form-' + service);
}

function closeBooking() {
 bkPages.forEach(p => document.getElementById(p).style.display = 'none');
}

function submitFormA(e) {
 e.preventDefault();
 if (!validateForm(e.target)) return;
 sendToSheets({
 form: '1-on-1 Individual Consultation',
 name: getVal('fA-fname') + ' ' + getVal('fA-lname'),
 email: getVal('fA-email'),
 phone: getVal('fA-phone'),
 country: getVal('fA-country'),
 timezone: getVal('fA-timezone'),
 role: getVal('fA-role'),
 challenge: getVal('fA-challenge')
 });
 document.getElementById('confirm-title').textContent = 'Request Received';
 document.getElementById('confirm-msg').textContent = 'Thank you. You will now be redirected to book your 15-minute consultation slot and complete the $30 payment. Please check your email for confirmation.';
 showBkPage('booking-confirm');
 setTimeout(function() { window.open('https://selar.com/15minuteindividualperformanceconsultation', '_blank'); }, 800);
}

function submitFormB(e) {
 e.preventDefault();
 if (!validateForm(e.target)) return;
 sendToSheets({
  form: 'Team & Organization Consultation',
  name: getVal('fB-fname') + ' ' + getVal('fB-lname'),
  email: getVal('fB-email'),
  phone: getVal('fB-phone'),
  country: getVal('fB-country'),
  timezone: getVal('fB-timezone'),
  org: getVal('fB-org'),
  role: getVal('fB-role'),
  challenge: getVal('fB-challenge-type'),
  extra: 'Team size: ' + getVal('fB-size') + ' | Tried: ' + getVal('fB-tried') + ' | Outcome: ' + getVal('fB-outcome') + ' | Seeking: ' + getVal('fB-seeking') + ' | Source: ' + getVal('fB-source') + ' | Extra: ' + getVal('fB-extra')
 });
 document.getElementById('confirm-title').textContent = 'Request Received';
 document.getElementById('confirm-msg').textContent = 'Thank you. You will now be redirected to complete the $75 payment and book your 30-minute team consultation slot.';
 showBkPage('booking-confirm');
 setTimeout(function() { window.open('https://selar.com/30minuteteamorganisationperformanceconsultation', '_blank'); }, 800);
}

function submitFormC(e) {
 e.preventDefault();
 if (!validateForm(e.target)) return;
 sendToSheets({
 form: 'Executive / High-Pressure Consulting',
 name: getVal('fC-fname') + ' ' + getVal('fC-lname'),
 email: getVal('fC-email'),
 phone: getVal('fC-phone'),
 country: getVal('fC-country'),
 timezone: getVal('fC-timezone'),
 org: getVal('fC-org'),
 role: getVal('fC-role'),
 challenge: getVal('fC-challenge')
 });
 document.getElementById('confirm-title').textContent = 'Request Received';
 document.getElementById('confirm-msg').textContent = 'Thank you. You will now be redirected to book your 30-minute executive consultation slot and complete the $100 payment. Please check your email for confirmation.';
 showBkPage('booking-confirm');
 setTimeout(function() { window.open('https://selar.com/30minuteexecutivehigh-pressureperformanceconsulting', '_blank'); }, 800);
}

function submitFormD(e) {
 e.preventDefault();
 if (!validateForm(e.target)) return;
 sendToSheets({
 form: 'Sport Governance & Strategic Advisory',
 name: getVal('fD-fname') + ' ' + getVal('fD-lname'),
 email: getVal('fD-email'),
 phone: getVal('fD-phone'),
 country: getVal('fD-country'),
 timezone: getVal('fD-timezone'),
 org: getVal('fD-org'),
 role: getVal('fD-role')
 });
 document.getElementById('confirm-title').textContent = 'Advisory Request Received';
 document.getElementById('confirm-msg').textContent = "Thank you. Advisory requests are reviewed before a discovery call is scheduled. We'll be in touch shortly.";
 showBkPage('booking-confirm');
}

// Book a Consultation buttons now scroll directly to the services section


/* ── CASE STUDY 02 ── */




/* ── CASE STUDY 03 ── */




/* ══ CASE STUDY PAGE ROUTER ══ */
var allCasePageIds = ['cs-page-01','cs-page-02','cs-page-03'];

function openCasePage(num) {
  // Hide main page content
  var mainPage = document.getElementById('main-page');
  if(mainPage) mainPage.style.display = 'none';
  // Hide booking pages
  var bkIds = ['booking-selector','booking-form-A','booking-form-B','booking-form-C','booking-form-D','booking-confirm'];
  bkIds.forEach(function(id){ var el=document.getElementById(id); if(el) el.style.display='none'; });
  // Hide other case pages
  allCasePageIds.forEach(function(id){ var el=document.getElementById(id); if(el) el.style.display='none'; });
  // Show requested case page
  var page = document.getElementById('cs-page-' + num);
  if(page) { page.style.display = 'block'; window.scrollTo({top:0,behavior:'instant'}); }
  // Update URL hash
  window.history.pushState(null, '', '#case-' + num);
}

function closeCasePage(num) {
 var page = document.getElementById('cs-page-' + num);
 if(page) page.style.display = 'none';
 document.getElementById('main-page').style.display = 'block';
 window.history.pushState(null, '', '#case-studies');
 setTimeout(function() {
 var el = document.getElementById('case-studies');
 if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
 }, 50);
}

// Handle browser back button
window.addEventListener('popstate', function() {
 var hash = window.location.hash;
 if(hash.startsWith('#case-') && hash !== '#case-studies') {
 var num = hash.replace('#case-', '');
 if(['01','02','03'].indexOf(num) > -1) {
 openCasePage(num);
 return;
 }
 }
 // Default: show main page
 allCasePageIds.forEach(function(id){ var el=document.getElementById(id); if(el) el.style.display='none'; });
 document.getElementById('main-page').style.display = 'block';
});


/* ── RESULTS SLIDER ── */
(function(){
 var track = document.getElementById('resultsTrack');
 if(!track) return;
 var dots = document.querySelectorAll('.res-dot');
 var cur = 0, total = 3;

 function goTo(n){
   cur = (n + total) % total;
   track.style.transform = 'translateX(-' + (cur * 100) + '%)';
   dots.forEach(function(d,i){ d.classList.toggle('active', i===cur); });
 }

 var prev = document.getElementById('resPrev');
 var next = document.getElementById('resNext');
 if(prev) prev.addEventListener('click', function(){ goTo(cur-1); });
 if(next) next.addEventListener('click', function(){ goTo(cur+1); });
 dots.forEach(function(d,i){ d.addEventListener('click', function(){ goTo(i); }); });
})();;


/* ── NAV DROPDOWN HELPERS ── */
function scrollToAndHighlight(sectionId) {
 const el = document.getElementById(sectionId);
 if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function toggleNavSubdrop(trigger) {
 const subdrop = document.getElementById('nav-cs-subdrop');
 const isOpen = subdrop.classList.contains('open');
 subdrop.classList.toggle('open', !isOpen);
 trigger.classList.toggle('open', !isOpen);
}

function scrollToAndOpen(categoryTitle) {
 const el = document.getElementById('case-studies');
 if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
 // Open the matching accordion category
 setTimeout(function() {
 const headers = document.querySelectorAll('.cs-acc-header');
 headers.forEach(function(header) {
 const titleEl = header.querySelector('.cs-acc-title');
 if (titleEl && titleEl.textContent.trim() === categoryTitle) {
 const body = header.nextElementSibling;
 if (body && !body.classList.contains('open')) {
 body.classList.add('open');
 header.classList.add('open');
 }
 }
 });
 }, 600);
}


/* ── ABOUT FULL PAGE ── */
function openAboutPage() {
 document.getElementById('about-full-page').style.display = 'block';
 window.scrollTo({ top: 0, behavior: 'instant' });
 document.body.style.overflow = 'hidden';
 document.getElementById('about-full-page').scrollTop = 0;
}
function closeAboutPage() {
 document.getElementById('about-full-page').style.display = 'none';
 document.body.style.overflow = '';
}


/* ── SMOOTH NAV SCROLL ── */
function smoothNav(sectionId, e) {
 if (e) e.preventDefault();
 var el = document.getElementById(sectionId);
 if (el) {
 el.scrollIntoView({ behavior: 'smooth', block: 'start' });
 }
}


function openCS01() {
 document.getElementById('cs01-page').style.display = 'block';
 document.body.style.overflow = 'hidden';
 window.scrollTo(0, 0);
}
function closeCS01() {
 document.getElementById('cs01-page').style.display = 'none';
 document.body.style.overflow = '';
}


/* ── MEDIA INIT Reads from MEDIA config above ── */
function initMedia() {
 // Hero thumbnail
 const heroImg = document.getElementById('hero-thumb-img');
 if (heroImg) heroImg.src = MEDIA.heroThumb;

 // YouTube grid
 const ytGrid = document.getElementById('yt-grid');
 if (ytGrid) {
 ytGrid.innerHTML = MEDIA.youtube.map((v, i) => `
 <div class="yt-card reveal" style="transition-delay:${i * 0.1}s">
 <div class="yt-thumb">
 <img src="${v.thumb}" alt="${v.title}" loading="lazy">
 <div class="yt-thumb-play"><span><svg viewBox="0 0 24 24" width="22" height="22" fill="#fff"><polygon points="5,3 19,12 5,21"/></svg></span></div>
 </div>
 <div class="yt-card-body">
 <h4>${v.title}</h4>
 <a href="${v.url}" target="_blank" class="yt-watch" rel="noopener">
 <svg width="14" height="14" viewBox="0 0 24 24" style="fill:#FF0000;vertical-align:middle;margin-right:4px;"><path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>
 Watch on YouTube
 </a>
 </div>
 </div>`).join('');
 // Make cards visible immediately (already in/near viewport)
 setTimeout(() => {
 ytGrid.querySelectorAll('.reveal').forEach(el => {
 observer.observe(el);
 el.classList.add('visible'); // force visible in case already in viewport
 });
 }, 50);
 }

 // Social links
 document.querySelectorAll('[data-media]').forEach(el => {
 const key = el.getAttribute('data-media').split('.');
 const val = key.reduce((obj, k) => obj && obj[k], MEDIA);
 if (val) el.href = val;
 });

 // Partner links
 const mg = document.getElementById('link-mindgame');
 const sl = document.getElementById('link-sportlead');
 if (mg) mg.href = MEDIA.partners.mindgame;
 if (sl) sl.href = MEDIA.partners.sportlead;
}

document.addEventListener('DOMContentLoaded', initMedia);


function submitManuscript() {
 var name = document.getElementById('ms-name').value.trim();
 var email = document.getElementById('ms-email').value.trim();
 var inst = document.getElementById('ms-institution').value.trim();
 var errMsg = document.getElementById('ms-error-msg');

 // Validate all required fields
 if (!name || !email || !inst) {
 errMsg.style.display = 'block';
 // Highlight empty fields
 ['ms-name','ms-email','ms-institution'].forEach(function(id) {
 var el = document.getElementById(id);
 if (el && !el.value.trim()) {
 el.style.borderColor = '#E53935';
 el.style.background = '#FFF5F5';
 el.addEventListener('input', function() {
 this.style.borderColor = '#E0DDD4';
 this.style.background = '#F9F8F5';
 errMsg.style.display = 'none';
 }, { once: true });
 }
 });
 return;
 }

 var modal = document.getElementById('manuscript-modal');
 var url = modal.getAttribute('data-url') || 'https://drive.google.com/file/d/1T_3QbMf4sZtbNJW-qLVCdqjjvD5EpgMt/view?usp=drive_link';
 var title = document.getElementById('ms-modal-title').textContent;

 // Send to Google Sheets
 sendToSheets({
 form: 'Manuscript Request',
 name: name,
 email: email,
 org: inst,
 challenge: title
 });

 // Set download link
 document.getElementById('ms-download-btn').href = url;

 // Show success state
 document.getElementById('ms-form-state').style.display = 'none';
 document.getElementById('ms-success-state').style.display = 'block';
}

function closeManuscriptModal() {
 var modal = document.getElementById('manuscript-modal');
 modal.style.display = 'none';
 document.body.style.overflow = '';
 // Reset modal state for next use
 setTimeout(function() {
 document.getElementById('ms-form-state').style.display = 'block';
 document.getElementById('ms-success-state').style.display = 'none';
 document.getElementById('ms-name').value = '';
 document.getElementById('ms-email').value = '';
 document.getElementById('ms-institution').value = '';
 document.getElementById('ms-error-msg').style.display = 'none';
 }, 400);
}


function openCS02() { document.getElementById('cs02-page').style.display='block'; document.body.style.overflow='hidden'; window.scrollTo(0,0); }
function closeCS02() { document.getElementById('cs02-page').style.display='none'; document.body.style.overflow=''; }
function openCS03() { document.getElementById('cs03-page').style.display='block'; document.body.style.overflow='hidden'; window.scrollTo(0,0); }
function closeCS03() { document.getElementById('cs03-page').style.display='none'; document.body.style.overflow=''; }


function openCS04() { document.getElementById('cs04-page').style.display='block'; document.body.style.overflow='hidden'; window.scrollTo(0,0); }
function closeCS04() { document.getElementById('cs04-page').style.display='none'; document.body.style.overflow=''; }
function openCS05() { document.getElementById('cs05-page').style.display='block'; document.body.style.overflow='hidden'; window.scrollTo(0,0); }
function closeCS05() { document.getElementById('cs05-page').style.display='none'; document.body.style.overflow=''; }
function openCS06() { document.getElementById('cs06-page').style.display='block'; document.body.style.overflow='hidden'; window.scrollTo(0,0); }
function closeCS06() { document.getElementById('cs06-page').style.display='none'; document.body.style.overflow=''; }

function openCS07(){document.getElementById("cs07-page").style.display="block";document.body.style.overflow="hidden";window.scrollTo(0,0);}
function closeCS07(){document.getElementById("cs07-page").style.display="none";document.body.style.overflow="";}
function openCS08(){document.getElementById("cs08-page").style.display="block";document.body.style.overflow="hidden";window.scrollTo(0,0);}
function closeCS08(){document.getElementById("cs08-page").style.display="none";document.body.style.overflow="";}
function openCS09(){document.getElementById("cs09-page").style.display="block";document.body.style.overflow="hidden";window.scrollTo(0,0);}
function closeCS09(){document.getElementById("cs09-page").style.display="none";document.body.style.overflow="";}
function openCS10(){document.getElementById("cs10-page").style.display="block";document.body.style.overflow="hidden";window.scrollTo(0,0);}
function closeCS10(){document.getElementById("cs10-page").style.display="none";document.body.style.overflow="";}
function openCS11(){document.getElementById("cs11-page").style.display="block";document.body.style.overflow="hidden";window.scrollTo(0,0);}
function closeCS11(){document.getElementById("cs11-page").style.display="none";document.body.style.overflow="";}
function openCS12(){document.getElementById("cs12-page").style.display="block";document.body.style.overflow="hidden";window.scrollTo(0,0);}
function closeCS12(){document.getElementById("cs12-page").style.display="none";document.body.style.overflow="";}
function openCS13(){document.getElementById("cs13-page").style.display="block";document.body.style.overflow="hidden";window.scrollTo(0,0);}
function closeCS13(){document.getElementById("cs13-page").style.display="none";document.body.style.overflow="";}
function openCS11(){document.getElementById("cs11-page").style.display="block";document.body.style.overflow="hidden";window.scrollTo(0,0);}
function closeCS11(){document.getElementById("cs11-page").style.display="none";document.body.style.overflow="";}
function openCS12(){document.getElementById("cs12-page").style.display="block";document.body.style.overflow="hidden";window.scrollTo(0,0);}
function closeCS12(){document.getElementById("cs12-page").style.display="none";document.body.style.overflow="";}
function openCS13(){document.getElementById("cs13-page").style.display="block";document.body.style.overflow="hidden";window.scrollTo(0,0);}
function closeCS13(){document.getElementById("cs13-page").style.display="none";document.body.style.overflow="";}


/* ── COUNTRY SEARCH FILTER ── */
function filterCountry(input, selectId) {
  var filter = input.value.toLowerCase();
  var select = document.getElementById(selectId);
  var matched = false;
  for (var i = 0; i < select.options.length; i++) {
    var opt = select.options[i];
    if (opt.value === '') { opt.style.display = ''; continue; }
    var txt = opt.textContent.toLowerCase();
    if (txt.indexOf(filter) > -1) {
      opt.style.display = '';
      if (!matched && filter) { select.value = opt.value; matched = true; syncDial(select, selectId.split('-')[0]); }
    } else {
      opt.style.display = 'none';
    }
  }
}

function syncDial(countrySelect, prefix) {
 var dial = countrySelect.options[countrySelect.selectedIndex].getAttribute('data-dial');
 var dialEl = document.getElementById(prefix + '-dialcode');
 if (dialEl && dial) {
 for (var i = 0; i < dialEl.options.length; i++) {
 if (dialEl.options[i].value === dial) {
 dialEl.selectedIndex = i;
 break;
 }
 }
 }
}


/* ── FORM VALIDATION ── */
function validateForm(formEl) {
 var fields = formEl.querySelectorAll('input[required], select[required], textarea[required]');
 var valid = true;

 // Clear previous errors
 formEl.querySelectorAll('.field-error').forEach(function(el) {
 el.classList.remove('field-error');
 });
 formEl.querySelectorAll('.field-error-msg').forEach(function(el) {
 el.remove();
 });

 fields.forEach(function(field) {
 var isEmpty = !field.value || field.value.trim() === '';
 if (isEmpty) {
 valid = false;
 field.classList.add('field-error');

 // If inside phone-wrap, highlight the wrap too
 var wrap = field.closest('.phone-wrap');
 if (wrap) wrap.classList.add('field-error');

 // Add error message
 var label = field.closest('.bk-fg');
 if (label) {
 var msg = document.createElement('span');
 msg.className = 'field-error-msg';
 msg.textContent = 'This field is required';
 label.appendChild(msg);
 }

 // Scroll to first error
 if (valid === false && !formEl.querySelector('.field-error + .field-error')) {
 field.scrollIntoView({ behavior: 'smooth', block: 'center' });
 }
 }

 // Remove error on input
 field.addEventListener('input', function() {
 this.classList.remove('field-error');
 var wrap = this.closest('.phone-wrap');
 if (wrap) wrap.classList.remove('field-error');
 var msg = this.closest('.bk-fg') && this.closest('.bk-fg').querySelector('.field-error-msg');
 if (msg) msg.remove();
 }, { once: true });
 });

 // Scroll to first error field
 var firstError = formEl.querySelector('.field-error');
 if (firstError) {
 firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
 }

 return valid;
}


function openPub01_OLD() {
 var p = document.getElementById('pub01-page');
 if (p) { p.style.display = 'block'; document.body.style.overflow = 'hidden'; window.scrollTo(0, 0); }
}
function closePub01() {
 var p = document.getElementById('pub01-page');
 if (p) { p.style.display = 'none'; document.body.style.overflow = ''; }
}


function openPub02() {
  var p = document.getElementById('pub02-page');
  if (p) openOverlay(p);
}
function closePub02() {
  var p = document.getElementById('pub02-page');
  if (p) closeOverlay(p);
}


/* ── SCROLL POSITION RESTORE ── */
var _savedScrollY = 0;
function openOverlay(el) {
  _savedScrollY = window.scrollY || window.pageYOffset;
  el.style.display = 'block';
  document.body.style.overflow = 'hidden';
  window.scrollTo(0, 0);
}
function closeOverlay(el) {
  el.style.display = 'none';
  document.body.style.overflow = '';
  setTimeout(function() { window.scrollTo(0, _savedScrollY); }, 20);
}


/* ── MOBILE NAV ── */
function toggleMobileNav() {
  var drawer = document.getElementById('mobile-nav-drawer');
  var overlay = document.getElementById('mobile-nav-overlay');
  var btn = document.getElementById('nav-hamburger');
  var isOpen = drawer.classList.contains('open');
  if (isOpen) {
    closeMobileNav();
  } else {
    drawer.classList.add('open');
    overlay.classList.add('open');
    btn.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}
function closeMobileNav() {
  var drawer = document.getElementById('mobile-nav-drawer');
  var overlay = document.getElementById('mobile-nav-overlay');
  var btn = document.getElementById('nav-hamburger');
  drawer.classList.remove('open');
  overlay.classList.remove('open');
  btn.classList.remove('open');
  document.body.style.overflow = '';
}
// Close drawer on ESC key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeMobileNav();
});

function openCS14(){var p=document.getElementById("cs14-page");if(p){openOverlay(p);}}
function closeCS14(){var p=document.getElementById("cs14-page");if(p){closeOverlay(p);}}
function openCS15(){var p=document.getElementById("cs15-page");if(p){openOverlay(p);}}
function closeCS15(){var p=document.getElementById("cs15-page");if(p){closeOverlay(p);}}
function openCS16(){var p=document.getElementById("cs16-page");if(p){openOverlay(p);}}
function closeCS16(){var p=document.getElementById("cs16-page");if(p){closeOverlay(p);}}

function openPub01() {
  var p = document.getElementById('pub01-page');
  if (p) openOverlay(p);
}
function closePub01() {
  var p = document.getElementById('pub01-page');
  if (p) closeOverlay(p);
}
function openPub02() {
  var p = document.getElementById('pub02-page');
  if (p) openOverlay(p);
}
function closePub02() {
  var p = document.getElementById('pub02-page');
  if (p) closeOverlay(p);
}
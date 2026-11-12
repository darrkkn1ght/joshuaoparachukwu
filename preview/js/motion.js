/* =====================================================================
   Dr. Joshua A. Oparachukwu - Signature Motion & Interactive Flow
   ===================================================================== */
(function () {
  'use strict';

  var docEl = document.documentElement;
  docEl.classList.add('js-motion');

  var prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function initMotion() {
    var nav = document.querySelector('nav');
    var progressEl = null;

    if (nav) {
      progressEl = nav.querySelector('.nav-scroll-progress');
      if (!progressEl) {
        progressEl = document.createElement('span');
        progressEl.className = 'nav-scroll-progress';
        progressEl.setAttribute('aria-hidden', 'true');
        nav.appendChild(progressEl);
      }
    }

    function updateNavScroll() {
      var y = window.scrollY || window.pageYOffset || 0;
      if (nav) {
        if (y > 24) nav.classList.add('scrolled-pill');
        else nav.classList.remove('scrolled-pill');
      }
      if (progressEl) {
        var maxScroll = docEl.scrollHeight - window.innerHeight;
        var pct = maxScroll > 0 ? Math.min(100, Math.max(0, (y / maxScroll) * 100)) : 0;
        progressEl.style.width = pct.toFixed(2) + '%';
      }
    }

    var ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          updateNavScroll();
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
    updateNavScroll();

    /* Collect elements for progressive scroll-reveal */
    var gridSelectors = [
      '.pillars-grid',
      '.vf-bento-grid',
      '.vf-video-grid-6',
      '.yt-masterclass-grid',
      '.yt-grid',
      '.written-reviews-grid',
      '.reviews-grid-3col',
      '.results-cards-grid',
      '.vf-kpi-grid',
      '.features-grid',
      '.steps-list',
      '.case-cards-grid'
    ];

    gridSelectors.forEach(function (sel) {
      document.querySelectorAll(sel).forEach(function (container) {
        Array.prototype.forEach.call(container.children, function (child, idx) {
          if (child.nodeType === 1 && !child.hasAttribute('data-no-motion')) {
            child.classList.add('motion-reveal');
            child.style.setProperty('--motion-delay', Math.min(idx % 6, 5) * 65 + 'ms');
          }
        });
      });
    });

    document.querySelectorAll('.reveal, .lead-box, .specialist-callout-card, .section-head, .vf-section-head').forEach(function (el) {
      el.classList.add('motion-reveal');
    });

    var targets = Array.prototype.slice.call(document.querySelectorAll('.motion-reveal'));

    function revealNow(el) {
      el.classList.add('is-in-view', 'visible');
    }

    if (prefersReduced || !('IntersectionObserver' in window)) {
      targets.forEach(revealNow);
    } else {
      var viewH = window.innerHeight || 800;
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            revealNow(entry.target);
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

      targets.forEach(function (el) {
        var rect = el.getBoundingClientRect();
        if (rect.top < viewH * 0.96) {
          revealNow(el);
        } else {
          observer.observe(el);
        }
      });

      /* Safety fallback so nothing ever remains hidden */
      setTimeout(function () {
        targets.forEach(function (el) {
          var rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight + 120) {
            revealNow(el);
          }
        });
      }, 1400);
    }

    /* Count-up animation for KPI stats ([data-count-target]) */
    var counters = Array.prototype.slice.call(document.querySelectorAll('[data-count-target]'));
    function runCounter(el) {
      if (el.dataset.counted === '1') return;
      el.dataset.counted = '1';
      var raw = el.getAttribute('data-count-target') || '';
      var target = parseInt(raw, 10);
      if (isNaN(target) || target <= 0) return;
      var suffix = el.textContent.replace(/[0-9,\s]/g, '').trim() || '+';
      if (prefersReduced) {
        el.textContent = target.toLocaleString() + suffix;
        return;
      }
      var duration = 1250;
      var startTime = null;
      function frame(ts) {
        if (!startTime) startTime = ts;
        var p = Math.min(1, (ts - startTime) / duration);
        var eased = 1 - Math.pow(1 - p, 3);
        var current = Math.round(eased * target);
        el.textContent = current.toLocaleString() + (p >= 1 ? suffix : '');
        if (p < 1) {
          window.requestAnimationFrame(frame);
        }
      }
      window.requestAnimationFrame(frame);
    }

    if (counters.length) {
      if ('IntersectionObserver' in window && !prefersReduced) {
        var counterObs = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              runCounter(entry.target);
              counterObs.unobserve(entry.target);
            }
          });
        }, { threshold: 0.2 });
        counters.forEach(function (c) { counterObs.observe(c); });
      } else {
        counters.forEach(runCounter);
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMotion);
  } else {
    initMotion();
  }

  /* PREVIEW LINK ROUTING GUARD */
  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
    if (!a) return;
    var raw = a.getAttribute('href');
    if (!raw) return;
    if (
      raw.charAt(0) === '#' ||
      raw.indexOf('http://') === 0 ||
      raw.indexOf('https://') === 0 ||
      raw.indexOf('mailto:') === 0 ||
      raw.indexOf('tel:') === 0 ||
      raw.indexOf('javascript:') === 0 ||
      raw.indexOf('data:') === 0 ||
      raw.indexOf('/preview/') === 0
    ) {
      return;
    }
    var cleaned = raw.replace(/^(\.\.\/)+/, '').replace(/^\.\//, '').replace(/^\//, '');
    a.setAttribute('href', '/preview/' + cleaned);
  }, true);

})();


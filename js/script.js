/**
 * ================================================
 * WANDERLY TRAVEL WEBSITE — JAVASCRIPT
 * ================================================
 * Features:
 *  1. Mobile hamburger menu with animation
 *  2. Smooth scrolling for anchor links
 *  3. Sticky navbar with scroll-based style change
 *  4. Active navigation link highlighting
 *  5. Destination category filtering
 *  6. Trip search form validation
 *  7. Scroll reveal animations (IntersectionObserver)
 *  8. Back-to-top button
 *  9. Toast notification system
 * 10. Newsletter form handling
 * ================================================
 */

'use strict';

/* ================================================
   DOM ELEMENT REFERENCES
================================================ */
const navbar         = document.getElementById('navbar');
const hamburger      = document.getElementById('hamburger');
const mobileMenu     = document.getElementById('mobile-menu');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link, .mobile-cta');
const navLinks       = document.querySelectorAll('.nav-link');
const searchForm     = document.getElementById('search-form');
const backToTopBtn   = document.getElementById('back-to-top');
const filterBtns     = document.querySelectorAll('.filter-btn');
const destCards      = document.querySelectorAll('.destination-card');
const noResults      = document.getElementById('no-results');
const revealEls      = document.querySelectorAll('.reveal');
const toastEl        = document.getElementById('search-toast');
const toastContent   = document.getElementById('toast-content');
const newsletterForm = document.querySelector('.newsletter-form');

/* Set today's min date for travel date input */
const travelDateInput = document.getElementById('travel-date');
if (travelDateInput) {
  const today = new Date().toISOString().split('T')[0];
  travelDateInput.setAttribute('min', today);
}

/* ================================================
   1. HAMBURGER / MOBILE MENU
================================================ */
let menuOpen = false;

function openMenu() {
  menuOpen = true;
  hamburger.classList.add('open');
  hamburger.setAttribute('aria-expanded', 'true');
  mobileMenu.classList.add('open');
  mobileMenu.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden'; // prevent background scroll
}

function closeMenu() {
  menuOpen = false;
  hamburger.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
  mobileMenu.classList.remove('open');
  mobileMenu.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function toggleMenu() {
  menuOpen ? closeMenu() : openMenu();
}

if (hamburger) {
  hamburger.addEventListener('click', toggleMenu);

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuOpen) closeMenu();
  });
}

// Close menu when a mobile link is clicked
mobileNavLinks.forEach((link) => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});

// Close menu when clicking outside of it
document.addEventListener('click', (e) => {
  if (menuOpen && !mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
    closeMenu();
  }
});

/* ================================================
   2. SMOOTH SCROLLING
================================================ */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;

    const targetEl = document.querySelector(targetId);
    if (!targetEl) return;

    e.preventDefault();

    const navH = navbar ? navbar.offsetHeight : 80;
    const targetTop = targetEl.getBoundingClientRect().top + window.scrollY - navH;

    window.scrollTo({
      top: targetTop,
      behavior: 'smooth',
    });
  });
});

/* ================================================
   3 & 4. STICKY NAVBAR + ACTIVE LINK ON SCROLL
================================================ */
const sections = document.querySelectorAll('section[id]');

function onScroll() {
  const scrollY = window.scrollY;

  // — Sticky navbar style change
  if (navbar) {
    if (scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  // — Back to top visibility
  if (backToTopBtn) {
    if (scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }

  // — Active nav link based on current section
  let currentSection = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - navbar.offsetHeight - 60;
    if (scrollY >= sectionTop) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');
    link.removeAttribute('aria-current');
    const href = link.getAttribute('href');
    if (href === `#${currentSection}`) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
}

window.addEventListener('scroll', onScroll, { passive: true });
onScroll(); // Run on page load

/* ================================================
   5. DESTINATION CATEGORY FILTERING & PAGINATION
================================================ */
let activeFilter = 'all';
const BATCH_SIZE = 8;
let visibleLimit = BATCH_SIZE;

const loadMoreWrap = document.getElementById('load-more-wrap');
const loadMoreBtn  = document.getElementById('load-more-btn');

function updateDestinationVisibility() {
  let matchingCards = [];

  destCards.forEach((card) => {
    const category = card.getAttribute('data-category');
    const matches  = activeFilter === 'all' || category === activeFilter;
    if (matches) {
      matchingCards.push(card);
    } else {
      card.classList.add('filtered-out');
      card.style.display = 'none';
    }
  });

  let visibleCount = 0;
  matchingCards.forEach((card, index) => {
    if (activeFilter === 'all') {
      if (index < visibleLimit) {
        card.classList.remove('filtered-out');
        card.style.display = '';
        visibleCount++;
      } else {
        card.classList.add('filtered-out');
        card.style.display = 'none';
      }
    } else {
      // Category filter shows all matching cards for that category
      card.classList.remove('filtered-out');
      card.style.display = '';
      visibleCount++;
    }
  });

  // Toggle No Results message
  if (noResults) {
    visibleCount === 0 ? noResults.classList.remove('hidden') : noResults.classList.add('hidden');
  }

  // Toggle Show More button
  if (loadMoreWrap) {
    if (activeFilter === 'all' && visibleLimit < matchingCards.length) {
      loadMoreWrap.classList.remove('hidden');
    } else {
      loadMoreWrap.classList.add('hidden');
    }
  }
}

function filterDestinations(filterValue) {
  activeFilter = filterValue;
  visibleLimit = BATCH_SIZE; // reset pagination limit when changing tabs
  updateDestinationVisibility();
}

filterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    filterBtns.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');
    filterDestinations(filter);
  });
});

if (loadMoreBtn) {
  loadMoreBtn.addEventListener('click', () => {
    visibleLimit += BATCH_SIZE;
    updateDestinationVisibility();

    // Trigger scroll reveal for newly visible elements
    if (typeof initScrollReveal === 'function') {
      setTimeout(initScrollReveal, 50);
    }
  });
}

// Initial invocation on script load
updateDestinationVisibility();

/* ================================================
   6. TRIP SEARCH FORM VALIDATION
================================================ */
function showFieldError(groupId, errorId, message) {
  const group = document.getElementById(groupId);
  const error = document.getElementById(errorId);
  if (group)  group.classList.add('has-error');
  if (error)  error.textContent = message;
}

function clearFieldError(groupId, errorId) {
  const group = document.getElementById(groupId);
  const error = document.getElementById(errorId);
  if (group)  group.classList.remove('has-error');
  if (error)  error.textContent = '';
}

function validateSearchForm() {
  const destination = document.getElementById('destination');
  const travelDate  = document.getElementById('travel-date');
  const travelers   = document.getElementById('travelers');

  let isValid = true;

  // Clear previous errors
  clearFieldError('destination-group', 'destination-error');
  clearFieldError('date-group',        'date-error');
  clearFieldError('travelers-group',   'travelers-error');

  // Validate destination
  if (!destination || !destination.value.trim()) {
    showFieldError('destination-group', 'destination-error', 'Please enter a destination.');
    isValid = false;
  } else if (destination.value.trim().length < 2) {
    showFieldError('destination-group', 'destination-error', 'Destination must be at least 2 characters.');
    isValid = false;
  }

  // Validate date
  if (!travelDate || !travelDate.value) {
    showFieldError('date-group', 'date-error', 'Please select a travel date.');
    isValid = false;
  } else {
    const selectedDate = new Date(travelDate.value);
    const today        = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today) {
      showFieldError('date-group', 'date-error', 'Please select a future travel date.');
      isValid = false;
    }
  }

  // Validate travelers
  if (!travelers || !travelers.value) {
    showFieldError('travelers-group', 'travelers-error', 'Please select number of travelers.');
    isValid = false;
  }

  return isValid;
}

if (searchForm) {
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (validateSearchForm()) {
      const destination = document.getElementById('destination').value.trim();
      const travelDate  = document.getElementById('travel-date').value;
      const travelers   = document.getElementById('travelers').value;

      // Format date
      const dateObj = new Date(travelDate);
      const dateStr = dateObj.toLocaleDateString('en-US', {
        month: 'long',
        day:   'numeric',
        year:  'numeric',
      });

      showToast(
        `✈️ Searching trips to <strong>${destination}</strong> for ${dateStr} · ${travelers} traveler(s)...`,
        'success',
        4000
      );

      // Scroll to destinations section after a short delay
      setTimeout(() => {
        const destSection = document.getElementById('destinations');
        if (destSection) {
          const navH = navbar ? navbar.offsetHeight : 80;
          const top  = destSection.getBoundingClientRect().top + window.scrollY - navH;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 500);
    }
  });

  // Real-time validation clearing on input
  const formInputs = searchForm.querySelectorAll('input, select');
  formInputs.forEach((input) => {
    input.addEventListener('input', () => {
      const group = input.closest('.search-field-group');
      const error = group ? group.querySelector('.search-error') : null;
      if (group) group.classList.remove('has-error');
      if (error) error.textContent = '';
    });
  });
}

/* ================================================
   7. SCROLL REVEAL ANIMATIONS (IntersectionObserver)
================================================ */
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal');
  
  if (!('IntersectionObserver' in window)) {
    elements.forEach((el) => el.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.01,
      rootMargin: '100px 0px 100px 0px',
    }
  );

  elements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight + 100 && rect.bottom > -100) {
      el.classList.add('revealed');
    } else {
      observer.observe(el);
    }
  });

  // Safety fallback: reveal all elements after 500ms so nothing is ever permanently hidden
  setTimeout(() => {
    elements.forEach((el) => el.classList.add('revealed'));
  }, 500);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScrollReveal);
} else {
  initScrollReveal();
}

/* ================================================
   8. BACK TO TOP BUTTON
================================================ */
if (backToTopBtn) {
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ================================================
   9. TOAST NOTIFICATION SYSTEM
================================================ */
let toastTimeout = null;

/**
 * Show a toast message
 * @param {string} message   - HTML message content
 * @param {string} type      - 'success' | 'error' | 'info'
 * @param {number} duration  - Display duration in ms
 */
function showToast(message, type = 'info', duration = 3500) {
  if (!toastEl || !toastContent) return;

  // Clear existing timer
  if (toastTimeout) clearTimeout(toastTimeout);

  // Set content & type
  toastContent.innerHTML = message;
  toastEl.className = `toast toast--${type} show`;

  // Auto-hide
  toastTimeout = setTimeout(() => {
    toastEl.classList.remove('show');
  }, duration);
}

/* ================================================
   10. NEWSLETTER FORM
================================================ */
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    const email      = emailInput ? emailInput.value.trim() : '';

    if (!email) {
      showToast('Please enter your email address.', 'error', 3000);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showToast('Please enter a valid email address.', 'error', 3000);
      return;
    }

    showToast('🎉 Thank you for subscribing! Exciting travel deals are on their way.', 'success', 4000);
    newsletterForm.reset();
  });
}

/* ================================================
   EXPLORE MODAL FUNCTIONALITY
================================================ */
const exploreModal     = document.getElementById('explore-modal');
const modalOverlay     = document.getElementById('modal-overlay');
const modalCloseBtn    = document.getElementById('modal-close-btn');
const modalCancelBtn   = document.getElementById('modal-cancel-btn');
const modalBookBtn     = document.getElementById('modal-book-btn');

const modalImg         = document.getElementById('modal-img');
const modalCategory    = document.getElementById('modal-category');
const modalRating      = document.getElementById('modal-rating');
const modalTitle       = document.getElementById('modal-title');
const modalLocation    = document.getElementById('modal-location');
const modalPrice       = document.getElementById('modal-price');
const modalDesc        = document.getElementById('modal-desc');
const modalHighlights  = document.getElementById('modal-highlights');

let currentDestinationName = '';

const destinationDescriptions = {
  Nature: {
    desc: 'Immerse yourself in wild landscapes, pristine natural scenery, crystal-clear waters, and peaceful eco-sanctuaries. A true paradise for nature lovers.',
    highlights: [
      'Guided Eco & Forest Tours',
      'Scenic Nature Trails & Photography',
      'Sustainable Eco-Resort Stay',
      'Local Wildlife Encounters'
    ]
  },
  Beach: {
    desc: 'Relax on sun-kissed white sands, swim in turquoise waters, and enjoy luxury beachside retreats with world-class water activities.',
    highlights: [
      'Overwater Villa or Resort Access',
      'Snorkeling & Scuba Diving',
      'Sunset Catamaran Cruise',
      'Complimentary Beachside Dining'
    ]
  },
  Adventure: {
    desc: 'Embark on thrilling mountain treks, alpine skiing, aerial sports, and outdoor expeditions designed for the adventurous spirit.',
    highlights: [
      'Professional Expedition Guide',
      'All Premium Adventure Gear Included',
      'Summit Trekking or Aerial Sports',
      'Emergency Safety Coverage'
    ]
  },
  Culture: {
    desc: 'Step back in time to explore ancient heritage sites, historic temples, vibrant traditions, and authentic regional culinary feasts.',
    highlights: [
      'Private Historical Walking Tour',
      'Heritage Site Entry Passes',
      'Authentic Local Cooking Masterclass',
      'Cultural Performance Access'
    ]
  },
  City: {
    desc: 'Discover modern skylines, world-class shopping centers, rich nightlife, iconic architecture, and vibrant urban culture.',
    highlights: [
      '5-Star City Center Hotel Stay',
      'VIP City Tour & Landmark Access',
      'Gourmet Dining Reservations',
      'Convenient Private City Transfers'
    ]
  }
};

function openExploreModal(card) {
  if (!exploreModal) return;

  const title    = card.querySelector('.card-title')?.textContent.trim() || 'Destination';
  const location = card.querySelector('.card-location')?.textContent.trim() || '';
  const price    = card.querySelector('.price-amount')?.textContent.trim() || '$499';
  const rating   = card.querySelector('.card-rating span')?.textContent.trim() || '4.9';
  const category = card.getAttribute('data-category') || 'Nature';
  const imgSrc   = card.querySelector('.card-image')?.getAttribute('src') || '';

  currentDestinationName = title;

  // Set modal text & attributes
  if (modalTitle)    modalTitle.textContent = title;
  if (modalLocation) modalLocation.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${location}`;
  if (modalPrice)    modalPrice.textContent = price;
  if (modalCategory) modalCategory.textContent = category;
  if (modalRating)   modalRating.innerHTML = `<i class="fa-solid fa-star"></i> ${rating}`;
  if (modalImg)      modalImg.src = imgSrc;

  // Set description & highlights based on category
  const info = destinationDescriptions[category] || destinationDescriptions.Nature;
  if (modalDesc) modalDesc.textContent = info.desc;

  if (modalHighlights) {
    modalHighlights.innerHTML = info.highlights.map(h => 
      `<li><i class="fa-solid fa-circle-check"></i> ${h}</li>`
    ).join('');
  }

  // Open modal
  exploreModal.classList.add('open');
  exploreModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeExploreModal() {
  if (!exploreModal) return;
  exploreModal.classList.remove('open');
  exploreModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// Event listeners for opening modal on card or explore button click
document.querySelectorAll('.destination-card').forEach((card) => {
  card.addEventListener('click', (e) => {
    openExploreModal(card);
  });
});

if (modalCloseBtn)  modalCloseBtn.addEventListener('click', closeExploreModal);
if (modalOverlay)   modalOverlay.addEventListener('click', closeExploreModal);
if (modalCancelBtn) modalCancelBtn.addEventListener('click', closeExploreModal);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && exploreModal && exploreModal.classList.contains('open')) {
    closeExploreModal();
  }
});

// Book button inside modal
if (modalBookBtn) {
  modalBookBtn.addEventListener('click', () => {
    closeExploreModal();
    const destInput = document.getElementById('destination');
    if (destInput) {
      destInput.value = currentDestinationName;
      destInput.focus();
    }
    const searchSection = document.getElementById('search');
    if (searchSection) {
      const navH = navbar ? navbar.offsetHeight : 80;
      const top  = searchSection.getBoundingClientRect().top + window.scrollY - navH;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    showToast(`📍 Destination selected: <strong>${currentDestinationName}</strong>. Choose your travel date & travelers!`, 'info', 4000);
  });
}

/* ================================================
   FEATURED PACKAGE MODAL FUNCTIONALITY
================================================ */
const packageViewBtn      = document.getElementById('package-view-btn');
const packageModal        = document.getElementById('package-modal');
const packageModalOverlay = document.getElementById('package-modal-overlay');
const packageModalClose   = document.getElementById('package-modal-close-btn');
const packageModalCancel  = document.getElementById('package-modal-cancel-btn');
const packageBookNowBtn   = document.getElementById('package-book-now-btn');

function openPackageModal() {
  if (!packageModal) return;
  packageModal.classList.add('open');
  packageModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closePackageModal() {
  if (!packageModal) return;
  packageModal.classList.remove('open');
  packageModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

if (packageViewBtn) {
  packageViewBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openPackageModal();
  });
}

if (packageModalClose)   packageModalClose.addEventListener('click', closePackageModal);
if (packageModalOverlay) packageModalOverlay.addEventListener('click', closePackageModal);
if (packageModalCancel)  packageModalCancel.addEventListener('click', closePackageModal);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && packageModal && packageModal.classList.contains('open')) {
    closePackageModal();
  }
});

if (packageBookNowBtn) {
  packageBookNowBtn.addEventListener('click', () => {
    closePackageModal();
    const destInput = document.getElementById('destination');
    if (destInput) {
      destInput.value = 'Maldives (7 Days Paradise Escape)';
      destInput.focus();
    }
    const searchSection = document.getElementById('search');
    if (searchSection) {
      const navH = navbar ? navbar.offsetHeight : 80;
      const top  = searchSection.getBoundingClientRect().top + window.scrollY - navH;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    showToast('🏝️ Featured Package Selected: <strong>Maldives Escape ($899/person)</strong>. Choose your travel date & travelers!', 'success', 4500);
  });
}

/* ================================================
   DESTINATION CARD KEYBOARD ACCESSIBILITY
================================================ */
destCards.forEach((card) => {
  card.addEventListener('keydown', (e) => {
    // Allow Enter/Space to trigger the Explore modal
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openExploreModal(card);
    }
  });
});

/* ================================================
   HERO VISUAL — Lazy load effect
================================================ */
(function heroInitAnimation() {
  const heroContent = document.querySelector('.hero-content');
  const heroVisual  = document.querySelector('.hero-visual');

  if (heroContent) {
    heroContent.style.opacity    = '0';
    heroContent.style.transform  = 'translateY(30px)';
    heroContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';

    requestAnimationFrame(() => {
      setTimeout(() => {
        heroContent.style.opacity   = '1';
        heroContent.style.transform = 'translateY(0)';
      }, 200);
    });
  }

  if (heroVisual) {
    heroVisual.style.opacity    = '0';
    heroVisual.style.transform  = 'translateY(30px)';
    heroVisual.style.transition = 'opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s';

    requestAnimationFrame(() => {
      setTimeout(() => {
        heroVisual.style.opacity   = '1';
        heroVisual.style.transform = 'translateY(0)';
      }, 200);
    });
  }
})();

/* ================================================
   LOG READY
================================================ */
console.log('%c✈️ Wanderly Travel — Ready!', 'color: #20B8A6; font-size: 16px; font-weight: bold;');

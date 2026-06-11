// MUSE Project Page Animations

// 1. Scroll Progress Bar
function updateScrollProgress() {
  const winScroll = document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.documentElement.style.setProperty('--scroll-progress', scrolled + '%');
}

window.addEventListener('scroll', updateScrollProgress, { passive: true });

// 2. Counter Animation
function animateCounter(element, target, duration = 1800, suffix = '') {
  const start = 0;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const current = start + (target - start) * easeOut;

    if (target % 1 === 0) {
      element.textContent = Math.floor(current) + suffix;
    } else {
      element.textContent = current.toFixed(1) + suffix;
    }

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

// Animate hero highlights on load
window.addEventListener('DOMContentLoaded', () => {
  const highlights = document.querySelectorAll('.hero-highlights strong');

  setTimeout(() => {
    highlights.forEach(el => {
      const text = el.textContent;
      const match = text.match(/([\d.]+)(%)?/);
      if (match) {
        const value = parseFloat(match[1]);
        const suffix = match[2] || '';
        animateCounter(el, value, 1800, suffix);
      }
    });
  }, 300);
});

// 3. Scroll Reveal
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
});

// 4. 3D Card Tilt Effect
function init3DCards() {
  const cards = document.querySelectorAll('.result-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 15;
      const rotateY = (centerX - x) / 15;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

window.addEventListener('DOMContentLoaded', init3DCards);

// 5. Lightbox for Gallery Images
function initLightbox() {
  // Create lightbox element
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = `
    <div class="lightbox-close" aria-label="Close">&times;</div>
    <img src="" alt="">
  `;
  document.body.appendChild(lightbox);

  const lightboxImg = lightbox.querySelector('img');
  const closeBtn = lightbox.querySelector('.lightbox-close');

  // Add click handlers to gallery images
  const galleryImages = document.querySelectorAll('#gallery .figure-block img');
  galleryImages.forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  // Close handlers
  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  closeBtn.addEventListener('click', closeLightbox);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });
}

window.addEventListener('DOMContentLoaded', initLightbox);

// 6. Enhanced Demo Image Transitions
window.addEventListener('DOMContentLoaded', () => {
  const demoImage = document.querySelector('[data-demo-image]');
  if (!demoImage) return;

  // Intercept image source changes
  const originalSrcSetter = Object.getOwnPropertyDescriptor(HTMLImageElement.prototype, 'src').set;
  Object.defineProperty(demoImage, 'src', {
    set(value) {
      if (this.src && value !== this.src) {
        this.classList.add('transitioning');
        setTimeout(() => {
          originalSrcSetter.call(this, value);
          this.classList.remove('transitioning');
        }, 300);
      } else {
        originalSrcSetter.call(this, value);
      }
    },
    get() {
      return this.getAttribute('src');
    }
  });
});

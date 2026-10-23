document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize data from config.js
  initFromConfig();

  // 2. Secret Reveal Modal logic
  initSecretModal();

  // 3. Instagram Insights period tabs
  initInsightsTabs();

  // 4. Live visitor fluctuations
  initLiveVisitors();

  // 5. Social proof toast rotation
  initSocialToasts();

  // 6. Mobile sticky bar scroll listener
  initStickyBar();
});

/**
 * Sync configuration to DOM elements
 */
function initFromConfig() {
  if (typeof SITE_CONFIG === 'undefined') return;

  // Instagram Handle
  const handleElements = [
    document.getElementById('header-handle'),
    document.getElementById('footer-handle')
  ];
  handleElements.forEach(el => {
    if (el && SITE_CONFIG.instagramHandle) {
      el.textContent = SITE_CONFIG.instagramHandle;
    }
  });

  // Avatar URL
  const avatarEl = document.getElementById('header-avatar');
  if (avatarEl && SITE_CONFIG.avatarUrl) {
    avatarEl.src = SITE_CONFIG.avatarUrl;
  }

  // Instagram Button URL
  const instaBtn = document.getElementById('instagram-cta-btn');
  if (instaBtn && SITE_CONFIG.instagramUrl) {
    instaBtn.href = SITE_CONFIG.instagramUrl;
  }
}

/**
 * Handle opening/closing of the Secret Reveal Modal
 */
function initSecretModal() {
  const modal = document.getElementById('secret-modal');
  const closeBtn = document.getElementById('modal-close');
  const triggerButtons = document.querySelectorAll('.trigger-secret');

  if (!modal) return;

  function openModal() {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Fire festive celebration confetti!
    if (typeof confetti === 'function') {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#f43f5e', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981']
      });
      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 55,
          origin: { x: 0 }
        });
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 55,
          origin: { x: 1 }
        });
      }, 250);
    }
  }

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  triggerButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });
}

/**
 * Insights period tab switching (28d / 14d / 7d)
 */
function initInsightsTabs() {
  const tabs = document.querySelectorAll('.period-tab');
  const valReach = document.getElementById('val-reach');
  const valViews = document.getElementById('val-views');
  const valFollowers = document.getElementById('val-followers');

  if (!tabs.length || typeof SITE_CONFIG === 'undefined' || !SITE_CONFIG.stats) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const period = tab.getAttribute('data-period');
      const data = SITE_CONFIG.stats[period];

      if (data && valReach && valViews && valFollowers) {
        [valReach, valViews, valFollowers].forEach(el => {
          el.style.opacity = '0.3';
          el.style.transition = 'opacity 0.2s ease';
        });

        setTimeout(() => {
          valReach.textContent = data.reach;
          valViews.textContent = data.views;
          valFollowers.textContent = data.followers;

          [valReach, valViews, valFollowers].forEach(el => {
            el.style.opacity = '1';
          });
        }, 150);
      }
    });
  });
}

/**
 * Fluctuating live visitor count
 */
function initLiveVisitors() {
  const visitorEl = document.getElementById('live-visitors');
  if (!visitorEl) return;

  let currentCount = 194;

  setInterval(() => {
    const delta = Math.floor(Math.random() * 11) - 4;
    currentCount = Math.max(165, Math.min(235, currentCount + delta));
    visitorEl.textContent = currentCount;
  }, 4500);
}

/**
 * Social proof toast notifications
 */
function initSocialToasts() {
  const toast = document.getElementById('social-toast');
  const toastUser = document.getElementById('toast-user');
  if (!toast || !toastUser) return;

  const fakeNames = [
    'Gabriel M.',
    'Lucas Boss',
    'Rodrigo S.',
    'Matheus Viral',
    'Felipe Rocha',
    'Bruno D.',
    'Thiago K.',
    'Vinicius M.'
  ];

  const actions = [
    'acabou de mandar VIRAL no direct',
    'garantiu acesso antecipado',
    'entrou na lista VIP secreta',
    'ativou as notificações dos Stories'
  ];

  function showToast() {
    const randomName = fakeNames[Math.floor(Math.random() * fakeNames.length)];
    const randomAction = actions[Math.floor(Math.random() * actions.length)];

    toastUser.textContent = randomName;
    const actionEl = toast.querySelector('.toast-text');
    if (actionEl) actionEl.textContent = randomAction;

    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  }

  setTimeout(showToast, 4000);

  setInterval(() => {
    showToast();
  }, 18000);
}

/**
 * Show mobile sticky CTA after scrolling past the first button
 */
function initStickyBar() {
  const stickyBar = document.getElementById('mobile-sticky-bar');
  const heroCta = document.getElementById('hero-cta');

  if (!stickyBar || !heroCta) return;

  window.addEventListener('scroll', () => {
    const rect = heroCta.getBoundingClientRect();
    if (rect.bottom < 0) {
      stickyBar.style.display = 'block';
    } else {
      stickyBar.style.display = 'none';
    }
  }, { passive: true });
}

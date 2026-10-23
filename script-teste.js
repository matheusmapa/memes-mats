document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('secret-modal');
  const closeBtn = document.getElementById('close-modal');
  const triggers = document.querySelectorAll('.trigger-secret');
  const instaLink = document.getElementById('insta-link-btn');

  // Sync Instagram URL if configured
  if (typeof SITE_CONFIG !== 'undefined' && SITE_CONFIG.instagramUrl && instaLink) {
    instaLink.href = SITE_CONFIG.instagramUrl;
  }

  function openModal() {
    if (!modal) return;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Celebration confetti
    if (typeof confetti === 'function') {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 }
      });
    }
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  triggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('open')) {
      closeModal();
    }
  });
});

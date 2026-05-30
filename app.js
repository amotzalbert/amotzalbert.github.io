// Year stamp
document.getElementById('year').textContent = new Date().getFullYear();

// Lightbox controller
const lightbox = document.getElementById('lightbox');
const lightboxClose = document.getElementById('lightbox-close');
const lightboxFrame = document.getElementById('lightbox-frame');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxPending = document.getElementById('lightbox-pending');

function openLightbox(videoId, title) {
  lightboxTitle.textContent = title || '';

  const isPending = !videoId || videoId.startsWith('__UPLOAD_PENDING');
  if (isPending) {
    lightboxFrame.innerHTML = '';
    lightboxFrame.style.display = 'none';
    lightboxPending.hidden = false;
  } else {
    lightboxFrame.style.display = '';
    lightboxPending.hidden = true;
    lightboxFrame.innerHTML =
      '<iframe src="https://www.youtube-nocookie.com/embed/' +
      encodeURIComponent(videoId) +
      '?rel=0&modestbranding=1&autoplay=1" ' +
      'title="' + (title || 'Video') + '" ' +
      'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ' +
      'allowfullscreen></iframe>';
  }

  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  lightboxFrame.innerHTML = '';
  lightboxPending.hidden = true;
  document.body.style.overflow = '';
}

document.querySelectorAll('.tile').forEach((tile) => {
  tile.addEventListener('click', () => {
    openLightbox(tile.dataset.youtube, tile.dataset.title);
  });
});

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox();
});

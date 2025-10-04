// Duplicar imagens para efeito infinito
const track = document.getElementById('carousel-track');
const images = Array.from(track.children);

images.forEach(img => {
  const clone = img.cloneNode(true);
  track.appendChild(clone);
});

// Overlay
const overlay = document.getElementById('overlay');
const overlayImage = document.getElementById('overlayImage');
const closeOverlay = document.getElementById('closeOverlay');

track.addEventListener('click', e => {
  if (e.target.classList.contains('cert-img')) {
    overlayImage.src = e.target.src;
    overlay.style.display = 'flex';
    track.style.animationPlayState = 'paused';
  }
});

closeOverlay.addEventListener('click', () => {
  overlay.style.display = 'none';
  overlayImage.src = '';
  track.style.animationPlayState = 'running';
});

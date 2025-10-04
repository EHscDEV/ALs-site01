  const carousel = document.getElementById('imageCarousel');
    const viewer = document.getElementById('mobileViewer');
    const viewerImg = document.getElementById('mobileViewerImg');

    let scrollAmount = 0;
    const itemWidth = 260; // Largura da imagem + gap

    function scrollImages(direction) {
      const maxScroll = carousel.scrollWidth - carousel.clientWidth;

      scrollAmount += direction * itemWidth;

      // Rolagem infinita (loop)
      if (scrollAmount > maxScroll) {
        scrollAmount = 0;
      } else if (scrollAmount < 0) {
        scrollAmount = maxScroll;
      }

      carousel.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }

    function handleImageClick(src) {
      if (window.innerWidth <= 768) {
        viewerImg.src = src;
        viewer.style.display = 'flex';
      }
    }

    function closeMobileViewer() {
      viewer.style.display = 'none';
      viewerImg.src = '';
    }

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeMobileViewer();
      }
    });

    viewer.addEventListener('click', (e) => {
      if (e.target === viewer) {
        closeMobileViewer();
      }
    });
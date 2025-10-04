 const servicoTrack = document.getElementById('carouselServicoTrack');
  let servicoPosition = 0;
  let servicoSlideWidth = servicoTrack.clientWidth / 3;

  function nextServico() {
    servicoPosition -= servicoSlideWidth;
    if (servicoPosition <= -servicoTrack.scrollWidth / 2) {
      servicoPosition = 0;
    }
    servicoTrack.style.transition = 'transform 0.5s ease';
    servicoTrack.style.transform = `translateX(${servicoPosition}px)`;
  }

  function prevServico() {
    servicoPosition += servicoSlideWidth;
    if (servicoPosition > 0) {
      servicoPosition = -servicoTrack.scrollWidth / 2;
    }
    servicoTrack.style.transition = 'transform 0.5s ease';
    servicoTrack.style.transform = `translateX(${servicoPosition}px)`;
  }
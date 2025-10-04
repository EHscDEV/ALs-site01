const slides = document.querySelector('.slides');
  const btnEsq = document.querySelector('.seta.esquerda');
  const btnDir = document.querySelector('.seta.direita');

  let index = 0;
  const totalSlides = document.querySelectorAll('.slide').length;

  function mostrarSlide(i) {
    slides.style.transform = `translateX(-${i * 100}%)`;
  }

  btnEsq.addEventListener('click', () => {
    index = (index - 1 + totalSlides) % totalSlides;
    mostrarSlide(index);
  });

  btnDir.addEventListener('click', () => {
    index = (index + 1) % totalSlides;
    mostrarSlide(index);
  });
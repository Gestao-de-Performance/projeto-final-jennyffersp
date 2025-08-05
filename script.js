/let indiceSlide = 0;

function moverCarrossel(direcao) {
  const carrossel = document.getElementById("carrosselCorpoClinico");
  const slides = carrossel.querySelectorAll(".slide");
  const totalSlides = slides.length;

  indiceSlide += direcao;

  if (indiceSlide < 0) {
    indiceSlide = totalSlides - 1;
  } else if (indiceSlide >= totalSlides) {
    indiceSlide = 0;
  }

  const deslocamento = -indiceSlide * 100;
  carrossel.style.transform = `translateX(${deslocamento}%)`;
}

window.addEventListener('scroll', function () {
  const parallaxSections = document.querySelectorAll('.parallax');

  parallaxSections.forEach(section => {
    const offset = window.pageYOffset;
    const speed = 0.4;
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const scrollPos = offset - sectionTop;

    if (scrollPos >= -sectionHeight && scrollPos <= window.innerHeight) {
      section.style.setProperty('--scrollY', scrollPos * speed + 'px');
    }
  });
});
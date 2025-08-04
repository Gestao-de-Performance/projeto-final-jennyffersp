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
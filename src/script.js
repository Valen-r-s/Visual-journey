window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled"); // Activa el fondo semitransparente
  } else {
    header.classList.remove("scrolled"); // Mantiene la transparencia
  }
});

// Slider
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  let index = 1; // Inicia en el primer slide real (ya que clonaremos)
  const totalSlides = slides.length;

  // Clonamos el primer y el último slide para el efecto infinito
  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[totalSlides - 1].cloneNode(true);

  // Añadir clones al principio y al final
  slider.appendChild(firstClone);
  slider.insertBefore(lastClone, slides[0]);

  const allSlides = document.querySelectorAll(".slide"); // Incluye los clones
  const totalSlidesWithClones = allSlides.length;
  slider.style.transform = `translateX(${-index * 100}%)`;

  function actualizarSlider() {
    slider.style.transition = "transform 0.5s ease-in-out";
    slider.style.transform = `translateX(${-index * 100}%)`;
  }

  nextBtn.addEventListener("click", () => {
    if (index >= totalSlides) {
      index++;
      actualizarSlider();
      setTimeout(() => {
        slider.style.transition = "none";
        index = 1;
        slider.style.transform = `translateX(${-index * 100}%)`;
      }, 500);
    } else {
      index++;
      actualizarSlider();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (index <= 0) {
      index--;
      actualizarSlider();
      setTimeout(() => {
        slider.style.transition = "none";
        index = totalSlides;
        slider.style.transform = `translateX(${-index * 100}%)`;
      }, 500);
    } else {
      index--;
      actualizarSlider();
    }
  });

  // Slider automático por segundos
  setInterval(() => {
    nextBtn.click();
  }, 5000);
});

// SERVICIOS
function mostrarImagen(id) {
  const imagenes = document.querySelectorAll(".imagen");
  imagenes.forEach((img) => img.classList.remove("active"));

  document.getElementById(id).classList.add("active");
}

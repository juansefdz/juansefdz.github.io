document.addEventListener("DOMContentLoaded", function() {
    const aboutMeSection = document.getElementById("aboutMe");
    const buttonsContainer = document.querySelector(".buttons");
  
    window.addEventListener("scroll", function() {
      // Obtener la posición de la sección "About Me"
      const aboutMeSectionTop = aboutMeSection.offsetTop;
      const aboutMeSectionHeight = aboutMeSection.clientHeight;
  
      // Calcular la posición del scroll
      const scrollPosition = window.scrollY;
  
      // Mostrar u ocultar los botones según el scroll
      if (scrollPosition >= aboutMeSectionTop && scrollPosition < aboutMeSectionTop + aboutMeSectionHeight) {
        buttonsContainer.classList.remove("hidden");
      } else {
        buttonsContainer.classList.add("hidden");
      }
    });
  });
  
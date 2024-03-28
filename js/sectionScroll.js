document.addEventListener("DOMContentLoaded", function () {
  const headerLinks = document.querySelectorAll(".header-info a");

  function navigateToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  headerLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const sectionId = event.target.getAttribute("href").substring(1);
      navigateToSection(sectionId);

      // Agregar clase de animación al texto del encabezado
      const headerText = document.querySelector(".home-content h1");
      headerText.classList.add("animate-text");
      
      // Eliminar la clase de animación después de un tiempo para que se pueda volver a animar en el próximo clic
      setTimeout(() => {
        headerText.classList.remove("animate-text");
      }, 2000); // Ajusta el tiempo según la duración de tu animación en CSS
    });
  });
});

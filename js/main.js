document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".home"); // Obtener todas las secciones de la página
    const headerLinks = document.querySelectorAll(".header-info a"); // Obtener todos los enlaces del encabezado
  
    function highlightNavLink() {
      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop - 100; // Ajusta el valor según el tamaño de tu encabezado
        const sectionBottom = sectionTop + section.offsetHeight;
  
        // Verificar si la posición actual del scroll está dentro de los límites de la sección
        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
          headerLinks.forEach(link => {
            link.classList.remove("active"); // Eliminar clase activa de todos los enlaces
          });
          headerLinks[index].classList.add("active"); // Agregar clase activa al enlace correspondiente
        }
      });
    }
  
    window.addEventListener("scroll", highlightNavLink);
  
    // Ejecutar la función una vez al cargar la página para resaltar la sección inicial
    highlightNavLink();
  });
  
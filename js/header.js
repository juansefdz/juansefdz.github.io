document.addEventListener('DOMContentLoaded', function() {
  const menuLinks = document.querySelectorAll('.header-info a');
  let lastClickedLink = null;

  // Función para agregar la clase "glitch" al enlace actual y quitarla del anterior
  function toggleGlitchClass(currentLink) {
    if (lastClickedLink) {
      lastClickedLink.classList.remove('glitch');
    }
    currentLink.classList.add('glitch');
    lastClickedLink = currentLink;
  }

  // Establecer el primer enlace como activo al principio
  const defaultLink = menuLinks[0];
  toggleGlitchClass(defaultLink);

  menuLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();

      // Verificar si el enlace actual ya tiene la clase "glitch"
      if (!link.classList.contains('glitch')) {
        toggleGlitchClass(link);
      }
    });
  });
});

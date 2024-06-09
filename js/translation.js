// Define una función para cargar las traducciones según el idioma seleccionado
function cargarTraducciones(idioma) {
  // Obtiene la ruta del archivo JSON de traducciones según el idioma especificado
  const rutaTraducciones = `../../../data/language/translations_${idioma}.json`;

  // Realiza una solicitud para obtener las traducciones del archivo JSON
  fetch(rutaTraducciones)
    .then(response => response.json())
    .then(data => {
      // Actualiza el contenido de la página con las traducciones cargadas
      document.querySelectorAll("[data-translate]").forEach(element => {
        const keys = element.getAttribute("data-translate").split(".");
        let content = data;
        keys.forEach(key => {
          if (content && content[key]) {
            content = content[key];
          } else {
            
            content = "";
          }
        });
        element.textContent = content;
      });
    })
    .catch(error => console.error("Error cargando traducciones:", error));
}

// Llama a la función para cargar las traducciones al cargar la página
document.addEventListener("DOMContentLoaded", function() {
  // Por defecto, carga las traducciones en inglés
  cargarTraducciones("en");
});

// Event listeners para los botones de cambio de idioma
document.getElementById("btn-espanol").addEventListener("click", function() {
  cargarTraducciones("es");
});

document.getElementById("btn-ingles").addEventListener("click", function() {
  cargarTraducciones("en");
});

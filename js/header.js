document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const headerLinks = document.querySelectorAll(".header-info a");
  
    // Agrega transición entre páginas
    sections.forEach((section) => {
      section.style.opacity = "0";
    });
  
    function navigateToSection(sectionId) {
      sections.forEach((section) => {
        if (section.id === sectionId) {
          section.style.opacity = "1";
        } else {
          section.style.opacity = "0";
        }
      });
    }
  
    headerLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const sectionId = event.target.getAttribute("href").substring(1);
        navigateToSection(sectionId);
      });
    });
  
    // Resalta la ubicación actual en el encabezado
    window.addEventListener("scroll", () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id");
        }
      });
  
      headerLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").substring(1) === current) {
          link.classList.add("active");
        }
      });
    });
  });
  
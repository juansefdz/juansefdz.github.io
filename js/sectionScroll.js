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
    });
  });
});

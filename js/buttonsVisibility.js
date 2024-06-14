document.addEventListener("DOMContentLoaded", function() {
  const aboutMeSection = document.getElementById("aboutMe");
  const buttonsSection = document.querySelector(".buttons-section");

  // Create buttons container
  const buttonsContainer = document.createElement("div");
  buttonsContainer.className = "buttons";
  
  // Add button elements to the buttons container
  buttonsContainer.innerHTML = `
    
    <a  class="gmail-btn">
      <i class="bx bxl-gmail"></i>
    </a>
    <a href="https://www.linkedin.com/in/juansefdz/" class="linkedin-btn" target="_blank">
      <i class="bx bxl-linkedin"></i>
    </a>
    <a href="https://github.com/juansefdz" class="github-btn" target="_blank">
      <i class="bx bxl-github"></i>
    </a>
  `;
  
  // Append the buttons container to the buttons section
  buttonsSection.appendChild(buttonsContainer);

  // Add event listener to show/hide buttons based on scroll
  window.addEventListener("scroll", function() {
    const aboutMeSectionTop = aboutMeSection.offsetTop;
    const aboutMeSectionHeight = aboutMeSection.clientHeight;
    const scrollPosition = window.scrollY;

    if (scrollPosition >= aboutMeSectionTop && scrollPosition < aboutMeSectionTop + aboutMeSectionHeight) {
      buttonsContainer.classList.remove("hidden");
    } else {
      buttonsContainer.classList.add("hidden");
    }
  });
});

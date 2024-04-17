document.addEventListener("DOMContentLoaded", () => {
  projects();
});

async function projects() {
  const URL = "./json/projects.json";
  try {
    const answer = await fetch(URL);
    const information = await answer.json();
    console.log("Project data fetched successfully:", information);
    printProjects(information);
  } catch (error) {
    console.error("Error fetching project data:", error);
  }
  
  function printProjects(information) {
    const cardContainer = document.querySelector(".projects-container");
    if (!cardContainer || !information || information.length === 0) {
      console.warn("No projects container found or empty project data");
      return;
    }
    console.log("Printing projects...");
    information.forEach((project) => {
      const projectContainer = document.createElement("div");
      projectContainer.classList.add("card");
      projectContainer.innerHTML = `
        <div class="face front">
          <img src="${project.imagen}" alt="${project.project_name}" />
          <h3>${project.project_name}</h3>
        </div>
        <div class="face back">
          <h3>${project.project_name}</h3>
          <p>${project.info}</p>
          <div class="link">
            <a href="${project.website}" target="_blank">Detalles</a>
          </div>
        </div>`;
      cardContainer.appendChild(projectContainer);
    });
  }
}
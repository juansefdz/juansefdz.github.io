const cardContainer = document.querySelector(".projects-container");

document.addEventListener("DOMContentLoaded", () => {
  printProjects();
});

async function printProjects() {
  const URL = "./json/projects.json";
  const answer = await fetch(URL);
  information = await answer.json();
  printMisiones(information);
}
function printMisiones(information) {
  if (!information || information.length === 0) {
    const alert = document.createElement("h2");
    alert.textContent = "No projects found to show";
    alert.classList.add("alert");
    cardContainer.appendChild(alert); // Cambiado de contenedorTarjetas a cardContainer
    return;
  }
  information.forEach((proyect) => {
    const proyectsContainer = document.createElement("div");
    proyectsContainer.classList.add("card");
    proyectsContainer.innerHTML = `
        <div class="face front">
            <img src="${proyect.imagen}" alt="${proyect.project_name}" />
            <h3>${proyect.project_name}</h3>
        </div>
        <div class="face back">
            <h3>${proyect.project_name}</h3>
            <p>${proyect.info}</p>
            <div class="link">
                <a href="${proyect.website}" target="_blank">Details</a>
            </div>
        </div>`;
    cardContainer.appendChild(proyectsContainer);
  });
}


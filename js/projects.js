const cardContainer = document.querySelector(".projects-container");

document.addEventListener("DOMContentLoaded", () => {
    printProjects();
});

async function printProjects() {
    const URL = "./json/projects.json";
    try {
        const answer = await fetch(URL);
        const information = await answer.json();
        printMisiones(information);
    } catch (error) {
        console.error("Error al obtener los datos de los proyectos:", error);
    }
}

function printMisiones(information) {
    if (!information || information.length === 0) {
        const alert = document.createElement("h2");
        alert.textContent = "No se encontraron proyectos para mostrar";
        alert.classList.add("alert");
        cardContainer.appendChild(alert);
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
                    <a href="${proyect.website}" target="_blank">Detalles</a>
                </div>
            </div>`;
        cardContainer.appendChild(proyectsContainer);
    });
}

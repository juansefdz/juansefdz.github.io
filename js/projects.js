const btnBackend = document.querySelector(".btnBackend");
const btnFrontend = document.querySelector(".btnFrontend");
const btnFullStack = document.querySelector(".btnFullStack");
const cardsContainer = document.querySelector(".page-content");

document.addEventListener("DOMContentLoaded", () => {
  getData("Frontend");
});

btnBackend.addEventListener("click", (event) => {
  event.preventDefault();
  if (!btnBackend.classList.contains("btnOn")) {
    clean();
    btnFrontend.classList.remove("btnOn");
    btnFullStack.classList.remove("btnOn");
    btnBackend.classList.toggle("btnOn");
    getData("Backend");
  }
});

btnFrontend.addEventListener("click", (event) => {
  event.preventDefault();
  if (!btnFrontend.classList.contains("btnOn")) {
    clean();
    btnBackend.classList.remove("btnOn");
    btnFullStack.classList.remove("btnOn");
    btnFrontend.classList.toggle("btnOn");
    getData("Frontend");
  }
});

btnFullStack.addEventListener("click", (event) => {
  event.preventDefault();
  if (!btnFullStack.classList.contains("btnOn")) {
    clean();
    btnFrontend.classList.remove("btnOn");
    btnBackend.classList.remove("btnOn");
    btnFullStack.classList.toggle("btnOn");
    getData("Fullstack");
  }
});

function clean() {
  Array.from(cardsContainer.children).forEach((child) => {
    if (!child.classList.contains("shadow")) {
      cardsContainer.removeChild(child);
    }
  });
}

async function getData(category) {
  const url = "../../data/projects/projects.json";
  try {
    const response = await fetch(url);
    const data = await response.json();

    cardsContainer.innerHTML = ''; // Clear existing content before adding new content

    data[category].forEach((card) => {
      cardsContainer.innerHTML += `
      <div
        class="card"
        style="
          background-image: url('${card.imageUrl}');
          background-size: cover;
        "
      >
        <div class="content">
          <h2 class="title">${card.name}</h2>
          <p class="copy">
            ${card.description}
          </p>
          <a
            href="${card.url}"
            target="_blank"
            rel="noopener noreferrer"
            class="btn"
            >View Page</a>
        </div>
      </div>
      `;
    });
  } catch (error) {
    console.error(error);
  }
}

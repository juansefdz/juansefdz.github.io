const btnBackend = document.querySelector(".btnBackend");
const btnFrontend = document.querySelector(".btnFrontend");
const btnFullStack = document.querySelector(".btnFullStack");
const cardsContainer = document.querySelector(".page-content");

document.addEventListener("DOMContentLoaded", async () => {
  const languagesData = await fetchLanguagesData();
  getData("Frontend", languagesData);
});

btnBackend.addEventListener("click", async (event) => {
  event.preventDefault();
  if (!btnBackend.classList.contains("btnOn")) {
    btnFrontend.classList.remove("btnOn");
    btnFullStack.classList.remove("btnOn");
    btnBackend.classList.toggle("btnOn");
    const languagesData = await fetchLanguagesData();
    getData("Backend", languagesData);
  }
});

btnFrontend.addEventListener("click", async (event) => {
  event.preventDefault();
  if (!btnFrontend.classList.contains("btnOn")) {
    btnBackend.classList.remove("btnOn");
    btnFullStack.classList.remove("btnOn");
    btnFrontend.classList.toggle("btnOn");
    const languagesData = await fetchLanguagesData();
    getData("Frontend", languagesData);
  }
});

btnFullStack.addEventListener("click", async (event) => {
  event.preventDefault();
  if (!btnFullStack.classList.contains("btnOn")) {
    btnFrontend.classList.remove("btnOn");
    btnBackend.classList.remove("btnOn");
    btnFullStack.classList.toggle("btnOn");
    const languagesData = await fetchLanguagesData();
    getData("Fullstack", languagesData);
  }
});

function clean() {
  Array.from(cardsContainer.children).forEach((child) => {
    if (!child.classList.contains("shadow")) {
      cardsContainer.removeChild(child);
    }
  });
}

async function fetchLanguagesData() {
  const url = "../../data/projects/languages.json";
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.languages.reduce((acc, lang) => {
      acc[lang.name] = lang.logoUrl;
      return acc;
    }, {});
  } catch (error) {
    console.error("Error fetching languages data:", error);
    return {};
  }
}

async function getData(category, languagesData) {
  const url = "../../data/projects/projects.json";
  try {
    const response = await fetch(url);
    const data = await response.json();

    cardsContainer.innerHTML = '';

    data[category].forEach((card) => {
      const cardUrl = card.url.trim();
      const buttonHTML = cardUrl !== "" ? `<a href="${cardUrl}" target="_blank" rel="noopener noreferrer" class="btn">View Page</a>` : '';

      const languageLogosHTML = card.languages.map(lang => {
        return languagesData[lang] ? `<img src="${languagesData[lang]}" alt="${lang} Logo" class="logo">` : '';
      }).join('');

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
              <p class="copy">${card.description}</p>
              <div class="tech-logos">
                  ${languageLogosHTML}
              </div>
              ${buttonHTML}
          </div>
      </div>
      `;
    });
  } catch (error) {
    console.error("Error fetching projects data:", error);
  }
}

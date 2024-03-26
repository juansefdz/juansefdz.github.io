// Función para cargar los proyectos desde el archivo JSON
async function fetchProjects() {
    try {
        const response = await fetch('./json/projects.json');
        const projects = await response.json();
        displayProjects(projects);
    } catch (error) {
        console.error('Error fetching projects:', error);
    }
}

// Función para construir el slider con los datos de los proyectos
function displayProjects(projects) {
    const sliderContainer = document.querySelector('.slider-container');

    if (!projects || projects.length === 0) {
        const alert = document.createElement('h2');
        alert.textContent = 'No projects found to show';
        alert.classList.add('alert');
        sliderContainer.appendChild(alert);
        return;
    }

    projects.forEach(project => {
        const slide = document.createElement('div');
        slide.classList.add('slide');
        slide.style.backgroundImage = `url('${project.imagen}')`;

        const projectName = document.createElement('h2');
        projectName.textContent = project.project_name;
        slide.appendChild(projectName);

        sliderContainer.appendChild(slide);
    });

    initializeSlider();
}

// Función para inicializar el slider y agregar funcionalidades
function initializeSlider() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(n) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    // Crear botones de navegación
    const prevButton = document.createElement('button');
    prevButton.classList.add('prev');
    prevButton.innerHTML = '&#10094;';
    prevButton.addEventListener('click', prevSlide);

    const nextButton = document.createElement('button');
    nextButton.classList.add('next');
    nextButton.innerHTML = '&#10095;';
    nextButton.addEventListener('click', nextSlide);

    // Agregar los botones al contenedor del slider
    const sliderContainer = document.querySelector('.slider-container');
    sliderContainer.appendChild(prevButton);
    sliderContainer.appendChild(nextButton);

    setInterval(nextSlide, 90000); // Cambia automáticamente cada 5 segundos

    showSlide(currentSlide);
}

fetchProjects();

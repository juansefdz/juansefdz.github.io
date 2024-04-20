// Define una función para cambiar el idioma a español
function cambiarAEspanol() {
    // Cambia el atributo "lang" del elemento <html> a "es"
    document.documentElement.lang = "es";
  
    // Modifica el texto de los elementos relevantes a español
    document.querySelectorAll(".header-info a").forEach(function(link) {
      switch (link.innerText) {
        case "MAIN":
          link.innerText = "PRINCIPAL";
          break;
        case "ABOUT ME":
          link.innerText = "SOBRE MÍ";
          break;
        case "PROJECTS":
          link.innerText = "PROYECTOS";
          break;
        case "SERVICES":
          link.innerText = "SERVICIOS";
          break;
        case "CONTACT ME":
          link.innerText = "CONTÁCTAME";
          break;
      }
    });
  
    // Modifica el texto del encabezado principal
    document.querySelector("#main h1").innerText = "JUAN SEBASTIÁN\nFERNÁNDEZ MONTOYA";
  
    // Modifica el texto de la sección "About Me"
    document.querySelector("#aboutMe .personal-presentation h1").innerText = "SOBRE MÍ";
    document.querySelector("#aboutMe .personal-presentation h1 + h1").innerText = "Soy Juan Sebastián Fernández Montoya, un apasionado Desarrollador de Software con sólida experiencia en Python y Java, MySQL. Además, tengo habilidades en desarrollo frontend utilizando HTML, CSS y JavaScript.\n\nMi enfoque integral me ha permitido liderar proyectos desde la concepción hasta la implementación, destacándome por crear soluciones innovadoras que impulsan el éxito del equipo. Estoy comprometido con la excelencia técnica y la entrega de productos de alta calidad que superen las expectativas del cliente. Estoy emocionado de seguir creciendo profesionalmente y asumiendo nuevos desafíos en el mundo del desarrollo de software.";
  
    // Modifica el texto de las habilidades técnicas
    document.querySelectorAll("#aboutMe .tech-skills-info h1").forEach(function(skill) {
      switch (skill.innerText) {
        case "HTML":
          skill.innerText = "HTML";
          break;
        case "CSS":
          skill.innerText = "CSS";
          break;
        case "JavaScript":
          skill.innerText = "JavaScript";
          break;
        case "MYSQL":
          skill.innerText = "MySQL";
          break;
        case "JAVA":
          skill.innerText = "Java";
          break;
        case "SPRINGBOOT":
          skill.innerText = "Spring Boot";
          break;
      }
    });
  
    // Modifica el texto de las habilidades blandas
    document.querySelectorAll("#aboutMe .soft-skills h1").forEach(function(skill) {
      switch (skill.innerText) {
        case "Teamwork":
          skill.innerText = "Trabajo en equipo";
          break;
        case "Problem Solving":
          skill.innerText = "Resolución de problemas";
          break;
        case "Self Motivation":
          skill.innerText = "Auto motivación";
          break;
        case "decisiveness":
          skill.innerText = "Decisión";
          break;
      }
    });
  
    // Modifica el texto de la sección "Projects"
    document.querySelector("#projects h1").innerText = "PROYECTOS";
    document.querySelector("#projects .backend-project-container h1").innerText = "ZONA BACKEND";
  
    // Modifica el texto de la sección "Services"
    document.querySelectorAll("#services h1.glitch").forEach(function(title) {
      switch (title.innerText) {
        case "SERVICES":
          title.innerText = "SERVICIOS";
          break;
        case "Custom Web Application Development":
          title.innerText = "Desarrollo de Aplicaciones Web Personalizadas";
          break;
        case "APIs and Systems Integration":
          title.innerText = "Integración de APIs y Sistemas";
          break;
        case "Performance and Scalability Optimization":
          title.innerText = "Optimización de Rendimiento y Escalabilidad";
          break;
        case "Security and Data Protection":
          title.innerText = "Seguridad y Protección de Datos";
          break;
      }
    });
  
    // Modifica el texto del contenido de los servicios
    document.querySelectorAll("#services .card_services p").forEach(function(service) {
      switch (service.innerText) {
        case "I specialize in providing high-quality professional services to meet your business needs. I am committed to offering innovative and customized solutions in the following areas:":
            service.innerText = "Me especializo en proporcionar servicios profesionales de alta calidad para satisfacer las necesidades de tu negocio. Estoy comprometido a ofrecer soluciones innovadoras y personalizadas en las siguientes áreas:";
            break;
        case "I transform your ideas into powerful web applications, tailored to your specific needs and optimized for exceptional performance.":
          service.innerText = "Transformo tus ideas en poderosas aplicaciones web, adaptadas a tus necesidades específicas y optimizadas para un rendimiento excepcional.";
          break;
        case "I connect your systems and platforms through seamless API integrations, ensuring efficient and secure communication between your applications.":
          service.innerText = "Conecto tus sistemas y plataformas a través de integraciones de API fluidas, garantizando una comunicación eficiente y segura entre tus aplicaciones.";
          break;
        case "I enhance the speed and scalability of your existing applications, ensuring a smooth experience for your users even during high-demand periods.":
          service.innerText = "Mejoro la velocidad y escalabilidad de tus aplicaciones existentes, garantizando una experiencia fluida para tus usuarios incluso durante períodos de alta demanda.";
          break;
        case "I implement robust security measures to safeguard your confidential data and ensure compliance with regulations, providing you with peace of mind and confidence in your platform.":
          service.innerText = "Implemento medidas de seguridad robustas para proteger tus datos confidenciales y garantizar el cumplimiento de las regulaciones, brindándote tranquilidad y confianza en tu plataforma.";
          break;
      }
    });
  }
  
  // Define una función para cambiar el idioma a inglés
  function cambiarAIngles() {
    // Cambia el atributo "lang" del elemento <html> a "en"
    document.documentElement.lang = "en";
  
    // Modifica el texto de los elementos relevantes a inglés
    document.querySelectorAll(".header-info a").forEach(function(link) {
      switch (link.innerText) {
        case "PRINCIPAL":
          link.innerText = "MAIN";
          break;
        case "SOBRE MÍ":
          link.innerText = "ABOUT ME";
          break;
        case "PROYECTOS":
          link.innerText = "PROJECTS";
          break;
        case "SERVICIOS":
          link.innerText = "SERVICES";
          break;
        case "CONTÁCTAME":
          link.innerText = "CONTACT ME";
          break;
      }
    });
  
    // Modifica el texto del encabezado principal
    document.querySelector("#main h1").innerText = "JUAN SEBASTIÁN\nFERNÁNDEZ MONTOYA";
    
    // Modifica el texto de la sección "About Me"
    document.querySelector("#aboutMe .personal-presentation h1").innerText = "ABOUT ME";
    document.querySelector("#aboutMe .personal-presentation h1 + h1").innerText = "I'm Juan Sebastián Fernández Montoya, a passionate Software Developer with solid experience in Python and Java, MySql. Additionally, I have skills in Frontend development using HTML, CSS, and JavaScript.\n\nMy comprehensive approach has allowed me to lead projects from conception to implementation, standing out for creating innovative solutions that drive team success. I am committed to technical excellence and delivering high-quality products that exceed client expectations. I am excited to continue growing professionally and taking on new challenges in the software development world.";
  
    // Modifica el texto de las habilidades técnicas
    document.querySelectorAll("#aboutMe .tech-skills-info h1").forEach(function(skill) {
      switch (skill.innerText) {
        case "HTML":
          skill.innerText = "HTML";
          break;
        case "CSS":
          skill.innerText = "CSS";
          break;
        case "JavaScript":
          skill.innerText = "JavaScript";
          break;
        case "MySQL":
          skill.innerText = "MYSQL";
          break;
        case "Java":
          skill.innerText = "JAVA";
          break;
        case "Spring Boot":
          skill.innerText = "SPRINGBOOT";
          break;
      }
    });
  
    // Modifica el texto de las habilidades blandas
    document.querySelectorAll("#aboutMe .soft-skills h1").forEach(function(skill) {
      switch (skill.innerText) {
        case "Trabajo en equipo":
          skill.innerText = "Teamwork";
          break;
        case "Resolución de problemas":
          skill.innerText = "Problem Solving";
          break;
        case "Auto motivación":
          skill.innerText = "Self Motivation";
          break;
        case "Decisión":
          skill.innerText = "decisiveness";
          break;
      }
    });
  
    // Modifica el texto de la sección "Projects"
    document.querySelector("#projects h1").innerText = "PROJECTS";
    document.querySelector("#projects .backend-project-container h1").innerText = "BACKEND ZONE";
  
    // Modifica el texto de la sección "Services"
    document.querySelectorAll("#services h1.glitch").forEach(function(title) {
      switch (title.innerText) {
        case "SERVICIOS":
          title.innerText = "SERVICES";
          break;
        case "Desarrollo de Aplicaciones Web Personalizadas":
          title.innerText = "Custom Web Application Development";
          break;
        case "Integración de APIs y Sistemas":
          title.innerText = "APIs and Systems Integration";
          break;
        case "Optimización de Rendimiento y Escalabilidad":
          title.innerText = "Performance and Scalability Optimization";
          break;
        case "Seguridad y Protección de Datos":
          title.innerText = "Security and Data Protection";
          break;
      }
    });
  
    // Modifica el texto del contenido de los servicios
    document.querySelectorAll("#services .card_services p").forEach(function(service) {
      switch (service.innerText) {
        case "Transformo tus ideas en poderosas aplicaciones web, adaptadas a tus necesidades específicas y optimizadas para un rendimiento excepcional.":
          service.innerText = "I transform your ideas into powerful web applications, tailored to your specific needs and optimized for exceptional performance.";
          break;
        case "Conecto tus sistemas y plataformas a través de integraciones de API fluidas, garantizando una comunicación eficiente y segura entre tus aplicaciones.":
          service.innerText = "I connect your systems and platforms through seamless API integrations, ensuring efficient and secure communication between your applications.";
          break;
        case "Mejoro la velocidad y escalabilidad de tus aplicaciones existentes, garantizando una experiencia fluida para tus usuarios incluso durante períodos de alta demanda.":
          service.innerText = "I enhance the speed and scalability of your existing applications, ensuring a smooth experience for your users even during high-demand periods.";
          break;
        case "Implemento medidas de seguridad robustas para proteger tus datos confidenciales y garantizar el cumplimiento de las regulaciones, brindándote tranquilidad y confianza en tu plataforma.":
          service.innerText = "I implement robust security measures to safeguard your confidential data and ensure compliance with regulations, providing you with peace of mind and confidence in your platform.";
          break;
      }
    });
  }
  
  // Event listeners para los botones de cambio de idioma
  document.getElementById("btn-espanol").addEventListener("click", cambiarAEspanol);
  document.getElementById("btn-ingles").addEventListener("click", cambiarAIngles);
  
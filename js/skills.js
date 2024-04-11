const SkillContainer = document.querySelector("#skills");

document.addEventListener("DOMContentLoaded", () => {
  printSkills();
});
function printSkills() {
  const Skills = document.createElement("div");
  Skills.classList.add("card");
  Skills.innerHTML = `
  <div class="skills-container">
  <div class="tech-skills">
    <h1>TECH SKILLS</h1>
    <div class="tech-skills-container">
      <div class="lenguage">
        <img class="logo" src="https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png" alt="Logo de HTML">
        <h1>HTML</h1>
        <p>middle</p>
      </div>
      <div class="lenguage">
        <img class="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" alt="Logo CSS">
        <h1>CSS</h1>
        <p>middle</p>
      </div>
      <div class="lenguage">
        <img class="logo" src="https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png" alt="Logo de JavaScript">
        <h1>JavaScript</h1>
        <p>middle</p>
      </div>
      <div class="lenguage">
        <img class="logo" src="https://pngimg.com/d/mysql_PNG23.png" alt="Logo de SQL">
        <h1>MYSQL</h1>
        <p>middle</p>
      </div>
      <div class="lenguage">
        <img class="logo" src="https://cdn-icons-png.flaticon.com/512/226/226777.png" alt="Logo de java">
        <h1>JAVA</h1>
        <p>middle</p>
      </div>
      <div class="lenguage">
        <img class="logo" src="https://cms.rootstack.com/sites/default/files/inline-images/spring-boot.png" alt="Logo de java">
        <h1>SPRINGBOOT</h1>
        <p>Soon</p>
      </div>
    </div>
  </div>
  <div class="soft-skills">
    <h1>SOFT SKILLS</h1>
    <div class="soft-skills-container">
      <div class="lenguage">
        <img class="logo" src="./Displays/img/softSkills/discussion.png" alt="Logo de HTML">
        <h1>Teamwork</h1>
      </div>
      <div class="lenguage">
        <img class="logo" src="./Displays/img/softSkills/learning.png" alt="Logo CSS">
        <h1>Problem Solving</h1>
      </div>
      <div class="lenguage">
        <img class="logo" src="./Displays/img/softSkills/self-improvement.png" alt="Logo de JavaScript">
        <h1>Self Motivation</h1>
      </div>
      <div class="lenguage">
        <img class="logo" src="./Displays/img/softSkills/skill.png" alt="Logo de SQL">
        <h1>decisiveness</h1>
      </div>
    </div>
  </div>
  
  
</div>`;

  SkillContainer.appendChild(Skills);
}

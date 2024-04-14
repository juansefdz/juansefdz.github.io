const SkillContainer = document.querySelector("#skills");

document.addEventListener("DOMContentLoaded", () => {
  printSkills();
});
function printSkills() {
  const Skills = document.createElement("div");
  Skills.classList.add("card");
  Skills.innerHTML = `
 
  
  
</div>`;

  SkillContainer.appendChild(Skills);
}

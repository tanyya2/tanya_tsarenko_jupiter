
const today = new Date();
const thisYear = today.getFullYear();
const body = document.querySelector('body');
const footer = document.createElement('footer');
const copyright = document.createElement('p');

copyright.innerHTML = `Tetiana Tsarenko &copy; ${thisYear}`;

footer.appendChild(copyright);
body.appendChild(footer);

const skills = ["JavaScript", "HTML", "CSS", "Git", "GitHub"]

const skillsSection = document.getElementById('skills')

const skillsList = skillsSection.querySelector('ul');
for(let i = 0; i < skills.length; i++) {
    const skill = document.createElement("li");
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill)
}
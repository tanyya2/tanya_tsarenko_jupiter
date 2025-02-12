
const today = new Date();
const thisYear = today.getFullYear();
const body = document.querySelector('body');
const footer = document.createElement('footer');
const copyright = document.createElement('p');

copyright.innerHTML = `Tetiana Tsarenko &copy; ${thisYear}`;

footer.appendChild(copyright);
body.appendChild(footer);

const skills = ["JavaScript", "HTML", "CSS", "Git", "GitHub"]

const skillsSection = document.getElementById('skills');

const skillsList = skillsSection.querySelector('ul');
for(let i = 0; i < skills.length; i++) {
    const skill = document.createElement("li");
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill)
}
document.addEventListener("DOMContentLoaded", function () {
    const navbarHeight = document.querySelector(".ancor-links-and-location").offsetHeight; // Get the navbar height
    const links = document.querySelectorAll(".top-left a"); // Select all anchor links
  
    links.forEach(link => {
      link.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default jump behavior
  
        const targetId = this.getAttribute("href").substring(1); 
        const targetElement = document.getElementById(targetId); 
  
        if (targetElement) {
          const targetPosition = targetElement.offsetTop - navbarHeight - 20; 
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth" 
          });
        }
      });
    });
  });
const messageForm = document.forms['leave_message'];
messageForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const userName = event.target.usersName.value;
    const userEmail = event.target.usersEmail.value;
    const userMessage = event.target.usersMessage.value;

    console.log(userName, userEmail, userMessage);
    messageForm.reset();
    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
    newMessage.innerHTML = 
    `<a href="mailto:${userEmail}">${userName}</a>
    <span>: ${userMessage}</span>`
    const removeButton = document.createElement('button');
    removeButton.innerHTML = "remove";
    removeButton.setAttribute('type', 'button');
    removeButton.addEventListener('click', function(event) {
        const entry = event.target.parentNode;; 
        entry.remove(); 
    });
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
})

const myUserName = "tanyya2"
fetch(`https://api.github.com/users/${myUserName}/repos`)
    .then(response => {
        if (!response.ok) {
        throw new Error('Request failed');
        }
        return response.json(); 
  })
  // get the data
.then(data => {
    console.log('json data = ', data); // Do something with the data
    const repositories = [...data];
    console.log('repositories array = ', repositories);
    
    // find and select the project section
    const projectSection = document.getElementById("projects");
    const projectList = projectSection.querySelector("ul");
    for(let i = 0; i< repositories.length; i++) {
        let project = document.createElement("li");
        // Make the project name a clickable link
        let link = document.createElement("a");
        link.href = repositories[i].html_url;
        link.innerText = repositories[i].name; // Show the repo name 
        link.target = "_blank";
        project.appendChild(link);
        projectList.appendChild(project);
    }
})

  .catch(error => {
    console.error('An error occurred:', error);
  });
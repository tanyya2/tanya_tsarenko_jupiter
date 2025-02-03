
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
    newMessage.innerHTML = `
    <a href="mailto:${userEmail}">${userName}</a>
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
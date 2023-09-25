const title = document.getElementById('title');
function toggleActive() {
    title.classList.toggle('active');
}
setInterval(toggleActive, 900);

const profile = document.getElementById('profile');
const content = document.getElementById('content');
const project = document.getElementById('project');
const profileItem = document.getElementById('profile-item');
const contentItem = document.getElementById('content-item');
const projectItem = document.getElementById('project-item');

function showItem(btn, element) {
    btn.addEventListener('click', () => {
        profileItem.style.display = 'none';
        contentItem.style.display = 'none';
        projectItem.style.display = 'none';
        element.style.display = 'flex';
    });
}

showItem(profile, profileItem);
showItem(content, contentItem);
showItem(project, projectItem);

const title = document.getElementById('title');
function toggleActive() {
    title.classList.toggle('active');
}
setInterval(toggleActive, 900);

const yearSpan = document.getElementById('current-year');
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

function openMenu(){
    document.body.classList += " menu--open"
}

function closeMenu(){
    document.body.remove('menu--open')
}
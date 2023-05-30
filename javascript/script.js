// Toggle class active
const navbarNav = document.querySelector('.navbar-nav')
// when menu clicked
document.querySelector('#hamburger-menu').
onclick = () => {
    navbarNav.classList.toggle('active');
}

// Close Sidebar
const hamburgerMenu = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
if(!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)){
    navbarNav.classList.remove('active')
}
})
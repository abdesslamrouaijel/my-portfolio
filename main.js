// Toggle Navbar for Mobile
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Changes menu icon to an 'X'
    navbar.classList.toggle('active');
};

// Close menu when a link is clicked
window.onscroll = () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Your existing Typed.js code
var typed = new Typed(".text", {
    strings: ["future AI engineer", "Data Science enthusiast", "AI practitioner"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 600,
    loop: true
});

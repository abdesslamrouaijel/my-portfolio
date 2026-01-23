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
    strings: ["Robotics Engineer", "Data Scientist", "ML Practitioner"],
    typeSpeed: 70,       // Slightly faster for a professional feel
    backSpeed: 40,        // Slower backspace looks more natural
    backDelay: 1500,      // Wait longer before deleting so people can read it
    startDelay: 500,      // Small pause before it starts
    loop: true,
    showCursor: true,     // Essential for the "terminal" AI look
    cursorChar: '|',
    autoInsertCss: true,
});

const hamburger = document.querySelector('.hamburger');
console.log(hamburger)
const navbarLinks = document.querySelector('.navbar-links');
console.log(navbarLinks)

hamburger.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});
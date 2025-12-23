// get the fixed navbar height
let navbar = document.querySelector(".navbar-nav");
let navbarHeight = navbar ? navbar.offsetHeight : 0;

let sections = document.querySelectorAll(".container-lg"); // target all sections
let navlink = document.querySelectorAll(".nav-link");


window.onscroll = () => {
    sections.forEach(se => {
        let top = window.scrollY;
        let offset = se.offsetTop - navbarHeight; // start detecting before section
        let height = se.offsetHeight + navbarHeight; // include navbar height
        let id = se.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navlink.forEach(links => {
                links.classList.remove("active");
            });

            // select nav link that matches the section id
            let currentLink = document.querySelector(`.nav-link[href="#${id}"]`);
            if (currentLink) {
                currentLink.classList.add("active", true);
            }
        }
    });

    const navbarLinks = document.querySelectorAll('.navbar-nav .nav-link');

navbarLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbarLinks.forEach(l => l.classList.remove('active-link'));
    link.classList.add('active-link');
  });
});




    let navLinks = document.querySelectorAll('.nav-link');
    let navbarCollapse = document.querySelector('.navbar-collapse');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            let bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: false
            });
            bsCollapse.hide(); // close the menu
        });
    });
};


// scroll reveal  animation
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.homeContent, .heading', { origin: 'top' });
ScrollReveal().reveal('img', { origin: 'bottom' });
ScrollReveal().reveal('form, .card', { origin: 'bottom' });
ScrollReveal().reveal('.homeContent h1, .aboutImg', { origin: 'left' });
ScrollReveal().reveal('.homeContent p, .Content', { origin: 'right' });


const multi = new Typed('.multi-text', {
    strings: [ 'Web Developer','Frontend Developer', 'Backend Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
// navbar fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const textColor = document.querySelector('#text-header');
    // const hoverColor = document.querySelector('.text-navbar');
    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        textColor.classList.remove('text-primary');
        textColor.classList.add('text-white');
        // hoverColor.classList.remove('group-hover:text-primary');
        // hoverColor.classList.add('group-hover:text-white');

    } else {
        header.classList.remove('navbar-fixed');
        textColor.classList.remove('text-white');
        textColor.classList.add('text-primary');
        // hoverColor.classList.remove('group-hover:text-white');
        // hoverColor.classList.add('group-hover:text-primary');
    }
}


// Humberger

const humberger = document.querySelector('#humberger');
const navMenu = document.querySelector('#nav-menu');
humberger.addEventListener('click', function() {
    humberger.classList.toggle('humberger-active');
    navMenu.classList.toggle('hidden');
});
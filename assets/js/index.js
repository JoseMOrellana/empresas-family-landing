const navbar = document.querySelector('#navbar');
window.onload = () => {
    AOS.init();
    var scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: '#navbar-example',
    });
};

window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
        navbar.classList.remove('bg-transparent');
        navbar.classList.add('change-color');
    } else {
        navbar.classList.add('bg-transparent');
        navbar.classList.remove('change-color');
    }
});

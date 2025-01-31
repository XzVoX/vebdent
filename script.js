function toggleMenu() {
    const menu = document.querySelector('.nav-list');
    menu.classList.toggle('show');
}

// Osigurava da se navigacija pravilno prikazuje prilikom promjene veličine prozora
window.addEventListener('resize', () => {
    const menu = document.querySelector('.nav-list');
    const menuIcon = document.querySelector('.menu-icon');
    if (window.innerWidth > 768) {
        menu.classList.remove('show');
    }
});

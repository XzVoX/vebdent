function toggleMenu() {
    const menu = document.querySelector('.nav-list');
    const blur = document.getElementById('blur');
    menu.classList.toggle('show');
    blur.classList.toggle('show');
}

document.getElementById('blur').addEventListener('click', () => {
    document.querySelector('.nav-list').classList.remove('show');
    document.getElementById('blur').classList.remove('show');
});

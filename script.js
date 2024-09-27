function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

function closeMenu() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    sidebar.classList.remove('active');
    overlay.classList.remove('active');
}

function toggleMenu() {
    let menu = document.getElementById("menuItems");
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
    } else {
        menu.classList.add('active');
    }
}
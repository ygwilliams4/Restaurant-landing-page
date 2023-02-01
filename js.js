hamburger = document.querySelector(".hamburger");
hamburger.addEventListener(onclick, click);

function click() {
    navbar = document.querySelector(".nav-list");
    navbar.toggleClassList("active");
}
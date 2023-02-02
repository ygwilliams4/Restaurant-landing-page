hamburger = document.querySelector(".hamburger");

hamburger.onclick = function () {
    navbar = document.querySelector(".nav-list");
    navbar.classList.toggle("active");
}
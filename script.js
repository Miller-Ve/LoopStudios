var menuMobile = document.querySelector("#menuMobile");
var openMenu = document.querySelector("#hamburguer-open");
var closeMenu = document.querySelector("#hamburguer-close");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show() {
    menuMobile.style.display = 'flex';
    menuMobile.style.top = '0';
}

function close() {
    menuMobile.style.top = '-100%';
}


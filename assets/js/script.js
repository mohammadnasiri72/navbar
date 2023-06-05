var iconMenu = document.querySelector(".icon-menu")
var menu = document.querySelector(".menu")
var x = 0
iconMenu.addEventListener("click" , function(){
    if (x == 0) {
        menu.style.top = "0"
    iconMenu.classList.remove("material-symbols-outlined")
    iconMenu.innerHTML = "close"
    iconMenu.classList.add("material-symbols-outlined")
    iconMenu.style.color = "white"
    x = 1
    }else if (x == 1) {
        menu.style.top = "-100vh"
        iconMenu.innerHTML = "menu"
        iconMenu.classList.remove("material-symbols-outlined")
        iconMenu.classList.add("material-symbols-outlined")
        iconMenu.style.color = "black"
        x = 0
    }
})








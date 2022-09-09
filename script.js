
//search box for mobile
nav_menu = document.getElementById("nav-menu")
search_modal = document.getElementById("modal-box");
open_btn = document.getElementById("look-icon");
close_btn = document.getElementById("close-icon")
home = document.getElementById("home")

open_btn.onclick = function () {
    search_modal.style.display = "block";
    nav_menu.style.position = "relative";
}   

close_btn.onclick = function () {
    search_modal.style.display = "none";
    nav_menu.style.position = "fixed";
}
///////////////////////
//up to top button

up_btn = document.getElementById("up-button");
screen = document.getElementById("screen");

up_btn.onclick = function () {
    screen.scrollTo(0, 0);
    up_btn.style.background = "";
}


let h = window.innerHeight;
let w = window.innerWidth;
alert(w+"x"+h);

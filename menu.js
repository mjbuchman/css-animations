const menuButton = document.querySelector("#menu");
const menuArrow = document.querySelector("#menu img");
const menu = document.querySelector(".menu");
const sidenav = document.querySelector(".sidenav");

var count = 0;

function menuToggle(){
    if(count%2==0){
        sidenav.style.width = "50px";
        menu.style.right = "50px";
        menuArrow.style.transform = "rotate(180deg)";
    } else{
        sidenav.style.width = "0";
        menu.style.right = "0";
        menuArrow.style.transform = "rotate(0deg)";
    }
    count++;
}


menuButton.addEventListener("click", menuToggle, false);

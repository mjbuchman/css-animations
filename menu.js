// Pull sections of document as needed for script:
const menuButton = document.querySelector("#menu");
const menuArrow = document.querySelector("#menu img");
const menu = document.querySelector(".menu");
const sidenav = document.querySelector(".sidenav");
const infoButton = document.querySelector("#info");
const infoTextBox = document.querySelector("#info-text");
const infoText = document.querySelector("#info-text p");

var menuCount = 0;
var infoCount = 0;

// Toggle the menu:
function menuToggle(){
    if(menuCount%2==0){
        sidenav.style.width = "50px";
        menu.style.right = "50px";
        menuArrow.style.transform = "rotate(180deg)";
    } else{
        sidenav.style.width = "0";
        menu.style.right = "0";
        menuArrow.style.transform = "rotate(0deg)";
        infoTextBox.style.width = '0';
        infoText.style.visibility = "hidden";
        infoCount++;
    }
    menuCount++;
}

// Toggle the info card:
function displayInfo(){
    if(infoCount%2==0){
        infoTextBox.style.width = "240px";
        infoText.style.visibility = "visible";
    } else{
        infoTextBox.style.width = '0';
        infoText.style.visibility = "hidden";
    }
    infoCount++;
}

// Event listeners for keyboard input and the reset/night mode buttons:
menuButton.addEventListener("click", menuToggle, false);
infoButton.addEventListener("click", displayInfo, false);

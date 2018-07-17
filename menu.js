const menuButton = document.querySelector("#menu");
const menuArrow = document.querySelector("#menu img");
const menu = document.querySelector(".menu");
const sidenav = document.querySelector(".sidenav");
const githubButton = document.querySelector("#github");
const linkedinButton = document.querySelector("#linkedinMJB");
const portfolioButton = document.querySelector("#portfolio");
const infoButton = document.querySelector("#info");
const infoTextBox = document.querySelector("#info-text");
const infoText = document.querySelector("#info-text p");


var menuCount = 0;
var infoCount = 0;

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

function visitGithub(){
    window.location = 'https://github.com/mjbuchman/css-animations';
}

function visitLinkedIn(){
    window.location = 'https://www.linkedin.com/in/mjbuchman/';
}

function visitPortfolio(){
    window.location = 'https://mbuchman.carbonmade.com/';
}

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


menuButton.addEventListener("click", menuToggle, false);
githubButton.addEventListener("click", visitGithub, false);
linkedinButton.addEventListener("click", visitLinkedIn, false);
portfolioButton.addEventListener("click", visitPortfolio, false);
infoButton.addEventListener("click", displayInfo, false);

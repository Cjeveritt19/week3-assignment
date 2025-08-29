console.log("Hello World");

const cookie = document.getElementById("cookie")
const cookieCountDisplay = document.getElementById("cookie-count")
const cpsDisplay = document.getElementById("cps")
const upgradeButton = document.getElementById("upgrade")


let cookieCount = 0;
let cps = 0;

cookie.addEventListener("click", updateCookieCountDisplay)



function updateCookieCountDisplay() {
    cookieCountDisplay.innerText = "You have " + cookieCount +  " cookies!";
}

updateCookieCountDisplay()
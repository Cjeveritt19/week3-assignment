console.log("hello world")

// game logic
// when the user clicks on the cookie, the total count of cookies goes up by 1 
const cookieButton = document.getElementById("cookie-button");
// when the user clicks on the buy button in an upgrade in the shop, the total count of cookies goes down by the cost of the upgrade, and the cps value goes up
const upgrades = document.getElementById("upgrades");

const cookieAmmount = document.getElementById("cookieAmmount")

let cookies = 0;
let clickValue =  1;

let upgrade = 10;
let upgradeCost = 100;

const image = document.querySelector("img") ;
    image.addEventListener("click", updateCookieAmmount => {})

// you will need functions to contain the game logic 

// to create the logic for the shop upgrades: 
// OPTION 1: you could have a function per upgrade
// OPTION 2: you could have a reuseable function that works for ALL the upgrades 
function updateCookieAmmount() {
    cookieAmmount.innerText = "You have" + cookies  +  "cookies!"
}

updateCookieAmmount()
// tip on local storage:
// -make sure the local storage values are update after the user buys an upgrade or when the user clicks on the cookie

//  data storage 
// let cookieCount = 0;
// let cps = 0;

// let stats = {
//     cookiecount: 0,
//     cps: 0,
// };

// if there is data in local storage, update stats with this data, so the user picks it up where they left off


// --------------------

// shop upgrades

// fetch the upgrades from the APIs


// to create mulitple elements in a more convenient way, you can use a loop!


// TODO: create DOM elements to contain the upgrades in the shop
// create an element 
// assign the value to its text contain
// append it to the DOM


//  after you complete this task, you should see the upgrades on your page
// ---------------------------------------------------


// the interval

// setInterval( function() {
//     cookieCount += cps; // cookiecount = cookieCount += cps
//     // update the DOM to reflect the changes in the values 
//     // save values to the local storage 
// }, 1000);
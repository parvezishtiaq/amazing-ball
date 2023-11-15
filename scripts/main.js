/*
const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello Bangladesh!";

document.querySelector("img").addEventListener("click", () => {
    alert("Ouch! Stop poking me!");
  });
*/

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/blue-ball.svg") {
    myImage.setAttribute("src", "images/red-ball.svg");
  } else {
    myImage.setAttribute("src", "images/blue-ball.svg");
  }
};


// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Amazing! ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Amazing! ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

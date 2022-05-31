const unsorted = "qwertyuiopasdfghjklzxcvbnm";
var lowercaseArray = unsorted.split("").sort();
var uppercaseArray = unsorted.toUpperCase().split("").sort();
const badnumbers = "0123456789";
var numberArray = badnumbers.split("");
const badsymbols = "!@#$%^&*()-=_+`~:/?.>,<;'";
var symbolArray = badsymbols.split("");
var passArray1 = lowercaseArray.concat(
  uppercaseArray.concat(numberArray.concat(symbolArray))
);
var passArray2 = lowercaseArray.concat(uppercaseArray.concat(numberArray));
var passArray3 = lowercaseArray.concat(uppercaseArray);

var genbtn = document.querySelector("#generatebutton");
var symboltoggle = document.querySelector("#symboltoggle");
var passfield = document.querySelector("#passwordfield");
var passlength = document.querySelector("#passwordlength");

passlength.value = 12;

console.log("script loaded");

genbtn.addEventListener("click", generatePassword);

function generatePassword(event) {
  event.preventDefault();
  if (symboltoggle.checked) {
    console.log("symbols allowed");
    var password = "";
    for (let i = 0; i < passlength.value; i++) {
      var passChar = passArray1[Math.floor(Math.random() * passArray1.length)];
      var password = password.concat(passChar);
    }
    passfield.value = password;
  } else {
    console.log("symbols not allowed");
    var password = "";
    for (let i = 0; i < passlength.value; i++) {
      var passChar = passArray2[Math.floor(Math.random() * passArray2.length)];
      var password = password.concat(passChar);
    }
    passfield.value = password;
  }
}
// Alter code below and add checkboxes for each
// symbols = window.confirm("Click OK to allow special characters");
//     if (symbols == true) {
//       passwordArray = passwordArray.concat(symbolArray);
//     }
//     console.log(symbols);
//     numbers = window.confirm("Click OK to allow numbers");
//     if (numbers == true) {
//       passwordArray = passwordArray.concat(numberArray);
//     }
//     console.log(numbers);
//     upperCase = window.confirm("Click OK to allow upper case letters");
//     if (upperCase == true) {
//       passwordArray = passwordArray.concat(uppercaseArray);
//     }
// TODO: Allow for user to set Rules (ie. at least 1 special character, X number of Capitals)
// TODO: Add Copy to clipboard button

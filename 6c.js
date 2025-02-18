Script1.js:
let name = prompt("What is your name?");
document.writeln("Hello, " + name + "!");
let response = confirm("Are you sure?");
if (response) {
 document.writeln("You clicked OK!");
} else {
 document.writeln("You clicked Cancel!");
}
let form = document.getElementById("myForm");
let inputField = 
document.getElementById("myInput");
form.addEventListener("submit", function(event) {
 event.preventDefault();
 let inputValue = inputField.value;
 document.writeln("You entered: " + inputValue);
});
(Node.js)  
environment
const readline = require("readline");
const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});
rl.question("What is your name? ", 
function(answer) {
 console.log("Hello, " + answer + "!");
 rl.close();
});
1. prompt() function: Displays a pop-up prompt box 
that asks the user for input.
2. confirm() function: Displays a pop-up 
confirmation box that asks the user to confirm or 
cancel.
3. HTML form and JavaScript: Uses an HTML 
form to collect user input, and JavaScript to process 
the input.
4. readline() function (Node.js): Uses the readline 
module in Node.js to read user input from the 
console
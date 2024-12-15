const prompt = require('prompt-sync')();
// //npm install prompt-sync
function factorial(num) {
    
     if (num === 0) {
     return 1;
     }     
     return num * factorial(num - 1);
     }

const userInput = prompt("Please enter number: ");
console.log(factorial(userInput));
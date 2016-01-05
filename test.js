// imports
var Stack = require('./stack');

var myStack = new Stack();

myStack.push({name: 'Butters', age: 9});  // 1
myStack.push({name: 'Stan',    age: 10}); // 2
myStack.push({name: 'Kyle',    age: 10}); // 3

var kyle    = myStack.pop(); // 3
var stan    = myStack.pop(); // 2
var butters = myStack.pop(); // 1

console.log({ kyle, stan, butters });

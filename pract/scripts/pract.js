// Declare and Instantiate Variables of different types and then add them together using the + operator.
const one = 1;
let two = '2';
let result = one + two;
output("#1", result); // 💡output function defined below
// ❔1️⃣: Why is the result variable value assigned '12' versus 3?

// Using built-in JS functions, change variable data types
result = one + parseInt(two); 
output("#2", result);
// ❔2️⃣: Note the output. What are some other built in functions or methods that can change a string (sequence of characters) to a number?

// What about multiplication?
result = one * two;
output("#3", result);
// ❔3️⃣: Was the result what you expected?

// A new variable is declared and assigned an alpha character and added to the varaible identified as one.
const three = "e";
result = one * three;
output("#4", result);
// ❔4️⃣: What is the meaning and definition of the acronym NaN?

// Let's try changing the value of the variable two.
two = 4;
result = one + two;
output("#5", result);
// ❔5️⃣: Did we get the value we expected? Why didn't it work?
// Turn on the console panel (bottom left of screen) in order to view the error. Fix the error by changing how the variable two was declared.

// Let's declare an array and initialize it with 4 values
const myArray = [1,2,3,4,5];
result = myArray;
output("#6", result); 
// ❔6️⃣: Change the array to by adding in the number 4 in its correct ascending order position.


// ***************************************
// The function output defined below is used to aid in displaying the results by appending the output paragraph with an id attribute of 'output'
function output(linenumber, content) {
  const outputElement = document.querySelector('#output');
  outputElement.innerHTML += `<p><strong>${linenumber}</strong>:  ${content}</p>`;
}

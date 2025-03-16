//You can think of a loop as a computerized version 
// of the game where you tell someone to take 
// X steps in one direction, then Y steps in another. 
// For example, the idea "Go five steps to the east" could be expressed this way as a loop

for (let step = 0; step < 5; step++) {
    // Runs 5 times, with values of step 0 through 4.
    console.log("Walking east one step");
}

// do...while statement
let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);

//while statement
//The following while loop iterates as long as n is less than 3:
let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
}

//break statement
for (let i = 0; i < a.length; i++) {
    if (a[i] === theValue) {
      break;
    }
  }

//breaking to a label
let x = 0;
let z = 0;
labelCancelLoops: while (true) {
  console.log("Outer loops:", x);
  x += 1;
  z = 1;
  while (true) {
    console.log("Inner loops:", z);
    z += 1;
    if (z === 10 && x === 10) {
      break labelCancelLoops;
    } else if (z === 10) {
      break;
    }
  }
}

//continue statement
let i = 0;
let n = 0;
while (i < 5) {
  i++;
  if (i === 3) {
    continue;
  }
  n += i;
  console.log(n);
}
// Logs:
// 1 3 7 12


//A statement labeled checkIandJ contains a statement labeled checkJ. 
// If continue is encountered, the program terminates the current iteration of checkJ and begins the next iteration. Each time continue is encountered, checkJ reiterates until its condition returns false. 
// When false is returned, the remainder of the checkIandJ statement is completed, and checkIandJ reiterates until its condition returns false. When false is returned, the program continues at the statement following checkIandJ.
// If continue had a label of checkIandJ, the program would continue at the top of the checkIandJ statement.

let i = 0;
let j = 10;
checkIandJ: while (i < 4) {
  console.log(i);
  i += 1;
  checkJ: while (j > 4) {
    console.log(j);
    j -= 1;
    if (j % 2 === 0) {
      continue checkJ;
    }
    console.log(j, "is odd.");
  }
  console.log("i =", i);
  console.log("j =", j);
}

//for...in statement
function dumpProps(obj, objName) {
    let result = "";
    for (const i in obj) {
      result += `${objName}.${i} = ${obj[i]}<br>`;
    }
    result += "<hr>";
    return result;
  }

//for...of statement
const arr = [3, 5, 7];
arr.foo = "hello";

for (const i in arr) {
  console.log(i);
}
// "0" "1" "2" "foo"

for (const i of arr) {
  console.log(i);
}
// Logs: 3 5 7

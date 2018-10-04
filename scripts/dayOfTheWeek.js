// start with a hard-coded value
// until you know the program works.
//  Then switch to prompting the user.

let theDay = prompt("Day (0-6)?");
// const theDay = 5;
theDay = parseInt(theDay, 10);

// You must use parentheses for your condition!!
// "Loose" equality is ==
// "Strict" equality is ===
//  by default use strict equality
// "threequals"
let dayName = `invalid choice, buddy.`;

if (theDay === 0) { // add curley braces
    dayName = `Sunday`;
} else if (theDay === 1){
    dayName = `Monday`;
} else if (theDay === 2){
    dayName = `Tuesday`;
} else if (theDay === 3){
    dayName = `Wednesday`;
} else if (theDay === 4){
    dayName = `Thursday`;
} else if (theDay === 5){
    dayName = `Friday`;
} else if (theDay === 6){
    dayName = `Saturday`;
}

// the body of an if statement
// is surrounded by curley braces.
// and does not require a semi-colon after the curly braces.

console.log(dayName);
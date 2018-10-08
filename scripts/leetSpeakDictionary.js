const text = `you wish you were batman`;

// "object" in JavaScript
//  is basically a "dictionary" in Python.
// You shall not use hipster strings (``) as keys!!!
// totally fine as values.
const lettersToNumbers = {
    'A': `4`,
    'E': `3`,
    'G': `6`,
    'I': `1`,
    'O': `0`,
    'S': `5`,
    'T': `7`
};

const textToTranslate = text.toUpperCase();
let translation = ``;

//  Let's loop through the string to translate
for (let letter of textToTranslate) {
    // If the letter is a key in our "dictionary"
    const replacement = lettersToNumbers[letter];
    // and its value is not "falsey" : false, null, undefined, 0, ''
    if (replacement) {
        console.log(`${letter} is ${replacement}`);
    } else {
        console.log(`${letter} stays the same.`)
    }
}
// use the translation.
// otherwise, just use the original letter.
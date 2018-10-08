const text = `you wish you were batman`;

const lettersToConvert = ['A', 'E', 'G', 'I', 'O', 'S', 'T'];
const numbers = [4, 3, 6, 1, 0, 5, 7];

const textToTranslate = text.toUpperCase();
let translation = ``;

// ES6 style array iteration
// Basically the equivalent of python's for loop.

for (let letter of textToTranslate) {
    console.log(letter);
    // check to see if the current letter is in`lettersToConvert`
    // console.log(lettersToConvert.indexOf(letter));
    if (lettersToConvert.indexOf(letter) !== -1) {
        let index = lettersToConvert.indexOf(letter);
        translation = translation + numbers[index];
    } else {
        translation = translation + letter;
    }
    // if so, grab the index
    // use the index to grab the corresponding item from `numbers`
    // else, just use the original letter
}


console.log(translation);
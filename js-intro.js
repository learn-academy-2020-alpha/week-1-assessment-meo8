// ASSESSMENT 1: INTRO TO JAVASCRIPT
// Coding practical questions

// Please read all questions thoroughly
// Psuedo coding is highly recommended

// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Farhenheit.
// Use the test variables provided below. Expected outcome: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp1 = 35
var temp2 = 350
var temp3 = 212

// Boiling point = 212
const boilingTemp = (temp) => {
    // Checks to see if input is of number data type
    if (typeof temp === "number") {
        if (temp === 212) {
            return `${temp} is at boiling point.`;
        } else if (temp < 212) {
            return `${temp} is below boiling point.`;
        } else if (temp > 212) {
            return `${temp} is above boiling point.`;
        }
      // If not of number data type, message appears         
    } else {
        return 'Please enter a number and try again.';
    }
}

// --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45]

var myNumbers1 = [3, 7, 0, 6, -9];

// Function to run array items * 5 using for loop
const timesFive = (arr) => {
    // Declare empty array to store calculated results
    let calculatedArray = [];
    // for loop to stop running once variable i is one less than the length of the inputed array
    for (var i = 0; i < arr.length; i++) {
        calculatedArray.push(arr[i] * 5);
    }
    return calculatedArray;
}


// --------------------3) Create a function that multiplies each number in the array by 5 using map.
// Use the test variable provided below. Expected outcome: [40, -35, 0, 30, 10]

var myNumbers2 = [8, -7, 0, 6, 2]

// Function to run array item * 5 using map
const timesFiveV2 = (arr) => {
    let calculatedArray = [];
    calculatedArray = arr.map(el => el * 5);
    return calculatedArray;
}

// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

var stringWithVowels1 = 'HeyThereLearnStudent'
var stringWithVowels2 = 'ILoveJavaScript'

// Function that removes all vowels from any string input
const removeVowels = (str) => {
    const vowels = ['a', 'i', 'e', 'o', 'u'];
    let splitStr;
    let newStrArr;
    let newStr;
    
    // Letters are split and converted into an array
    splitStr = str.split('');
    // Condition pushes the splitStr's element into newStrArr if that element is not found within the vowels array
    // toLowerCase() is used so that all comparisons are checked correctly since the strings within the vowels array are also lowercase
    newStrArr = splitStr.filter(el => vowels.indexOf(el.toLowerCase()) === -1);
    // Join letters together; join() also converts the array into a string
    newStr = newStrArr.join('');
    return newStr;
}

// --------------------5) Expand the logic from #4 to inform your user if the variable passed into the vowel removal function is not a string.
// Copy and paste or rewrite the function. Use the test variables provided below.

var notAString1 = true
var notAString2 = 42

const removeVowelsV2 = (str) => {
    const vowels = ['a', 'i', 'e', 'o', 'u'];
    let splitStr;
    let newStrArr;
    let newStr;

    if (typeof str === 'string') {
        splitStr = str.split('');
        newStrArr = splitStr.filter(el => vowels.indexOf(el.toLowerCase()) === -1);
        newStr = newStrArr.join('');
        return newStr;
    } else {
        alert('Please enter data type of strings only.')    
    }
}


// --------------------6) Create a function that takes the toonimals array and returns an array with only the toon objects that are cats.
// Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]


var toonimals = [ {name: 'Itchy', animal: 'mouse'}, {name: 'Stimpy', animal: 'cat'}, {name: 'Daffy', animal: 'duck'}, {name: 'Scratchy', animal: 'cat'}, {name: 'Ren', animal: 'dog'}, {name: 'Felix', animal: 'cat'}]

const toonCats = (arr) => {
    // Filter objects that only includes cats
    let catsOnly = arr.filter(el => el.animal === 'cat');    
    // Return catsOnly
    return catsOnly;
}

// --------------------7) Using the toonimals variable from #6, create a function that returns only the names of the non-cats.
// Expected output: "Itchy" "Daffy" "Ren"

const nonToonCats = (arr) => {
    let nonCats = arr.filter(el => el.animal !== 'cat');
    let nonCatsName = nonCats.map(el => el.name);
    return nonCatsName;
}



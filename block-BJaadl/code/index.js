let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.

function longest(acc, cv){
  return (acc > cv)
}

let findLongestWord = words.reduce(longest);


// - Convert the above array "words" into an array of length of word instead of word.

function lengthOf(word){
  return word.length;
}

let wordsLength = words.map(lengthOf);

// - Create a new array that only contains word with atleast one vowel.

function vowel(word){
  return word.includes("a") || 
  word.includes("e") ||
  word.includes("i") ||
  word.includes("o") ||
  word.includes("u");
}

let wordsVowel = words.filter(vowel);

// - Find the index of the word "rhythm"

words.indexOf("rhythm");

// - Create a new array that contians words not starting with vowel.

function filterOut(word){
  return words !== word.startsWith("a") || 
  word.startsWith("e") ||
  word.startsWith("i") ||
  word.startsWith("o") ||
  word.startsWith("u");}

  let startsWithVowel = words.filter(filterOut);
// - Create a new array that contianse words not ending with vowel

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers



function sumArray(numbers){
  let sum = 0;
  for(let number of numbers){
    return sum = sum + number;
  }
}



// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]

let number3 = numbers.filter((num) => num % 3 === 0);

// - Create a new array that contains only even numbers

let evenArray = numbers.filter((num) => num % 2 === 0);

// - Create  a new array that contains only odd numbers.

let oddArray = numbers.filter((num) => num % 2 !== 0);

// - Create a new array that should have true for even number and false for odd numbers.

let newArray = numbers.map((num) => num % 2 === 0);

// - Sort the above number in assending order.

let accendingArray = numbers.sort((a,b) => a - b);


// - Does sort mutate the original array?

// Yes, sort method mutate's the original array. 

// - Find the sum of the numbers in the array.

let sum = numbers.reduce((acc, cv) => acc + cv);

//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers

let sumOfArray = numbers.reduce((acc, cv) => acc + cv);

function averageNumbers(sumOfArray){
  return sumOfArray / numbers.length;
}

let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.

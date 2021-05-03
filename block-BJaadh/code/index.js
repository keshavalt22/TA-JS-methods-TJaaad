// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers

console.log(numbers.indexOf(101));

// - Find the last index of `9` in numbers

console.log(numbers.lastIndexOf(9));

// - Convert value of strings array into a sentance like "This is a collection of words"

console.log(strings.join(" "));

// - Add two new words in the strings array "called" and "sentance"

stringCopy = [...strings];
stringCopy.push("called");
stringCopy.push( "sentance");

// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"

console.log(stringCopy.join(" "));

// - Remove the first word in the array (strings)

console.log(stringCopy.shift());

// - Find all the words that contain 'is' use string method 'includes'

let allIs = string.filter((string) => string.includes("is"));

// - Find all the words that contain 'is' use string method 'indexOf'

let allIsAgain = string.filter((string) => string.indexOf("is") !== -1);

// - Check if all the numbers in numbers array are divisible by three use array method (every)

let number3 = (number) => number % 3 === 0; 

console.log(numbers.every(number3));

// -  Sort Array from smallest to largest

numberCopy = [...numbers];

function compareFunction(a,b) {
  return a - b;
}
console.log(numberCopy.sort(compareFunction));

numberCopy.sort((a,b) => a - b);

// - Remove the last word in strings

console.log(stringCopy.pop());

// - Find largest number in numbers

var largest = numbers[0];

for (var i = 0; i < numbers.length; i++) {
  if (largest < numbers[i] ) {
      largest = numbers[i];
  }
}
console.log(largest);

let largestNumber = numbers.sort((a,b) => a = b).pop();

// - Find longest string in strings

let longestString = string.sort((a,b) => a.length - b.length).pop();

// - Find all the even numbers

let evenNum = (number) => number % 2 === 0;

console.log(numbers.filter(evenNum));

// - Find all the odd numbers

let oddNum = (number) => number % 2 !== 0;

console.log(numbers.filter(oddNum));

// - Place a new word at the start of the array use (unshift)

stringCopy.unshift("It");

// - Make a subset of numbers array [18,9,7,11]

console.log(numbers.slice(3,7));

// - Make a subset of strings array ['a','collection']

console.log(strings.slice(2,4));

// - Replace 12 & 18 with 1221 and 1881

for(i = 0; i < numbers.length; i++) {
  if (numbers[i] === 12){
    numbers[i] = 1221;
  }else if (numbers[i] ===18){
    numbers[i] = 1881;
  }
}

numbers.splice(numbers.indexOf(12),1,1221);
numbers.splice(numbers.indexOf(18),1,1881);

// - Replace words in strings array with the length of the word

let stringLength = string.map((string) => string.length);

// - Find the sum of the length of words using above question

stringLength.reduce((acc,cv) => {
  acc = acc + cv;
  return acc;
},0);

// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'

let customersJ = customers.filter((customers) => customers.firstname.startsWith("J"));

// - Create new array with only first name

let customersFistname = customers.map((customers) => customers.firstname);

// - Create new array with all the full names (ex: "Joe Blogs")

let customersFullname = customers.map((customers) => `${customers.firstname} ${customers.lastname}`);

// - Sort the array created above alphabetically

[...customersFullname].sort();

// - Create a new array that contains only user who has at least one vowel in the firstname.


let customersVowel = customers.map((customers) => 
customersFistname.tolowe .includes("a") ||
);
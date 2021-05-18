let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// Create an array peopleName and store value of sex key from persons array

let peopleName = persons.map((persons) => persons.name);

// Create an array peopleGrade and store the value of grade key from persons array

let peopleGrade = persons.map((persons) => persons.grade);

// Create an array peopleSex and store the value of sex key from persons array

let peopleSex = persons.map((persons) => persons.sex);

// Log the filtered named of people in peopleName that starts with 'J' or 'P'

console.log(peopleName.filter((name) => name.startsWith("J") || name.startsWith("P")));

// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'

console.log(peopleName.filter((name) => name.startsWith("A") || name.startsWith("C")));

// Log all the filtered male ('M') in persons array

console.log(persons.filter((persons) => persons.sex === "M"));

// Log all the filtered female ('F') in persons array

console.log(persons.filter((persons) => persons.sex === "F"));

// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array

console.log(persons.filter((persons) => persons.sex === "F").filter((persons) => persons.name.startsWith("C") || persons.name.startsWith("J")));


// Log all the even numbers from peopleGrade array

console.log(persons.filter((persons) => persons.grade % 2 === 0));

// Find the first name that starts with 'J' in persons array and log the object

console.log(persons.find((persons) => persons.name.startsWith("J")));

// Find the first name that starts with 'P' in persons array and log the object

console.log(persons.find((persons) => persons.name.startsWith("P")));

// Find the first name that starts with 'J', grade is greater than 10 and is a female

console.log(persons.find((persons) => persons.name.startsWith("J") && persons.grade > 10 && persons.sex == "F"));

// Filter all the female from persons array and store in femalePersons array

let femalePersons = persons.filter((persons) => persons.sex === "F");

// Filter all the male from persons array and store in malePersons array

let femalePermalePersonssons = persons.filter((persons) => persons.sex === "M");

// Find the sum of all grades and store in gradeTotal

let gradeTotal = persons.map((persons) => persons.grade).reduce((acc,cv) => {
  acc = acc + cv;
  return acc;
},0);

// Find the average grade

persons.map((persons) => persons.grade).reduce((acc,cv) => {
  acc = acc + cv;
  return acc;
},0) / persons.length;

// Find the average grade of male

let maleGrade = persons.filter((persons) => persons.sex == "M").map((persons) => persons.grade);

maleGrade.reduce((acc,cv) => {
  return acc + cv;
},0)/maleGrade.length;

// Find the average grade of female

let femaleGrade = persons.filter((persons) => persons.sex == "F").map((persons) => persons.grade);

femaleGrade.reduce((acc,cv) => {
  return acc + cv;
},0)/femaleGrade.length;

// Find the highest grade

[...peopleGrade].sort((a,b) => a - b).pop();

// Find the highest grade in male

[...maleGrade].sort((a,b) => a - b).pop();

// Find the highest grade in female

[...femaleGrade].sort((a,b) => a - b).pop();

// Find the highest grade for people whose name starts with 'J' or 'P'

let nameWithJorP = persons.filter((persons) => persons.name.startsWith("J") || persons.name.startsWith("P"));

nameWithJorP.map((p) => p.grade).sort((a,b) => a- b).pop();

// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?

console.log(peopleGrade.sort((a,b) => a - b));

// Sort the peopleGrade in descending order

console.log(peopleGrade.sort((a,b) => b - a));

// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array

let sortedGrade = [...peopleGrade].sort((a,b) => b-a);

// Sort the array peopelName in ascending `ABCD..Za....z`

peopleName.sort();

// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array


let sortedName = [...peopleName].sort();
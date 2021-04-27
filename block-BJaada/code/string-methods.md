Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`

  - perameter: accepts a string.
  - return: returns the lowercase string to upper case.
  - Example: 
   ```js
   let name = `John Snow`;
   name.toUpperCase() // JOHN SNOW
   ```
   toUpperCase change the string from lower case to upper case.

3. `toLowerCase`

  - perameter: accepts a string.
  - return: returns the lowercase string to upper case.
  - Example: 
   ```js
   let name = `JOHN SNOW`;
   name.toUpperCase() // john snow
   ```
   toUpperCase change the string from upper case to lower case.

4. `trim`

  - perameter: accepts a string data type.
  - return: return the data without the white space at the front as well as end.
  - Example: 
   ```js
   let name = `    John Snow!    `;
   name.toUpperCase() // john snow!
   ```
   return the trimed string on both ends.

5. `trimEnd`

  - perameter: accepts a string data type.
  - return: return the data without the white space at the end.
  - Example: 
   ```js
   let name = `    John Snow!    `;
   name.toUpperCase() // `   john snow!`
   ```
   return the trimed string on the end.

6. `trimStart`

  - perameter: accepts a string data type.
  - return: return the data without the white space at the start.
  - Example: 
   ```js
   let name = `    John Snow!    `;
   name.toUpperCase() // `john snow!    `
   ```
   return the trimed string on the start.

7. `concat`

  - perameter: accepts a string data type.
  - return: return the data concatinated.
  - Example: 
   ```js
   let firstName = `John`;
   let lastName = `Snow`;
   firstName.concat(' ', lastName)// `john snow`
   ```
    return the data concatinated.

8. `endsWith`

  - perameter: accepts a string data type.
  - return: checks and return's weather true or false.
  - Example: 
   ```js
  let name = `John Snow`;
  name.endsWith(w); = true;

  name.endsWith(o); = False;
   ```
    checks and return's weather true or false.

9. `includes`

  - perameter: accepts a string data type.
  - return: checks and return's weather true or false.
  - Example: 
   ```js
  let name = `John Snow`;

  let word = `Snow` 
  name.includes(word); = true;
   ```
    checks and return's weather true or false.

10. `indexOf`

  - perameter: accepts a string data type.
  - return: checks the index of the word.
  - Example: 
   ```js
  let name = `John Snow`;
  name.indexOf(`Snow`); = 5;
  name.indexOf(`0`); = 2
   ```
    checks and return the index of the word and if the word is not present it will return -1.

11. `lastIndexOf`

 - perameter: accepts a string data type.
  - return: checks the index of the word.
  - Example: 
   ```js
  let name = `John Snow`;

  name.indexOf(`0`); = 7
   ```
    checks and return the index of the word and if the word is not present it will return -1.

12. `padEnd`

  - perameter: accepts a string data type.
  - return: The method pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length at the end.
  - Example: 
   ```js
   let name = `John Snow`;
   name.padEnd(20, `!`) // "John Snow!!!!!!!!!!!"
   ```
   The method pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length at the end.

13. `padStart`
 - perameter: accepts a string data type.
  - return: The method pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length at the start.
  - Example: 
   ```js
   let name = `John Snow`;
   name.padStart(20, `!`) //"!!!!!!!!!!!John Snow"
   ```
   The method pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length at the start.

14. `repeat`

 - perameter: accepts a string data type.
  - return: repeats the string multipul times.
  - Example: 
   ```js
   let name = `John Snow`;
   name.repeat(4) //"John Snow John Snow John Snow John Snow"
   ```
repeats the string multipul times.
15. `replace`

 - perameter: accepts a string data type.
  - return: replaces the string.
  - Example: 
   ```js
   let name = `John Snow`;
   name.repeat(`snow`, `willams`) //"Willams"
   ```
  replaces the string

16. `slice`

 - perameter: accepts a string data type.
  - return: returns the till the index number which was given.
  - Example: 
   ```js
   let name = `John Snow`;
   name.repeat(0, 2) //"jo"
   ```
  returns the till the index number which was given but if you did not give the second perameter it will go till the end.

17. `split`

 - perameter: accepts a string data type.
  - return: It spilits the string and return it as array.
  - Example: 
   ```js
   let name = `John Snow`;
   name.spilit(``) //["J", "o", "h", "n", " ", "S", "n", "o", "w"]
   ```
  It spilits the string and return it as array.

18. `substring`

- perameter: accepts a string data type.
  - return: returns the till the index number which was given.
  - Example: 
   ```js
   let name = `John Snow`;
   name.substring(0, 2) //"jo"
   name.substring(2, 0) //"jo"
   ```
  returns the till the index number which was given but if you did not give the second perameter it will go till the end but if we put the values backward it still works.

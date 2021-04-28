Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: returns a new string by concatenating all of the elements in an array.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //"1,2,3"
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.join(' '); //"A,quick,brown,fox,jumped,over,a,lazy"
     let colors = ['red', 'green', 'blue'];
     colors.join('black', 'red'); //"redblackgreenblackblue"
     ```
   - `join` accepts n number of values and returns a new string by concatenating all of the elements in an array. It does not change the original array.
   - No it does not mutate the original array

3. `flat`

   - Parameter:The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.
   - Return: Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
   - Example:
     ```js
    let numbers = [1, [2, 3, [4, 5, 6, 7]]];
    numbers.flat(Infinity); // [1, 2, 3, 4, 5, 6, 7]
     ```
   - `flat` accepts a array inside a array and make it to a simple one array.
   - No it does not mutate the original array

4. `push`

   - Parameter:The element(s) to add to the end of the array.
   - Return: The new length property of the object upon which the method was called.
   - Example:
     ```js
    let colors = [`red`,`blue`, `black`, `white`];
    colors.push('green');//  ["red", "blue", "black", "white", "green"]
     ```
   - `flat` adds a new value at the end of the array.
   - it mutate the original array

5. `indexOf`

   - Parameter:Element to locate in the array.
   - Return: The first index of the element in the array; -1 if not found.
   - Example:
     ```js
    let colors = [`red`,`blue`, `black`, `white`];
    colors.indexOf(`blue`); // 1

    colors.indexOf(`black`); // 2
     ```
   - The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
   - No it does not mutate the original array

6. `lastIndexOf`

   - Parameter:Element to locate in the array.
   - Return: The first index of the element in the array; -1 if not found.
   - Example:
     ```js
    let colors = [`red`,`blue`, `black`, `white`, `black`];
    colors.lastIndexOf(`black`);//4
     ```
   - The lastIndexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
   - No it does not mutate the original array

7. `includes`

   - Parameter:The value to search for.
   - Return: A Boolean which is true if the value valueToFind is found within the array (or the part of the array indicated by the index fromIndex, if specified) Values of zero are all considered to be equal, regardless of sign but false is not considered to be the same as 0.
   - Example:
     ```js
    let colors = [`red`,`blue`, `black`, `white`, `black`];
    colors.includes(`black`);//true
     ```
   - It returns boolean value as true or false. 
   - No it does not mutate the original array


8. `reverse`

   - Return: The reversed array.
   - Example:
     ```js
    let colors = [`red`,`blue`, `black`, `white`, `black`];
    colors.reverse();//["black", "white", "black", "blue", "red"]
     ```
   - It reverse the array. 
   - It mutate the original array

9. `every`

   - Parameter: Element to locate in the array.
   - Return: true if the callback function returns a truthy value for every array element. Otherwise, false.
   - Example:
     ```js
 
     ```
   - The lastIndexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
   - No it does not mutate the original array

10. `shift`

  - Parameter:The value to search for.
   - Return: The removed element from the array; undefined if the array is empty.
   - Example:
     ```js
    let colors = [`red`,`blue`, `black`, `white`, `black`];
    colors.shift();//[`blue`, `black`, `white`, `black`]
     ```
   - It removes the first element from the array.. 
   - It mutate the original array

11. `splice`

  - Parameter:The value to search for.
   - Return: A new array containing the extracted elements.
   - Example:
     ```js
    let colors = [`red`,`blue`, `black`, `white`, `black`];
    colors.slice(2,4);// ["black", "white"]
    colors.slice(1,4);// ["blue", "black", "white"]
     ```
   - It accepts two values and returns the altered version.
   - No it does not mutate the original array



12. `find`

  - Parameter:The value to search for.
   - Return:The value of the first element in the array that satisfies the provided testing function. Otherwise,          undefined is returned.
   - Example:
     ```js

     ```
   - It accepts two values and returns the altered version.
   - No it does not mutate the original array

13. `unshift`

   - Parameter:The elements to add to the front of the arr.
   - Return: The new length property of the object upon which the method was called.
   - Example:
     ```js
    let colors = [`red`,`blue`, `black`, `white`];
    colors.unshift(`green`, `pink`);// ["green", "pink", "red", "blue", "black", "white"]
     ```
   - The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
   - No it does not mutate the original array


14. `findIndex`

   - Parameter:The elements to add to the front of the arr.
   - Return: The new length property of the object upon which the method was called.
   - Example:
     ```js
  let num = [16, 21, 34, 24, 54, 36, 47, 86, 97];
  let smallNum = (element) => element > 40;
  num.findIndex(smallNum);//4
     ```
   - The findIndex() method returns the index of the first element in the array that satisfies the provided testing  function. Otherwise, it returns -1, indicating that no element passed the test.
   - No it does not mutate the original array


15. `filter`

   - Parameter:Function is a predicate, to test each element of the array. Return a value that coerces to true to keep the element, or to false otherwise.
   - Return: A new array with the elements that pass the test. If no elements pass the test, an empty array will be returned.
   - Example:
     ```js
    let colors = [`red`,`blue`, `black`, `white`];
    let  result = colors.filter(color => color.length > 4);// ["black", "white"]
     ```
   - The filter() method creates a new array with all elements that pass the test implemented by the provided function
   - No it does not mutate the original array

16. `flat`

   - Parameter:The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.
   - Return: Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
   - Example:
     ```js
    let numbers = [1, [2, 3, [4, 5, 6, 7]]];
    numbers.flat(Infinity); // [1, 2, 3, 4, 5, 6, 7]
     ```
   - `flat` accepts a array inside a array and make it to a simple one array.
   - No it does not mutate the original array


17. `forEach`

   - Parameter:The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.
   - Return: Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
   - Example:
     ```js
    let colors = [`red`,`blue`, `black`, `white`];
    colors.forEach(element => console.log(element));
    
    //  VM2029:1 red
    //  VM2029:1 blue
    //  VM2029:1 black
    //  VM2029:1 white

     ```
   - The forEach() method executes a provided function once for each array element.
   - No it does not mutate the original array


18. `map`

   - Parameter:Function that is called for every element of arr. Each time callback executes, the returned value is added to newArray.
   - Return: A new array with each element being the result of the callback function.
   - Example:
     ```js
    let num = [16, 21, 34, 24, 54, 36, 47, 86, 97];

    num.map(x => x % 2 === 0);//[true, false, true, true, true, true, false, true, false]
    num.map(x => x * 9);// [144, 189, 306, 216, 486, 324, 423, 774, 873]
     ```
   - The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
   - No it does not mutate the original array


19. `pop`


   - Return: The removed element from the array; undefined if the array is empty.
   - Example:
     ```js
    let colors = [`red`,`blue`, `black`, `white`];

    colors.pop();// ["red", "blue", "black"]
     ```
   - The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
   - It mutate the original array


20. `reduce`

   - Parameter: A function to execute on each element in the array (except for the first, if no initialValue is supplied)
   - Return: The single value that results from the reduction.
   - Example:
     ```js
    let num = [16, 21, 34, 24, 54, 36, 47, 86, 97];
    const reducer = (acc, num) => acc + num;
    num.reduce(reducer);//415

    let colors = [`red`,`blue`, `black`, `white`];
    let reducer1 = (acc, color) => acc + colors;
    colors.reduce(reducer1);//"redred,blue,black,whitered,blue,black,whitered,blue,black,white"

     ```
   - The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
   - No it does not mutate the original array


21. `slice`

   - Parameter: Zero-based index at which to start extraction.
   - Return: The single value that results from the reduction.
   - Example:
     ```js

    let colors = [`red`,`blue`, `black`, `white`];
    colors.slice(1, 3)//["blue", "black",]

     ```
   - The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
   - No it does not mutate the original array

22. `some`

   - Parameter: A function to test for each element, taking three arguments.
   - Return: true if the callback function returns a truthy value for at least one element in the array. Otherwise, false.
   - Example:
     ```js

  let num = [16, 21, 34, 24, 54, 36, 47, 86, 97];
  let evennum = (element) => element % 2 === 0;
  num.some(evennum);//true

     ```
   - The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.
   - No it does not mutate the original array
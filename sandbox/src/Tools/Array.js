/* Arrays_Cheat_Sheet */

// Checks length of array, in this case there are 3 numbers in array
const length = [1, 2, 3].length; // 3
console.log("length = " + length);

// Adds member into the last position of an array, specifies value '4'
const push = [1, 2, 3].push(4); // [1,2,3,4]
console.log("push = " + push);

// Adds member into the first position of an array, specifies value '0'
const unshift = [1, 2, 3].unshift(0); // [0,1,2,3]
console.log(unshift);

// Removes member from last position of array
const pop = [1, 2, 3].pop(); // [1,2]
console.log(pop);

// Removes member from first position of array
[1, 2, 3].shift(); // [2,3]

// Retrieves value from index position, specifies index position '2'
[1, 2, 3].at(2); // 3

// Retrieves index position from value specified, specified location of '3'
[1, 2, 3].indexOf(3); // 2

// Boolean value determined if value is present in array
[1, 2, 3].includes(3); // true

// Maps through each member of array and multiplies each value * power of 2
[1, 2, 3].map((num) => Math.pow(num, 2)); // [1,4,9]

// Filters through each member of array and removes numbers divisible by 2
[1, 2, 3].filter((num) => num % 2); // [1,3]

// Boolean value returned by determining if each member of array is greater than 1
[1, 2, 3].every((num) => num > 1); // false

// Boolean value returned by determining if some number equals 3
[1, 2, 3].some((num) => num == 3); // true

// Replaces values of members of array with specified value of 10
const fill = [1, 2, 3].fill(10); // [10,10,10]
console.log(fill);

// Passes in the return value from the calculation on the preceding element, initial value '0'
[1, 2, 3].reduce((acc, num) => acc + num, 0); // 6

// Adds members of array to original array
[1, 2, 3].concat([4, 5]); // [1,2,3,4,5]

// Reverses values of array in opposite order
[1, 2, 3].reverse(); // [3,2,1]

// Sorts values of an array from least to greatest
[1, 2, 3].sort(); // [1,2,3]

// Joins each member of an array with specified character (-)
[1, 2, 3].join("-"); // 1-2-3

// Creates a new array with all sub-array elements concatenated into it
[1, 2, [3]].flat(); // [1,2,3]

// Returns the first element in the provided array that satisfies the provided testing function
[1, 2, 3].find((num, i) => i === 1); // 2

// Returns the index of the first element in an array that satisfies the provided testing function
[1, 2, 3].findIndex((num) => num === 2); // 1

// Returns a string representing the specified array and its elements
[1, 2, 3].toString(); // 1,2,3

// Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)
[1, 2, 3].slice(1, 3); // [2,3]

// Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// Syntax: splice(start, deleteCount, item1, item2, itemN)
[1, 4].splice(1, 0, 2, 3); // [1,2,3,4]

// Boolean value returned based if passed value is an Array
Array.isArray("[1,2,3]"); // false

// Creates a new, shallow-copied Array instance from an iterable or array-like object.
Array.from("123"); // ['1','2','3']

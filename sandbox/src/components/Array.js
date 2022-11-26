/* Arrays_Cheat_Sheet */

// Checks length of array, in this case there are 3 numbers in array
const length = [1, 2, 3].length; // 3
console.log("length = " + length);

const lengthPractice = ["apple", "orange", "pear", "banana"].length;
console.log("length practice = " + lengthPractice); // 4

// Adds member into the last position of an array, specifies value '4'
const push = [1, 2, 3].push(4); // [1,2,3,4]
console.log("push = " + push);

const pushPractice = ["apple", "orange", "pear", "banana"].push("blueberry");
console.log("push practice = " + pushPractice); // 5

// Adds member into the first position of an array, specifies value '0'
const unshift = [1, 2, 3].unshift(0); // [0,1,2,3]
console.log("unshift = " + unshift);

const unshiftPractice = ["apple", "orange", "pear", "banana"].unshift(
  "apricot"
);
console.log("unshift practice = " + unshiftPractice); // 5

// Removes member from last position of array
const pop = [1, 2, 3].pop(); // [1,2]
console.log("pop = " + pop);

const popPractice = ["apple", "orange", "pear", "banana"].pop();
console.log("pop practice = " + popPractice);

// Removes member from first position of array
const shift = [1, 2, 3].shift(); // [2,3]
console.log("shift = " + shift);

const shiftPractice = ["apple", "orange", "pear", "banana"].shift();
console.log("shift practice = " + shiftPractice); // apple

// Retrieves value from index position, specifies index position '2'
const at = [1, 2, 3].at(2); // 3
console.log("at = " + at);

const atPractice = ["apple", "orange", "pear", "banana"].at(2);
console.log("at practice = " + atPractice); // pear

// Retrieves index position from value specified, specified location of '3'
const indexOf = [1, 2, 3].indexOf(3); // 2
console.log("indexOf = " + indexOf);

const indexOfPractice = ["apple", "orange", "pear", "banana"].indexOf("orange");
console.log("indexOf practice = " + indexOfPractice);

// Boolean value determined if value is present in array
const includes = [1, 2, 3].includes(3); // true
console.log("includes = " + includes);

const includesPractice = ["apple", "orange", "pear", "banana"].includes(
  "blueberry"
);
console.log("includes practice = " + includesPractice); // false

// Maps through each member of array and multiplies each value * power of 2
const map = [1, 2, 3].map((num) => Math.pow(num, 2)); // [1,4,9]
console.log("map = " + map);

const mapPractice = ["apple", "orange", "pear", "banana"].map((fruit) =>
  fruit.toUpperCase()
);
console.log("map practice = " + mapPractice); // APPLE, ORANGE, PEAR, BANANA

// Filters through each member of array and removes numbers divisible by 2
const filter = [1, 2, 3].filter((num) => num % 2); // [1,3]
console.log("filter = " + filter);

const filterPractice = ["apple", "orange", "pear", "banana"].filter(
  (fruit) => fruit.length > 5
);
console.log("filter practice = " + filterPractice); // orange, banana

// Boolean value returned by determining if each member of array is greater than 1
const every = [1, 2, 3].every((num) => num > 1); // false
console.log("every = " + every);

const everyPractice = ["apple", "orange", "pear", "banana"].every(
  (fruit) => fruit.length > 5
);
console.log("every practice = " + everyPractice); // false

// Boolean value returned by determining if some number equals 3
const some = [1, 2, 3].some((num) => num === 3); // true
console.log("some = " + some);

const somePractice = ["apple", "orange", "pear", "banana"].some(
  (fruit) => fruit.length === 4
);
console.log("some practice = " + somePractice); // true

// Replaces values of members of array with specified value of 10
const fill = [1, 2, 3].fill(10); // [10,10,10]
console.log("fill = " + fill);

const fillPractice = ["apple", "orange", "pear", "banana"].fill("orange");
console.log("fill practice = " + fillPractice); // orange, orange, orange, orange

// Passes in the return value from the calculation on the preceding element, initial value '0'
const reduce = [1, 2, 3].reduce((acc, num) => acc + num, 0); // 6
console.log("reduce = " + reduce);

const reducePractice = [2, 4, 12].reduce((acc, num) => acc + num, 0); // 18
console.log("reduce practice = " + reducePractice);

// Adds members of array to original array
const concat = [1, 2, 3].concat([4, 5]); // [1,2,3,4,5]
console.log("concat = " + concat);

const concatPractice = ["apple", "orange", "pear", "banana"].concat([
  "blueberry",
  "strawberry",
]);
console.log("concat practice = " + concatPractice); // apple, orange, pear, banana, blueberry, strawberry

// Reverses values of array in opposite order
const reverse = [1, 2, 3].reverse(); // [3,2,1]
console.log("reverse = " + reverse);

const reversePractice = ["apple", "orange", "pear", "banana"].reverse();
console.log("reverse practice = " + reversePractice); // banana, pear, orange, apple

// Sorts values of an array from least to greatest
const sort = [1, 2, 3].sort(); // [1,2,3]
console.log("sort = " + sort);

const sortPractice = ["apple", "orange", "pear", "banana"].sort();
console.log("sort practice = " + sortPractice); // apple, banana, orange, pear

// Joins each member of an array with specified character (-)
const join = [1, 2, 3].join("-"); // 1-2-3
console.log("join = " + join);

const joinPractice = ["apple", "orange", "pear", "banana"].join(" & ");
console.log("join practice = " + joinPractice); // apple & orange & pear & banana

// Creates a new array with all sub-array elements concatenated into it
const flat = [1, 2, [3]].flat(); // [1,2,3]
console.log("flat = " + flat);

const flatPractice = ["apple", "orange", "pear", ["banana"]].flat();
console.log("flat practice = " + flatPractice); // apple, orange, pear, banana

// Returns the first element in the provided array that satisfies the provided testing function
const find = [1, 2, 3].find((num, i) => i === 1); // 2
console.log("find = " + find);

const findPractice = ["apple", "orange", "pear", "banana"].find(
  (fruit, i) => i === 2
);
console.log("find practice = " + findPractice); // pear

// Returns the index of the first element in an array that satisfies the provided testing function
const findIndex = [1, 2, 3].findIndex((num) => num === 2); // 1
console.log("findIndex = " + findIndex);

const findIndexPractice = ["apple", "orange", "pear", "banana"];
const isPear = (element) => element === "pear";
console.log("findIndexPractice = " + findIndexPractice.findIndex(isPear)); // 2

// Returns a string representing the specified array and its elements
const toString = [1, 2, 3].toString(); // 1,2,3
console.log("toString = " + toString);

const toStringPractice = [true, false, false].toString();
console.log("toString practice = " + toStringPractice); // true, false, false

// Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)
const slice = [1, 2, 3].slice(1, 3); // [2,3]
console.log("slice = " + slice);

const slicePractice = ["apple", "orange", "pear", "banana"].slice(0, 2);
console.log("slice practice = " + slicePractice); // apple, orange

// Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// Syntax: splice(start, deleteCount, item1, item2, itemN)
const splice = [1, 4].splice(1, 0, 2, 3); // [1,2,3,4]
console.log("splice = " + splice);

const splicePractice = ["apple", "orange"].splice(1, 0, "pear", "banana");
console.log("splice practice = " + splicePractice); // apple, pear, banana, orange

// Boolean value returned based if passed value is an Array
const isArray = Array.isArray("[1,2,3]"); // false --> this is string
console.log("isArray = " + isArray);

const isArrayPractice = Array.isArray(["pear", "orange"]);
console.log("isArray practice = " + isArrayPractice); // true

// Creates a new, shallow-copied Array instance from an iterable or array-like object.
const from = Array.from("123"); // ['1','2','3']
console.log("from = " + from);

const fromPractice = Array.from("apple");
console.log("from practice = " + fromPractice); // a,p,p,l,e

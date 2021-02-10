// Example using ES module imports
import '../index.js';

const array1 = [5, 12, 8, 130, 44];

const foundLast = array1.findLast(element => element > 10);

const foundLastIndex = array1.findLastIndex(element => element > 10);

console.log(foundLast);
// expected output: 44

console.log(foundLastIndex);
// expected output: 4

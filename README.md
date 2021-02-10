# array-find-last

Add findLast and findLastIndex to Array.prototype. The findLastIndex() method returns the index of the last element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test. The findLast() method returns the value of the last element in the provided array that satisfies the provided testing function. If no values satisfies the testing function, undefined is returned.

## Install

```bash
npm install array-find-last

```

## Use

```js
# es6
import 'array-find-last';
```

```js
require('array-find-last');
```
## Example

```js
import 'array-find-last';

const array1 = [5, 12, 8, 130, 44];

const foundLast = array1.findLast(element => element > 10);

const foundLastIndex = array1.findLastIndex(element => element > 10);

console.log(foundLast);
// expected output: 44

console.log(foundLastIndex);
// expected output: 4
```

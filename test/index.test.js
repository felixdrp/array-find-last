require('../index')
const assert = require('assert/strict');

const array1 = [5, 12, 8, 130, 44];

describe("unit test", function() {
  it("findLast should be able to find the last element that satisfies the provided testing function", function() {
    const foundLast = array1.findLast(element => element > 10);
    assert.strictEqual(foundLast, 44);
  });
  it("findLast not satisfies the provided testing function", function() {
    const foundLast = array1.findLast(element => element > 1000);
    assert.strictEqual(foundLast, undefined);
  });
  it("findLastIndex should be able to find the last element index that satisfies the provided testing function", function() {
    const foundLastIndex = array1.findLastIndex(element => element > 10);
    assert.strictEqual(foundLastIndex, 4);
  });
  it("findLastIndex not satisfies the provided testing function", function() {
    const foundLastIndex = array1.findLastIndex(element => element > 1000);
    assert.strictEqual(foundLastIndex, -1);
  });
});

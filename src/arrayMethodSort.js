'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareFunctionWithString) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (compareFunction(prev, current) > 0) {
          this[i - 1] = current;
          this[i] = prev;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };

  const compareFunctionWithString = function(a, b) {
    const strA = String(a);
    const strB = String(b);

    if (strA > strB) {
      return 1;
    } else if (strA < strB) {
      return -1;
    } else {
      return 0;
    }
  };
}

module.exports = applyCustomSort;

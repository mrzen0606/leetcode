/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  const map = new Map();
  for(let i = 0; i < numbers.length; i++) {
      if (map.has(numbers[i])) {
          return [map.get(numbers[i]) + 1, i + 1];
      } else {
          map.set(target-numbers[i], i);
      }
  }
};
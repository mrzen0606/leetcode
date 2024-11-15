/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
  let l = 0, r = Math.floor(Math.sqrt(c)), rs;
  while(l <= r) {
      rs = Math.pow(l,2) + Math.pow(r,2);
      if (rs > c) {
          r--;
      } else if (rs < c) {
          l++;
      } else {
          return true;
      }
  }
  return false;
};
// 485. Max Consecutive Ones

//  O(n) and O(1) space complexity
var findMaxConsecutiveOnes = function (nums) {
  let count = 0;
  let maxOne = 0;
  let i = 0;
  while (i < nums.length) {
    if (nums[i] === 1) {
      count++;
    } else {
      count = 0;
    }
    if (count > maxOne) {
      maxOne = count;
    }
    i++;
  }
  return maxOne;
};

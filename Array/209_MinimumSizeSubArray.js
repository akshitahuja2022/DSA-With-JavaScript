// 209. Minimum Size Subarray Sum

// Brute Force solution - O(n^2) time limit exceed 
var minSubArrayLen = function (target, nums) {
  let length = Infinity;

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum = sum + nums[j];

      if (sum >= target) {
        length = Math.min(length, j - i + 1);
        break;
      }
    }
  }
  return length === Infinity ? 0 : length;
};

// optimal - O(n) and space O(1)
var minSubArrayLen = function (target, nums) {
  let low = 0;
  let high = 0;
  let sum = 0;
  let resultSum = Infinity;
  let length = 0;

  while (high < nums.length) {
    sum = sum + nums[high];

    while (sum >= target) {
      resultSum = Math.min(resultSum, high - low + 1);
      sum = sum - nums[low];
      low++;
    }
    high++;
  }
  return resultSum === Infinity ? 0 : resultSum;
};

// 2149 Rearrange Array Elements

// Brute force solution - O(n) + O(n) - O(n^2) and space O(n)
let nums = [3, 1, -2, -5, 2, -4];

var rearrangeArray = function (nums) {
  let positive = [];
  let negative = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      positive.push(nums[i]);
    } else {
      negative.push(nums[i]);
    }
  }

  for (let i = 0; i < nums.length / 2; i++) {
    nums[2 * i] = positive[i];
    nums[2 * i + 1] = negative[i];
  }
  return nums;
};

console.log(rearrangeArray(nums));

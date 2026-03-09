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

// Optimal Solution - O(n) and space O(n)
var rearrangeArray = function (nums) {
let ans = new Array(nums.length).fill(0);
  let k = 0;
  let j = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      ans[k] = nums[i];
      k += 2;
    } else {
      ans[j] = nums[i];
      j += 2;
    }
  }

  return ans;
};

console.log(rearrangeArray(nums));

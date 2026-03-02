// 189 Rotate Array

// 1st approach nested loop BigO(n^2) -- time limit exceed
var rotate = function (nums, k) {
  for (let i = 1; i <= k; i++) {
    let value = nums[nums.length - 1];

    for (let i = nums.length - 1; i >= 0; i--) {
      nums[i] = nums[i - 1];
    }
    nums[0] = value;
  }
};

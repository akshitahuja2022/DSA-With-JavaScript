// 53 Maximum SubArray

var maxSubArray = function (nums) {
  let maxSum = -Infinity;
  let sum = 0;
  let i = 0;
  while (i < nums.length) {
    sum = sum + nums[i];

    if (sum > maxSum) {
      maxSum = sum;
    }

    if (sum < 0) {
      sum = 0;
    }
    i++;
  }
  return maxSum;
};

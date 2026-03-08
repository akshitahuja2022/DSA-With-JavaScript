// 53 Maximum SubArray

//  Brute force method - O(n^2) and it not works for [-1]
var maxSubArray = (nums, k) => {
  let maxSum = 0;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];

      if (sum > maxSum) {
        maxSum = sum;
      }
    }
  }
  return maxSum;
};

/*
 optimal solution - O(n) 
 kadane's algorithm 
*/
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

// Interview question
// print the subarray with maxsum
var maxSubArray = function (nums) {
  let maxSum = -Infinity;
  let sum = 0;
  let i = 0;
  let ansStart = -1;
  let ansEnd = -1;
  while (i < nums.length) {
    if (sum === 0) {
      start = i;
    }
    sum = sum + nums[i];

    if (sum > maxSum) {
      maxSum = sum;
      ansStart = start;
      ansEnd = i;
    }

    if (sum < 0) {
      sum = 0;
    }
    i++;
  }
  console.log("Subarray:", nums.slice(ansStart, ansEnd + 1));
  return maxSum;
};

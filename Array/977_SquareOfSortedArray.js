// 977 Square Of Sorted Array

// Brute Force Solution - O(n) * O(n logn) --> O(n logn) and Space O(n)
var sortedSquares = function (nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    result.push(nums[i] * nums[i]);
  }
  return result.sort((a, b) => a - b);
};

// optimal  Solution - O(n) and O(n)
var sortedSquares = function (nums) {
  let result = new Array(nums.length).fill(0);

  let left = 0;
  let right = nums.length - 1;
  let index = nums.length - 1;

  while (left <= right) {
    let leftSquare = nums[left] * nums[left];
    let rightSquare = nums[right] * nums[right];

    if (leftSquare > rightSquare) {
      result[index] = leftSquare;
      left++;
    } else {
      result[index] = rightSquare;
      right--;
    }
    index--;
  }
  return result;
};

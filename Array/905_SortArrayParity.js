// 905. Sort Array By Parity

//  Brute force method - O(n^2) and space O(n)
var sortArrayByParity = function (nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      result.push(nums[i]);
    }
  }

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] % 2 !== 0) {
      result.push(nums[j]);
    }
  }

  return result;
};

//  Optimal solution - O(n) and space O(1)
var sortArrayByParity = function (nums) {
  let i = 0;
  let j = 0;
  while (i < nums.length) {
    if (nums[i] % 2 === 0) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
      j++;
    } else {
      i++;
    }
  }
  return nums;
};

// 136 Single Number

// Brute Force Solution --- O(n2)
var singleNumber = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        count++;
        if (count === 2) {
          count = 0;
          break;
        }
      }
    }
    if (count === 1) {
      return nums[i];
    }
  }
};

// Better Solution - hashing and Map

// Optimal Solution -- O(n)
var singleNumber = function (nums) {
  let xor = 0;

  for (let i = 0; i < nums.length; i++) {
    xor ^= nums[i];
  }
  return xor;
};

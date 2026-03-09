// 922 Sort Array By Parity !!

//  Brute Force Solution - O(n)+ O(n/2) and space O(n)

var sortArrayByParityII = function (nums) {
  let odd = [];
  let even = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      even.push(nums[i]);
    } else {
      odd.push(nums[i]);
    }
  }

  for (let j = 0; j < nums.length / 2; j++) {
    nums[2 * j] = even[j];
    nums[2 * j + 1] = odd[j];
  }
  return nums;
};

// optimal solution - O(n) and space O(n)
var sortArrayByParityII = function (nums) {
  let result = new Array(nums.length).fill(0);
  let k = 0;
  let j = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      result[k] = nums[i];
      k += 2;
    } else {
      result[j] = nums[i];
      j += 2;
    }
  }
  return result;
};

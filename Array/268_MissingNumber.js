// 268 Missing Number

// Big O(n2) -- brute force method
var missingNumber = function (nums) {
  let n = nums.length;

  for (let i = 0; i <= n; i++) {
    let flag = 0;

    for (let j = 0; j < n; j++) {
      if (nums[j] === i) {
        flag = 1;
        break;
      }
    }
    if (flag === 0) {
      return i;
    }
  }
};

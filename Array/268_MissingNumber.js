// 268 Missing Number

// brute force method Big O(n2) , O(1) space complexity

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

// Better Solution is Hashing

// otimal solution - sum method O(n) + O(1) with space

var missingNumber = function (nums) {
  let n = nums.length;
  // first n natural no. sum  (o to n sum)
  let sum1 = (n * (n + 1)) / 2;
  let sum2 = 0;
  for (let i = 0; i < n; i++) {
    sum2 = sum2 + nums[i];
  }
  return sum1 - sum2;
};

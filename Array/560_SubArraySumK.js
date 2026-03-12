// 560. Subarray Sum Equals K

//  Brute Force Solution - O(n^2)
var subarraySum = function (nums, k) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum = sum + nums[j];
      if (sum === k) {
        count++;
      }
    }
  }
  return count;
};

nums = [1, -1, 0];
console.log(subarraySum(nums, 0));

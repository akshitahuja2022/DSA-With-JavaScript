// 169 Majority Element

var majorityElement = function (nums) {
  let ans = nums[0];
  let i = 0;
  let count = 0;
  while (i < nums.length) {
    if (nums[i] === ans) {
      count++;
    } else {
      count--;
    }
    if (count === 0) {
      ans = nums[i];
      count++;
    }
    i++;
  }
  return ans;
};

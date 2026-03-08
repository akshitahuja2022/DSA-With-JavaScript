// 75 Sort Colors

// Better Solution - O(n) + O(n) - O(n) and O(1) space complexity
var sortColors = function (nums) {
  let count0 = 0;
  let count1 = 0;
  let count2 = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      count0++;
    } else if (nums[i] === 1) {
      count1++;
    } else {
      count2++;
    }
  }
  for (let i = 0; i < count0; i++) {
    nums[i] = 0;
  }

  for (let j = count0; j < count0 + count1; j++) {
    nums[j] = 1;
  }

  for (let k = count0 + count1; k < nums.length; k++) {
    nums[k] = 2;
  }
};

// Optimal Solution O(n) and O(1) spcar complexity
var sortColors = function (nums) {
  let i = 0;
  let j = 0;
  let k = nums.length - 1;

  while (i <= k) {
    if (nums[i] === 2) {
      let temp = nums[i];
      nums[i] = nums[k];
      nums[k] = temp;
      k--;
    } else if (nums[i] === 0) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
      j++;
    } else {
      i++;
    }
  }
};

// 189 Rotate Array

// 1st approach nested loop BigO(n^2) -- time limit exceed
var rotate = function (nums, k) {
  for (let i = 1; i <= k; i++) {
    let value = nums[nums.length - 1];

    for (let i = nums.length - 1; i >= 0; i--) {
      nums[i] = nums[i - 1];
    }
    nums[0] = value;
  }
};

// 2nd approach with extra space BigO(1)extra space
var rotate = function (nums, k) {
  let temp = new Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    temp[(i + k) % nums.length] = nums[i];
  }
  for (let i = 0; i < temp.length; i++) {
    nums[i] = temp[i];
  }
};


// 3rd approach using reverse function
var rotate = function (nums, k) {
  k = k % nums.length;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
};

function reverse(nums, i, j) {
  while (i < j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
    i++;
    j--;
  }
  return nums;
}

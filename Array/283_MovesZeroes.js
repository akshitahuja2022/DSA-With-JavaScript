// 283. Move Zeroes

var moveZeroes = function (nums) {
  let i = 0;
  let j = 0;

  while (i < nums.length) {
    if (nums[i] === 0) {
      i++;
    } else {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
      j++;
    }
  }
};

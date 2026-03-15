// Brute Force Solution - O(n^3)+ O(n logn) time limit exceed

var threeSum = function (nums) {
  let arr = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          let triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
          let exists = arr.some(
            (t) =>
              t[0] === triplet[0] && t[1] === triplet[1] && t[2] === triplet[2],
          );

          if (!exists) {
            arr.push(triplet);
          }
        }
      }
    }
  }
  return arr;
};

// optimal solution - O(n log n) + O(n²) ---> O(n^2) and O(1) extraResult storage: O(k)
var threeSum = function (nums) {
  let result = [];
  nums = nums.sort((a, b) => a - b);
  let i = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    if (i > 0 && nums[i] === nums[i - 1]) continue;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      if (sum < 0) {
        left++;
      } else if (sum > 0) {
        right--;
      } else {
        result.push([nums[i], nums[left], nums[right]]);

        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }

        left++;
        right--;
      }
    }
  }

  return result;
};

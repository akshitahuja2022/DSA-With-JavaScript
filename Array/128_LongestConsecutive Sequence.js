// 128. Longest Consecutive Sequence

let nums = [102, 4, 100, 1, 101, 3, 2, 1];

// Brute force solution - O(n^2) and space O(1)
var longestConsecutive = function (nums) {
  let longest = 1;
  for (let i = 0; i < nums.length; i++) {
    let x = nums[i];
    let count = 1;
    while (linear(nums, x + 1) === true) {
      x = x + 1;
      count = count + 1;
    }
    if (count > longest) {
      longest = count;
    }
  }
  return longest;
};

function linear(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return true;
    }
  }
  return false;
}

console.log(longestConsecutive(nums));

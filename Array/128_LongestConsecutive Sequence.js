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

// Better solution - O(n) and for sorting O(n)
var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;
  nums.sort((a, b) => a - b);
  let longest = 1;
  let count = 0;
  let lastSmaller = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] - 1 === lastSmaller) {
      count++;
      console.log(count);
      lastSmaller = nums[i];
    } else if (nums[i] !== lastSmaller) {
      count = 1;
      lastSmaller = nums[i];
    }

    if (count > longest) {
      longest = count;
    }
  }
  return longest;
};

// Optimal Solution - O(n)
var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let longest = 0;

  for (const num of set) {
    if (!set.has(num - 1)) {
      let curr = num;
      let length = 1;
      while (set.has(curr + 1)) {
        curr++;
        length++;
      }
      longest = Math.max(longest, length);
    }
  }
  return longest;
};

// 385 Maximum Size Subarray Sum Equals K
let arr = [1, 2, 3, 1, 1, 1, 1, 4, 2, 3];
let k = 3;

// brute force method -- O(n) + O(n) + O(n) ~ O(n^3)
var longestLength = (arr, k) => {
  let length = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let sum = 0;
      for (let m = i; m < j; m++) {
        sum += arr[m];

        if (sum === k) {
          length = Math.max(length, j - i + 1);
        }
      }
    }
  }
  return length;
};

// Brute Force method - O(n) + O(n) => O(n^2)
var longestLength = (arr, k) => {
  let length = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum === k) {
        length = Math.max(length, j - i + 1);
      }
    }
  }
  return length;
};

// Better Solution -- Hashing

// Optimal Solution - O(n) + O(n) -> O(n^2)
var longestLength = (arr, k) => {
  let i = 0;
  let j = 0;

  let sum = 0;
  let maxLen = 0;

  while (j < arr.length) {
    sum = sum + arr[j];

    while (sum > k) {
      sum = sum - arr[i];
      i++;
    }
    if (sum === k) {
      maxLen = Math.max(maxLen, j - i + 1);
    }
    j++;
  }
  return maxLen;
};

console.log(longestLength(arr, 3));

// 169 Majority Element

/* The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the 
majority element always exists in the array. 

if n = 7
(n/2) = 7/2 = 3 
 [2,2,1,1,1,2,2] so in case -- 2 is majority because it apperar 4 time and in question 4>3
*/

// Brute Force method - O(n^2)
var majorityElement = function (nums) {
  let n = nums.length;
  for (let i = 0; i < nums.length; i++) {
    var count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j]) count++;
    }
    if (count > n / 2) return nums[i];
  }
};

// Better Solution - hashing O(n logn)

// Optimal Solution O(n)
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

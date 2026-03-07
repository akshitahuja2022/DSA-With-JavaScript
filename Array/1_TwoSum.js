// 1 Two Sum

// Brute Force Solution --- O(n^2)
var twoSum = function (nums, target) {
  // let arr = []
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        // arr.push(i);
        // arr.push(j);
        // return arr;
        return [i, j];
      }
    }
  }
};

/*
// better hashing O(n)
if map in logorithm form then O(nlogn)
if map in unordered then O(n)
*/
var twoSum = function (nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let compliment = target - nums[i];

    if (map.has(compliment)) {
      return [map.get(compliment), i];
    }

    map.set(nums[i], i);
  }
};

/* Sligthly Better approach instead of hashing 
 optimal solution -- O(n)

 2 pointer approach with sorting
*/

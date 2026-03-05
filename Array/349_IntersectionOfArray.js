// 349. Intersection of Two Arrays
var intersection = function (nums1, nums2) {
  let nums3 = [];
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        if (!nums3.includes(nums1[i])) {
          nums3.push(nums1[i]);
        }
      }
    }
  }
  return nums3;
};

// Intersection of sorted array

// O(n+m) and Space  𝑂(𝑘) --> k = number of intersection elements.

let arr = [1, 2, 2, 3, 3, 4, 5, 6];
let arr2 = [2, 3, 3, 5, 6, 6, 7];


let i = 0;
let j = 0;
let k = 0;
let inter = [];

while (i < arr.length && j < arr2.length) {
  if (arr[i] === arr2[j]) {
    if (inter.length === 0 || inter[inter.length - 1] !== arr[i]) {
      inter[k] = arr[i];
      k++;
    }
    i++;
    j++;
  } else {
    i++;
  }
}
console.log(inter);



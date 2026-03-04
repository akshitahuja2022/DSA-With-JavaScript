// 283. Move Zeroes

// Brute Force - O(n) + O(x) + O(n-x) = O(2n) -> O(n) with extra space O(n) worst case
var moveZeroes = function(nums) {
  let k = 0;
  let temp = [];
  for(let i=0; i<nums.length; i++){
    if(nums[i]!==0){
        temp[k] = nums[i]
        k++
    }
  }
  for(let i=0; i<temp.length; i++){
    nums[i] = temp[i]
  }

  for(let i = temp.length; i<nums.length; i++){
    nums[i] = 0
  }

};

// better version - O(x) + O(n-x) = O(n) no extra space = O(1)
var moveZeroes = function(nums) {
let j = -1;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] === 0) {
    j = i;
    break;
  }
}

if(j ===-1) return;

for (let i = j + 1; i < nums.length; i++) {
  if (nums[i] !== 0) {
    let temp = nums[j];
    nums[j] = nums[i];
    nums[i] = temp;
    j++;
  }
}
};

// optimal - O(n)
var moveZeroes = function(nums) {
let j = 0;

for (let i=0; i < nums.length; i++) {
  if (nums[i] !== 0) {
    let temp = nums[j];
    nums[j] = nums[i];
    nums[i] = temp;
    j++;
  }
}
}

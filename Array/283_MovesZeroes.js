// 283. Move Zeroes

// Brute Force - O(n) + O(x) + O(n-x) = O(2n) -> O(n) with extra space
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

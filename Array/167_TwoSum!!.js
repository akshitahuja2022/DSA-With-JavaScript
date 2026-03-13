// 167 Two Sum || - Input Array is sorted

// Brute Force Solution - O(n^2)
var twoSum = function (numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i + 1, j + 1];
      }
    }
  }
};

// Brute Force Solution - O(n^2)
// var twoSum = function(numbers, target) {
    
//     for(let i=0; i<numbers.length; i++){
//         for(let j=i+1; j<numbers.length; j++){
//             if(numbers[i]+numbers[j] === target){
//                 return [i+1,j+1]
//             }
//         }
//     }
// };

// Better Solution - O(n) and O(n)
var twoSum = function(numbers, target) {
    let map = new Map();
    for(let i=0; i<numbers.length; i++){
       let compliment = target - numbers[i];

       if(map.has(compliment)){
        return [map.get(compliment), i+1]
       }

       map.set(numbers[i], i+1)
        
    }
};

// Optimal Solution - O(n) and O(1)
var twoSum = function(numbers, target) {
    let i=0;
    let j=numbers.length-1
    while(i<j){
        sum = numbers[i]+numbers[j];

        if(sum<target){
            i++
        }else if(sum>target){
            j--
        }else{
            return [i+1, j+1]
        }
    }
};
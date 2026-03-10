// 1762 Building with an Ocian view

// leader - everything on the right should be smaller in this question return index
let arr = [10, 22, 12, 3, 0, 6];

// Brute force solution - O(n^2) and space O(n)
var leaders = () => {
  let arr2 = [];

  for (let i = 0; i < arr.length; i++) {
    let leader = true;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        leader = false;
        break;
      }
    }
    if (leader === true) {
      arr2.push(i);
    }
  }
  return arr2;
};

// Optimal solution - O(n) and space for store the leaders O(n)
function leaders(arr) {
  let arr2 = [];
  let max = -Infinity; // max depend on the constraints

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > max) {
      max = arr[i];
      arr2.push(i);
    }
  }
  return arr2;
}

// 54. Spiral Matrix

//  Brute Force - O(m*n) and Auxiliary Space O(1) Output Space	O(m × n)
// Memory required for returning answer → ignore
var spiralOrder = function (matrix) {
  let m = matrix.length;
  let n = matrix[0].length;
  let top = 0;
  let left = 0;
  let bottom = m - 1;
  let right = n - 1;

  let arr = [];

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      arr.push(matrix[top][i]);
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      arr.push(matrix[i][right]);
    }
    right--;

    if (top <= bottom) {
      // right → left
      for (let i = right; i >= left; i--) {
        arr.push(matrix[bottom][i]);
      }
      bottom--;
    }

    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        arr.push(matrix[i][left]);
      }
      left++;
    }
  }

  return arr;
};

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(spiralOrder(matrix));

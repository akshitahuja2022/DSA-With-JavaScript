// 48 Rotate Image

// Correct Way to Create a 2D Array in js  l
// let ans = Array.from({ length: n }, () => new Array(n));
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Brute force solution - O(n²) + O(n²) = O(n²) and O(n^2) space complexity
// var rotate = function (matrix) {
//   let n = matrix.length;
//   let ans = Array.from({ length: n }, () => new Array(n));
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       ans[j][n - 1 - i] = matrix[i][j];
//     }
//   }

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       matrix[i][j] = ans[i][j];
//     }
//   }
// };

// Optimal Solution - O(n^2)+ O(n) and space O(1)
var rotate = function (matrix) {
  let n = matrix.length;

  // Transpose the matrix
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  // reverse the row
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
};

console.log(rotate(matrix));

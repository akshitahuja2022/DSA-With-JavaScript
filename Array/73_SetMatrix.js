// 73 Set Matrix

// Brute force solution - O(n*m*(n+m))
var setZeroes = function (matrix) {
    let m = matrix.length;
    let n = matrix[0].length

    const MARK = Number.MIN_SAFE_INTEGER

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        markRow(matrix,i,n, MARK);
        markColumn(matrix,j,m, MARK);
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === MARK) {
        matrix[i][j] = 0;
      }
    }
  }
};

function markRow(matrix,i,n, MARK) {
  for (let j = 0; j < n; j++) {
    if (matrix[i][j] !== 0) {
      matrix[i][j] = MARK;
    }
  }
}
function markColumn(matrix, j, m, MARK) {
  for (let i = 0; i < m; i++) {
    if (matrix[i][j] !== 0) {
      matrix[i][j] = MARK;
    }
  }
}

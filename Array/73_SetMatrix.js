// 73 Set Matrix

// Brute force solution - O(n*m*(n+m))
var setZeroes = function (matrix) {
  let m = matrix.length;
  let n = matrix[0].length;

  const MARK = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        markRow(matrix, i, n, MARK);
        markColumn(matrix, j, m, MARK);
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

function markRow(matrix, i, n, MARK) {
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

// Better Solution Solution- O(2*n*m) and space O(n) + O(m)
var setZeroes = function (matrix) {
  let m = matrix.length; // row
  let n = matrix[0].length; // col

  let row = new Array(m.length).fill(0);
  let col = new Array(n.length).fill(0);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        row[i] = 1;
        col[j] = 1;
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (row[i] || col[j]) {
        matrix[i][j] = 0;
      }
    }
  }
};


// Optimal Solution - O(2*n*m)
var setZeroes = function (matrix) {
  let m = matrix.length; // row
  let n = matrix[0].length; // col
  let col0 = 1;
//   let col = matrix[0][...];
//   let row = matrix[...][0];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        // Mark the ith col
        matrix[i][0] = 0;

        // Mark the jth column
        if (j !== 0) {
          matrix[0][j] = 0;
        } else {
          col0 = 0;
        }
      }
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] !== 0) {
        // check for col & row
        if (matrix[0][j] === 0 || matrix[i][0] === 0) {
          matrix[i][j] = 0;
        }
      }
    }
  }

  if (matrix[0][0] === 0) {
    for (let j = 0; j < n; j++) {
      matrix[0][j] = 0;
    }
  }
  if (col === 0) {
    for (let i = 0; i < m; i++) {
      matrix[i][0] = 0;
    }
  }
  return matrix;
};

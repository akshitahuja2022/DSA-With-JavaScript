// 344 Reverse String

// Optimal Solution- O(n) and space O(1)
var reverseString = function (s) {
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    let temp = s[i];
    s[i] = s[j];
    s[j] = temp;
    i++;
    j--;
  }
};

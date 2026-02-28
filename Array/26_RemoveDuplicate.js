// Q 26. unique element and Remove duplicate from sorted array

let arr = [0, 0, 1, 1, 1, 2, 2, 3];

function removeDuplicates(arr) {
  let i = 0;
  let j = 1;

  while (i < arr.length - 1) {
    if (arr[i] !== arr[i + 1]) {
      arr[j] = arr[i + 1];
      j++;
    }
    i++;
  }
  return j;
}
console.log(removeDuplicates(arr)); // [0, 1, 2, 3,1, 2, 2, 3]
console.log(arr); // 4

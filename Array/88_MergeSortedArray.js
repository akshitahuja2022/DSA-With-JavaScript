// 88. Merge Sorted Array

// with extra space
var merge = function (nums1, m, nums2, n) {
  let temp = [];
  let k = 0;
  let i = 0;
  let j = 0;
  while (i < m && j < n) {
    if (nums1[i] > nums2[j]) {
      temp[k++] = nums2[j++];
    } else {
      temp[k++] = nums1[i++];
    }
  }
  while (i < m) {
    temp[k++] = nums1[i++];
  }
  while (j < n) {
    temp[k++] = nums2[j++];
  }
  for (let x = 0; x < m + n; x++) {
    nums1[x] = temp[x];
  }
};

// without extra sapce
var merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
};

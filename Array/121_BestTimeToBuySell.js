// 121. Best Time to Buy and Sell Stock

let arr = [7, 1, 5, 3, 6, 4];
var maxProfit = function (prices) {
  let maxProfit = 0;
  let i = 0;
  let min = prices[0];
  let ans = 0;
  while (i < prices.length) {
    if (prices[i] <= min) {
      min = prices[i];
    } else {
      ans = prices[i] - min;
    }

    if (ans > maxProfit) {
      maxProfit = ans;
    }
    i++;
  }
  return maxProfit;
};

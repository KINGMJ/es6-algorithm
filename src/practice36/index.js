/**
 * @param {number[]} prices
 * @return {number}
 */
export function maxProfit(prices) {
  // 最低价格，默认为正无穷大
  let i = 0,
    minprice = Infinity,
    maxprofit = 0

  for (i; i < prices.length; i++) {
    // 如果当天价格低于之前的最低价，设置该价格为最低买入价
    if (prices[i] < minprice) {
      minprice = prices[i]
      // 如果当天价格减去最低价 > 最大利润，最大利润就等于当天价格减去最低价
    } else if (prices[i] - minprice > maxprofit) {
      maxprofit = prices[i] - minprice
    }
  }
  return maxprofit
}

const amountToCoins = (amount, coins) => {
  let res = []
  let sum = 0

  for (let i = 0; i < coins.length;) {
    if (sum + coins[i] <= amount) {
      sum += coins[i]
      res.push(coins[i])
    }
    else if (sum === amount) break
    else if (sum + coins[i] > amount && i !== coins.length - 1) i += 1
    else if (sum + coins[i] > amount && i === coins.length - 1) {
      res = []
      break
    }
    else break
  }

  return res
}

console.log(amountToCoins(46, [25, 10, 5, 2, 1]));
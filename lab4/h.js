const secondLowestAndGreatest = (arr) => {
  const sorted = [...new Set(arr)].sort((a,b) => a - b)
  return [sorted[1], sorted[sorted.length - 2]]
}

console.log(secondLowestAndGreatest([4,2,5,6,7,4,23,2,43,524,4,2345,236,33,424,532543]))
// factorial calculating - recursive

const factorialRecursive = (number) => {
  if (number === 1) return 1
  return number * factorialRecursive(number - 1);
}

console.log(factorialRecursive(10))

// factorial calculating - iterative

function fuctorialIterative(number) {
  let res = 1
  for (let i = 1; i <= number; i += 1) {
    res *= i
  }
  return res
}

console.log(fuctorialIterative(10));
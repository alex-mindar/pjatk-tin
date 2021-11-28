// nth term of fibonnaci sequence

const fibRecursive = (term) => {
  if (term < 2) return term
  return fibRecursive(term - 1) + fibRecursive(term - 2)
}

console.log(fibRecursive(10))

const fibIterative = (number) => {
  const sequence = [0, 1]

  if (number < 2) return sequence[number]

  for (let i = 2; i <= number; i += 1) {
    const sum = sequence[0] + sequence[1]
    sequence[0] = sequence[1]
    sequence[1] = sum
  }

  return sequence[1]
}

console.log(fibRecursive(10));
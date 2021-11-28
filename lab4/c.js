const isPalindrome = (string) => {
  const text = string.toLowerCase()
  const textReversed = text.split('').reverse().join('')
  return text === textReversed
}

console.log(isPalindrome('abddba'))
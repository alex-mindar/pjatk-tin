const longestWord = (text) => {
  return text.split(' ').sort((a, b) => b.length - a.length)[0]
}

console.log(longestWord('hello my dear friend how are you and your friends'))
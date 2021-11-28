const sortLetters = (string) => {
  return string.split('').sort().join('')
}

console.log(sortLetters("webmaster"));
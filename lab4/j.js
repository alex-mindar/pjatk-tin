const binarySearch = (arr, toFind) => {
  let l = 0, r = arr.length - 1;
  while (l <= r) {
    let m = Math.floor((l + r) / 2)
    if (arr[m] < toFind) {
      l = m + 1;
    } else if (arr[m] > toFind) {
      r = m - 1;
    } else return m;
  }
  return -1
}

const arr = [1,5,3,2,5,6,7,2323,1,32,2,62,34]
const sortedArr = [...new Set(arr)].sort((a, b) => a - b)
console.log(JSON.stringify(sortedArr))
console.log(binarySearch(sortedArr, 32));

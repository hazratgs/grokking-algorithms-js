const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

const binarySearch = (list, item) => {
  let low = 0
  let high = list.length - 1

  while (low <= high) {
    const mid = parseInt((low + high) / 2)
    const guess = list[mid]

    if (guess === item) return mid
    if (guess > item) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }
  return null
}

console.log(binarySearch(array, 14))

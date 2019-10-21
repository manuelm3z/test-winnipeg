// Question 1

// Write a function that adds all values in an array.


// Sample Input:
// [3, 4, 6, 7, 2]

// Sample output:
// 22

const addsValue = values => values.reduce((acum, curr) => {
  if (curr && !Number.isNaN(curr)) {
    return Number(acum + curr)
  }
  return acum
}, 0)

console.log(addsValue([3, 4, 6, 7, 2]))
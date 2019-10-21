// Question 2


// Suppose we have a large string of ASCII characters.
// Write an efficient function to find the first non-repeated character in the string.
// Discuss the efficiency of your algorithm.

// Sample Input:
// “teeter”

// Sample output:
// “r”

const splitString = string => string.split("").reduce((acum, curr) => {
  if (acum[curr]) {
    acum[curr]++
  } else {
    acum[curr] = 1
  }
  return acum
}, {})

const findNonRepeated = string => {
  const schars = splitString(string)
  return Object.keys(schars).find(key => {
    return schars[key] === 1
  })
}

console.log(findNonRepeated('teeter'))
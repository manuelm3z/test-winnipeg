// Question 3
// You’re given an error log file that consists of two types of errors. Each line on the log file shows one error. Every line is a space-delimited string. All lines begin with an alphanumeric id. After the id, the line consists of either:

// A list of words using only English letters (error type 1)
// A list of only integers (error type 2)

// For example:
// ‘v1 err var’: “v1” is the id and “err var” is the error data. Since the error data is all words using English letters, then it’s an error type 1.

// ‘b12 8 3 5 2’: “b12” is the id and “8 3 5 2” is the error data. Since the error data is all integers, then it’s an error type 2.

// You have to reorder the data such that all of the lines with words (error type 1) are at the top of the log file. The lines with words are ordered lexicographically, ignoring the identifier except in the case of ties. In the case of ties (if there are two lines that are identical except for the identifier) the identifier is used to break the tie (order lexicographically). Alphanumeric should be sorted in ASCII order (numbers come before letters, and uppercase letters precede lowercase letters). Lines with integers (error type 2) must be left in the original order they were in the file.
// Write an algorithm to reorder the data in the log file, according to the rules above.


// Sample Input:
// logLines = [
// ‘b12 8 3 5 2’,
// ‘v1 err var’,
// ‘ap9 3 9’,
// ‘hf2 err var’,
// ‘t12 goog  ana’,
// ‘u2 fa handle err’
// ]

// Sample Output:
// [
// ‘hf2 err var’,
// ‘v1 err var’,
// ‘u2 fa handle err’,
// ‘t12 goog  ana’,
// ‘b12 8 3 5 2’,
// ‘ap9 3 9’
// ]

const destructError = string => {
  const err = string.split(" ")
  return {
    id: err[0],
    text: err.filter((_, index) => index > 0)
  }
}

const typeOfError = string => {
  let type = 1
  string.forEach((item) => {
    if (item && item !== '' && !Number.isNaN(Number(item))) {
      type = 2
    }
  })
  return type
}

const classifyItems = items => {
  const type1 = [], type2 = []
  items.forEach(item => {
    const { text } = destructError(item)
    if (typeOfError(text) === 1) {
      type1.push(item)
    } else {
      type2.push(item)
    }
  })
  return {
    type1,
    type2
  }
}

const lexOrd = (prev, next) => {
  return !destructError(prev).id.localeCompare(destructError(next).id)
}

const orderErrors = items => {
  const { type1, type2 } = classifyItems(items)
  return type1.sort(lexOrd).concat(type2.sort(lexOrd))
}


console.log(orderErrors([
  'b12 8 3 5 2',
  'v1 err var',
  'ap9 3 9',
  'hf2 err var',
  't12 goog  ana',
  'u2 fa handle err'
]))
const { sortedNames } = require('./quickSortStrings')

function binarySearch(list, target) {
  let first = 0;
  let last = list.length - 1;

  while (first <= last) {
    let midpoint = Math.floor((first + last)/2)
    
    if (list[midpoint] === target) {
      return midpoint;
    } else if (list[midpoint] < target) {
      first = midpoint + 1;
    } else {
      last = midpoint - 1;
    }
  }
  return -1
}

const verify = (index) => {
  if (index !== -1) {
    console.log(`Target found at index: ${index}`)
  } else {
    console.log(`Target not found in list`)
  }
}

// const numbers = [1,2,3,4,5,6,7,8,9,10]

// verify(binarySearch(numbers, 12));

// verify(binarySearch(numbers, 6));
verify(binarySearch(sortedNames, 'Mateusz'))
verify(binarySearch(sortedNames, 'Piotr'))
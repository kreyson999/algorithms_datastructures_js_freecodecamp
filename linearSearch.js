const linearSearch = (list, target) => {
  /* 
  Returns the index position of the target if found, else returns None
  */
  for (let i=0; i < list.length; i++) {
    if (list[i] === target) {
      return i;
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

const numbers = [1,2,3,4,5,6,7,8,9,10]

const result = linearSearch(numbers, 6)
verify(result);
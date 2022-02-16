function bogoSort(list) {
  let copyOfList = [...list]
  while (!isSorted(copyOfList)) {
    shuffleArray(copyOfList)
  }
  return copyOfList
}

function isSorted(list) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] > list[i+1]) {
      return false
    }
  }
  return true
}

/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}
console.log(bogoSort([4,8,3,1,12,6,66,14]))
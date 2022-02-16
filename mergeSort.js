function mergeSort(list) {
  /* 
  Sort a list in ascending order
  Return a new sorted list

  Divide: Find the midpoint of the list and divide into sublists
  Conquer: Recursively sort the sublists created in previous step
  Combine: Merge the sorted sublists created in previousstep

  Takes O(kn log n) time
  */

  if (list.length <= 1) return list

  const { leftHalf, rightHalf } = split(list);
  const left = mergeSort(leftHalf);
  const right = mergeSort(rightHalf);

  return merge(left, right);
}

function split(list) {
  /* 
  Divide the unsorted list at midpoint into sublists
  Return two sublists - left and right

  Takes overall O(k log n) time
  */
  const mid = Math.floor(list.length/2);

  const leftHalf = list.slice(0, mid);
  const rightHalf = list.slice(mid);

  return { leftHalf, rightHalf }
}

function merge(left, right) {
  /* 
  Merges two lists, sorting them in the process,
  Returns a new merged list

  Runs in overall O(n) time
  */
  let l = [];
  let i = 0;
  let j = 0;
  
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      l.push(left[i]);
      i++;
    } else {
      l.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    l.push(left[i]);
    i++;
  }

  while (j < right.length) {
    l.push(right[j]);
    j++;
  }

  return l
}

function verifySorted(list) {
  const n = list.length

  if (n === 0 || n === 1) return true

  return list[0] < list[1] && verifySorted(list.slice(1))
}

const numbers = [54,62,93,17,77,31,44,55,20];
const sortedNumbers = mergeSort(numbers)
console.log(sortedNumbers)

console.log(verifySorted(sortedNumbers))
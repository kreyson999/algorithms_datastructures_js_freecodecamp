function mergeSort(list) {
  /* 
  Sort a list in ascending order
  Return a new sorted list

  Divide: Find the midpoint of the list and divide into sublists
  Conquer: Recursively sort the sublists created in previous step
  Combine: Merge the sorted sublists created in previousstep
  */

  if (list.length <= 1) return list

  const { leftHalf, rightHalf } = split(list)
  let left = mergeSort(leftHalf)
  let right = mergeSort(rightHalf)

  return merge(left, right)
}

function split(list) {
  /* 
  Divide the unsorted list at midpoint into sublists
  Return two sublists - left and right
  */
  let mid = Math.floor(list.length/2)

  let left = list.slice(0, mid);
  let right = list.slice(mid)

  return { left, right }
}

function merge(left, right) {
  /* 
  Merges two lists, sorting them in the process,
  Returns a new merged list
  */
}
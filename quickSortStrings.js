function quickSort(list) {
  if (list.length <= 1) {
    return list
  }
  const lessThanPivot = []
  const greaterThanPivot = []
  const pivot = list[0]
  for (let i = 1; i < list.length; i++) {
    if (list[i] <= pivot) {
      lessThanPivot.push(list[i])
    } else {
      greaterThanPivot.push(list[i])
    }
  }
  return [...quickSort(lessThanPivot),pivot,...quickSort(greaterThanPivot)]
}

const sortedNames = quickSort(['Jakub', 'Mateusz', 'Filip', 'Igor', 'Kamil', 'Mikołaj', 'Piotr'])

module.exports = {
  sortedNames
}
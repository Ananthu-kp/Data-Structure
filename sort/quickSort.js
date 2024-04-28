const array = [10, 4, 2, 8, 0, 3]

function quickSort(array) {
    if (array.length < 2) return array

    let pivot = array[array.length - 1]
    let left = []
    let right = []

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < pivot) {
            left.push(array[i])
        } else {
            right.push(array[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort(array));
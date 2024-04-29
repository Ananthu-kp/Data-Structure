const array = [10, 4, 2, 8, 0, 3]

function mergeSort(array) {
    if (array.length < 2) return array

    let middle = Math.floor(array.length/2)
    let leftArr = array.slice(0,middle)
    let rightArr = array.slice(middle)
    return merge(mergeSort(leftArr),mergeSort(rightArr))
}

function merge(leftArr, rightArr) {
    let sorted = []
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            sorted.push(leftArr.shift())
        } else {
            sorted.push(rightArr.shift())
        }
    }
    return [...sorted, ...leftArr, ...rightArr]
}

console.log(mergeSort(array));
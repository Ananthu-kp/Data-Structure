//find the largest element from an array

const array = [11, 22, 33, 44, 55, 66, 77]

function largest(array) {
    if (array.length === 0) {
        return null
    }

    let largest = array[0]

    for (let i = 1; i < array.length; i++) {
        if (array[i] > largest) {
            largest = array[i]
        }
    }
    return largest
}

console.log(largest(array));

//Find the second largest element

function secondLargest(array) {
    if (array.length === 0) {
        return null
    }

    let largest = array[0]
    let secondLar = null

    for (let i = 0; i < array.length; i++) {
        if (array[i] > largest) {
            secondLar = largest
            largest = array[i]
        }
    }
    return secondLar
}

console.log(secondLargest(array));

//find the third largest element from an array

function thirdLargest(array) {
    if (array.length === 0) {
        return null
    }

    let largest = array[0]
    let secondLar = null
    let thirdLar = null

    for (let i = 0; i < array.length; i++) {
        if (array[i] > largest) {
            thirdLar = secondLar
            secondLar = largest
            largest = array[i]
        }
    }
    return thirdLar
}

console.log(thirdLargest(array));
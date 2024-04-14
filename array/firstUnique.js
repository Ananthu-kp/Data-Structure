//Find the first unique element from the array

const array = [10, 10, 11, 12, 11, 13, 14, 15]

function firstUnique(array) {
    for (let i = 0; i < array.length; i++) {
        let unique = true
        for (let j = 0; j < array.length; j++) {
            if (array[i] === array[j] && i != j) {
                unique = false
                break;
            }
        }
        if (unique) {
            return array[i]
        }
    }
    return -1
}

console.log(firstUnique(array));
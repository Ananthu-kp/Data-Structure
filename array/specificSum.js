const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let target=10

function findPairSum() {
    let pairs = []
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] == target) {
                pairs.push([array[i], array[j]])
            }
        }
    }
    return pairs
}

console.log(findPairSum());

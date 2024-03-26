// given an array of n elements and a target element t , find the index of t in the array. return -1 if the target element i not found

const array = [10,2,34,56,12,23];
const target= 23;

function linearSearch(array,target){
    for(let i=0; i<array.length; i++){
        if(array[i]===target){
            return i
        }
    }
    return -1
}

console.log(linearSearch(array,target));
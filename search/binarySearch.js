let array=[11,23,34,45,56,67,78];
let target=56;

// function binarySearch(array,target){
//     let leftIndex=0;
//     let rightIndex=array.length-1;

//     while(leftIndex <= rightIndex){
//         const mid=Math.floor((leftIndex+rightIndex)/2);

//         if(array[mid]===target){
//             return mid;
//         }else if(array[mid]<target){
//             leftIndex=mid+1
//         }else{
//             rightIndex=mid-1
//         }
//     }
//     return -1
// }

// console.log(binarySearch(array,target));

//recursion

function binarySearchRecursion(array,target,left,right){
    if(left > right){
        return -1
    }

    const mid= Math.floor((left+right)/2);

    if(array[mid]===target){
        return mid
    }else if(array[mid] < target){
        return binarySearchRecursion(array,target,mid+1,right)
    }else{
        return binarySearchRecursion(array,target,mid-1,left)
    }
}

console.log(binarySearchRecursion(array,target,0,array.length-1));
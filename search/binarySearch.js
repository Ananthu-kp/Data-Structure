let array=[11,23,34,45,56,67,78];
let target=56;

function binarySearch(array,target){
    let leftI=0
    let rightI=array.length-1

    while(leftI<=rightI){
        const mid=Math.floor((leftI+rightI)/2)
        if(array[mid]===target){
            return mid
        }else if(array[mid]<target){
            leftI=mid+1
        }else{
            rightI=mid-1
        }
    }
    return -1
}

console.log(binarySearch(array,target))

//recursion

function binarySearchRecursion(array,target,left,right){
    if(left > right){
        return -1
    }
    const mid=Math.floor((left+right)/2)

    if(array[mid]==target){
        return mid
    }else if(array[mid]<target){
        return binarySearchRecursion(array,target,mid+1,right)
    }else{
        return binarySearchRecursion(array,target,mid-1,left)
    }
}

console.log(binarySearchRecursion(array,target,0,array.length-1));
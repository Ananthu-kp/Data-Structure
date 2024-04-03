const array = [9, 1, 9, 2, 3, 9, 4, 5, 6, 7, 8, 9];

function moveNumber(){
    let count=0;
    let newArray=[]
    for(let i=0; i<array.length;i++){
        if(array[i]!==9){
            newArray.push(array[i])
        }else{
            count++
        }
    }
    for(let j=0;j<count;j++){
        newArray.push(9)
    }
    return newArray
}

console.log(moveNumber());
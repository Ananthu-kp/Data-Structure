const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function rearrange(){
    let result=[]
    for(let i=0;i<array.length;i++){
        let int=Math.floor(i/2)
        if(i%2==0){
            result.push(array[array.length-int-1])
        }else{
            result.push(array[int])
        }
    }
    return result
}
console.log(rearrange());
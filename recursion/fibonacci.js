function fib(n){
    if(n<=1){
        return n
    }else{
        return fib(n-1)+fib(n-2)
    }
}
for(let i=0;i<10;i++){
    console.log(fib(i))
}

//normal
function fibi(n){
    if(n<=1){
        return n
    }
    let result=[0,1]
    for(let i=2; i<n;i++){
        result[i]=result[i-1]+result[i-2]
    }
    return result
}
console.log(fibi(6));
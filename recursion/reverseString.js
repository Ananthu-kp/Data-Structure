const str="Ananthu"

function reverseRecursive(str){
    if(str==""){
        return ""
    }
    return reverseRecursive(str.slice(1))+str.charAt(0)
}
console.log(reverseRecursive(str));



//normal method

function reverse(str){
   return str.split('').reverse().join('')
}
console.log(reverse(str));

//or

function reverse2(str){
    let start=0;
    let end=str.length-1;
    let char=str.split('')

    while(start<=end){
        let temp=char[start]
        char[start]=char[end]
        char[end]=temp

        start++
        end--
    }
    return char.join("")
}
console.log(reverse2(str));
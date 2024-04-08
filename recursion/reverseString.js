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
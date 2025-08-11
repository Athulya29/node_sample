const arr=[1,2,3,4,5,6]
function arrayElement(num){
    if(arr.indexOf(num)==-1){
        return false
    }
    else{
        return true
    }
}
console.log(arrayElement(6))
console.log(arrayElement(9))
console.log(arrayElement(5))
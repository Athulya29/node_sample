function isPrime(number){
    if(number<=1){
        return false
    }
    for(let i=2;i<number;i++){
        if(number%i===0){
            return false    
        }
    }
    return true
}

let arr=[]

function primeTillNum(num){
    for(let i=2;i<=num;i++){
        if(isPrime(i)){
            console.log(i)
            arr.push(i)
        }
    }
    console.log(arr)
}
primeTillNum(9)


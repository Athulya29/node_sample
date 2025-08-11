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


function primeTillNum(num1,num2){
    let primes=[]
    for(let i=num1;i<=num2;i++){
        if(isPrime(i)){
           primes.push(i)
            
        }
    }
    return primes
    
}

module.exports=primeTillNum;

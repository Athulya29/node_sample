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


function primeTillNum(num){
    let primes=[]
    for(let i=0;i<=num;i++){
        if(isPrime(i)){
           primes.push(i)
            
        }
    }
    return primes
    
}

module.exports=primeTillNum;

function fibonacci(n){
    let a=0
    let b=1
    if (n<=0) {
        console.log("invalid")
    }
    else if(n==1){
        console.log(a)
    }
    else{
    console.log(a)
    console.log(b)
    for (let i=2;i<n;i++){
    let c =a+b; 
    a=b
    b=c
    console.log(c)
    }  
}
}
fibonacci(10)
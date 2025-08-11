function factorialOfNum(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact =fact* i;
    }
    return fact;
}


module.exports =factorialOfNum;

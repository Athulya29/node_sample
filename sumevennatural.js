function even(num) {
   if (num % 2 === 0) {
          return true
    } else {
      
        return false
    }
}
function sumeven(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        if(even(i)){
            sum =sum+ i;
        }  
    }
    console.log(sum)
    
}
sumeven(5);
sumeven(10);
sumeven(15);

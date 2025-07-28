let marks=[1,2,3,4,5]
let sum=0
for(let i=0;i<marks.length;i++)
{
     sum=sum+ marks[i]
     
}
console.log("sum",sum)

let avg=sum/marks.length
console.log("average",avg)

function sumEven(){
    let marks=[1,2,3,4,5]
    let sum=0 
    for(let i=0;i<marks.length;i++){
        if(marks[i]%2==0){
            sum=sum + marks[i]
        }
    }
    console.log("sum of even numbers",sum)
}
sumEven()

function sumOdd(){
    let marks=[1,2,3,4,5]
    let sum=0 
    for(let i=0;i<marks.length;i++){
        if(marks[i] % 2 !==0){
            sum=sum+marks[i]
        }
    }
    console.log("sum of odd numbers",sum)
}
sumOdd()


function isPrime(number){
   if(number<=1){
        return false
    }
    for (let i=2;i<number;i++){
        if(number%i==0){
            return false
        }
    }
    return true
}
 function primeOfArray(){
    let array=[1,2,3,4,5,6,7]
    for(let i=0;i<array.length;i++){
        if(isPrime(array[i])){
            console.log("prime")
        }
        else{
            console.log("not a prime")
        }
    }
 }
primeOfArray()
    
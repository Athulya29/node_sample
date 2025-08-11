function largestNumber(){
    let array=[1,56,7,89,2,3];
    let maxElement=array[0];
    for(let i=1;i<=array.length;i++){
        if (maxElement<array[i]){
             maxElement=array[i];
        }

    }
    console.log("maximum element",maxElement)
    
}
largestNumber()
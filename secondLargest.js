function secondLargest(arr){
    let maxElement=arr[0];
    let secondLarge;
    for(let i=1;i<arr.length;i++){
        if(maxElement<arr[i]){
            secondLarge=maxElement;
            maxElement=arr[i];
            
        }
            
       
    }
   console.log(secondLarge)
}
secondLargest([2,67,32,12,34,89]);
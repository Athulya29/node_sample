function arrayOfPositive(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>0){
            sum=sum+arr[i];
        }
    }
    console.log(sum);
}
arrayOfPositive([1,2,3,-1,-2,5,6]);
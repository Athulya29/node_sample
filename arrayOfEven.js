function arrayOfeven(arr){
    let newArray=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            newArray.push(arr[i])
        }
    }
    console.log(newArray)
}
arrayOfeven([1,2,3,4,5,6,7,8])
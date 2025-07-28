function secondLargest(arr){
    let sortArray=arr.sort();
    let secondLarge=sortArray.length-2;
    console.log("second Largest ",sortArray[secondLarge]);


}
secondLargest([2,67,32,12,34,89]);
function minimum(){
  let array=[4,5,67,3,89,34,8];
  let minElement=array[0];
  for(let i=1;i<array.length;i++){
    if(minElement>array[i]){
        minElement=array[i]
    }
  }
  console.log("minimum element ",minElement)
}
minimum()
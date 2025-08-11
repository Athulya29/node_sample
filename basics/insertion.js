let names=[]
let ages=[]
let marks=[]
function  insertion(name,age,mark){
    if(age>=18 && age<=30 && mark>=0 && mark<=50){
      names.push(name)
      ages.push(age)
      marks.push(mark)
      console.log(names)
console.log(ages)
console.log(marks)
    }
    else{
        console.log(`${name},${age},${mark} cannot be inserted`)
    }
    
}
insertion("athu",19,45)
insertion("ansha",21,49)
insertion("sneha",22,43)
insertion("Manu",24,45)
insertion("nivu",40,90)




function average(){
  let sum=0
  for(let i=0;i<marks.length;i++){
    sum=sum+marks[i]
  }
  let avg=sum/marks.length
  console.log(avg)
}
average()



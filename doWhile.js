let names=[]
let ages=[]
let marks=[]
function  insertion(name,age,mark){
    while(age>=18 && age<=30 && mark>=0 && mark<=50){
      names.push(name);
      ages.push(age);
      marks.push(mark);
      break;
    }
    console.log(names)
    console.log(ages)
    console.log(marks)
    
    
    
}
insertion("athu",19,45)
insertion("ansha",21,49)
insertion("sneha",22,43)
insertion("Manu",24,45)
insertion("nivu",40,90)



let name=[]
let age=[]
let mark=[]
function  insertion(name,age,mark){
  do{
      names.push(name);
      ages.push(age);
      marks.push(mark);
      break;
  }while(age>=18 && age<=30 && mark>=0 && mark<=50)
    
    console.log(names)
    console.log(ages)
    console.log(marks)
}
insertion("athu",19,45)
insertion("ansha",21,49)
insertion("sneha",22,43)
insertion("Manu",24,45)
insertion("nivu",40,90)





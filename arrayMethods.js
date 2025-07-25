let names=[]
function insertNames(name){
    if(names.indexOf(name)==-1){
    names.push(name)
    console.log(names) 
    
    }
    else{
        console.log("it cannot be inserted . " + name + " already exists" )
    }
}

insertNames("Shifana")
insertNames("Athulya")
insertNames("Athulya")
insertNames("Anu")
insertNames("Mary")
insertNames("Ushu")




function popItem(){
    names.pop()
    console.log(names)
}
popItem()



function spliceItem(x,y){
    names.splice(x,y)
    console.log("After splicing",names)
}
spliceItem(0,1)
spliceItem(1,2)
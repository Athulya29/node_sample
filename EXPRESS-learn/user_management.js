const express=require('express');
const app=express();
app.use(express.json())  //to receive data from body

let users=["Athulya","Athira","Shiva","Gopuu"]


app.get("/getAllUsers",(req,res)=>{
    res.json(users)
})
app.post("/insertUser",(req,res)=>{
   let name=req.body.name;
   let index=users.indexOf(name);
   if(index==-1 && name.trim().length>0 ){
    users.push(name);
    res.send("Insertion success");
   }
   else{
    res.send("name cannot be inserted");
   }
    
})

app.put("/editUser",(req,res)=>{
    let name=req.body.name;
    let newName=req.body.newName;
    let index=users.indexOf(name);
    if(index==-1){
        res.send("name doesn't  exist");
    }else{
        users[index]=newName;
        res.send("name updated");
    }

})

app.delete("/deleteUser",(req,res)=>{
   let name=req.body.name;
   let index=users.indexOf(name);
   if(index==-1){
    res.send("name does not exist");
   }else{
    users.splice(index,1);
    res.send("Deleted successfully");
   }     
})


app.delete("/deleteAll",(req,res)=>{
    users.splice(0,users.length);
    res.send("deleted ");
})

app.delete("/deleteArray",(req,res)=>{
    let namesToDelete=req.body.name; //["Athulya","megha"]
    for(let i=0;i<users.length;i++){
        let name=namesToDelete[i]     // i=0
        let index=users.indexOf(name)  //index=0
        if(index==-1){
            res.send("name does not exist")
        }else{
            users.splice(index,1)
            res.send("Deleted")
        }

    }


})

app.get("/checkIfNameIsPresent",(req,res)=>{
    let name=req.query.name;
    let index=users.indexOf(name)
    if(users.includes(name)){
        res.send("True")
    }else{
        res.send("false")
    }
})


app.listen(3000)
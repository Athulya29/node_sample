const express=require('express');
const app=express();
let users=["Athulya","Athira"]


app.get("/getAllUsers",(req,res)=>{
    res.json(users)
})


app.post("/insertUser",(req,res)=>{
   let name=req.query.name;
   let index=users.indexOf(name);
   if(index==-1 && name.trim().length>0 ){
    users.push(name)
    res.send("Insertion success")
   }
   else{
    res.send("name cannot be inserted")
   }
    
})

app.put("/editUser",(req,res)=>{
    let name=req.query.name;
    let newName=req.query.newName;
    let index=users.indexOf(name)
    if(index==-1){
        res.send("name doesn't  exist")
    }else{
        users[index]=newName
        res.send("name updated")
    }

})

app.delete("/deleteUser",(req,res)=>{
   let name=req.query.name;
   let index=users.indexOf(name)
   if(index==-1){
    res.send("name does not exist")
   }else{
    users.splice(index,1)
    res.send("Deleted successfully")
   }     
})




app.listen(3000)
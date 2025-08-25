const express=require('express');
const app=express();
app.use(express.json());

let users=[
    { id:1,
    name : "Athulya",
    age:21,
    marks:89,
    email:"athulya@gmail.com"},
    {id:2,
    name : "Anu",
    age:22,
    marks:99,
    email:"anu@gmail.com"
    }]




app.get("/getAllUsers",(req,res)=>{
    res.json(users);
})


app.post("/insertUser",(req,res)=>{
    let user=req.body;
    let email=user.email
    let index=users.map(user=>user.email).indexOf(email)
    if(index==-1){
    let LastId=users[users.length-1].id
    LastId=LastId+1
    user.id=LastId;
    users.push(user)
    res.send("insertion success")
    }else{
        res.send("cannot be inserted.Email already exists")
    }
    
})

app.get("/getById",(req,res)=>{
    let id=parseInt(req.query.id); //id=1
    let index=users.map(user=>user.id).indexOf(id) //index=0
    if(index==-1){
        res.send("no such user with id"+id)
    }else{
        res.send(users[index])  
      }  
      
 })

app.delete("/deleteUser",(req,res)=>{
    let id=req.body.id
    let index=users.map(user=>user.id).indexOf(id)
    if(index==-1){
        res.send("no such user with id")
    }else{
        users.splice(index,1)
        res.send("deleted user with id " + id)
    }

})


app.put("/updateUser",(req,res)=>{
    let id=parseInt(req.query.id)
    let details=req.body
    let index=users.map(user=>user.id).indexOf(id)
    if(index==-1){
        res.send("no such user with id")
    }else{
        users[index]={
            id:id,
            name:details.name,
            age:details.age,
            marks:details.marks,
            email:details.email
        }
        res.send("updated successfully")
    }
})
app.listen(3000)

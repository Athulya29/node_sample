const express=require('express'); 
const app=express();


app.get("/",function(req,res){
    res.send(" hello world")
})


app.get("/square",(req,res)=>{
    let num=parseInt(req.query.num);
    res.send("Square is " + num*num)

})

app.get("/sum",(req,res)=>{
    let n1=parseInt(req.query.n1);
    let n2=parseInt(req.query.n2);
    let sum=n1+n2;
    res.send("sum " + sum);
})

app.get("/concat",(req,res)=>{
    let name1=req.query.name1;
    let name2=req.query.name2;
    res.send( name1 + name2);
})
app.listen(3000)   




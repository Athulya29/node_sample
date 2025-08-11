//CORE MODULES

//os module

// const os = require('os');
// console.log(`OS Platform: ${os.platform()}`);
// console.log(`OS Type: ${os.type()}`);
// console.log(`OS Release: ${os.release()}`);
// console.log(`CPU Architecture: ${os.arch()}`);
// console.log(`Hostname: ${os.hostname()}`);



//fs module

// const fs=require('fs')
// const filename="file.txt";
// const content=" Hello world";


// fs.readFile(filename,'utf-8',function(err,result){
// if(err){
//         console.log(err)
//     }
//     else{
//         console.log("read successfully",result)
//     }
// })

// fs.writeFile("main.txt",content,function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("written successfully");
//     }
// })

// fs.appendFile(filename,content,function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Append successfully")
//     }
// })
    
//delete

//fs.unlink("main.txt",function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("deleted successfully");
//     }
// })


//path module

// const path=require('path')
// const filename="sample.txt"
// console.log(path.join(__dirname,filename))//full path
// console.log(path.dirname('home/user/sample.txt'))//search directory
// console.log(path.extname('home/user/sample.txt'))//shows extension


//HTTP module

// const http=require('http')
// const server=http.createServer(function(req,res){

//     res.end("this is our server")

// })
// const Port=3000;
// server.listen(Port,function(err){
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("running successfully")
//     }
// })

//Local modules
// const add = require("./sum");
// console.log(add(3, 4));

// const fact=require("./factorial");
// console.log(fact(6))
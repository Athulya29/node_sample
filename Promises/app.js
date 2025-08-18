const fs = require("fs").promises;
const http = require("http");
const ENCODING = "utf8";
const Port = 3000;



const server=http.createServer(function(req,res){


    const url=req.url; 
    if(url.includes('readFile')){//readfile?filename=abc.txt
        let fileName=url.split("=")[1]
        fs.readFile(fileName, ENCODING).then((data) => {
        res.end(data);
      }).catch((err) => {
        res.end(err);
      })


    }else if(url.includes('writeFile')){  // /writeFile?fileName = "abc.txt"&content = "hiiiii"
        let fileName=url.split("=")[1].split("&")[0]
        let content=url.split("=")[2];
        fs.writeFile(fileName,content).then(()=>{
            res.end("written succesfully  " + content)
        }).catch((err)=>{
            res.end(err);
        })


    }else if(url.includes("getAllUser")){
     fs.readFile("users.json","utf-8").then(data=>{
      res.end(data)
    }).catch(err=>{
      res.end(err)
    })


  }else if(url.includes('insertUser')){
    let id=parseInt(url.split("=")[1].split("&")[0])
    let name=url.split("=")[2].split("&")[0]
    let place=url.split("=")[3]   //insertUser?id = 6&name = Athulya&place = kochi
    

    fs.readFile("users.json",ENCODING).then(data=>{
        let newUsers=JSON.parse(data);
        newUsers.push({id,name,place})
        
         fs.writeFile("users.json",JSON.stringify(newUsers)).then(()=>{
            res.end("successfully inserted")
        }).catch(err=>{
            res.end(err)
        })

    })


  }else if(url.includes("deleteUser")){
    let name=url.split("=")[1]
    fs.readFile("users.json",ENCODING).then(data=>{
        let newUsers=JSON.parse(data)
        let updatedUsers=  newUsers.filter(newUsers=>newUsers.name !== name)
       return fs.writeFile("users.json",JSON.stringify(updatedUsers)).then(()=>{
            res.end("Deleted successfully")
        }).catch(err=>{
            res.end(err)
        })
    })
    
  }else if(url.includes('updateUser')){
    
  }
  
  
  
  else{
        res.end("no such API")
    }

})

server.listen(Port,function(err){
    if(err){
        console.log(err)
    }else{
        console.log("success")
    }
})
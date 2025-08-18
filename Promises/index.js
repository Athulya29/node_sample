const fs = require("fs").promises;
const http = require("http");
const fileName = "abc.txt";
const ENCODING = "utf8";
const Port = 3000;

const server = http.createServer(function (req, res) {
    const url=req.url;
  if (url.includes("readFile")) {
    fs.readFile(fileName, ENCODING).then((data) => {
        res.end(data);
      }).catch((err) => {
        res.end(err);
      }).finally(() => {
        res.end("finally");
      });



  }
   else if (url.includes("writeFile")) {
    fs.writeFile("write.txt","Hi").then((data) => {
        res.end("Written successfully");
      }).catch((err) => {
        res.end(err);
      });



  }else if(url.includes("appendFile")){
    fs.appendFile("write.txt"," how are you").then(data=>{
        res.end("written successfully")
    }).catch(err=>{
        res.end(err)
    })

    
    }else if(url.includes("deleteFile")){
        fs.unlink("write.txt").then(()=>{
            res.end("deleted successfully")
        }).catch(err=>{
            res.end(err)
        })



    }else if(url.includes("renameFile")){
        fs.rename("write.txt","append.txt").then(()=>{
            res.end("file succesfully renamed")
        }).catch(er=>{
            res.end(err)
        })


    }else if(url.includes("create")){
        fs.mkdir("./MyFolder").then(()=>{
            res.end("new folder was created successfully")
        }).catch(err=>{
            res.end(err)
        })



    }else if (url.includes('readfileContent')){
        fs.readFile("reg.txt",ENCODING).then(fileToRead=>{
            fs.readFile("fileToRead",ENCODING).then(content=>{
                res.end("read successfully" + content)
            }).catch(err=>{
                res.end(err)
            })
           
        })
    }

});



server.listen(Port, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("success");
  }
});


//create 2 files part1 and part2 where the thirds files name is stored partial in each file.Read both part1 and part2 files and merge its content to read the actual file - try with callback and promise

 let part1_name="part1.txt"
 let part2_name="part2.txt"

 fs.readFile(part1_name,ENCODING).then(data1=>{
    fs.readFile(part2_name,ENCODING).then(data2=>{
        fs.readFile(data1+data2,ENCODING).then(content=>{
            console.log("read successfully",content)
        })
    })
 })




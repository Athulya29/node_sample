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



  } else if (url.includes("writeFile")) {
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
        fs.unlink("app.txt").then(()=>{
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
        fs.mkdir("./newFolder").then(()=>{
            res.end("new folder was created successfully")
        }).catch(err=>{
            res.end(err)
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

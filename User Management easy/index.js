const http=require('http');
const url=require('url');
const port=3000;
const names=[]

const server=http.createServer(function(req,res){
    
    const strUrl=req.url; //?name=Athulya
    if(strUrl.includes('insert')){
        let name=strUrl.split("=")[1];//Athulya
        if(names.includes(name)){
            res.end("name already exist");
        }
        else{
            names.push(name)
            res.end("Inserted  " + name)
        }
    }else if(strUrl.includes('getAllNames')){
        res.end(names.toString())


    }else if(strUrl.includes('updateName')) { // /?updatename?oldname= shiva&newname= athu
        let oldname=strUrl.split("=")[1].split('&')[0]
        let newname=strUrl.split("=")[2]
        let index=names.indexOf(oldname)
        if(index == -1){
            res.end("old name doesn't exist")
        }else{
           names[index]=newname;
            res.end(newname +" updated")
        }
       
    }else if(strUrl.includes('deleteName')){
        let name=strUrl.split("=")[1];
        let index=names.indexOf(name);
        if(index == -1){
            res.end("name doesn't exist " + name)
        } else{
            names.splice(index,1)
            res.end("Deleted  " + name)
        }
    }
    
})
server.listen(port,function(err){
    if(err){
        console.log(err)
    }else{
        console.log("success")
    }
})
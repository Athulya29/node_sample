const http=require('http');
const Port=3000;
let users=[{
    name:"Athulya",
    age:"21",
    mark:100
},{
    name:"Anu",
    age:"24",
    mark:90
},
{
    name:"Athira",
    age:"25",
    mark:80
}
]

const server=http.createServer(function(req,res){
    const url=req.url;  // /getAllNames
    if(url.includes('getUser')){
       res.end(JSON.stringify(users))

    }else if(url.includes('insertUser')){  // /insertuser?name = Athira&age  = 21&mark  =  25
         let name=url.split("=")[1].split("&")[0];
         let age=parseInt(url.split("=")[2].split("&")[0]);
         let mark=parseInt(url.split("=")[3]);
         let sample={
            name:name,
            age:age,
            mark:mark
        }

    users.push(sample)       
    res.end("Inserted")


    }else if(url.includes('deleteUser')){
        let nameToDelete=url.split("=")[1]
        let index=-1;
        for(let i=0;i<users.length;i++){
            if(nameToDelete == users[i].name){
                index = i
            }
        }
        if(index==-1){
            res.end("no such user" + nameToDelete )
        }else{
            users.splice(index,1)
            res.end("deleted" + nameToDelete)
        }


    }else if(url.includes('editUser')){
        let oldname=url.split("=")[4];   // /editUser?name = kk&age = 7&mark  = 89&oldname =  Athulya
        let age=url.split("=")[2].split("&")[0];
        let mark=url.split("=")[3].split("&")[0];
        let name=url.split("=")[1].split("&")[0];
        let index=-1;
        for(let i=0;i<users.length;i++){
            if(oldname == users[i].name){
                index = i
            }
        }
        if(index==-1){
            res.end("no such user exists")
        }else{
            users[index].age=age;
            users[index].mark=mark;
            users[index].name=name;
            res.end("user details updated" )
        }


    }else{
        res.end("No such API")
    }


        
})
server.listen(Port,function(err){
    if(err){
        console.log(err)
    }else{
        console.log("success")
    } 
})
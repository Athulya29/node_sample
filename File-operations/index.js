// function sum(a,b){
//     return a+b;
// }
// console.log(sum(5,6));

const fs=require('fs');
// let fileName="main.txt"
// let encoding="utf8"
// fs.readFile(fileName,encoding,function(err1,fileContent){
//     if(err1){
//         console.log(err1)
//     }
//     else{
//         console.log("read successfully",fileContent)
//         fs.readFile(fileContent,encoding,function(err2,mainContent){
//             if(err2){
//                 console.log(err2)
//             }
//             else{
//                 console.log("read successfully",mainContent)
//             }
//         })
//     }
// })


fs.mkdir("./newFolder",function(err){
    if(err){
        console.log(err)
    }
    else{
        console.log("directory created successfully")
    }
})

const content="this is new file"
fs.writeFile("./newFolder/newFile.txt",content,function(err){
    if(err){
        console.log(err)
    }
    else{
        console.log("written successfully")
    }
})
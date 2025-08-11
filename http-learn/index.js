//Write program to find sum of 2 numbers and return it into  browser (sum of 5 and 6 is 11)

const http=require('http');
const url=require('url');
const Port=3000;

const server=http.createServer(function(req,res){
    const strUrl=req.url 
    const queryUrl=strUrl.split("?")[1]  //\?num1=10&num2=5 ->num1=10&num2=5
    const parts=queryUrl.split("&")//0--num1=10 1--num2=5
    const num1=parseInt(parts[0].split("=")[1]) //["num1=10"]-->["num ","10"] -->10
    const num2=parseInt(parts[1].split("=")[1])  //["num2=5"]-->["num ","5"] -->10
    const sum=num1+num2
    res.end(`the sum of ${num1} and ${num2} is ${sum}`)

})
server.listen(Port,function(err){
    if(err){
        console.log(err)
    }
    else{
        console.log("success")
    }
})


//Use function to find sum and return the result into browser


// const http=require('http');
// const url=require('url');
// const Port=3000;


// const server=http.createServer(function(req,res){
//     const strUrl=req.url 
//     const queryUrl=strUrl.split("?")[1]
//     const parts=queryUrl.split("&")//0--num1=10 1--num2=5
//     const a=parseInt(parts[0].split("=")[1]) //num1 10
//     const b=parseInt(parts[1].split("=")[1])//num2 5
    

//     function findSum(a,b){
//     return a+b
//     } 
    
    
//     let result=findSum(a,b)
//     res.end(`the sum of ${a} and ${b} is ${result}`)

// })
// server.listen(Port,function(err){
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("success")
//     }
// })


//Use your local module to find sum and return it to the browser


// const http=require('http');
// const url=require('url');
// const add=require('./sum')
// const Port=3000;


// const server=http.createServer(function(req,res){
//     const strUrl=req.url 
//     const queryUrl=strUrl.split("?")[1]
//     const parts=queryUrl.split("&")
//     const a=parseInt(parts[0].split("=")[1]) 
//     const b=parseInt(parts[1].split("=")[1])
    

//     let result=add(a,b)
//     res.end(`the sum of ${a} and ${b} is ${result}`)

// })
// server.listen(Port,function(err){
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("success")
//     }
// })


//Call previous program modules and display result in browser - Prime or not, odd or even, factorial, average of array

// const http=require('http');
// const url=require('url');
// const Port=3000; 
// const server=http.createServer(function(req,res){
//     const strUrl=req.url 
//     const queryUrl=strUrl.split("?")[1] //?num=5->["num=5"]
//     const num=parseInt(queryUrl.split("=") [1]) //["num","5"] -> 5
//     const prime=require('./prime')
//     let result=prime(num)
//     if(result==true){
//        res.end(`the given number ${num} is prime `)
//     }
//     else{
//       res.end(`the given number ${num} is not prime `)
//     }
    
// })
// server.listen(Port,function(err){
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("success")
//     }
// })


// average of array

// const http=require('http')
// const url=require('url')
// const avg=require('./averageOfArray')
// const Port=3000;


// const server=http.createServer(function(req,res){
//     const strUrl=req.url; //Please provide numbers like this: /?nums=10,20,30,40")
//     const queryUrl=strUrl.split('?')[1];   //nums=10,20,30,40
//     const parts=queryUrl.split('=')[1];  //["nums" ,"10,20,30,40"]
//     const nums=parts.split(',').map(Number); //[ "10,20,30,40"]--> ["10" "20" "30"] 10 20 30
//     let arr=[];
//     for(let i=0;i<nums.length;i++) {
//         arr.push(nums[i]);
//     }
//     let result=avg(arr);
//     res.end(`The average of given array is ${result}`);
      
// })
// server.listen(Port,function(err){
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("success")
//     }
// })

//write a REST API to find sum of 3 numbers

// const http=require('http');
// const url=require('url');
// const Port=3000;

// const server=http.createServer(function(req,res){
//     const strUrl=req.url;   // /?num1=10&num2=5&num3=9
//     const queryUrl=strUrl.split("?")[1]; //num1=10&num2=5&num3=9
//     const parts=queryUrl.split("&")  // ['num1=10', 'num2=5', 'num3=9']
//     const num1=parseInt(parts[0].split("=")[1]) //['num1', '10'] -> '10'->10
//     const num2=parseInt(parts[1].split("=")[1]) ///['num2', '5'] -> '5'-> 5
//     const num3=parseInt(parts[2].split("=")[1]) //['num3', '9'] -> '9'-> 9
//     const add=num1+num2+num3
//     res.end(`the sum of ${num1},${num2} and ${num3} is ${add}`)
    
// })

// server.listen(Port,function(err){
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("success")
//     }
// })



//Write API to reverse a given string

//  const http=require('http');
//  const url=require('url');
//  const Port=3000;

//  const server=http.createServer(function(req,res){
//     const strUrl=req.url; // ?name=Athulya
//     const queryUrl=strUrl.split("?")[1] // ['?','name=Athulya'] ->'name=Athulya'
//     const name=queryUrl.split("=")[1]    //['name','Athulya'] -> 'Athulya'
    
//     let rev=""
//     for(let i=name.length-1;i>=0;i--){
//         rev=rev+name[i]   
//     }
//     res.end(`the reversed string is ${rev}`)

//  })
//  server.listen(Port,function(err){
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("success")
//     }
//  })


//Write API to find all prime numbers till a max number

// const http=require('http');
// const url=require('url');
// const prime=require('./primeTillMaxNum')
// const Port=3000;

// const server=http.createServer(function(req,res){
//     const strUrl=req.url;//?num=5
//     const queryUrl=strUrl.split("?")[1]
//     const num=queryUrl.split("=")[1]
//     let primeTillNum=prime(num)
//     res.end(`Prime numbers till ${num} are ${primeTillNum}`)

// })
// server.listen(Port,function(err){
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("success")
//     }
// })


//Write API to find all prime numbers between two numbers

// const http=require('http');
// const url=require('url');
// const prime=require("./primebtwTwo")
// const Port=3000;

// const server=http.createServer(function(req,res){
//     const strUrl=req.url


//     // if(!strUrl.includes('?')){
//     //     res.end("please provide  num in query string ?/num=5&num2=10");
//     //     return;
//     // }
     
//     const queryUrl=strUrl.split("?")[1]  
//     const parts=queryUrl.split("&")
//     const num1=parseInt(parts[0].split("=")[1]) 
//     const num2=parseInt(parts[1].split("=")[1])
//     let result=prime(num1,num2)
//     res.end(`prime numbers between ${num1} and ${num2} is ${result}`)
// })
// server.listen(Port,function(err){
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("success")
//     }
// })
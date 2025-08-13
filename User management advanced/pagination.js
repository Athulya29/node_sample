const http=require('http');
const Port=3000;
const users=[{"id":1,"first_name":"Jack","email":"jbener0@howstuffworks.com"},
{"id":2,"first_name":"Roze","email":"rbreache1@mashable.com"},
{"id":3,"first_name":"Muhammad","email":"mclassen2@stumbleupon.com"},
{"id":4,"first_name":"Joella","email":"jahrenius3@dyndns.org"},
{"id":5,"first_name":"Corinna","email":"clowfill4@sbwire.com"},
{"id":6,"first_name":"Paulita","email":"pmckeurtan5@ebay.co.uk"},
{"id":7,"first_name":"Brendon","email":"bdreschler6@histats.com"},
{"id":8,"first_name":"Timmy","email":"tiorizzo7@theglobeandmail.com"},
{"id":9,"first_name":"Twila","email":"tbavidge8@xing.com"},
{"id":10,"first_name":"Cathrin","email":"cdorsay9@nationalgeographic.com"},
{"id":11,"first_name":"Vin","email":"vklemza@ebay.com"},
{"id":12,"first_name":"Agnese","email":"abecerrab@fastcompany.com"},
{"id":13,"first_name":"Sabine","email":"sbaxandallc@vk.com"},
{"id":14,"first_name":"Shelba","email":"sgutersond@baidu.com"},
{"id":15,"first_name":"Melodie","email":"mwittone@cdbaby.com"},
{"id":16,"first_name":"Roselia","email":"rcristofanof@is.gd"},
{"id":17,"first_name":"Tudor","email":"ttamsg@noaa.gov"},
{"id":18,"first_name":"Yoko","email":"ysparkeh@sohu.com"},
{"id":19,"first_name":"Maximo","email":"mreddi@gizmodo.com"},
{"id":20,"first_name":"Rebekah","email":"rgirodonj@google.co.uk"},
{"id":21,"first_name":"Gwyneth","email":"gelgyk@huffingtonpost.com"},
{"id":22,"first_name":"Ezekiel","email":"eoxburyl@xrea.com"},
{"id":23,"first_name":"Harland","email":"hmatushevitzm@devhub.com"},
{"id":24,"first_name":"Iain","email":"iattestonen@bizjournals.com"},
{"id":25,"first_name":"Pauline","email":"poshielo@shop-pro.jp"},
{"id":26,"first_name":"Basilius","email":"brestieauxp@oaic.gov.au"},
{"id":27,"first_name":"Ronny","email":"rtruelockq@istockphoto.com"},
{"id":28,"first_name":"Karylin","email":"khuncootr@mapy.cz"},
{"id":29,"first_name":"Rayshell","email":"rjarlmanns@webs.com"},
{"id":30,"first_name":"Gracie","email":"ggrisleyt@tuttocitta.it"},
{"id":31,"first_name":"Jard","email":"jgreenigu@seesaa.net"},
{"id":32,"first_name":"Aurora","email":"abarbyv@bizjournals.com"},
{"id":33,"first_name":"Claire","email":"cgreenallw@cam.ac.uk"},
{"id":34,"first_name":"Ilsa","email":"ipowlettx@ycombinator.com"},
{"id":35,"first_name":"Brandon","email":"bsugarsy@wired.com"},
{"id":36,"first_name":"Lock","email":"llarkinsz@is.gd"},
{"id":37,"first_name":"Dermot","email":"ddytham10@psu.edu"},
{"id":38,"first_name":"Mireielle","email":"mkelberer11@creativecommons.org"},
{"id":39,"first_name":"Lothaire","email":"lfeak12@skype.com"},
{"id":40,"first_name":"Robina","email":"rwerndly13@chicagotribune.com"},
{"id":41,"first_name":"Helen","email":"hruffler14@oakley.com"},
{"id":42,"first_name":"Aymer","email":"abelton15@diigo.com"},
{"id":43,"first_name":"Robinson","email":"rverrico16@twitpic.com"},
{"id":44,"first_name":"Nelson","email":"nkytley17@over-blog.com"},
{"id":45,"first_name":"Farra","email":"fspraggs18@theatlantic.com"},
{"id":46,"first_name":"Hannis","email":"hprudham19@dion.ne.jp"},
{"id":47,"first_name":"Kerwin","email":"kstollwerck1a@wikia.com"},
{"id":48,"first_name":"Kristan","email":"kstrafford1b@sun.com"},
{"id":49,"first_name":"Cody","email":"ckeaveney1c@delicious.com"},
{"id":50,"first_name":"Keefe","email":"kwoodfin1d@altervista.org"}]


const server=http.createServer(function(req,res){
     const url =req.url;// /getPaginatedUsers?pageNumber = 1 & count = 5
     if(url.includes("getPaginatedUsers")){
     const pageNumber=parseInt(url.split("=")[1].split("&")[0])
     const count=parseInt(url.split("=")[2])
     res.end(JSON.stringify(users.slice((pageNumber-1)*5,pageNumber * 5)))
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
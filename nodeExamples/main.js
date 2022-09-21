let s=require('./studentFile');
const path=require("node:path");

const http=require("http");

console.log(path);
console.log(__dirname+"/studentfile.js");
console.log("This is inside of main js: Student Name:"+s.name+", Student ID: "+s.id);

const server=http.createServer((req,res)=>{

    const url=req.url;

    console.log(url);
    console.log(req.method);

    if(url=="/"){
    res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  res.end();
    }

    if(url=="/banana"){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('Banana!');
        res.end();
    }

    

});

server.listen(3000,()=>{
    console.log("Server is running...");
});


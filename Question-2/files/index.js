
const http=require('http');
const fs=require('fs');
const cors=require('cors');


const port=8084;
const hostname='127.0.0.1';

http.createServer((req, res) =>{
    console.log("request was made :"+ req.url)
    fs.readFile("user.json",'utf8',(err,data)=> {
        res.writeHead(200,{'Content-type':'application/json'});
        console.log(data);
        res.end(data);
    });
}).listen(port,hostname,()=>{
    console.log("server is running at http://127.0.0.1:8084");
})
const http = require('http')
const fs = require('fs');
const server= http.createServer((req,res)=>{
    const url = req.url;    const method = req.method;
    const body =[];
    res.on('data',(chunk)=>{
        body.push(chunk)
    })
    return res.on('end',()=>{
        const parsedBody=Buffer.concat(body).toString();
        const message = parsedBody.split('=')[1];
    })
    fs.writeFile('message.txt',message,(err) =>{

    })
})